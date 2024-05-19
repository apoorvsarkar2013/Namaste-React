import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";


class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor Called");
    }

    componentDidMount(){
        console.log("Parent ComponentDidMount Called");
    }

    render(){
        console.log("Parent Render Called");
        return (
            <div>
                <h1>Welcome to About Page</h1>
                <UserClass name={"Apoorv Sarkar"} location={"Noida"} />
                <div>
                <UserContext.Consumer>{({loggedInUser})=><h1>{loggedInUser}</h1>}</UserContext.Consumer>
                </div>
            </div>
        ) 
    }
}

export default About;