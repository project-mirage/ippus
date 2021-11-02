import React from "react";
import mapImage from "../../../images/location.png";
import * as css from "./Map.module.sass";

export default function Map({ heading, url }) {
    return (
        <div className={css.mapContainer}>
            <h1 className={css.heading}>{heading}</h1>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className={css.map}
            >
                <img className={css.mapImage} alt="map" src={mapImage} />
            </a>
        </div>
    );
}
