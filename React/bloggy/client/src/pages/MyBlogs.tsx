import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import { domain } from "../utils/utils";
import { Link } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  featuredImageUrl: string;
  createdAt: string;
}

const MyBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMyBlogs = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    try {
      const res = await axios.get(`${domain}/my-blogs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(res.data);
    } catch (err) {
      toast.error("Failed to fetch your blogs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.patch(`${domain}/blogs/${id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Blog deleted");
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (err) {
      toast.error("Failed to delete blog");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Blogs
      </Typography>

      {blogs.length === 0 ? (
        <Typography variant="body1">
          You haven’t created any blogs yet.
        </Typography>
      ) : (
        <Box display="flex" flexWrap="wrap" gap={3}>
          {blogs.map((blog) => (
            <Box
              key={blog.id}
              width={{ xs: "100%", sm: "47%", md: "30%" }}
              flexShrink={0}
            >
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={blog.featuredImageUrl}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography variant="h6">{blog.title}</Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {blog.synopsis}
                  </Typography>

                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button
                      component={Link}
                      to={`/blogs/${blog.id}`}
                      color="secondary"
                      size="small"
                    >
                      Read More
                    </Button>

                    <Button
                      component={Link}
                      to={`/update-blog/${blog.id}`}
                      variant="contained"
                      size="small"
                      color="primary"
                    >
                      Edit
                    </Button>

                    <Button
                      onClick={() => handleDelete(blog.id)}
                      variant="outlined"
                      color="error"
                      size="small"
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default MyBlogs;
