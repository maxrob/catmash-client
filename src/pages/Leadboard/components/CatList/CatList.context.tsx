import React, { FC, createContext, useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { getCats } from 'res/apiRoutes'

interface CatListContextProps {
  cats: Cat[]
}

const CatListContext = createContext<CatListContextProps>({
  cats: [],
})

const CatListContextProvider: FC = ({ children }) => {
  const [cats, setCats] = useState<Cat[]>([])

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get(getCats())
      setCats(res.data)
    }

    fetchCats()
  }, [])

  const catListContextApi = useMemo(
    () => ({
      cats,
    }),
    [cats]
  )

  return (
    <CatListContext.Provider value={catListContextApi}>
      {children}
    </CatListContext.Provider>
  )
}

export { CatListContext, CatListContextProvider }
