import React from "react";
import * as css from "./FormInput.module.sass";
import TextareaAutosize from "react-autosize-textarea";

export default function FormInput({
    heading,
    subheading,
    type,
    onChange,
    containerClassname,
    name,
}) {
    return (
        <div className={containerClassname}>
            <h6 className={css.heading}>{heading}</h6>
            <p className={css.subheading}>{subheading}</p>
            <TextareaAutosize
                name={name}
                onChange={onChange}
                maxRows={10}
                rows={1}
                className={css.input}
                type={type}
                id={heading}
                className={css.input}
            />
        </div>
    );
}
