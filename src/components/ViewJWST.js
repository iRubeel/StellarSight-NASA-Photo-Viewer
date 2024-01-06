import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./Navbar";

const JWST_API_KEY = process.env.REACT_APP_JWST_API_KEY;

export default function ViewJWST() {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); 
    const programId = 2736;

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`https://api.jwstapi.com/program/id/${programId}`, {
                    headers: { 'X-API-KEY': JWST_API_KEY },
                    params: { page: currentPage, perPage: itemsPerPage }
                });
                console.log(response.data.body); // Logging the response
                setImages(response.data.body);
            } catch (error) {
                console.error("Error fetching JWST images: ", error);
            }
        };

        fetchImages();
    }, [currentPage, itemsPerPage, programId]);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    return (
        <>
            <NavBar />
            <div className="jwst-container">
                {images.map(image => (
                    <div key={image.id} className="jwst-image-container">
                        <img src={image.location} alt={image.description} className="jwst-image" />
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </>
    );
}