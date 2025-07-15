import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Stack,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import { domain } from "../utils/utils";

const CreateBlogs = () => {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to create a blog.");
      return;
    }

    if (!featuredImage) {
      toast.error("Please upload a featured image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("synopsis", synopsis);
    formData.append("content", content);
    formData.append("featuredImage", featuredImage);

    setLoading(true);
    try {
      await axios.post(`${domain}/blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Blog created successfully!");

      // Reset form
      setTitle("");
      setSynopsis("");
      setContent("");
      setImage(null);
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Failed to create blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 600, margin: "auto", mt: 4 }}
    >
      <Typography variant="h5" gutterBottom>
        Create a Blog
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            disabled={loading}
          />
          <TextField
            label="Synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            fullWidth
            required
            disabled={loading}
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            minRows={4}
            required
            disabled={loading}
          />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
          <Button variant="contained" component="label" disabled={loading}>
            Upload Featured Image
          </Button>

          {featuredImage && (
            <Typography variant="body2">
              Selected: {featuredImage.name}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={
              loading && <CircularProgress size={20} color="inherit" />
            }
          >
            {loading ? "Submitting..." : "Submit Blog"}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default CreateBlogs;
