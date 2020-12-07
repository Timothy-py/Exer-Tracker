import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"


const Exercise = (props) => {
    return(
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to={`/edit/${props.exercise._id}`} >edit</Link> |
                <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}} >delete</a>
            </td>
        </tr>
    )
}


class ExercisesList extends Component{

    constructor(){
        super()

        this.state = {
            exercises: []
        }
    
        this.deleteExercise = this.deleteExercise.bind(this);
        this.exerciseList = this.exerciseList.bind(this);
    }

    // api request to get all exercises from the server
    componentDidMount(){
        axios.get("http://localhost:5000/exer-tracker/exercises")
        .then(response => {
            this.setState({
                exercises: response.data.data
            })
            console.log(response.data.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    // method for deleting an exercise from the database
    // and also automatically removing the deleted database from the UI through id filtering
    deleteExercise(id){
        axios.delete(`http://localhost:5000/exer-tracker/exercise/${id}`)
        .then(response => {console.log(response.data)})
        .catch(error => {console.log(`Error deleting exercise: ${error}`)})

        const newExerciseList = this.state.exercises.filter(exercise => {return exercise._id !== id})
        this.setState({
            exercises: newExerciseList
        })
    }

    // a method to return a functional component which list all the data in exercises
    // with a delete exercise button for each exercise
    exerciseList(){
        let exerciseItems = this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>
        })

        return exerciseItems
    }

    render() {
        return (
             <div>
                 <h3>Logged Exercises</h3>
                 <table className="table">
                     <thead className="thead-light">
                         <tr>
                             <th>Username</th>
                             <th>Description</th>
                             <th>Duration</th>
                             <th>Date</th>
                             <th>Actions</th>
                         </tr>
                     </thead>
                     <tbody>
                         {this.exerciseList()}
                     </tbody>
                 </table>
             </div>
        );
    }

}

export default ExercisesList;