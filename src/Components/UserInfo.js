import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ imgUrl, profileurl, personaname }) => (
  <div className="userInfo row">
    <img className="avatar" src={imgUrl} />
    <h2><a href={profileurl}>{personaname}</a></h2>
  </div>
);

UserInfo.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  profileurl: PropTypes.string.isRequired,
  personaname: PropTypes.string.isRequired
};

export default UserInfo;
