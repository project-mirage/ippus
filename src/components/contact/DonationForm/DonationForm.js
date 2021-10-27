import React from "react";
import * as css from "./DonationForm.module.sass";

export default function DonationForm({ heading, boldSubtitle }) {
    return (
        <div className={css.formContainer}>
            <h1 className={css.heading}>Donate Now</h1>
            <div className={css.formDiv}>
                <h3 className={css.formHeading}>Donation Type</h3>
                <div className={css.switchButtons}>
                    <div className={css.whitebg}>One-Time</div>
                    <div className={css.bluebg}>Monthly</div>
                </div>
                <div className={css.cellContainer}>
                    <div className={css.topCell}>
                        <div className={css.cell1}>
                            <h3 className={css.cellHeading}>Donation Amount</h3>
                            <h3 className={css.cellSubHeading}>
                                Enter amount in PKR
                            </h3>
                            <h3 className={css.ammount}>5000</h3>
                            <div className={css.underline}></div>
                        </div>
                        <div className={css.cell3}>
                            {" "}
                            <h3 className={css.cellHeading}>Full Name</h3>
                            <h3 className={css.cellSubHeading}>
                                Enter your full name
                            </h3>
                            <h3 className={css.ammount}>Nomaan Mufti</h3>
                            <div className={css.underline}></div>
                        </div>
                    </div>
                    <div className={css.bottomCell}>
                        <div className={css.cell2}>
                            {" "}
                            <h3 className={css.cellHeading}>Contact Number</h3>
                            <h3 className={css.cellSubHeading}>
                                Enter valid contact number
                            </h3>
                            <h3 className={css.ammount}>+92 123 4567890</h3>
                            <div className={css.underline}></div>
                        </div>
                        <div className={css.cell4}>
                            <h3 className={css.cellHeading}>Email</h3>
                            <h3 className={css.cellSubHeading}>
                                Enter valid email address
                            </h3>
                            <h3 className={css.ammount}>yourname@email.com</h3>
                            <div className={css.underline}></div>
                        </div>
                    </div>
                </div>
                <div className={css.confirmButton}>
                    <h2 className={css.text}>Confirm & Send</h2>
                </div>
            </div>
        </div>
    );
}
