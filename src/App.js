import Home from "./pages/Home"
import Books from "./pages/Books"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
           <Routes>
            
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Books />} />
           </Routes>

    </Router>
  )
}
export default App;

