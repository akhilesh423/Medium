import AuthRoutes from "./routes/AuthRoutes"
import { BrowserRouter as Router } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <AuthRoutes />
    </Router>
  )
}
