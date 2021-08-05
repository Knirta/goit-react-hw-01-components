import React from "react";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => {
  const redColor = "rgb(255, 0, 0)";
  const greenColor = "rgb(0, 255, 0)";
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? greenColor : redColor }}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
