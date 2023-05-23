import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['sans-serif'],
});

const theme = createTheme({
    palette:{
        primary: {
            main: "#0485FF"
        },
        secondary: {
            main: "#00CC99"
        },
        text:{
            primary: "#000",
            secondary: "#fff"
        }
        
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
        body1: {
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.25rem",
            textAlign: "center"
        },  
        h1: {
            fontSize: "2.1875rem",
            fontWeight: "700",
            lineHeight: "2.1875rem",
            textAlign: "center"
        },
        button: {
            fontSize: "9rem"
        }
    }
});

export default theme;