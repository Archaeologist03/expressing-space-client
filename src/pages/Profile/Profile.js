import React from 'react';
import styled from 'styled-components';

import Navigation from '../../components/Navigation/Navigation';

const ProfileContainer = styled.div``;

const ProfileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 10%;
`;

const Profile = () => {
  const navsData = [
    { linkTo: '/profile', name: 'Profile' },
    { linkTo: '/logout', name: 'Logout' },
  ];
  const profileNavsData = [
    { linkTo: '/messages', name: 'Messages' },
    { linkTo: '/users', name: 'Explore Users' },
  ];

  return (
    <ProfileContainer>
      <ProfileNavContainer>
        <Navigation navsData={profileNavsData} />
      </ProfileNavContainer>
      <Navigation navsData={navsData} />
    </ProfileContainer>
  );
};

export default Profile;
