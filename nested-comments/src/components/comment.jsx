import React from 'react'
import './styles.css'

const Comment = ({comment = {},
  onSubmitComment = () => {},}) => {
    console.log(comment);
  return (
    <div className='comment'>
        <>
            <p className="comment-content">{comment.content}</p>
            <p className="comment-info">Votes: {comment.votes}</p>
            <p className="comment-info">
                {new Date(comment.timestamp).toLocaleString()}
            </p>
        </>

        <div className='comment-actions'>
            <button className='comment-button'>Reply</button>
            <button className='comment-button'>Edit</button>
            <button className='comment-button'>Delete</button>
        </div>
    </div>
  )
}

export default Comment