import React from 'react';
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router-dom';

class PostList extends React.Component{
    constructor(props){
        super(props)

        this.state = {data: []}
    }

    componentWillMount(){
        fetch('/getTitles')
            .then(res => res.json())
            .then(data => this.setState({data: data}))
            .catch(err => console.log(err));

        console.log(process.env);
    }

    render(){
        let renderTitle = this.state.data.map((x, index) => 
            <Link to={`/post/${x._id}`} key={index}>
                <div className="Post" key={index}>
                    <h2>{x.title}</h2>
                    <h5><span>{x.time}</span></h5>
                </div>
            </Link>
        ).reverse();
        return(
            <div>
                {renderTitle}
            </div>
        )
    }
}

export default PostList