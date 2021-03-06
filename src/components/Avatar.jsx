import React from "react";
import logo40 from "./../images/kienavatarfafa.png";
import logo24 from "./../images/kienavatarfafa.png";

const Avatar = props => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img
      src={props.modifierClasses === "c-avatar--as-author" ? logo24 : logo40}
      alt="www.kien.dev"
    />
  </div>
);

export default Avatar;
