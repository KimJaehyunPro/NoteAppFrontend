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
          path: "/note",
          element: <ShowAllNotesPage />
        },
        {
          path: "/note/:noteId",
          element: <ReadNotePage />
        },
        {
          path: "/note/create",
          element: <CreateNotePage />
        },
        {
          path: "/note/update/:noteId",
          element: <UpdateNotePage/>
        },
        {
          path: "/note/random",
          element: <RandomNote />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
} 