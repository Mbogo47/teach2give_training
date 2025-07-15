import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { domain } from "../utils/utils";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${domain}/blogs/${id}`);
        const blog = res.data;
        setTitle(blog.title);
        setSynopsis(blog.synopsis);
        setContent(blog.content);
      } catch (err) {
        toast.error("Failed to fetch blog");
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return toast.error("Unauthorized");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("synopsis", synopsis);
    formData.append("content", content);
    if (featuredImage) formData.append("featuredImage", featuredImage);

    try {
      await axios.put(`${domain}/blogs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Blog updated successfully!");
      navigate("/my-blogs");
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Update failed.");
    }
  };

  return (
    <Paper sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Update Blog
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Synopsis"
            fullWidth
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
          <TextField
            label="Content"
            fullWidth
            multiline
            minRows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button variant="contained" component="label">
            Upload New Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Update Blog
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default UpdateBlog;
