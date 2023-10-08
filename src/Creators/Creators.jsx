import React, { useEffect, useState } from "react";
import "./Creators.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Creators() {
    const [creators, setCreators] = useState([]);
    const [selectedCreator, setSelectedCreator] = useState(null);
    const [page, setPage] = useState(1); // Başlangıç sayfa numarası
    const [pageSize, setPageSize] = useState(10); // Sayfa boyutu (kaç öğe gösterilecek)

    useEffect(() => {
        fetch(`https://api.rawg.io/api/creators?key=73da4fa2503c499b82fd782d63bdbdf5&page=${page}&page_size=${pageSize}`)
            .then((res) => res.json())
            .then((data) => {
                setCreators(data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [page, pageSize]);


    const openModal = (creator) => {
        setSelectedCreator(creator);
    };

    const closeModal = () => {
        setSelectedCreator(null);
    };
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };


    return (
        <>
            <Header />
            <div className="card-container">

                {creators.map((creator, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => openModal(creator)}
                    >
                        <div
                            className="cover-photo"
                            style={{ backgroundImage: `url(${creator.image_background})` }}
                        >
                            <div className="profile">
                                <img
                                    src={creator.image}
                                    alt=""
                                    className="profile-img"
                                />
                            </div>
                        </div>
                        <h3 className="profile-name">{creator.name}</h3>
                        <p className="position">
                            {creator.positions.map((position) => position.name).join(", ")}
                        </p>
                        <p className="games">
                            {creator.games.map((game) => game.name).join(", ")}
                        </p>
                    </div>

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
                {creators.length >= pageSize && (
                    <button
                        onClick={() => handlePageChange(page + 1)}
                    >
                        {page + 1}
                    </button>
                )}
                {creators.length >= pageSize * (page + 1) && (
                    <button
                        onClick={() => handlePageChange(page + 2)}
                    >
                        {page + 2}
                    </button>
                )}
                {creators.length >= pageSize * (page + 2) && (
                    <span>...</span>
                )}
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={creators.length < pageSize}
                >
                    Next
                </button>
            </div>

            {selectedCreator && (
                <div className="modal-container active" onClick={closeModal}>
                    <div className="modal-card active">
                        <div className="cover-photo" style={{ backgroundImage: `url(${selectedCreator.image_background})` }}>
                            <div className="profile">
                                <img
                                    src={selectedCreator.image}
                                    alt=""
                                    className="profile-img"
                                />
                            </div>
                        </div>
                        <h3 className="profile-name">{selectedCreator.name}</h3>
                        <p className="position">
                            {selectedCreator.positions.map((position) => position.name).join(", ")}
                        </p>
                        <p className="games">
                            {selectedCreator.games.map((game) => game.name).join(", ")}
                        </p>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}

export default Creators;
