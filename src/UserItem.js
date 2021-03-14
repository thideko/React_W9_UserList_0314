import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

export default function UserItem(props) {
  console.log(props.selectedUser);
  return (
    <div className="userItem">
      <i className="fas fa-user fa-3x"></i>{" "}
      <div>
        <p>
          {" "}
          {props.selectedUser.first_name} {props.selectedUser.last_name} {"—"}{" "}
          {props.selectedUser.occupation}
        </p>
        <p className="catch_phrase"> "{props.selectedUser.catch_phrase}"</p>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  selectedUser: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  occupation: PropTypes.string,
  catch_phrase: PropTypes.string
};
