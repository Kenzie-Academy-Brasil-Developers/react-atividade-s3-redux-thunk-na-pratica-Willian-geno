import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {addCommentThunk} from "./store/mudules/user/thunks" 
import { useState } from 'react'; 

function App() {

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const comments = useSelector((state)=> state.user.comments);

  return (
    <div className="App-header">

          <h2>
            Comments:
          </h2>
      <div className = "divComments" >
          {comments.map((iten, index) => (
            <div className = "comment" key = {index} >{iten}</div>
          ))}
      </div>

      <div className = "divInput" >
        <input onChange = {e => setComment(e.target.value)}  />
        <button onClick = {() => dispatch(addCommentThunk(comment))} >
          New Comment
        </button>
      </div>
    </div>
  );
}

export default App;
