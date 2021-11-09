import React from "react";
import "./DescriptionSection.sass";
import ReadMoreReact from "read-more-react";

export default function DescriptionSection({ heading, text }) {
    return (
        <div className="section">
            <div
                className="heading"
                dangerouslySetInnerHTML={{ __html: heading }}
            />
            {/* <div
                className={css.text}
                dangerouslySetInnerHTML={{ __html: text }}
            /> */}
            {/* <div
                className={css.text}
                dangerouslySetInnerHTML={{ __html: text }}
            > */}
            <ReadMoreReact
                className="read-more-button"
                text={text}
                min={400}
                // min={600}
                ideal={450}
                max={500}
                readMoreText="..."
            />
            {/* </div> */}
        </div>
    );
}
