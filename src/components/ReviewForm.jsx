import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { reviewSchema } from "../validation/reviewSchema";
import { useFormik } from "formik";
import { useLocation } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router";

const ReviewForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialMovieName = searchParams.get("movieName") || "";
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const backgroundImg =
    "https://www.pngall.com/wp-content/uploads/2018/06/Popcorn-Free-PNG-Image.png";
  const onReview = (values, { resetForm }) => {
    try {
      setModalOpen(true);
    } catch (error) {
      alert(error);
    } finally {
      setTimeout(() => {
        resetForm();
        navigate("/");
      }, 10000);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { handleChange, handleSubmit, handleReset, values, errors } = useFormik(
    {
      initialValues: {
        movie: initialMovieName,
        name: "",
        email: "",
        review: "",
      },
      validationSchema: reviewSchema,
      onSubmit: onReview,
    }
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "bottom left",
        backgroundColor: "#1c1e24",
      }}
    >
      <form
        style={{
          width: "100%",
          maxWidth: "600px",
          //   padding: "20px",
          //   margin: "20px",
        }}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Paper style={{ marginTop: "20px", padding: "40px" }} elevation={3}>
            <Typography
              style={{ display: "flex", justifyContent: "left" }}
              variant="h5"
              gutterBottom
            >
              Deja tu opinion
            </Typography>
            <TextField
              label="Pelicula"
              variant="outlined"
              fullWidth
              margin="normal"
              name="movie"
              id="movie"
              onChange={handleChange}
              value={values.movie}
              disabled
            />
            <Typography style={{ color: "red" }}>{errors.movie}</Typography>
            <TextField
              label="Nombre completo"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              id="name"
              onChange={handleChange}
              value={values.name}
            />
            <Typography style={{ color: "red" }}>{errors.name}</Typography>
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            <Typography style={{ color: "red" }}>{errors.email}</Typography>
            <TextField
              label="Reseña"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              name="review"
              id="review"
              onChange={handleChange}
              value={values.review}
            />
            <Typography style={{ color: "red" }}>{errors.review}</Typography>
            <div
              style={{
                display: "flex",
                padding: "5px",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ borderColor: "#554F95", margin: "0 10px" }}
                >
                  Finalizar
                </Button>
                <Button type="reset" variant="outlined">
                  Reiniciar
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      </form>
      <Modal open={modalOpen} onClose={closeModal}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="body1">Reseña de peliculas</Typography>
          <Typography sx={{ mt: 2 }} variant="h6">
            ¡Muchas gracias {values.name}!
          </Typography>
          <StarIcon
            sx={{
              color: "yellow",
              mt: 2,
              mb: 2,
              height: "60px",
              fontSize: "60px",
            }}
          />

          <Typography>
            Tu reseña sobre la pelicula "{values.movie}" ha sido enviada.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewForm;
