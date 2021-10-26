import React from "react";
import TeamCard from "./TeamCard";
import * as css from "./Collection.module.sass";
import FadeInUp from "../../animations/FadeInUp";

export default function Collection({ heading, teamData }) {
    return (
        <div className={css.collection}>
            <h1 className={css.heading}>{heading}</h1>

            {teamData.map((e) => (
                <FadeInUp>
                    <TeamCard
                        name={e.name}
                        role={e.role}
                        image={e.image}
                        instaLink={e.instaLink}
                        waLink={e.waLink}
                        twitLink={e.twitLink}
                        fbLink={e.fbLink}
                    />
                </FadeInUp>
            ))}
        </div>
    );
}
