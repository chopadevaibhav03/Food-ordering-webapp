import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
          name: "Dummy",
          location: "Default",
      },
     };
  }

  async componentDidMount(){
    // console.log(this.props.name+"Child Component did mount");
    const data = await fetch("https://api.github.com/users/chopadevaibhav03");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);

  }
  componentDidMount(){
    console.log("nothing..........")
  }

  componentWillUnmount(){
    console.log("componnent will unmount")
  }
  render() {

    const {name , location , avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/> 
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @chopadevaibhav03</h4>
      </div>
    );
  }
}

export default UserClass;
