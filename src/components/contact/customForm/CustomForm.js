import React from "react";
import * as css from "./CustomForm.module.sass";
import FormInput from "./FormInput";

export default function CustomForm({
    heading,
    boldSubtitle,
    description,
    address,
    email,
    contactNumber,
}) {
    return (
        <div className={css.formContainer}>
            <h1 className={css.heading}>{heading}</h1>
            <div className={css.left}>
                <h2 className={css.boldSubtitle}>{boldSubtitle}</h2>
                <a className={css.description}>{description}</a>
                <a className={css.address}>{address}</a>
                <a className={css.email}>{email}</a>
                <a className={css.contactNumber}>{contactNumber}</a>
            </div>
            <div className={css.right}>
                <form className={css.form} action="">
                    <FormInput
                        heading="Full Name"
                        subheading="Enter your full name"
                        type="text"
                    />
                    <FormInput
                        heading="Email"
                        subheading="Enter valid email address"
                        type="email"
                    />
                    <FormInput
                        heading="Message"
                        subheading="Enter your message"
                        type="text"
                    />
                </form>
            </div>
        </div>
    );
}
