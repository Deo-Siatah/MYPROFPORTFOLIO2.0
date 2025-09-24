import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Background from"@/components/background";
import Homepage from "@/components/Homepage";
import NanaCarepage from "@/pages/NanaCare";
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
      </Routes>
    </Router>
   </div>
   </div>
  )
}

export default App
