import React, {
  FC,
  createContext,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react'
import axios, { AxiosResponse } from 'axios'
import { getCatsMashes, addCatPoint } from 'res/apiRoutes'

const CATS_LIST_LIMIT = 100
const CATS_LIST_RELOAD = 20

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
  const isCancelled = useRef(false)
  const [catMashes, setCatMashes] = useState<[Cat, Cat][]>([])
  const [nextCatMash, setNextCatMash] = useState<[Cat, Cat][]>([])

  const fetchCatMashes = async (isInit: boolean) => {
    const res = await axios.get(getCatsMashes(CATS_LIST_LIMIT))

    if (!isCancelled.current) {
      if (isInit) {
        setCatMashes(res.data)
      }
      setNextCatMash(res.data)
    }
  }

  useEffect(() => {
    fetchCatMashes(true)

    return () => {
      isCancelled.current = true
    }
  }, [])

  useEffect(() => {
    if (catMashes.length === CATS_LIST_RELOAD) {
      fetchCatMashes(false)
    }

    return () => {
      isCancelled.current = true
    }
  }, [catMashes])

  // eslint-disable-next-line
  const incrementCat = async (id: string) => {
    const res = await axios.post(addCatPoint(id))
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
