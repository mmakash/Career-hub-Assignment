import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Page/Home.jsx'
import JobDetails from './Component/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:id',
        element: <JobDetails />,
        loader: async ({ params }) => {
          const jobId = parseInt(params.id);
          const res = await fetch("/public/Alldata/jobs.json");
          const data = await res.json();
          const job = data.find((job) => job.id === jobId);
          return job;
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
