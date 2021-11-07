import React from "react";
import * as css from "./NVCImages.module.sass";
import img1 from "../../images/flyer1.webp";
import img2 from "../../images/flyer2.webp";

export default function Flyers({ image1, image2 }) {
    return (
        <div className={css.container}>
            <img className={css.img} src={img1} alt="" />
            <img className={css.img} src={img2} alt="" />
        </div>
    );
}
