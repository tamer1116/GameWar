import React, { useState, useEffect } from "react";
import "./Publishers.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function GameItem({ backgroundImage, title, games }) {
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

                <p><strong>Games:</strong> {games.join(", ")}</p>
            </div>
        </div>
    );
}

function Publishers() {
    const [publishers, setPublishers] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetch(`https://api.rawg.io/api/publishers?key=73da4fa2503c499b82fd782d63bdbdf5&page=${page}&page_size=${pageSize}`)
            .then((response) => response.json())
            .then((data) => {
                const formattedPublishers = data.results.map((publisher) => ({
                    backgroundImage: publisher.image_background,
                    title: publisher.name,
                    games: publisher.games.map((game) => game.name),
                }));
                setPublishers(formattedPublishers);
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
                <h2 className="line-title">Trending Publishers</h2>
                <div className="card-container">
                    {publishers.map((publisher, index) => (
                        <GameItem
                            key={index}
                            backgroundImage={publisher.backgroundImage}
                            title={publisher.title}
                            games={publisher.games}
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
                    {publishers.length >= pageSize && (
                        <button
                            onClick={() => handlePageChange(page + 1)}
                        >
                            {page + 1}
                        </button>
                    )}
                    {publishers.length >= pageSize * (page + 1) && (
                        <button
                            onClick={() => handlePageChange(page + 2)}
                        >
                            {page + 2}
                        </button>
                    )}
                    {publishers.length >= pageSize * (page + 2) && (
                        <span>...</span>
                    )}
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={publishers.length < pageSize}
                    >
                        Next
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Publishers;
