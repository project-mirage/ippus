import React from "react";
import * as css from "./Flyers.module.sass";
import HeroCTA from "../HeroCTA/HeroCTA";

export default function Flyers({ image, heading, text, buttonCTA }) {
    return (
        <div className={css.container}>
            <h1 className={css.headingMobile}>{heading}</h1>
            <img className={css.img} src={image} alt="" />
            <div className={css.description}>
                <h1 className={css.headingDesktop}>{heading}</h1>
                <p className={css.text}>{text}</p>
                <HeroCTA>
                    <button className={css.button}>{buttonCTA}</button>
                </HeroCTA>
            </div>
        </div>
    );
}
