import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import PostDetail from './pages/PostDetail'


const App = () => {
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts />
    },
    {
      path:"/edit/:id",
      element: <EditPost />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/detail/:id",
      element: <PostDetail />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>World Cuisine</h1>
        <p className="headerText">Explore the best food around the world and add your own favorite dish!</p>
        <Link to="/"><button className="headerBtn"> Explore Food  </button></Link>
        <Link to="/new"><button className="headerBtn"> Add a Plate </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
