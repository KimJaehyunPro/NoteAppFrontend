import * as React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import AboutPage from '../About/AboutPage';
import ShowAllNotesPage from '../ShowAllNotes/ShowAllNotesPage';
import CreateNotePage from '../CreateNote/CreateNotePage';
import ReadNotePage from '../ReadNote/ReadNotePage';
import RandomNote from '../ReadNote/RandomNote';

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