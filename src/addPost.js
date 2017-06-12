import React from 'react';
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router-dom';

class AddPost extends React.Component{
    constructor(props){
        super(props)

        this.state = {title: "", content: ""}

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        console.log("addPost mounted")
    }

    timeParser(time){
        let year = time.getFullYear();
        let month = time.getMonth()+1;
        let date = time.getDate();
        let hour = (time.getHours() < 10) ? '0'+ time.getHours() : time.getHours();
        let min = (time.getMinutes() < 10) ? '0'+ time.getMinutes() : time.getMinutes();
        let sec = (time.getSeconds() < 10) ? '0'+ time.getSeconds() : time.getSeconds();
        return `${year}/${month}/${date} ${hour}:${min}:${sec}`
    }

    handleTitleChange(e){
        this.setState({title: e.target.value})
    }
    handleContentChange(e){
        this.setState({content: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        if (this.state.title === "" || this.state.content === ""){
            alert("title and post content should not be empty")
            return;
        }
        fetch('/post', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                time: this.timeParser(new Date())
            })
        })

        this.setState({title: "", content: ""})
    }

    render(){
        return(
            <div className="PostInput">
                <input type="text" value={this.state.title} placeholder="Title..." onChange={this.handleTitleChange}/>
                <textarea placeholder="Leave a post..." rows="10" value={this.state.content} onChange={this.handleContentChange}/>
                <button onClick={this.handleSubmit}><Link to='/'>Submit</Link></button>
            </div>
        )
    }
}

export default AddPost