import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Analytics from "./components/pages/Frontend/Analytics/Analytics";
import Animalbite from "./components/pages/Frontend/AnimalBite/Animalbite";
import Dashboard from "./components/pages/Frontend/Dashboard/Dashboard";
import Login from "./components/pages/Frontend/Login";
import { StoreProvider } from "./components/pages/Store/storeContext";


const App = () => {
  return (
    <>
    <StoreProvider>
    <Router>
        <Routes>
          <Route index element={<Login/>} />
       <Route path="/admin/Dashboard" element={<Dashboard/>}/>
       <Route path="/admin/Animalbite" element={<Animalbite/>}/>
       <Route path="/admin/Analytics" element={<Analytics/>}/>
        </Routes>
      </Router>
    </StoreProvider>
     
    </>
  );
};

export default App;
