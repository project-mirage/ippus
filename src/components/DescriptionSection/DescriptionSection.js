import React from "react";
import * as css from "./DescriptionSection.module.sass";
import ReadMoreReact from "read-more-react";

export default function DescriptionSection({ heading, text }) {
    return (
        <div className={css.section}>
            <div
                className={css.heading}
                dangerouslySetInnerHTML={{ __html: heading }}
            />
            {/* <div
                className={css.text}
                dangerouslySetInnerHTML={{ __html: text }}
            /> */}
            <div className={css.text}>
                <ReadMoreReact
                    className="read-more-button"
                    text={text}
                    min={500}
                    // min={600}
                    ideal={550}
                    max={600}
                    // readMoreText="read more"
                />
            </div>
        </div>
    );
}
