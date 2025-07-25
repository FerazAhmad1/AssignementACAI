import { useContext } from "react";

import { OwnerContext } from "./OwnerContext";

export const useOwnerContext = () => useContext(OwnerContext);
