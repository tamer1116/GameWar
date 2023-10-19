import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GamesDetail.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function GamesDetail() {
    const { id } = useParams();

    const [gamesDetails, setGamesDetails] = useState({});

    useEffect(() => {
        fetch(
            `https://api.rawg.io/api/games/${id}?key=73da4fa2503c499b82fd782d63bdbdf5`
        )
            .then((res) => res.json())
            .then((data) => setGamesDetails(data));
    }, [id]);



    return (
        <>
            <Header />

            <h1 className="tittleh">{gamesDetails.name}</h1>
            <div className="games-detail"   >
                <img src={gamesDetails.background_image} alt={gamesDetails.name} />
                <div className="description">
                    <p>{gamesDetails.description}</p>
                </div>
                <div className="ratings">
                    <p>Top Rating: {gamesDetails.rating_top}</p>
                    <p>Rating: {gamesDetails.rating}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GamesDetail;
