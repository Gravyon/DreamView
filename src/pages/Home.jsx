import Navbar from "../components/Navbar";
import { createTheme } from "@mui/material/styles";
import Movies from "./Movies";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const Home = () => {
  return (
    <div className="home">
      <Movies />
    </div>
  );
};

export default Home;
