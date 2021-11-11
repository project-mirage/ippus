import React from "react";
import fbLogo from "../../images/fbLogo.png";
import linkedinLogo from "../../images/linkedinLogo.png";
import waLogo from "../../images/waLogo.svg";
import * as css from "./TeamCard.module.sass";

export default function DescriptionSection({
    name,
    role,
    image,
    linkedinLink,
    fbLink,
    waLink,
}) {
    return (
        <div className={css.card}>
            <div className={css.circle}>
                {image && <img className={css.image} src={image} alt="" />}
            </div>
            <h1 className={css.name}>{name}</h1>
            <p className={css.role}>{role}</p>
            <div className={css.socials}>
                {fbLink && (
                    <a target="_blank" rel="noopener noreferrer" href={fbLink}>
                        <img className={css.logo} src={fbLogo} alt="facebook logo" />
                    </a>
                )}
                {linkedinLink && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={linkedinLink}
                    >
                        <img className={css.logo} src={linkedinLogo} alt="linkedin logo" />
                    </a>
                )}
                {waLink && (
                    <a target="_blank" rel="noopener noreferrer" href={waLink}>
                        <img className={css.logo} src={waLogo} alt="whatsapp logo" />
                    </a>
                )}
            </div>
        </div>
    );
}
