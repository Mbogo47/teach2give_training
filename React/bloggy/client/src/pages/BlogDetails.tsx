import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  CardMedia,
  Paper,
  Divider,
} from "@mui/material";
import { toast } from "react-toastify";
import { domain } from "../utils/utils";

interface Blog {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  featuredImageUrl: string;
  author: {
    username: string;
  };
}

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${domain}/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        toast.error("Failed to fetch blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!blog) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Blog not found.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h1" gutterBottom>
          {blog.title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          By {blog.author.username}
        </Typography>
        <CardMedia
          component="img"
          image={blog.featuredImageUrl}
          alt={blog.title}
          sx={{ height: 300, objectFit: "cover", mb: 2 }}
        />
        <Typography variant="h6" gutterBottom>
          {blog.synopsis}
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {blog.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BlogDetail;
