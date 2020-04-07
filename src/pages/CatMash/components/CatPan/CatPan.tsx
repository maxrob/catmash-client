// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { CatImage } from './components/CatImage'
import { colors } from 'res/colors'
import { mediaQueries } from 'res/mediaQueries'

export const CatPan = ({ cat }: { cat: Cat | null }) => (
  <div css={styles.catPan}>{cat && <CatImage cat={cat} />}</div>
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
    [mediaQueries.maxScreenWidth1024]: {
      height: '40%',
      ':first-of-type': {
        borderRight: 'none',
        borderBottom: `1px solid ${colors.white}`,
      },
    },
  },
}
