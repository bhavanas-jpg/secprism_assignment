import React from 'react';
import secprismLogo from "../assets/secprism_logo.jfif";
import avatarImg from "../assets/avatar_img.jpg";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <header className="header__container">
    <img  className="logo__image" src={secprismLogo} alt="secPrism logo" width="100" height="100" />
        <div className="header__list">
            <h3>SDL Management</h3>
            <div className="header__items">
            <NotificationsNoneIcon />
                <span>Welcome, Jenny Doe</span>
                <Avatar alt="Remy Sharp" src={avatarImg} />
            </div>
        </div>
    </header>
  )
}

export default Header