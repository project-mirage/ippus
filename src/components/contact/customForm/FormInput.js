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
    value,
}) {
    return (
        <div className={containerClassname}>
            <h6 className={css.heading}>{heading}</h6>
            <p className={css.subheading}>{subheading}</p>
            {type === "area" ? (
                <TextareaAutosize
                    name={name}
                    onChange={onChange}
                    maxRows={10}
                    rows={1}
                    className={css.input}
                    type={type}
                    id={heading}
                    required={true}
                    value={value}
                />
            ) : (
                <input
                    value={value}
                    name={name}
                    onChange={onChange}
                    required={true}
                    className={css.input}
                    type={type}
                />
            )}
        </div>
    );
}
