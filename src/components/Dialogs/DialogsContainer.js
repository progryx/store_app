import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateDialogActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messages,
        dialogsData: state.messagesPage.dialogs,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateCurrentMessage: (message) => {
            // debugger;
            let action = updateDialogActionCreator(message);
            dispatch(action);
        },
        sendMessage: () => {
            //debugger;
            let action = sendMessageActionCreator();
            dispatch(action);
        }
    }
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);