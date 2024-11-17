const LoginForm=()=>{
    return (
    <div id="register">
        <form>
            <lable htmlFor="name">Name</lable>
            <input type="text" id="name" name="name"/>
            <lable htmlFor="email">Email</lable>
            <input type="text" id="email" name="email"/>
            <lable htmlFor="channel">Channel</lable>
            <input type="text" id="channel" name="channel"/>
            <button>Submit</button>
        </form>


        </div>)
}

export default LoginForm;