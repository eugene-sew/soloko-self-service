import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export function useLayout() {
  return useContext(LayoutContext);
}

export function LayoutProvider({ children }) {
  // layout can either be card(true) or list(false)

  const [layout, setLayout] = useState(false);

  const vals = {
    layout,
    setLayout,
  };
  return (
    <LayoutContext.Provider value={vals}>{children}</LayoutContext.Provider>
  );
}
