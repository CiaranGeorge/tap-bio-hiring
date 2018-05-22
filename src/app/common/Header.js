import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class HeaderContainer extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Weatherify
                    </Typography>
                    <Button color="inherit">Home</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default HeaderContainer;