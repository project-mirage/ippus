import React from "react";
import TeamCard from "./TeamCard";
import * as css from "./Collection.module.sass";
import FadeInUp from "../../animations/FadeInUp";

export default function Collection({ heading, teamData }) {
    return (
        <FadeInUp>
            <div className={css.collection}>
                <h1 className={css.heading}>{heading}</h1>

                {teamData.map((e) => (
                    <FadeInUp>
                        {e.memberName ? (
                            <TeamCard
                                name={e.memberName}
                                role={e.memberRole}
                                image={
                                    e.memberImage ? e.memberImage.sourceUrl : ""
                                }
                                waLink={e.whatsapp}
                                linkedinLink={e.linkedin}
                                fbLink={e.facebook}
                            />
                        ) : (
                            <TeamCard
                                name={e.judgeName}
                                role={e.judgeRole}
                                image={
                                    e.judgeImage ? e.judgeImage.sourceUrl : ""
                                }
                                waLink={e.whatsapp}
                                linkedinLink={e.linkedin}
                                fbLink={e.facebook}
                            />
                        )}
                    </FadeInUp>
                ))}
            </div>
        </FadeInUp>
    );
}
