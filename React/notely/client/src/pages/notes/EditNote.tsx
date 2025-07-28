import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useReducer, useEffect } from "react";
import { domain } from "../../components/utils/utils";
import {
  editNoteReducer,
  initialEditNoteState,
} from "../../reducers/EditNotesReducer";

const EditNote: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(editNoteReducer, initialEditNoteState);

  const token = localStorage.getItem("token");

  const fetchNote = async () => {
    const res = await axios.get(`${domain}/notes/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: fetchNote,
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      dispatch({
        type: "RESET",
        payload: {
          title: data.title,
          synopsis: data.synopsis,
          content: data.content,
        },
      });
    }
  }, [data]);

  const handleUpdate = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const formData = new FormData();
      formData.append("title", state.title);
      formData.append("synopsis", state.synopsis);
      formData.append("content", state.content);
      if (state.notesImage) {
        formData.append("notesImage", state.notesImage);
      }

      await axios.put(`${domain}/notes/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Note updated successfully");
      navigate("/dashboard/my-notes");
    } catch (error) {
      toast.error("Failed to update note");
      console.error(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography color="error">Error loading note</Typography>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Edit Note
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Title"
          value={state.title}
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
          fullWidth
        />
        <TextField
          label="Synopsis"
          value={state.synopsis}
          onChange={(e) =>
            dispatch({ type: "SET_SYNOPSIS", payload: e.target.value })
          }
          fullWidth
        />
        <TextField
          label="Content"
          multiline
          rows={6}
          value={state.content}
          onChange={(e) =>
            dispatch({ type: "SET_CONTENT", payload: e.target.value })
          }
          fullWidth
        />
        <Button variant="outlined" component="label">
          Upload New Image
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) =>
              dispatch({
                type: "SET_IMAGE",
                payload: e.target.files?.[0] || null,
              })
            }
          />
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          disabled={state.loading}
        >
          {state.loading ? "Updating..." : "Update Note"}
        </Button>
      </Box>
    </Container>
  );
};

export default EditNote;
