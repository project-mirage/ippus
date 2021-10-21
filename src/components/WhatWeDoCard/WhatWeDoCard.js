import React from "react";
import "./WhatWeDoCard.sass";

export default function WhatWeDoCard(props) {
    const { wwdEmpowersIndus, wwdEmpowerCopy } = props;

    return (
        <div className="wwd-empowers-industry" data-id="148:889">
            <WWDEmpowerIcon data-id="148:890:an-component-instance" />
            <h1
                className="wwd-empowers-indus inter-bold-midnight-32px"
                data-id="148:895"
            >
                {wwdEmpowersIndus}
            </h1>
            <div
                className="wwd-empower-copy inter-normal-midnight-20px"
                data-id="148:896"
            >
                {wwdEmpowerCopy}
            </div>
        </div>
    );
}

function WWDEmpowerIcon() {
    return (
        <div className="wwd-empower-icon" data-id="148:890">
            <img
                className="wwd-power-icon"
                data-id="148:892"
                src="https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/61617efe1392dcf49bb8de0f/img/wwd---power-icon@2x.png"
            />
        </div>
    );
}
