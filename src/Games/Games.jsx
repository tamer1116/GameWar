import React, { useEffect, useState } from "react";
import "./Games.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Games = () => {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        fetch(
            `https://api.rawg.io/api/games?key=73da4fa2503c499b82fd782d63bdbdf5&page=${page}&page_size=${pageSize}`
        )
            .then((response) => response.json())
            .then((data) => {
                setGames(data.results);
            });
    }, [page, pageSize]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <Header />
            <div className="main">
                <h1>Games</h1>
                <ul className="cards">
                    {games.map((game) => (
                        <li key={game.id} className="cards_item">
                            <div className="card">
                                <div className="card_image">
                                    <img src={game.background_image} alt={game.name} />
                                </div>
                                <div className="card_content">
                                    <h2 className="card_title">{game.name}</h2>
                                    <p className="card_text">{game.description_raw}</p>
                                    <Link to={`/gamesdetails/${game.id}`}>
                                        <button className="btn card_btn">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
            <div className="pagination">
                <button
                    onClick={() => {
                        handlePageChange(page - 1);
                        window.scrollTo(0, 0);
                    }}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => {
                        handlePageChange(1);
                        window.scrollTo(0, 0);
                    }}
                >
                    1
                </button>
                <button className="active">{page}</button>
                {games.length >= pageSize && (
                    <button
                        onClick={() => {
                            handlePageChange(page + 1);
                            window.scrollTo(0, 0);
                        }}
                    >
                        {page + 1}
                    </button>
                )}
                {games.length >= pageSize * (page + 1) && (
                    <button
                        onClick={() => {
                            handlePageChange(page + 2);
                            window.scrollTo(0, 0);
                        }}
                    >
                        {page + 2}
                    </button>
                )}
                {games.length >= pageSize * (page + 2) && <span>...</span>}
                <button
                    onClick={() => {
                        handlePageChange(page + 1);
                        window.scrollTo(0, 0);
                    }}
                    disabled={games.length < pageSize}
                >
                    Next
                </button>
            </div>
            <Footer />
        </>
    );
};

export default Games;