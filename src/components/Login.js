import Header from "./Header"

const Login = () => {
    return(
        <div>
            <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg" alt="login-banner"/>
        </div>
        <div className=" flex justify-center">
        <form className="relative pl-8 pr-10 pb-10 pt-10 bg-black flex w-3/12 flex-col text-white bg-opacity-80 rounded-lg" style={{marginTop: "12%"}}>
            <h2 className="font-bold text-3xl mb-5 text-left">Sign In</h2>
            <div className="items-center">
            <input type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-700"/>
            <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-700"/>
            <button className="p-2 m-2 bg-red-700 w-full">SignIn</button>
            </div>
            <p className="pl-2 mt-2 text-xs">New To Netflix? Sign up Now</p>
        </form>
        </div>
        </div>

    )
}

export default Login