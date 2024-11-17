import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent componentDidmount");
    }
    render(){
        console.log("Parent render");
        return(
            <div>
        <h1>Hello user</h1>
        <h2>This is about us page</h2>
        <UserClass name="first "/>
        <UserClass name="second "/>
        </div>

        )
    }
}


export default About;