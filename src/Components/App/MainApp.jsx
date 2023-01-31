import * as React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import CreateNotePage from '../../Pages/CreateNote/CreateNotePage';
import ReadNoteListPage from '../../Pages/ReadNoteList/ReadNoteListPage';
import ReadNotePage from '../../Pages/ReadNote/ReadNotePage';
import ReadRandomNotePage from '../../Pages/ReadRandomNote/RandomNotePage';
import UpdateNotePage from '../../Pages/UpdateNote/UpdateNotePage';

export default function MainApp(props) {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/note",
          element: <ReadNoteListPage />
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
          element: <ReadRandomNotePage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
} 