import { amber, blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
        colorSchemes: {
            light: {
                palette: {
                    background: {
                        default: '#f9f9f9', // background for light mode
                        paper: '#ffffff',
                    },
                    primary: {
                        main: '#60abe4',
                    },
                    secondary: {
                        main: '#8f11cc',
                    },
                }
            },
            dark: {
                palette: {
                    background: {
                        default: '#232323',
                        paper: '#1e1e1e',
                    },
                    primary: {
                        main: '#60abe4',
                    },
                    secondary: {
                        main: '#8f11cc',
                    },
                }
            }
        },
    cssVariables: {
        colorSchemeSelector: 'class'
    },
    palette: {
        mode: 'light',
        background: {
            default: '#f9f9f9', // background for light mode
            paper: '#ffffff',
        },
        primary: {
            main: amber[500],
            light: amber[100],
            dark: amber[900]
        },
        secondary: {
            main: blue[500],
        },
        tonalOffset: 0.5,
    },
    direction: 'rtl',
    shape: {
        borderRadius: 4,
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                },
            },
        },
    },
});

export default lightTheme;
