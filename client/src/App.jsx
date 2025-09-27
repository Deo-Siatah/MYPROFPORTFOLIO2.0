import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Background from"@/components/background";
import Homepage from "@/components/Homepage";
import NanaCarepage from "@/pages/NanaCare";
import Deadtimepage from "@/pages/Deadtime";
function App() {

  return (
    <div className="relative min-h-screen overflow-hidden">
    {/*Background Layer*/}
    <Background />
    {/*Foreground content*/}
    <div className="relative z-10">
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/pages/NanaCare" element={<NanaCarepage/>}/>
        <Route path="/pages/Deadtime" element={<Deadtimepage/>}/>
      </Routes>
    </Router>
   </div>
   </div>
  )
}

export default App
