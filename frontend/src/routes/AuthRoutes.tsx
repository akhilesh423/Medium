import { Route, Routes } from "react-router-dom"
import SignUp from "../pages/SignUp"
import Login from "../components/signin/Login"


const AuthRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>

    )
}


export default AuthRoutes