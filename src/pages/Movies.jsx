import { useEffect, useState } from "react";
import Single from "../components/Single";
import useGenre from "../hooks/useGenre";
import axios from "axios";
import "./styles.css";
const Movies = () => {
    const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);

    const getMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${VITE_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(response.data.results);
        console.log(content);
        // console.log(data.total_pages);
    };

    useEffect(() => {
        window.scroll(0, 0);
        getMovies();
    }, [genreforURL, page]);

    return (
        <div>
            <div className="pageTitle">En cartelera</div>
            <div className="content">
                {content.map((single) => (
                    <Single
                        key={single.id}
                        id={single.id}
                        poster={single.poster_path}
                        title={single.title}
                        date={single.release_date}
                        vote_average={single.vote_average}
                    />
                ))}
            </div>

        </div>
    );
};

export default Movies;
