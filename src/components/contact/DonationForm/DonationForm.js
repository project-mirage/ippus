import React, { useState } from "react";
import FormInput from "../customForm/FormInput";
import * as css from "./DonationForm.module.sass";
import HeroCTA from "../../HeroCTA/HeroCTA";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function DonationForm({ type }) {
    const [selectedButton, setselectedButton] = useState(1);

    const initialValues = {
        amount: "",
        fullName: "",
        email: "",
        contact: "",
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues((prevState) => ({
            ...values,
            [name]: value,
        }));
    };

    console.log(values);

    const handleSubmission = (e) => {
        e.preventDefault();
        const baseUrl = "https://ippus-backend.herokuapp.com";
        // const type = "contact";
        // setting the body content based on the type being passed in
        let bodyContent;

        if (
            values.amount !== "" &&
            values.fullName !== "" &&
            values.email !== "" &&
            values.contact !== "" &&
            validateEmail(values.email)
        ) {
            bodyContent = JSON.stringify({
                fullName: `Name: ${values.fullName}`,
                amount: `Amount: ${values.amount}Rs.`,
                email: `Email: ${values.email}`,
                contact: `Contact: ${values.contact}`,
                type: type,
            });
        } else {
            toast.error(`Please enter correct details! Try again!`);
            return;
        }

        console.log(bodyContent);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodyContent,
        };

        // processing toast without end timer
        toast.info("Processing... Please wait!", {
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        fetch(`${baseUrl}/contact`, requestOptions)
            .then(async (response) => {
                const res = await response.json();
                // forcing the end of the processing toast timeout
                toast.dismiss();
                console.log(res);

                if (res.success) {
                    // reset if everything goes to plan
                    setValues(initialValues);
                    toast.success(`${res.message}`);
                } else {
                    toast.error(`${res.message}`);
                }
            })
            .catch((e) => {
                console.log(e);
                // forcing the end of the processing toast timeout
                toast.dismiss();
                toast.error(
                    `The message failed to send. Please try again later.`
                );
            });
    };

    return (
        <>
            <div className={css.formContainer} id="donationForm">
                <h1 className={css.heading}>Donate Now</h1>
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
                        name="amount"
                        onChange={handleInputChange}
                        heading="Donation Amount"
                        subheading="Enter amount in PKR"
                        type="number"
                        containerClassname={css.donationInput}
                    />
                    <FormInput
                        name="fullName"
                        onChange={handleInputChange}
                        heading="Full Name"
                        subheading="Enter your full name"
                        type="text"
                        containerClassname={css.donationInput}
                    />
                    <FormInput
                        name="contact"
                        onChange={handleInputChange}
                        heading="Contact Number"
                        subheading="Enter Valid contact number"
                        type="text"
                        containerClassname={css.donationInput}
                    />
                    <FormInput
                        name="email"
                        onChange={handleInputChange}
                        heading="Email"
                        subheading="Enter valid email address"
                        type="email"
                        containerClassname={css.donationInput}
                    />
                    <HeroCTA>
                        <button
                            onClick={handleSubmission}
                            className={css.button}
                            type="submit"
                        >
                            Submit Form
                        </button>
                    </HeroCTA>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </>
    );
}
