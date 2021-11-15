import React from "react";
import DescriptionSection from "./DescriptionSection";
import * as css from "./DescriptionCollection.module.sass";
import FadeInUp from "../../animations/FadeInUp";

export default function DescriptionCollection({ contentSection }) {
    console.log(contentSection);
    return (
        <section>
            {contentSection.map((e) => (
                <div className={css.tile}>
                    <DescriptionSection
                        readMore={false}
                        heading={e.aboutTitle}
                        text={e.aboutDescription}
                    />
                </div>
            ))}
        </section>
    );
}
