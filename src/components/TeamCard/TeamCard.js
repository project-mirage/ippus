import React from "react";
import fbLogo from "../../images/fbLogo.png";
import twitLogo from "../../images/twitLogo.png";
import waLogo from "../../images/waLogo.svg";
import * as css from "./TeamCard.module.sass";

export default function DescriptionSection({
    name,
    role,
    image,
    twitLink,
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
                <a href={fbLink}>
                    <img src={fbLogo} alt="facebook logo" />
                </a>
                <a href={twitLink}>
                    <img src={twitLogo} alt="twitter logo" />
                </a>
                <a href={waLink}>
                    <img src={waLogo} alt="whatsapp" />
                </a>
            </div>
        </div>
    );
}
