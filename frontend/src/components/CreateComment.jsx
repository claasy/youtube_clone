import React, { useState } from 'react';
// import './CreateComment.css';

const CreateComment = (props) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState ('');

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            name: name,
            comment: comment
        };
        console.log(newComment);
        props.addNewCommentProperty(newComment)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='string' className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Comment</label>
                <input type='string' className="form-control" value={comment} onChange={(event) => setComment(event.target.value)} />
            </div>
            <button type='submit'className="btn btn-primary" style={{'margin-top': '1em'}}>Create</button>
        </form>
     );
}
 
export default CreateComment;