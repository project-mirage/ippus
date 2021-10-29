import React, { useState } from "react";
import FormInput from "../customForm/FormInput";
import * as css from "./DonationForm.module.sass";
import HeroCTA from "../../HeroCTA/HeroCTA";

export default function DonationForm() {
    const [selectedButton, setselectedButton] = useState(1);

    return (
        <div className={css.formContainer}>
            <h4 className={css.donationType}>Select Donation Type</h4>

            <div className={css.switcher}>
                <div
                    onClick={() => {
                        setselectedButton(0);
                    }}
                    // only add the css.active class if selected button is the cooresponding one
                    className={`${css.switcherButton} ${
                        selectedButton === 0 && css.active
                    } `}
                >
                    One - Time
                </div>
                <div
                    onClick={() => {
                        setselectedButton(1);
                    }}
                    // only add the css.active class if selected button is the cooresponding one
                    className={`${css.switcherButton} ${
                        selectedButton === 1 && css.active
                    }`}
                >
                    Monthly
                </div>
            </div>

            <div className={css.inputsContainer}>
                <FormInput
                    heading="Donation Amount"
                    subheading="Enter amount in PKR"
                    type="number"
                    containerClassname={css.donationInput}
                />
                <FormInput
                    heading="Full Name"
                    subheading="Enter your full name"
                    type="text"
                    containerClassname={css.donationInput}
                />
                <FormInput
                    heading="Contact Number"
                    subheading="Enter Valid contact number"
                    type="text"
                    containerClassname={css.donationInput}
                />
                <FormInput
                    heading="Email"
                    subheading="Enter valid email address"
                    type="email"
                    containerClassname={css.donationInput}
                />
                <HeroCTA>Submit Form</HeroCTA>
            </div>
        </div>
    );
}
