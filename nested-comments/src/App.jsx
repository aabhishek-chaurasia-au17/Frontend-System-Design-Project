
import './App.css'
import NestedComments from './components/nested-comments'
import commentData from './data/comments.json'

function App() {

  return (
    <div>
      <h1>Nested Comment System</h1>
      <NestedComments 
        comments={commentData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        // onUpvote={() => {}}
        // onDownvote={() => {}}
      />
    </div>
  )
}

export default App
