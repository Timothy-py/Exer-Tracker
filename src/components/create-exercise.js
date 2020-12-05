import React, {Component} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


class CreateExercise extends Component{

    constructor(){
        super()

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
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
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

        console.log("im here bro")
        console.log(exercise)

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
                <h3>Create New Exercise Log</h3>

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
                        name="description" value={this.state.description} onChange={this.changeHandler}/>
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
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateExercise;