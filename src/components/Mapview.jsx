// src/pages/MapView.jsx
import React, { useState } from "react";
import { locations } from "../data/mockItemLocation";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { useItemContext } from "../context/useItemContext";
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 28.4595,
  lng: 77.0266,
};

const MapView = () => {
  const { items } = useItemContext();

  const [selectedItems, setSelectedItems] = useState(locations);
  const [oneItem, setOneItem] = useState(null);
  const navigate = useNavigate();
  const joinItems = (flt) => {
    let arr = [];
    for (const itm of flt) {
      for (const location of locations) {
        if (itm.id == location.itemId) {
          arr.push({ ...itm, ...location });
        }
      }
    }

    return arr;
  };
  const provideLocations = (e) => {
    let result = [];

    if (e.target.value == "available") {
      const flt = items.filter((item) => item.available);
      result = joinItems(flt);
    } else if (e.target.value == "") {
      result = locations;
    } else {
      const flt = items.filter((itm) => {
        return itm.category === e.target.value;
      });

      result = joinItems(flt);
    }

    setSelectedItems(() => result);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Map View</h1>

      <select onChange={provideLocations} className="mb-4 p-2 border rounded">
        <option value="">Relevance</option>
        <option value="available">Available</option>
        <optgroup label="Filter by Category">
          <option value="Fitness">Fitness</option>
          <option value="Games">Games</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Outdoors">Outdoors</option>
          <option value="Tools">Tools</option>
        </optgroup>
      </select>

      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {selectedItems.map((item) => (
            <Marker
              key={item.itemId}
              position={{ lat: item.lat, lng: item.lng }}
              onClick={() => setOneItem(item)}
              label={item.available ? "🟢" : "🔴"}
            />
          ))}

          {oneItem && (
            <InfoWindow
              position={{ lat: oneItem.lat, lng: oneItem.lng }}
              onCloseClick={() => setOneItem(null)}
            >
              <div>
                <h2 className="font-bold">{oneItem.name}</h2>
                <p>{oneItem.address}</p>
                <button
                  className="text-blue-500 underline mt-1"
                  onClick={() =>
                    navigate(`/items/${oneItem.itemId}`, {
                      state: { from: "/map" },
                    })
                  }
                >
                  View Details →
                </button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;
