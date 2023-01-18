import { Container, Box, Toolbar } from "@mui/material";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPage from "../About/AboutPage";
import ShowAllNotesPage from "../ShowAllNotes/ShowAllNotesPage";
import ReadNotePage from "../ReadNote/ReadNotePage";
import CreateNotePage from "../CreateNote/CreateNotePage";
import TechPage from "../Tech/TechPage";
import RandomNote from "../ReadNote/RandomNote";

export default function MainContainer(props) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <AboutPage />
        },
        {
            path: "/notes",
            element: <ShowAllNotesPage />
        },
        {
            path: "/notes/create",
            element: <CreateNotePage />
        },
        {
            path: "/notes/:noteId",
            element: <ReadNotePage />
        },
        {
            path: "/tech",
            element: <TechPage />
        },
        {
            path: "/random",
            element: <RandomNote />
        }
    ])

    return (
        <Container sx={{ flexGrow: 1, p: 3, width: { sm: "95%" } }}>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: "95%" } }}
            >
                <Toolbar />
                <RouterProvider router={router} />
            </Box>
        </Container>
    )
}