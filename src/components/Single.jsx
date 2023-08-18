import Card from "react-bootstrap/Card";
import { img_300, unavailable, img_500 } from "../config/config";
import "./single.css";
import { Typography } from "@mui/material";
import TransitionsModal from "./TransitionsModal";

const Single = ({ id, poster, title }) => {
  return (
    <TransitionsModal id={id} key={id}>
      <Card.Body>
        <Typography className="title">{title}</Typography>
      </Card.Body>
      <img
        variant="top"
        className="image"
        alt={title}
        src={poster ? `${img_300}/${poster}` : unavailable}
      />

    </TransitionsModal>
  );
};

export default Single;
