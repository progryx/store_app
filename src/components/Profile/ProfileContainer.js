import React from 'react';
import Profile from "./Profile";
import {addPost, getUserProfile, setUserProfile, updatePost} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component{

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {
    return <div>
        <Profile {...this.props} profile={this.props.profile}/>
    </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer); // withrouter создает компоненту и закидывает в нее данные из URL

export default connect (mapStateToProps, {
    addPost, updatePost, setUserProfile, getUserProfile
})(WithUrlDataContainerComponent);