import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Route'
import TimelineProvider from './context/TimelineProvider'





createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TimelineProvider>
        <RouterProvider router={router} />
      </TimelineProvider>
  </StrictMode>,
)
