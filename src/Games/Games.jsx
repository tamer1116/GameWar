import React, { useState, useEffect } from "react";
import "./Games.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function GameItem({ backgroundImage, title, rating, ratingTop }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`item ${isActive ? "active" : ""}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            onClick={handleClick}
        >
            <div className="item-desc">
                <h3>{title}</h3>
                <p>
                    {"Current players can transfer both GTAV Story Mode progress and GTA Online characters and progression to PlayStation 5 and Xbox Series X|S with a one-time migration. "}
                </p>
                <p><strong>Rating:</strong> {rating}</p>
                <p><strong>Rating Top:</strong> {ratingTop}</p>
            </div>
        </div>
    );
}

function Games() {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=73da4fa2503c499b82fd782d63bdbdf5&page=${page}&page_size=${pageSize}`)
            .then((response) => response.json())
            .then((data) => {
                const formattedGames = data.results.map((game) => ({
                    backgroundImage: game.background_image,
                    title: game.name,
                    rating: game.rating,
                    ratingTop: game.rating_top,
                }));
                setGames(formattedGames);
                scrollToTop();
            })
            .catch((error) => {
                console.error(error);
            });
    }, [page, pageSize]);

    return (
        <>
            <Header />
            <section className="game-section">
                <h2 className="line-title">Trending Games</h2>
                <div className="card-container">
                    {games.map((game, index) => (
                        <GameItem
                            key={index}
                            backgroundImage={game.backgroundImage}
                            title={game.title}
                            rating={game.rating}
                            ratingTop={game.ratingTop}
                        />
                    ))}
                </div>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    {page > 2 && (
                        <button
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </button>
                    )}
                    {page > 3 && (
                        <span>...</span>
                    )}
                    {page > 1 && (
                        <button
                            onClick={() => handlePageChange(page - 1)}
                        >
                            {page - 1}
                        </button>
                    )}
                    <button className="active">
                        {page}
                    </button>
                    {games.length >= pageSize && (
                        <button
                            onClick={() => handlePageChange(page + 1)}
                        >
                            {page + 1}
                        </button>
                    )}
                    {games.length >= pageSize * (page + 1) && (
                        <button
                            onClick={() => handlePageChange(page + 2)}
                        >
                            {page + 2}
                        </button>
                    )}
                    {games.length >= pageSize * (page + 2) && (
                        <span>...</span>
                    )}
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={games.length < pageSize}
                    >
                        Next
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Games;
