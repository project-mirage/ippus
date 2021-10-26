import React from "react";
import * as css from "./FormInput.module.sass";
import TextareaAutosize from "react-autosize-textarea";

export default function FormInput({ heading, subheading, type, onChange }) {
    return (
        <>
            <h6 className={css.heading}>{heading}</h6>
            <p className={css.subheading}>{subheading}</p>
            <TextareaAutosize
                maxRows={10}
                rows={1}
                className={css.input}
                type={type}
                name={heading}
                id={heading}
                className={css.input}
            />
        </>
    );
}
