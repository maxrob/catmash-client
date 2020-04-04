// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { colors } from 'res/colors'
import { catsFixtures } from 'res/catsFixtures'
import { CatLine } from './components/CatLine'

export const CatList = () => {
  const catList = catsFixtures.map((cat, key) => (
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
