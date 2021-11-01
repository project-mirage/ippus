import React, { useState } from "react";
import * as css from "./CustomForm.module.sass";
import FormInput from "./FormInput";
import HeroCTA from "../../HeroCTA/HeroCTA";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function CustomForm({
    type,
    heading,
    boldSubtitle,
    description,
    address,
    email,
    contactNumber,
}) {
    const mapPin = (
        <svg
            className={css.svg}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M31.5 15C31.5 25.5 18 34.5 18 34.5C18 34.5 4.5 25.5 4.5 15C4.5 11.4196 5.92232 7.9858 8.45406 5.45406C10.9858 2.92232 14.4196 1.5 18 1.5C21.5804 1.5 25.0142 2.92232 27.5459 5.45406C30.0777 7.9858 31.5 11.4196 31.5 15Z"
                stroke="#001833"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M18 19.5C20.4853 19.5 22.5 17.4853 22.5 15C22.5 12.5147 20.4853 10.5 18 10.5C15.5147 10.5 13.5 12.5147 13.5 15C13.5 17.4853 15.5147 19.5 18 19.5Z"
                stroke="#001833"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );

    const sendIcon = (
        <svg
            className={css.svg}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M33 3L16.5 19.5"
                stroke="#001833"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M33 3L22.5 33L16.5 19.5L3 13.5L33 3Z"
                stroke="#001833"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
    const phoneIcon = (
        <svg
            className={css.svg}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M33.0001 25.38V29.88C33.0018 30.2978 32.9163 30.7113 32.7489 31.094C32.5816 31.4768 32.3361 31.8204 32.0283 32.1028C31.7204 32.3852 31.357 32.6003 30.9613 32.7341C30.5655 32.8679 30.1462 32.9176 29.7301 32.88C25.1144 32.3785 20.6806 30.8012 16.7851 28.275C13.1609 25.972 10.0881 22.8993 7.78514 19.275C5.25011 15.3618 3.67251 10.9065 3.18014 6.27002C3.14266 5.85522 3.19196 5.43716 3.32489 5.04246C3.45783 4.64776 3.6715 4.28506 3.95229 3.97746C4.23309 3.66985 4.57485 3.42409 4.95583 3.25581C5.33681 3.08753 5.74866 3.00042 6.16514 3.00002H10.6651C11.3931 2.99286 12.0988 3.25064 12.6508 3.72532C13.2027 4.2 13.5633 4.85919 13.6651 5.58002C13.8551 7.02012 14.2073 8.43411 14.7151 9.79502C14.917 10.3319 14.9606 10.9154 14.841 11.4763C14.7214 12.0373 14.4434 12.5522 14.0401 12.96L12.1351 14.865C14.2705 18.6203 17.3798 21.7297 21.1351 23.865L23.0401 21.96C23.448 21.5567 23.9629 21.2788 24.5238 21.1592C25.0848 21.0395 25.6683 21.0832 26.2051 21.285C27.5661 21.7929 28.98 22.1451 30.4201 22.335C31.1488 22.4378 31.8143 22.8048 32.2899 23.3663C32.7656 23.9277 33.0184 24.6444 33.0001 25.38Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );

    const initialValues = {
        fullName: "",
        email: "",
        message: "",
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
        const baseUrl = "http://localhost:7000";
        // const type = "contact";
        // setting the body content based on the type being passed in
        let bodyContent;

        if (
            values.fullName !== "" &&
            values.email !== "" &&
            values.message !== ""
        ) {
            bodyContent = JSON.stringify({
                fullName: `Name: ${values.fullName}`,
                email: `Email: ${values.email}`,
                message: `Message: ${values.message}`,
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
            <div className={css.formContainer}>
                <h1 className={css.heading}>{heading}</h1>
                <div className={css.left}>
                    <h2 className={css.boldSubtitle}>{boldSubtitle}</h2>
                    <a className={css.description}>{description}</a>
                    <div className={css.detailsContainer}>
                        <div className={css.detail}>
                            {mapPin}
                            <a className={css.address}>{address}</a>
                        </div>
                        <div className={css.detail}>
                            {sendIcon}
                            <a className={css.email}>{email}</a>
                        </div>
                        <div className={css.detail}>
                            {phoneIcon}
                            <a className={css.contactNumber}>{contactNumber}</a>
                        </div>
                    </div>
                </div>
                <div className={css.right}>
                    <form className={css.form}>
                        <FormInput
                            onChange={handleInputChange}
                            heading="Full Name"
                            name="fullName"
                            subheading="Enter your full name"
                            type="text"
                        />
                        <FormInput
                            onChange={handleInputChange}
                            heading="Email"
                            name="email"
                            subheading="Enter valid email address"
                            type="email"
                        />
                        <FormInput
                            onChange={handleInputChange}
                            heading="Message"
                            name="message"
                            subheading="Enter your message"
                            type="area"
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
                    </form>
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
