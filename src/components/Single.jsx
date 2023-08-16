import Card from "react-bootstrap/Card";
import { img_300, unavailable, img_500 } from "../config/config";
import "./single.css";
import { Badge, Button, Typography } from "@mui/material";
import TransitionsModal from "./TransitionsModal";

const Single = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <TransitionsModal media_type={media_type} id={id} key={id}>
      {/* <Badge
        badgeContent={
          vote_average > 0 ? vote_average.toString().slice(0, 3) : "1"
        }
        color={vote_average >= 6 ? "success" : "secondary"}
      /> */}
      <Card.Body>
        <Typography >{title}</Typography>
        {/* <Card.Subtitle className="overview">{overview}</Card.Subtitle> */}
      </Card.Body>
      <img
        variant="top"
        className="image"
        alt={title}
        src={poster ? `${img_300}/${poster}` : unavailable}
      />
      <Button className="comprarTicket">Comprar ticket</Button>

    </TransitionsModal>
  );
};

export default Single;
