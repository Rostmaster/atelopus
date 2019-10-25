import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import yes from './../../../assets/images/yes.png'
import no from './../../../assets/images/no.png'


const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    } else {

        return (
            <div className={style.wrapper}>

                <div className={style.wallpaper}>
                    <img src='https://www.setaswall.com/wp-content/uploads/2017/05/Dual-Monitor-Wallpaper-2-768x247.jpg'
                         alt='wallpaper'/>
                </div>

                <div className={style.descriptionBlock}>
                    <img className={style.photo} src={props.userProfile.photos.large} alt='user photo'/>
                    <div className={style.name}>{props.userProfile.fullName}</div>
                    <div className={style.status}>{props.userProfile.aboutMe}</div>
                    <div className={style.jobDescription}>{props.userProfile.lookingForAJobDescription}</div>
                    <div className={style.job}>Looking for the JOB:</div>
                        {props.userProfile.lookingForAJob === true
                            ? <img src={yes} className={style.jobImg}   alt='job status img'/>
                            : <img src={no} className={style.jobImg}    alt='job status img'/>}

                </div>

            </div>
        );
    }
};
export default ProfileInfo;