import * as React from 'react';
import { NOTE_API_URL } from '../../Constants/endpoints';

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
          path: "/notes",
          element: <ReadNoteListPage />
        },
        {
          path: `${NOTE_API_URL}/:noteId`,
          element: <ReadNotePage />
        },
        {
          path: `${NOTE_API_URL}/create`,
          element: <CreateNotePage />
        },
        {
          path: `${NOTE_API_URL}/update/:noteId`,
          element: <UpdateNotePage/>
        },
        {
          path: `${NOTE_API_URL}/random`,
          element: <ReadRandomNotePage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
} 