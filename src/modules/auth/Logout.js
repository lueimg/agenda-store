import React from "react";
import { connect } from "react-redux";
import { AuthActions } from "../../store/actions/auth";

class Logout extends React.Component {
  componentDidMount() {
    this.props.actions.logout();
  }

  render() {
    return <div>Logging out....</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = distpach => ({
  actions: {
    logout() {
      distpach(AuthActions.logout());
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
