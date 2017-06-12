import React from 'react';
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router-dom';

class Post extends React.Component{
    constructor(props){
        super(props)

        this.state = {data: {}}
    }

    componentWillMount(){
        // console.log(this.props.match.params.postID);
        const id = this.props.match.params.postID;
        fetch(`/post/${id}`)
            .then(res => res.json())
            .then(data => this.setState({data: data}))
            .catch(err => console.log(err))
    }
    render(){
        console.log(this.state.data)
        return(
            <div>
                <h1>{this.state.data.title}</h1>
                <pre>{this.state.data.content}</pre>
                <span>{this.state.data.time}</span>
                <button>
                    <Link to={`/edit/${this.props.match.params.postID}`}>Edit</Link>
                </button>
            </div>
        )
    }
}

export default Post