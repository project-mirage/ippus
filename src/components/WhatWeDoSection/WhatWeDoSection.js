import React from "react";
import WhatWeDoCard from "../WhatWeDoCard/WhatWeDoCard";
import "./WhatWeDoSection.sass";

export default function WhatWeDoSection() {
    return (
        <div className="wwd-section">
            <h1 className="hero-title-1 merriweather-bold-darkblue-136px">
                What We Do
            </h1>
            <div className="wwd-details">
                <WhatWeDoCard
                    wwdEmpowersIndus="Empowers Industry"
                    wwdEmpowerCopy="Our core mission is to improve manufacturing in Pakistan
                    by empowering engineers, entrepreneurs, and different Pakistani educational
                    institutions who can ..."
                />
                <WhatWeDoCard
                    wwdEmpowersIndus="Empowers Industry"
                    wwdEmpowerCopy="Our core mission is to improve manufacturing in Pakistan
                    by empowering engineers, entrepreneurs, and different Pakistani educational
                    institutions who can ..."
                />
                <WhatWeDoCard
                    wwdEmpowersIndus="Empowers Industry"
                    wwdEmpowerCopy="Our core mission is to improve manufacturing in Pakistan
                    by empowering engineers, entrepreneurs, and different Pakistani educational
                    institutions who can ..."
                />
            </div>
        </div>
    );
}
