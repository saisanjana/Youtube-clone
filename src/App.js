import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { store } from './Redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VediosContainer from './Components/VediosContainer';
import VideoPage from './Components/VideoPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<VediosContainer/>
      },
      {
        path:"/video",
        element:<VideoPage/>
      }
    ]
  },
])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router={router}/>
    </div>
    </Provider>
  );
}

export default App;
