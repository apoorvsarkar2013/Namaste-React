import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy Name",
                location : "India"
            }
        }
        
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/apoorvsarkar2013");
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo : json,
        })
    }

    componentDidUpdate(){
        this.timer = setInterval(()=>{
            console.log(this.state.userInfo.name)
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("ComponentWillUnmount Called")
    }

    render(){
        const {name, location, bio} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h2>Location : {location} </h2>
                <h4>Bio : {bio}</h4>
            </div>
        )
    }
}

export default UserClass;