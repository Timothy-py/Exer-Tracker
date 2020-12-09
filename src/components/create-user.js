import React, {Component} from "react"
import axios from "axios"


class CreateUser extends Component{

    constructor(){
        super()
        this.state = {
            username: ""
        }

        this.changeHandler = this.changeHandler.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeHandler(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    onSubmit(event){
        event.preventDefault();

        const user = {
            username: this.state.username
        }
        console.log(user)

        axios.post('https://exer-tracker-api.herokuapp.com/exer-tracker/user/add', user)
        .then(res => console.log(res.data))
        .catch(err => console.log(`Unable to add User: ${err}`))

        this.setState({
            username: ""
        })

        alert("User Added Successfully")
    }

    render() {
        return (
             <div>
                 <h3>Create New User</h3>
                 <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" required className="form-control" 
                        name="username" value={this.state.username} onChange={this.changeHandler}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                 </form>
             </div>
        );
    }

}

export default CreateUser;