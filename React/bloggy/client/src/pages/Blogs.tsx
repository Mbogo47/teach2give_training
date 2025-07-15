import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CircularProgress,
  Box,
} from "@mui/material";
import { toast } from "react-toastify";
import { domain } from "../utils/utils";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface Blog {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  featuredImageUrl: string;
  author: {
    id: string;
    username: string;
    firstName: string;
    emailAddress: string;
  };
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${domain}/blogs`);
        setBlogs(res.data);
      } catch (err) {
        toast.error("Failed to fetch blogs");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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
        All Blogs
      </Typography>

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
                height="200"
                image={blog.featuredImageUrl}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h6">{blog.title}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {blog.synopsis}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  gutterBottom
                >
                  Author: {blog.author.username}
                </Typography>

                <Button
                  component={Link}
                  to={`/blogs/${blog.id}`}
                  size="small"
                  color="secondary"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Blogs;
