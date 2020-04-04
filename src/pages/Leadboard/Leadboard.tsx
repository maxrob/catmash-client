// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Footer } from 'library/components/Footer'
import { CatList } from './components/CatList'

export const Leadboard = () => (
  <div css={styles.leadboard}>
    <CatList />
    <Footer />
  </div>
)

const styles = {
  leadboard: {
    height: '100%',
  },
}
