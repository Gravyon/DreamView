import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import { img_500, img_300, unavailable } from "../config/config";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StarIcon from "@mui/icons-material/Star";
import "./modal.css";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const style = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    bgcolor: "background.paper",
    border: "1px solid #554F95",
    boxShadow: 24,
    p: 4,
  },
};

const handlePrev = () => {
    // Handle moving to the previous item here
  };

  const handleNext = () => {
    // Handle moving to the next item here
  };


export default function TransitionsModal({ children, id }) {
  const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${VITE_APP_API_KEY}&language=en-US`
    );
    setContent(response.data);
  };

  const fetchVideo = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${VITE_APP_API_KEY}&language=en-US`
    );
    setVideo(response.data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
      <div
        className="card_content"
        style={{ cursor: "pointer", width: "15rem" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        sx={style.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          {content && (
            <Box sx={style.paper}>
              <Badge
                badgeContent={
                  content.vote_average > 0
                    ? `${content.vote_average.toString().slice(0, 3)}/10`
                    : "1"
                }
                color={content.vote_average >= 6 ? "success" : "secondary"}
              />
              <div className="modal">
                <img
                  alt={content.name || content.title}
                  className="modal_portrait"
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                />
                            <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* Left arrow button */}
                  <Button
                    onClick={handlePrev}
                    sx={{
                      backgroundColor: "#554F95",
                      margin: "0 10px",
                    }}
                  >
                    ←
                  </Button>
                  {/* Right arrow button */}
                  <Button
                    onClick={handleNext}
                    sx={{
                      backgroundColor: "#554F95",
                      margin: "0 10px",
                    }}
                  >
                    →
                  </Button>
                  </div>
                <img
                  alt={content.name || content.title}
                  className="modal_landscape"
                  src={
                    content.poster_path
                      ? `${img_300}/${content.poster_path}`
                      : unavailable
                  }
                />
                <div className="modal_about">
                  <div className="modal_title">
                    {content.name || content.title}
                  </div>
                  <div className="modal_description">{content.overview}</div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      startIcon={<YouTubeIcon />}
                      sx={{
                        backgroundColor: "#554F95",
                        margin: "0 10px",
                      }}
                      target="__blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Ver trailer
                    </Button>
                    <Button
                      LinkComponent={Link}
                      to={`/review?movieName=${encodeURIComponent(
                        content.name || content.title
                      )}`}
                      variant="contained"
                      startIcon={<StarIcon />}
                      sx={{
                        backgroundColor: "#554F95",
                        margin: "0 10px",
                      }}
                      target="__blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Dejar reseña
                    </Button>
                  </div>
                </div>
              </div>
            </Box>
          )}
        </Fade>
      </Modal>
    </>
  );
}
