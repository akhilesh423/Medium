
import { signin } from "../../api/auth"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="bg-white w-screen h-screen flex flex-col justify-center items-center ">
            <div className="border rounded-lg p-5 w-full max-w-md flex flex-col justify-center items-center h-2/3 bg-white shadow pt-3 pb-5">
                <h1 className="font-bold text-black text-3xl">Login to an account</h1>
                <h6 className="text-gray-700 text-l mt-1 mb-2">Don't have an account? <Link to="/"><span className="underline">Signup</span></Link></h6>

                <form className="flex flex-col w-full">
                    <div className="flex flex-col mt-2 w-full mt-3">
                        <label className="text-black font-sans font-medium mb-1">username</label>
                        <input placeholder="Enter you username" type="text" className="border-2 p-2 h-9 w-full border-slate-100 rounded-lg" />
                    </div>
                    <div className="flex flex-col mt-3 w-full">
                        <label className="font-sans font-medium mb-1">Password</label>
                        <input placeholder="Enter you password" type="password" className="border-2 p-2 h-9 w-full border-slate-100 rounded-lg" />
                    </div>
                    <p className="text-black font-bold mt-3 underline">Forgot password?</p>
                    <div className="w-full">
                        <button type="submit" className="text-white border-0 h-9 mt-4 w-full rounded-lg bg-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login