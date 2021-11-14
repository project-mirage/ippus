import React from "react";
import "./WhatWeDoCard.sass";

export default function WhatWeDoCard(props) {
    const { wwdEmpowersIndus, wwdEmpowerCopy, img } = props;

    return (
        <div className="wwd-empowers-industry" data-id="148:889">
            <div className="wwd-empower-icon" data-id="148:890">
                <img className="wwd-power-icon" data-id="148:892" src={img} />
            </div>
            <h1
                className="wwd-empowers-indus inter-bold-midnight-24px"
                data-id="148:895"
            >
                {wwdEmpowersIndus}
            </h1>
            <div
                className="wwd-empower-copy inter-normal-blue-charcoal-16px"
                data-id="148:896"
            >
                {wwdEmpowerCopy}
            </div>
        </div>
    );
}
