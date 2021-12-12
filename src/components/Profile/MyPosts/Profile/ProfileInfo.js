import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from './ProfileStatus'



const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <div>hi</div>
            )


    }
    return (
        <div className={classes.content}>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>

    );
}

export default ProfileInfo