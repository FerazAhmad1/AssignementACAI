import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ItemDetails from "./components/ItemDetails.jsx";
import AddItem from "./components/AddItem.jsx";
import MyRequests from "./components/MyRequests.jsx";
import Profile from "./components/Profile.jsx";
import MapView from "./components/Mapview.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<MapView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
