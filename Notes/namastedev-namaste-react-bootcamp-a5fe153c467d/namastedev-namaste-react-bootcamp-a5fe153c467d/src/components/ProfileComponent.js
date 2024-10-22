import { Component } from "react";
import { useEffect } from "react/cjs/react.production.min";

const ProfileComponent2 = () => {
  const [email, setEmail] = useState("aksahbchd");

  useEffect(() => {
    //fetch data here
    //update state

    // subscrription
    return () => {
      //clean up
    };
  }, []);

  async function fetchData() {
    //fetch
  }

  return (
    <div>
      <h3>Name: Akshay Saini</h3>
    </div>
  );
};

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
    console.log("Profile - constructor");
  }

  async componentDidMount() {
    console.log("Profile - componentDidMount()");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Profile - componentDidUpdate()");
  }

  render() {
    console.log("Profile - render");
    // huge component 1000 state variables
    const { login, company, avatar_url, name } = this.state.userInfo;
    return (
      <div className="flex bg-purple-50">
        <img className="w-56 rounded-full p-10" src={avatar_url} />
        <div className="flex flex-col  m-5">
          <h3 className="font-bold"> {name}</h3>
          <h3>{login}</h3>
          <h3>{company}</h3>
          <h3>{this.props.xyz}</h3>
        </div>
      </div>
    );
  }
}

export default ProfileComponent;
