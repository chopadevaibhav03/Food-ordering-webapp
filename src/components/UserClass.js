import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + "Child constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "Child  Component did mount");
  }

  render() {
    const { name } = this.props;
    console.log(name + "Child  render");
    return (
      <div className="usercard">
        <h1>Hello {name} </h1>
      </div>
    );
  }
}

export default UserClass;
