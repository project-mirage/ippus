import React from "react";
import "./HeroCTA.sass";

function HeroCTA(props) {
    const { children, style } = props;

    return (
        <div style={style} className="hero-cta animate-enter2" show-on-scroll="true">
            <div className="label">
                <div className="label-1 inter-semi-bold-soapstone-20px">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeroCTA;
