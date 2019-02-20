import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import Logo from "../../img/logo.png";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src={Logo} alt="Garage Kings" className="logo" />
                <h1 className="display-4 mb-4">Sales App</h1>
                <p className="lead">Sign in or Register as a new salesperson</p>
                <hr />
                <Link to="/login" className="btn btn-lg btn-success mr-2">
                  Sign In
                </Link>
                <Link to="/register" className="btn btn-lg btn-light">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);