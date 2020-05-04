import { createMuiTheme } from "@material-ui/core/styles";
import { brown, green, orange, red } from "@material-ui/core/colors";

const hue = 600;
export const primaryColor = orange[hue];
export const secondaryColor = brown[hue];
export const successColor = green[hue];
export const errorColor = red[hue];

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#000',
        },
        secondary: {
            main: secondaryColor,
            contrastText: '#fff',
        },
        success: {
            main: successColor,
        },
        error: {
            main: errorColor,
        }
    },
});

export default theme;
