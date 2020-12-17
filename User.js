import React,{Component} from 'react';
import  "./User.css";
import Contentlist from "./Contentlist"

class User extends Component{

    constructor() {
        super();
        this.state = {
            name: "Welcome to the Home Page"
        }
    }
    namechange(){
        this.setState({
            name: "State is being changed"
        })
    }
    render(){
    
        return ( <div className="mainpage" >
            <h1 >{this.state.name}</h1>
            <Contentlist id="1" name="Rock" work="Developer"/>
            <Contentlist id="2" name="Colt" work="Tester"/>
            <Contentlist id="3" name="Sam" work="Leader" />
            <Contentlist id="4" name="Peter" work="Database" />
        <button onClick ={() => this.namechange()}>Click me</button>
        </div>
        )
      
    }
  }
export default User;