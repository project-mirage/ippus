import React from "react";
import * as css from "./HowItWorksCard.module.sass";

export default function HowItWorksCard({ img, title, description, heading }) {
    return (
        <div className={css.container}>
            <div className={css.smallSpacer}>
                <div className={css.circle}>{img}</div>
            </div>
            <div className={css.largeSpacer}>
                <h3 className={css.title}>{title}</h3>
                <p className={css.description}>{description}</p>
            </div>
        </div>
    );
}
