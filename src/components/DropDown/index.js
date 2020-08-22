import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const DropDown = ({anchorEl, handleClose, dropData}) => {
    return (
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {dropData.map((dropObj, index) => (
                <MenuItem key={index} onClick={dropObj.func}>{dropObj.text}</MenuItem>
                ))}
        </Menu>
    );
};

export default DropDown;
