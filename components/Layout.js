import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFC947'
        },
        secondary: {
            main: '#000000'
        }
    }
})

const Layout = ({ children }) => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header />
                    { children }
                <Footer />
            </ThemeProvider>
            
        </div>
    );
}

export default Layout;