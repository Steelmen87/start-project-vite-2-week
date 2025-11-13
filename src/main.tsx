import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyle} from "./styled/GlobalStyled.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "./styled/theme.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </StrictMode>,
)
