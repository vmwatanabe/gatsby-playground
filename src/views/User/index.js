import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

import PageLoader from '../../components/PageLoader';
import { getUserById } from '../../store/actions/Users.actions';
import './User.scss';

class User extends Component {
  componentDidMount() {
    const { dispatchGetUserById, userId } = this.props;

    dispatchGetUserById(userId);
  }

  getUserDetails() {
    const { current, loading } = this.props;

    if (loading || !current) {
      return null;
    }

    return this.renderUserDetails();
  }

  renderUserDetails() {
    const { current } = this.props;

    const { name, username, email, address, phone, website, company } = current;

    return (
      <div className="user-details">
        <div className="user-info two-columns">
          <div className="column">
            {name && <span className="user-info__name">{name}</span>}
            {website && <span className="user-info__website">{website}</span>}
          </div>
          <div className="user-contact column">
            {phone && (
              <span className="user-contact__item user-contact__item--has-icon">
                <FaPhone />
                {phone}
              </span>
            )}
            {email && (
              <span className="user-contact__item user-contact__item--has-icon">
                <FaEnvelope />
                {email}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="user container">
        {loading && <PageLoader />}
        {this.getUserDetails()}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  current: users.currentUser,
  loading: users.loadingUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchGetUserById: getUserById
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(User);
