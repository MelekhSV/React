import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from './ProfileStatus'
import {ProfileStatusWithHooks} from "./ProfileStatusHook";
import {userPhoto} from './../../../../asserts/image/user_image.jpg'
import Profile from "../../Profile";
import {requiredField} from "../../../../validations/Validators/validators";
import {Input} from "../../../FormControls/FormsControls";


const ProfileInfo = (props) => {
    const [editMode,setEditMode ]=useState(false)
    const onSubmit =  (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
            .catch(()=>{
                setEditMode(true)
            })
    }
    if (!props.profile) {
        return (
            <div>hi</div>
        )
    }
    const onmainPhotoSelected = (e) => {
        if (e.target.file.length) {
            props.savePhoto(e.target.file[0])
        }
    }
    return (
        <div className={classes.content}>
            <div className={classes.descriptionBlock} className={classes.mainphoto}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={'file'} onChange={}/>}
                { editMode ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmi={onSubmit} /> : <ProfileData gotoEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} /> }

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
}

const Contact = (contactstitle, contactValue) => {
    return (
        <div>
            {props.contactstitle: props.contactValue}
        </div>
    )
}
const ProfileData = (props, gotoEditMode) => {
    return (
        {editMode && <div>
            <button onClick={gotoEditMode}>Edit</button>
        </div>}

        <div>
            FullName: {profile.fullName ? 'yes' : 'no'}
        </div>
        <div>
            Looking for a job: {profile.lokingForAjob ? 'yes' : 'no'}
        </div>
        <div>
        Contacts: {Object.keys(profile.contacts).map(key => {
        return <Contact contactstitle={key} contactValue={props.contact[key]}/>
    })}
    </div>
    {
        profile.lookingForajob &&
        <div>
            My profession skills : {profile.lokingForAjob}
        </div>
    }
    <div>
        About me: {profile.aboutMe}
    </div>
)
}

const ProfileDataForm = ({profile}) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <button onClick={}>Save</button>
                </div>
                {props.error && <div className={classes.formSummaryError}>
                    Error
                </div>}
                <div>
                    <button>Login</button>
                </div>

                <div>
                    FullName: <Field validate={} placeholder={'fullname'} name={'fullname'} component={'input'}/>
                </div>
                <div>
                    Looking for a job: <Field validate={} placeholder={'lokingjob'} name={'lokingjob'} component={'input'} props={type:'checkbox'}/>
                </div>
                <div>
                    Contacts: {Object.keys(profile.contacts).map(key => {
                    return <div>
                        <b>{key}</b> <Field validate={} placeholder={'key'} name={'contacts.' + key} component={'input'}/>
                    </div>
                })}
                </div>



                    <div>
                        My profession skills : <Field validate={} placeholder={'professionskill'} name={'professionskill'} component={'textarea'} />
                    </div>
                }
                <div>
                    About me: <Field validate={} placeholder={'About me'} name={'aboutMe'} component={'textarea'} />
                </div>
            </form>
        </div>
    )

}
const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)

export default ProfileInfo
