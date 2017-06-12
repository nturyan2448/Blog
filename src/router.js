import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PostList from './blogPage';
import Post from './blogPost';
import AddPost from './addPost';
import EditPost from './editPost';

const Router = () => {
    <Switch>
        <Route path='/' component={PostList}/>
        <Route path='/post/:postID' component={Post}/>
        <Route path='/addpost' component={AddPost}/>
        <Route path='/edit/:postID' component={EditPost}/>        
    </Switch>
}

module.exports = Router;