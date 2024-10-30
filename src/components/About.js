import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor (props) {
        super(props);

       
    }

    componentDidMount (){
        
    }
    render(){
        
        return (
            <div>
                <h1>About</h1>
                <h2>I'm working on it..</h2>
                {/* <User name={"Vaibhav Chopade (function)"} /> */}
                <UserClass name={"First"} location={"Pune"}/>
                

            </div>
        );
    }
   
};

export default About;