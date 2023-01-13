import { Container, Box, Toolbar } from "@mui/material";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPage from "../About/AboutPage";
import ShowAllNotesPage from "../ShowAllNotes/ShowAllNotesPage";
import ReadNotePage from "../ReadNote/ReadNotePage";
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
            path: "/ShowAllNotes",
            element: <ShowAllNotesPage />
        },
        {
            path: "/ReadNote",
            element: <ReadNotePage />
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