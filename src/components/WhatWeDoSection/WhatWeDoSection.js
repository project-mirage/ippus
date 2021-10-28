import React from "react";
import WhatWeDoCard from "../WhatWeDoCard/WhatWeDoCard";
import "./WhatWeDoSection.sass";
import FadeInWhenVisible from "../../animations/FadeIn";
import icon1 from "../../images/power.svg";
import icon2 from "../../images/target.svg";
import icon3 from "../../images/beat.svg";

export default function WhatWeDoSection({ whatWeDoData }) {
    const images = [icon1, icon2, icon3];

    return (
        <div className="wwd-section">
            <h1 className="hero-title-1 merriweather-bold-darkblue-136px">
                What We Do
            </h1>
            <div className="wwd-details">
                {whatWeDoData.map((e, i) => (
                    <FadeInWhenVisible>
                        <WhatWeDoCard
                            wwdEmpowersIndus={e.title}
                            wwdEmpowerCopy={e.description}
                            img={images[i]}
                        />
                    </FadeInWhenVisible>
                ))}
            </div>
        </div>
    );
}
