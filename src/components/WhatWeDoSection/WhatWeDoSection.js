import React from "react";
import WhatWeDoCard from "../WhatWeDoCard/WhatWeDoCard";
import "./WhatWeDoSection.sass";
import FadeInWhenVisible from "../../animations/FadeIn";
import icon1 from "../../images/Power.svg";
import icon2 from "../../images/target.svg";
import icon3 from "../../images/beat.svg";

export default function WhatWeDoSection({ whatWeDoData }) {
    const images = [icon1, icon2, icon3];

    return (
        <>
            <h1 className="heading merriweather-bold-darkblue-136px">
                Our Vision
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
        </>
    );
}
