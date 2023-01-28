import * as React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import AboutPage from '../About/AboutPage';
import ShowAllNotesPage from '../ShowAllNotes/ShowAllNotesPage';
import CreateNotePage from '../WriteNote/CreateNotePage';
import ReadNotePage from '../ReadNote/ReadNotePage';
import RandomNote from '../ReadNote/RandomNote';
import UpdateNotePage from '../WriteNote/UpdateNotePage';

export default function MainApp(props) {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
          path: "/notes/update/:noteId",
          element: <UpdateNotePage />
        },
        {
          path: "/notes/:noteId",
          element: <ReadNotePage />
        },
        {
          path: "/notes/random",
          element: <RandomNote />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
} 