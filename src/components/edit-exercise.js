import React, {Component} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"


class EditExercise extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.dateChangeHandler = this.dateChangeHandler.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios.get(`https://exer-tracker-api.herokuapp.com/exer-tracker/exercise/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                username: response.data.data.username,
                description: response.data.data.description,
                duration: response.data.data.duration,
                date: new Date(response.data.data.date)
            })
            console.log(response.data)
        })
        .catch(err => {console.log(err)})


        axios.get('https://exer-tracker-api.herokuapp.com/exer-tracker/users')
        .then(result => {
            let user_data = []
            if (result.data.data.length > 0){   
                result.data.data.map(user => {
                   return user_data.push(user.username)
                })

                this.setState({
                    users: user_data
                })
            } else{
                console.log("No User data available")
            }
        })
        .catch(err => console.log(`Unable to get user data: ${err}`))
    }

    changeHandler(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    onSubmit(event){
        event.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise)

        axios.post(`https://exer-tracker-api.herokuapp.com/exer-tracker/exercise/update/${this.props.match.params.id}`, exercise)
        .then(res => console.log(res.data))
        .catch(err => console.log(`Unable to edit exercise: ${err}`))

        window.location = '/';
    }

    dateChangeHandler(date){
        this.setState({
            date: date
        })
    }

    render() {
        return (
            <div>
                <h3>Edit Exercise Log</h3>

                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Username:</label>
                        <select ref="userInput" required
                        className="form-control" value={this.state.username}
                        name="username" onChange={this.changeHandler}> 
                            {
                                this.state.users.map((user)=>{
                                    return <option key={user} value={user}>
                                        {user}
                                    </option>
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" required className="form-control"
                        name="description" value={this.state.description} onChange={this.changeHandler} placeholder={this.state.description}/>
                    </div>

                    <div className="form-group">
                        <label>Duration(in minutes):</label>
                        <input type="text" className="form-control" 
                        name="duration" value={this.state.duration} onChange={this.changeHandler}/>
                    </div>

                    <div className="form-group">
                        <label>Date:</label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.dateChangeHandler}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }

}

export default EditExercise;