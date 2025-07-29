import { useReducer, useEffect, useState } from "react";
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
import { marked } from "marked";
import DOMPurify from "dompurify";
import { domain } from "../../components/utils/utils";
import {
  createNoteReducer,
  initialcreateNoteState,
} from "../../reducers/createNoteReducer";

const CreateNotes: React.FC = () => {
  const [state, dispatch] = useReducer(
    createNoteReducer,
    initialcreateNoteState,
  );
  const { title, synopsis, content, notesImage, loading } = state;

  const [previewHtml, setPreviewHtml] = useState("");

  useEffect(() => {
    const convertMarkdown = async () => {
      if (content) {
        try {
          const html = await marked.parse(content);
          setPreviewHtml(DOMPurify.sanitize(html));
        } catch (err) {
          console.error("Error parsing markdown:", err);
        }
      } else {
        setPreviewHtml("");
      }
    };

    convertMarkdown();
  }, [content]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("synopsis", synopsis);
    formData.append("content", content);
    if (notesImage) formData.append("notesImage", notesImage);

    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      await axios.post(`${domain}/notes`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Note created successfully!");
      dispatch({ type: "RESET" });
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Failed to create note.");
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, padding: 2 }}>
      {/* Form Section */}
      <Paper elevation={3} sx={{ padding: 4, flex: 1, minWidth: "50%" }}>
        <Typography variant="h5" gutterBottom>
          Create a Blog
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) =>
                dispatch({ type: "SET_TITLE", payload: e.target.value })
              }
              fullWidth
              required
              disabled={loading}
            />
            <TextField
              label="Synopsis"
              value={synopsis}
              onChange={(e) =>
                dispatch({ type: "SET_SYNOPSIS", payload: e.target.value })
              }
              fullWidth
              required
              disabled={loading}
            />
            <TextField
              label="Content"
              value={content}
              onChange={(e) =>
                dispatch({ type: "SET_CONTENT", payload: e.target.value })
              }
              fullWidth
              multiline
              minRows={6}
              required
              disabled={loading}
            />

            {/* <Button variant="contained" component="label" disabled={loading}>
              Upload Notes Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  dispatch({
                    type: "SET_IMAGE",
                    payload: e.target.files ? e.target.files[0] : null,
                  })
                }
              />
            </Button>

            {notesImage && (
              <Typography variant="body2">
                Selected: {notesImage.name}
              </Typography>
            )} */}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              startIcon={
                loading && <CircularProgress size={20} color="inherit" />
              }
            >
              {loading ? "Submitting..." : "Submit Note"}
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Preview Section */}
      {content && (
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            flex: 1,
            minWidth: "50%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Preview
          </Typography>
          <Box dangerouslySetInnerHTML={{ __html: previewHtml }} />
        </Paper>
      )}
    </Box>
  );
};
export default CreateNotes;
