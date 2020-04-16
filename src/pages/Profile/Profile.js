import React from 'react';
import styled from 'styled-components';

import Navigation from '../../components/Navigation/Navigation';
import Likes from '../../components/Likes/Likes';

const ProfileContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 5%;
`;

const ProfileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 8%;
`;

const LikesContainer = styled.section`
  border: 2px solid purple;
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
      <NavContainer>
        <Navigation navsData={navsData} />
      </NavContainer>
      <LikesContainer>
        <Likes />
      </LikesContainer>
    </ProfileContainer>
  );
};

export default Profile;
