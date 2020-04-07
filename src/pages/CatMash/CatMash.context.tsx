import React, { FC, createContext, useState, useEffect, useMemo } from 'react'
import axios, { AxiosResponse } from 'axios'

interface CatMashContextProps {
  catMashes: [Cat, Cat][]
  incrementCat: (id: string) => Promise<AxiosResponse>
  updateCatMashes: () => void
}

const CatMashContext = createContext<CatMashContextProps>({
  catMashes: [],
  // @ts-ignore
  incrementCat: () => {},
  // @ts-ignore
  updateCatMashes: () => {},
})

const CatMashContextProvider: FC = ({ children }) => {
  const [catMashes, setCatMashes] = useState<[Cat, Cat][]>([])
  const [nextCatMash, setNextCatMash] = useState<[Cat, Cat][]>([])

  const fetchCatMashes = async (isInit: boolean) => {
    const res = await axios.get('http://localhost:3000/cats/mashes?limit=10')

    if (isInit) {
      return setCatMashes(res.data)
    }

    return setNextCatMash(res.data)
  }

  useEffect(() => {
    fetchCatMashes(true)
  }, [])

  useEffect(() => {
    if (catMashes.length === 5) {
      fetchCatMashes(false)
    }
  }, [catMashes])

  // eslint-disable-next-line
  const incrementCat = async (id: string) => {
    const res = await axios.post(`http://localhost:3000/cats/${id}/add_point`)
    return res
  }

  // eslint-disable-next-line
  const updateCatMashes = () => {
    let newCatMashes = catMashes.slice(1)

    if (nextCatMash.length > 0) {
      newCatMashes = [...newCatMashes, ...nextCatMash]
      setNextCatMash([])
    }

    setCatMashes(newCatMashes)
  }

  const catMashContextApi = useMemo(
    () => ({
      catMashes,
      incrementCat,
      updateCatMashes,
    }),
    [catMashes, incrementCat, updateCatMashes]
  )

  return (
    <CatMashContext.Provider value={catMashContextApi}>
      {children}
    </CatMashContext.Provider>
  )
}

export { CatMashContext, CatMashContextProvider }
