// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Footer } from 'library/components/Footer'
import { CatList, CatListContextProvider } from './components/CatList'

export const Leadboard = () => (
  <div css={styles.leadboard}>
    <CatListContextProvider>
      <CatList />
    </CatListContextProvider>
    <Footer />
  </div>
)

const styles = {
  leadboard: {
    height: '100%',
  },
}
