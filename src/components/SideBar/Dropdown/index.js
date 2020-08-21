import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {auth} from "../../../firebase";
import {useStateValue} from "../../../HOCs/StateProvider";
import {setUser} from "../../../store/actions/loginActions";

const Dropdown = ({handleClose, anchorEl}) => {
    const [{}, dispatch] = useStateValue()
    const handleSignOut = () => {
        auth.signOut().then(r => dispatch(setUser(null))).catch(e => console.log(e))
    }
    return (
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleSignOut}>Log out</MenuItem>
        </Menu>
    );
};

export default Dropdown;
