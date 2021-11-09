import React from "react";
import * as css from "./HeroCTA.module.sass";
import { Link } from "gatsby";

function HeroCTA({ onClick, text, href, pointing, arrow }) {
    return (
        <>
            {onClick ? (
                <button onClick={onClick} className={css.heroButton}>
                    {text}
                </button>
            ) : (
                <Link
                    to={href}
                    className={`${css.heroButton} ${pointing && css.pointing}`}
                >
                    {text}
                    {arrow && (
                        <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginLeft: "20" }}
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.3282 0.292893C8.93768 -0.0976311 8.30451 -0.0976311 7.91399 0.292893C7.52346 0.683418 7.52346 1.31658 7.91399 1.70711L13.2069 7H1.62109C1.06881 7 0.621094 7.44772 0.621094 8C0.621094 8.55229 1.06881 9 1.62109 9H13.2069L7.91399 14.2929C7.52346 14.6834 7.52346 15.3166 7.91399 15.7071C8.30451 16.0976 8.93768 16.0976 9.3282 15.7071L16.3282 8.70711C16.7187 8.31658 16.7187 7.68342 16.3282 7.29289L9.3282 0.292893Z"
                                fill="#FAFCFF"
                            />
                        </svg>
                    )}
                </Link>
            )}
        </>
    );
}

export default HeroCTA;
