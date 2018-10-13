import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AuthActions } from "../../../store/actions/auth";
import { Redirect } from "react-router-dom";

export class PrivateSection extends React.Component {
    componentDidMount() {
        this.props.actions.loadCurrentUser();
    }

    render() {
        if (!this.props.appIsLoading && !this.props.user) {
            return <Redirect to="/login" />;
        }

        if (this.props.appIsLoading || !this.props.user) { 
            return <CircularProgress size={50} />;
        }

        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}

const mapStateToProps = ({ app, user }) => ({
    appIsLoading: app.isLoading,
    user
});

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            loadCurrentUser() {
                dispatch(AuthActions.isUserAuth());
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateSection);
