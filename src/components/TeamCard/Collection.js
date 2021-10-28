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
                        name={e.memberName}
                        role={e.memberRole}
                        image={e.memberImage ? e.memberImage.sourceUrl : ""}
                        waLink={e.whatsapp}
                        twitLink={e.linkedin}
                        fbLink={e.facebook}
                    />
                </FadeInUp>
            ))}
        </div>
    );
}
