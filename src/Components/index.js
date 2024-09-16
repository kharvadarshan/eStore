
import { Route,Routes } from "react-router-dom";
import MainComponent from "./MainComponent";
const LandingPage=()=>{
    return(
        <div>
               <Routes>
                    <Route path="/" element={<MainComponent/>}></Route>
               </Routes>
        </div>
    )
}

export default LandingPage;