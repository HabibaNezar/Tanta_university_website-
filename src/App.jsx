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
import Contact from './Components/Contact/Contact';
import SocialMedia from './Components/Contact/SocialMedia';
import Location from './Components/Contact/Location';
import ServicesList from './Components/Services/ServicesList';
import NewsDetails from './Components/News/NewsDetails';
import MoreScientists from './Components/Scientists/MoreScientists';
import NewsArchieve from './Components/News/NewsArchieve';
import UserProfile from './Components/User/UserProfile';
import Admin from './Components/User/Admin';
import StudySchedule from './Components/User/StudySchedule';
import ExamSchedule from './Components/User/ExamSchedule';
import CreateFaculty from './Components/User/CreateFaculty';
import CreateCourse from './Components/User/CreateCourse';
import toast , {Toaster} from 'react-hot-toast'

// import { createBrowserRouter } from 'react-router-dom';

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
      {path:'Contact' , element:<Contact/>},
      {path:'SocialMedia' , element:<SocialMedia/>},
      {path:'Location' , element:<Location/>},
      {path:'ServicesList' , element:<ServicesList/>},
      {path:'NewsDetails/:id' , element:<NewsDetails/>},
      {path:'MoreScientists' , element:<MoreScientists/>},
      {path:'NewsArchieve' , element:<NewsArchieve/>},
      {path:'UserProfile' , element:<UserProfile/>},
      {path:'Admin' , element:<Admin/>},
      {path:'StudySchedule' , element:<StudySchedule/>},
      {path:'ExamSchedule' , element:<ExamSchedule/>},
      {path:'CreateFaculty' , element:<CreateFaculty/>},
      {path:'CreateCourse' , element:<CreateCourse/>},
    ]}  
  ])

  return(
    <>
      <QueryClientProvider client={Query}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster/>
      </QueryClientProvider>
    </>
  )
 
}

export default App;
