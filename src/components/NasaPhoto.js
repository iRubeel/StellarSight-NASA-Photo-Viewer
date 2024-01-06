import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
        }

        fetchPhoto();
    }, []);

    if (!photoData) return <div />;

    return (
        <>
            <NavBar />
            <div className="nasa-photo-container">
                {photoData.media_type === "image" ? (
                    <img src={photoData.url} alt={photoData.title} className="nasa-photo" />
                ) : (
                    <iframe
                        title="space-video"
                        src={photoData.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className="nasa-photo"
                    />
                )}
                <div className="nasa-photo-description">
                    <h1>{photoData.title}</h1>
                    <p>{photoData.date}</p>
                    <p>{photoData.explanation}</p>
                </div>
            </div>
        </>

    );
}
