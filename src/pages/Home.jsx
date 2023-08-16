import Navbar from "../components/Navbar";
import Single from "../components/Single";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Movies from "./Movies";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff",
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});
const Home = () => {
    return (
        <div className="home" >
            <Navbar />
            <Movies />
        </div>
    )
}

export default Home
