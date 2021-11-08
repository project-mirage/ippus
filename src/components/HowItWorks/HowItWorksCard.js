import React from "react";
import * as css from "./HowItWorksCard.module.sass";
import ReadMoreReact from "read-more-react";

export default function HowItWorksCard({ img, title, description, heading }) {
    return (
        <div className={css.container}>
            <div className={css.smallSpacer}>
                <div className={css.circle}>{img}</div>
            </div>
            <div className={css.largeSpacer}>
                <h3 className={css.title}>{title}</h3>
                <p className={css.description}>
                    <ReadMoreReact
                        text={description}
                        min={0}
                        ideal={50}
                        max={60}
                        readMoreText="..."
                    />
                </p>
            </div>
        </div>
    );
}
