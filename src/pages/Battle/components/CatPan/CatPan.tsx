// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { CatImage } from './components/CatImage'
import { colors } from 'res/colors'

export const CatPan = ({ cat }: { cat: Cat }) => (
  <div css={styles.catPan}>
    <CatImage cat={cat} />
  </div>
)

const styles = {
  catPan: {
    width: '50%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':first-of-type': {
      borderRight: `1px solid ${colors.white}`,
    },
    '@media screen and (max-width: 1024px)': {
      height: '40%',
      ':first-of-type': {
        borderRight: 'none',
        borderBottom: `1px solid ${colors.white}`,
      },
    },
  },
}
