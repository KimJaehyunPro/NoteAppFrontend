import { Container, Box, Toolbar } from "@mui/material";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPage from "../About/AboutPage";
import ReadNote from "../ReadNote/ReadNote";
import WriteNotePage from "../WriteNote/WriteNotePage";
import TechPage from "../Tech/TechPage";

export default function MainContainer(props) {

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

    const drawer_width = props.drawer_width;

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawer_width}px)` } }}
        >

            <Toolbar drawer_width={drawer_width} />

            <Container>
                <RouterProvider router={router} />
            </Container>
        </Box>
    )
}