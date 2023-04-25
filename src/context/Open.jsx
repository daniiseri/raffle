import { createContext, useState } from "react";

export const OpenContext = createContext({
  open: false,
  setOpen: ()=>{}
})

export function OpenProvider({children}){
  const [open, setOpen] = useState(false);

  return (
    <OpenContext.Provider
      value={{
        open,
        setOpen
      }}
    >
      {children}
    </OpenContext.Provider>
  )
}