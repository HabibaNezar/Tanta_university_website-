import './App.css'
import 'flowbite';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {QueryClient ,QueryClientProvider} from '@tanstack/react-query'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Vision from './Components/About/Vision';
import Mission from './Components/About/Mission';
import Goals from './Components/About/Goals';
import Quality from './Components/About/Quality';
import plan from './Components/About/plan';
import AboutLayout from './Components/Layout/AboutLayout';
import About from './Components/About/About';
import ResearchProjects from './Components/ScientificResearch/ResearchProjects';
import ScientificJournals from './Components/ScientificResearch/ScientificJournals';
import ResearchCenters from './Components/ScientificResearch/ResearchCenters';
import ScientificConferences from './Components/ScientificResearch/ScientificConferences';

function App() {
  let Query = new QueryClient()

  let router = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'user' , element:<User/>},
      {path:'' , element:<AboutLayout/> , children:[
        {index:true , element:<about/>},
        {path:'vision' , element:<Vision/>},
        {path:'mission' , element:<Mission/>},
        {path:'goals' , element:<Goals/>},
        {path:'Quality' , element:<Quality/>},
        {path:'plan' , element:<plan/>},
      ]},
      {path:'ResearchProjects' , element:<ResearchProjects/>},
      {path:'ScientificJournals' , element:<ScientificJournals/>},
      {path:'ResearchCenters' , element:<ResearchCenters/>},
      {path:'ScientificConferences' , element:<ScientificConferences/>},
    ]}  
  ])

  return(
    <>
      <QueryClientProvider client={Query}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  )
 
}

export default App;
