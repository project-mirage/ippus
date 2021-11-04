import React from "react";
import * as css from "./HeroCTA.module.sass";
import { Link } from "gatsby";

function HeroCTA({ onClick, text, href }) {
    return (
        <>
            {onClick ? (
                <button onClick={onClick} className={css.heroButton}>
                    {text}
                </button>
            ) : (
                <Link to={href} className={css.heroButton}>
                    {text}
                </Link>
            )}
        </>
    );
}

export default HeroCTA;
