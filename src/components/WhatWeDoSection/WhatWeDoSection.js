import React from "react";
import WhatWeDoCard from "../WhatWeDoCard/WhatWeDoCard";
import "./WhatWeDoSection.sass";
import FadeInWhenVisible from "../../animations/FadeIn";
import SlideRight from "../../animations/SlideRight";
import SlideLeft from "../../animations/SlideLeft";

export default function WhatWeDoSection() {
    return (
        <div className="wwd-section">
            <h1 className="hero-title-1 merriweather-bold-darkblue-136px">
                What We Do
            </h1>
            <div className="wwd-details">
                <SlideRight>
                    <WhatWeDoCard
                        wwdEmpowersIndus="Empowers Industry"
                        wwdEmpowerCopy="Our core mission is to improve manufacturing in Pakistan
                    by empowering engineers, entrepreneurs, and different Pakistani educational
                    institutions who can ..."
                    />
                </SlideRight>
                <FadeInWhenVisible>
                    <WhatWeDoCard
                        wwdEmpowersIndus="Empowers Industry"
                        wwdEmpowerCopy="Our core mission is to improve manufacturing in Pakistan
                        by empowering engineers, entrepreneurs, and different Pakistani educational
                        institutions who can ..."
                    />
                </FadeInWhenVisible>
                <SlideLeft>
                    <WhatWeDoCard
                        wwdEmpowersIndus="Empowers Industry"
                        wwdEmpowerCopy="Our core mission is to improve manufacturing in Pakistan
                    by empowering engineers, entrepreneurs, and different Pakistani educational
                    institutions who can ..."
                    />
                </SlideLeft>
            </div>
        </div>
    );
}
