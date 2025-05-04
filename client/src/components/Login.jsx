import React from "react";
import { useNotesAppContext } from "../context/NotesAppContextProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {setShowUserLogin,  setUser } = useNotesAppContext();
    const navigate = useNavigate();
    const onSubmitHandler = async(event)=>{
        event.preventDefault();
        setUser({
            email: "test@greatstack.dev",
            name: "GreatStack"
        })
        setShowUserLogin(false)
        navigate('/');
    }
    return (
        <div onClick = {()=>setShowUserLogin(false)} className = 'fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50'>
        <form onSubmit= {onSubmitHandler} onClick= {(e) => e.stopPropagation()}
         className=" flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border bg-[#FFDBDB] border-[#FFC6C6] mt-10">
            <p className="text-2xl font-medium m-auto text-[#644A07]">
                <span className="text-[#594100]">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>

            {state === "register" && (
                <div className="w-full">
                    <p className="text-[#644A07]">Name</p>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="type here"
                        className="border border-[#FFC6C6] rounded w-full p-2 mt-1 focus:outline-[#594100]"
                        type="text"
                        required
                    />
                </div>
            )}

            <div className="w-full">
                <p className="text-[#644A07]">Email</p>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="type here"
                    className="border border-[#FFC6C6] rounded w-full p-2 mt-1 focus:outline-[#594100]"
                    type="email"
                    required
                />
            </div>

            <div className="w-full">
                <p className="text-[#644A07]">Password</p>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="type here"
                    className="border border-[#FFC6C6] rounded w-full p-2 mt-1 focus:outline-[#594100]"
                    type="password"
                    required
                />
            </div>

            {state === "register" ? (
                <p className="text-[#644A07]">
                    Already have an account?{" "}
                    <span onClick={() => setState("login")} className="text-[#594100] cursor-pointer underline">click here</span>
                </p>
            ) : (
                <p className="text-[#644A07]">
                    Create an account?{" "}
                    <span onClick={() => setState("register")} className="text-[#594100] cursor-pointer underline">click here</span>
                </p>
            )}

            <button className="bg-[#594100] hover:bg-[#644A07] transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
        </form>
        </div>
    );
};
export default Login
