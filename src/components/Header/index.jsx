import React from "react";
import styles from "../../styles";
import AvatarElem from "components/Avatar";
import Ewok from "../../assets/ewok.jpg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const someAlert = () => alert("weeeee");

  const handleClose = () => {
    setAnchorEl(null);
  };
  const src = Ewok;
  {
    /* <SendIcon fontSize="small" /> */
  }
  const MenuItemBtn = ({ text, onClick, icon }) => {
    if (icon) {
      return (
        <MenuItem onClick={onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          {text}
        </MenuItem>
      );
    } else {
      return <MenuItem onClick={onClick}>{text}</MenuItem>;
    }
  };
  return (
    <div id="header" className={styles.header}>
      le header
      <span
        className="cursor-pointer"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AvatarElem alt="Brett Thurston" src={src} size="lg" />
      </span>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItemBtn text="Profile" onClick={someAlert} />
        <MenuItemBtn text="Settings" onClick={someAlert} />
        <MenuItemBtn text="Contact" onClick={someAlert} />
      </Menu>
    </div>
  );
};

export default Header;
