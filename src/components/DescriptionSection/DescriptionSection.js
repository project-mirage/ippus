import React from "react";
import "./DescriptionSection.sass";
import ReadMoreReact from "read-more-react";

export default function DescriptionSection({ heading, text, readMore }) {
    return (
        <div className="section">
            <div
                className="heading inter-bold-midnight-24px"
                dangerouslySetInnerHTML={{ __html: heading }}
            />
            <div className="descriptionText inter-normal-blue-charcoal-16px">
                {readMore ? (
                    <ReadMoreReact
                        className="read-more-button"
                        text={text}
                        min={400}
                        ideal={450}
                        max={500}
                        readMoreText="..."
                    />
                ) : (
                    <div
                        className="display-text-group"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                )}
            </div>
        </div>
    );
}
