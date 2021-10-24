import React from "react";
import * as css from "./DescriptionSection.module.sass";

export default function DescriptionSection({ heading, text }) {
    return (
        <div className={css.section}>
            <h1 className={css.heading}>{heading}</h1>
            <p className={css.text}>{text}</p>
        </div>
    );
}
