import React from "react";

import styles from "./CustomLink.module.scss";
import { LinkProps, NavLink } from "react-router-dom";
import { IconType } from "react-icons";

interface CustomLinkProps extends LinkProps {
  text: string;
  icon?: IconType | null;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, icon, ...props }) => {
  let IconComponent;
  if (icon) {
    IconComponent = icon;
  } else {
    IconComponent = null;
  }

  return (
    <NavLink
      className={({ isActive }) => (isActive ? `${styles.activeLink} ${styles.customLink}` : `${styles.customLink}`)}
      {...props}
    >
      {IconComponent && <IconComponent />}
      <span>{text}</span>
    </NavLink>
  );
};

export { CustomLink };
