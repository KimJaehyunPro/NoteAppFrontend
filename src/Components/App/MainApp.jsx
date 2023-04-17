import * as React from 'react';
import { NOTE_URL, CREATE_NOTE_URL, UPDATE_NOTE_URL, LOGIN_URL, REGISTER_API_URL } from '../../Constants/endpoints';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import CreateNotePage from '../../Pages/CreateNote/CreateNotePage';
import ReadNoteListPage from '../../Pages/ReadNoteList/ReadNoteListPage';
import ReadNotePage from '../../Pages/ReadNote/ReadNotePage';
import UpdateNotePage from '../../Pages/UpdateNote/UpdateNotePage';
import LoginPage from '../../Pages/Authentication/LoginPage';
import RegisterPage from '../../Pages/Authentication/RegisterPage';

export default function MainApp(props) {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: `/${NOTE_URL}`,
          element: <ReadNoteListPage />
        },
        {
          path: `${NOTE_URL}/:noteId`,
          element: <ReadNotePage />
        },
        {
          path: `${CREATE_NOTE_URL}`,
          element: <CreateNotePage />
        },
        {
          path: `${UPDATE_NOTE_URL}/:noteId`,
          element: <UpdateNotePage/>
        }, {
          path: `${LOGIN_URL}`,
          element: <LoginPage/>
        }, {
          path: `${REGISTER_API_URL}`,
          element: <RegisterPage/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
} 