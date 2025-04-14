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
    components: {
        MuiSlider: {
            styleOverrides:{
                root:{
                    direction:"ltr"
                }
            }
        }
    },
    direction: 'ltr',
    shape: {
        borderRadius: 4,
    },
    spacing: 8,
});

export default lightTheme;



declare module '@mui/material/styles' {
    interface Theme {
        colorSchemes?: {
            light?: {
                palette?: {
                    background?: {
                        default?: string;
                        paper?: string;
                    };
                    primary?: {
                        main?: string;
                    };
                    secondary?: {
                        main?: string;
                    };
                };
            };
            dark?: {
                palette?: {
                    background?: {
                        default?: string;
                        paper?: string;
                    };
                    primary?: {
                        main?: string;
                    };
                    secondary?: {
                        main?: string;
                    };
                };
            };
        };
    }

    interface ThemeOptions {
        colorSchemes: {
            light: {
                palette: {
                    background: {
                        default: string;
                        paper: string;
                    };
                    primary: {
                        main: string;
                    };
                    secondary: {
                        main: string;
                    };
                };
            };
            dark: {
                palette: {
                    background: {
                        default: string;
                        paper: string;
                    };
                    primary: {
                        main: string;
                    };
                    secondary: {
                        main: string;
                    };
                };
            };
        };
        cssVariables?: {
            colorSchemeSelector?: string;
        };
    }
}