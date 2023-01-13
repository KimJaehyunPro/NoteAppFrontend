import { Container, Box, Toolbar } from "@mui/material";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPage from "../About/AboutPage";
import ReadNote from "../ReadNote/ReadNote";
import WriteNotePage from "../WriteNote/WriteNotePage";
import TechPage from "../Tech/TechPage";

export default function MainContainer(props) {

    const drawerWidth = props.drawerWidth;

    const router = createBrowserRouter([
        {
            path: "/",
            element: <AboutPage />
        },
        {
            path: "/ReadNote",
            element: <ReadNote />
        },
        {
            path: "/WriteNote",
            element: <WriteNotePage />
        },
        {
            path: "/Tech",
            element: <TechPage />
        }
    ])

    return (
        <Container sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <RouterProvider router={router} />
            </Box>
        </Container>
    )
}