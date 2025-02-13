
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/mainLayout'
import ErrorPage from './modules/errorPage/page/ErrorPage'
import Homepage from './modules/homepage/pages/homepage'
import Project from './modules/project/page/project'
import Contact from './modules/contact/pages/contact'
import Services from './modules/about/page/services'

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    children: [  
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    
    ]
  }
])
function App() {
  

  return (
    <div className="app">
         <RouterProvider router={router} />
    </div>
  )
}

export default App
