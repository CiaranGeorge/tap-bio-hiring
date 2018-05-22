import React from 'react';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';

const lightMuiTheme = createMuiTheme({
    typography: {
        htmlFontSize: 14
    }
});

function withMaterialUi(Component) {
    function WithRoot(props) {
        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <MuiThemeProvider theme={lightMuiTheme}>
                    <CssBaseline />
                    <Component {...props} />
                </MuiThemeProvider>
            </MuiPickersUtilsProvider>
        );
    }

    return WithRoot;
}

export default withMaterialUi;