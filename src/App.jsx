import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import './App.css';

// Layouts
import EventsLayout from './layouts/Vote';

// Pages
import Connect from './pages/Vote/Connect';
import Event from './pages/Vote/Chat';
import EventsDashboard from './pages/Vote/EventsDashboard';
// import Home from './pages/Home';
import Commerce from './pages/Vote/Commerce';
import BusinessDirectory from './pages/Vote/BusinessDirectory';
import Chat from './pages/Vote/Chat';
import Home from './pages/Vote/Home';
import Profile from './pages/Vote/Profile';
import Tickets from './pages/Vote/Tickets';
import Stereo from './pages/Vote/Stereo';
import Live from './pages/Vote/Live';
import Education from './pages/Vote/Education';
import Voting from './pages/Vote/Voting';
import Television from './pages/Vote/Television';
function App() {
  const router = createBrowserRouter([

    // {
    //   path: '/',
    //   // change the page
    //   element: <Home />,
    // },
    {
      path: '/Vote',
      element: <EventsLayout />,
      children: [
        {
          path: 'home',
          // change the page
          element: <Home />,
        },
        {
          path: 'dashboard',
          element: <EventsDashboard />,
        },
        {
          path: 'events',
          // Change the page
          element: <Event />,
        },
        {
          path: 'commerce',
          // change the page
          element: <Commerce />,
        },
        {
          path: 'profile',
          // change the page
          element: <Profile />,
        },
        {
          path: 'connect',
          // change the page
          element: <Connect />,
        },
      
        {
          path: 'business-directory',
          // change the page
          element: <BusinessDirectory />,
        },
        {
          path: 'chat',
          // change the page
          element: <Chat />,
        },
        {
          path: 'tickets',
          // change the page
          element: <Tickets />,
        },
        {
          path: 'stereo',
          // change the page
          element: <Stereo />,
        },
        {
          path: 'live',
          // change the page
          element: <Live />,
        },
        {
          path: 'tv',
          // change the page
          element: <Television />,
        },
        {
          path: 'voting',
          // change the page
          element: <Voting />,
        },
        {
          path: 'education',
          // change the page
          element: <Education />,
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
