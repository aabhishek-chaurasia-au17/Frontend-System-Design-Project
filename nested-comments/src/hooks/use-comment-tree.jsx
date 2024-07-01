import {useState} from 'react'

const UseCommentTree = (initialComments) => {
    const [comments, setComments] = useState(initialComments)

  return {comments}
  
}

export default UseCommentTree