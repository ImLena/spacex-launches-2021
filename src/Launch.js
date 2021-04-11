import React from 'react';
import Timer from "./Timer";

function Launch({mission}) {
    if (mission.launch.minutes == null) {
        return (
            <div className="u-container-style u-list-item u-palette-2-base u-repeater-item u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                    <div>
                        <h2 className="u-text u-text-1">{mission.mission}</h2>
                        <p className="u-text u-text-2">
                                Vehicle: {mission.vehicle}<br/>
                                Location: {mission.location}<br/>
                                Launch: {mission.launch.years}

                        </p></div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="u-container-style u-list-item u-palette-2-base u-repeater-item u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                    <div>
                        <h2 className="u-text u-text-1">{mission.mission}</h2>
                        <p className="u-text u-text-2">
                            Vehicle: {mission.vehicle}<br/>
                            Location: {mission.location}<br/>
                            Launch: {mission.launch.date}.{mission.launch.months}.{mission.launch.years} at {mission.launch.hours} hours {mission.launch.minutes} minutes
                        </p>

                    </div>
                    <div>
                        <Timer time={mission.launch}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Launch;
