import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PostList from './blogPage';
import Post from './blogPost';
import AddPost from './addPost';
import EditPost from './editPost';
import './index.css';

const App = () => (
    <div>
        <Header />
        <Router />
    </div>
)

const Header = () => (
    <div className="Header">
        <h1>Blog</h1>
        <nav>
            <button><Link to='/'>Home</Link></button>
            <button><Link to='/addpost'>Add Post</Link></button>
        </nav>
    </div>
)

const Router = () => (
    <Switch>
        <Route exact path='/' component={PostList}/>
        <Route path='/post/:postID' component={Post}/>
        <Route path='/addpost' component={AddPost}/>
        <Route path='/edit/:postID' component={EditPost}/>        
    </Switch>
)

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>),
    document.getElementById('root')
);