import { Route, Routes } from "react-router-dom"
import About from "../../Pages/About"
import Home from "../../Pages/Home"
import Hello from "../../Pages/About/Hello"
import Hello2 from "../../Pages/About/Hello2"

function Routesmain() {
    return <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />}>
                <Route path="Hello" element={<Hello />} />
                <Route path="Hello2" element={<Hello2 />} />
            </Route>
            <Route path="About" element={<About />} />

            {/* <Route path="Contact"  element={<Contact/>}></Route> */}
        </Routes>


    </div>
};
export default Routesmain