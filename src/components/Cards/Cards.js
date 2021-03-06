import React from "react";
import "./Cards.sass";

function Cards({ callToActionSectionData }) {
    return (
        <Component5
            makeADonationTitl={callToActionSectionData[0].blockHeading}
            makeADonationCopy={callToActionSectionData[0].blockText}
            makeADonationCopy2={callToActionSectionData[0].blockEmail}
            makeADonationTitl2={callToActionSectionData[1].blockHeading}
            makeADonationCopy3={callToActionSectionData[1].blockText}
            makeADonationCopy4={callToActionSectionData[1].blockEmail}
            data-id="189:1248:an-component-instance"
        />
    );
}

export default Cards;

function Component5(props) {
    const {
        makeADonationTitl,
        makeADonationCopy,
        makeADonationCopy2,
        makeADonationTitl2,
        makeADonationCopy3,
        makeADonationCopy4,
    } = props;

    return (
        <div className="overlap-group2" data-id="an|a2y9bG6X">
            <div className="group-19 animate-enter" data-id="148:977">
                <div className="overlap-group" data-id="an|ySw9dhFC">
                    <h1
                        className="make-a-donation-titl inter-semi-bold-white-28px"
                        data-id="148:979"
                    >
                        {makeADonationTitl}
                    </h1>
                    <p
                        className="make-a-donation-copy-1 inter-normal-white-16px"
                        data-id="148:980"
                    >
                        {makeADonationCopy}
                    </p>
                    <div
                        className="make-a-donation-copy inter-medium-white-18px"
                        data-id="148:981"
                    >
                        {makeADonationCopy2}
                    </div>
                </div>
            </div>
            <div className="group-18 animate-enter1" data-id="148:982">
                <div className="overlap-group1" data-id="an|PYmcYn6d">
                    <div
                        className="make-a-donation-titl inter-semi-bold-midnight-28px"
                        data-id="148:984"
                    >
                        {makeADonationTitl2}
                    </div>
                    <p
                        className="make-a-donation-copy-2 inter-normal-midnight-16px"
                        data-id="148:985"
                    >
                        {makeADonationCopy3}
                    </p>
                    <div
                        className="make-a-donation-copy inter-medium-midnight-18px"
                        data-id="148:986"
                    >
                        {makeADonationCopy4}
                    </div>
                </div>
            </div>
        </div>
    );
}
