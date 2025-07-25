import { useState, useEffect } from "react";
import { OwnerContext } from "./OwnerContext.jsx";

const OwnerProvider = ({ children }) => {
  const [owner, setOwner] = useState(() => {
    const saved = localStorage.getItem("owner");
    return saved ? JSON.parse(saved) : "Alice Johnson";
  });

  useEffect(() => {
    localStorage.setItem("owner", JSON.stringify("Alice Johnson"));
  }, [owner]);

  return (
    <OwnerContext.Provider value={{ owner, setOwner }}>
      {children}
    </OwnerContext.Provider>
  );
};

export default OwnerProvider;
