// eslint-disable-next-line
import React, { useContext } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { colors } from 'res/colors'
import { CatLine } from './components/CatLine'
import { CatListContext } from 'pages/Leadboard/components/CatList/CatList.context'

export const CatList = () => {
  const { cats } = useContext(CatListContext)

  const catList = cats.map((cat, key) => (
    <CatLine cat={cat} position={key + 1} key={cat._id} />
  ))
  return <div css={styles.catList}>{catList}</div>
}

const styles = {
  catList: {
    padding: '80px 0 100px 0',
    boxSizing: 'border-box' as 'border-box',
    backgroundColor: colors.green,
    height: '100%',
    overflow: 'scroll',
  },
}
