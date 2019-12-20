import React from "react";
import './LeftMenu.css';
import {slide as Menu} from 'react-burger-menu';
import { Link } from 'react-router-dom'

const LeftMenu: React.FC = (props: any) => {
  return (
    <Menu {...(props || {})}>
      <Link className="menu-item" to="/">
        README
      </Link>

      <Link className="menu-item" to="/regex">
        Test Regex with java.util.regex
      </Link>

      <Link className="menu-item" to="/jinjava">
        Render template with com.hubspot.jinjava:jinjava
      </Link>
    </Menu>
  );
};

export default LeftMenu;