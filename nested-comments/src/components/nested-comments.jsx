import {useState} from 'react'
import useCommentTree from '../hooks/use-comment-tree'
import Comment from './comment'
import './styles.css'

const NestedComments = ({
        comments,
        onSubmit,
        onEdit,
        onDelete
    }) => {
    
    const [comment, setComment] = useState("")
    // const {comments: commentData} = useCommentTree(comments)
        
    const { comments:commentsData } = useCommentTree(comments);

    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleReply = () => {

    }

    const handleSubmit = () => {
        if(comment){
            setComment("")
        }
    }

  return (
    <>
        <div className='add-comment'>
            <textarea 
            value={comment}
            onChange={handleChange}
            rows={3} 
            cols={50} 
            className='comment-textarea'
            placeholder='Add a new comment...'/>
            <button className='comment-button' onClick={handleSubmit}>Add comment</button>
        </div>
        
        {commentsData.map((comment) => {
            
            return (<Comment 
            key={comment.id} 
            comment={comment} onSubmitComment={handleChange}
            />)
        })}
    </>
  )
}

export default NestedComments