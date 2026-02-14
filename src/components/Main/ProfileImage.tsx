import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import profileImg from '../images/profile.png'  // 경로 맞게 수정

const ProfileImageWrapper = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
`

// const PROFILE_IMAGE_LINK =
//   'https://raw.githubusercontent.com/Ganadalam/Gatsby/main/src/images/profile.png'
// const ProfileImageWrapper = styled.img`
//   width: 120px;
//   height: 120px;
//   margin-bottom: 30px;
//   border-radius: 50%;
// `

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={profileImg} alt="Profile Image" />
}

export default ProfileImage