import React, {Component} from 'react';
import profileinfo from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={profileinfo.test}>
            <img src="http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg" alt=""/>
            <div>
                ava + descs
            </div>
        </div>
    );
}

export default ProfileInfo;