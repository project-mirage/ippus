import React from "react";
import * as css from "./DescriptionSection.module.sass";

export default function DescriptionSection({ heading, text }) {
    return (
        <div className={css.section}>
            <div
                className={css.heading}
                dangerouslySetInnerHTML={{ __html: heading }}
            />
            <div
                className={css.text}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    );
}
