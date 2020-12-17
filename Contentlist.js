import React,{Component} from "react";
import  "./User.css";


class Contentlist extends Component{
    render(){
        return ( 
            <div className="userstyle">
            <img src={`https://joeschmoe.io/api/v1/josh${this.props.name}`} alt="user"/>
            <h1>{this.props.name}</h1>
            <p>{this.props.work}</p>
            </div>
        )
      
    }
  }
export default Contentlist;


