import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

import Navbar from "./components/navbar"
import ExercisesList from "./components/list-exercise"
import CreateExercise from "./components/create-exercise"
import EditExercise from "./components/edit-exercise"
import CreateUser from "./components/create-user"

function App() {
  return (
    
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
