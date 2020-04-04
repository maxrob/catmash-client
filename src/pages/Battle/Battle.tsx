// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { CatPan } from './components/CatPan'
import { Footer } from 'library/components/Footer'
import { colors } from 'res/colors'
import { mediaQueries } from 'res/mediaQueries'

const FIRST_CAT: Cat = {
  _id: 'first_cat',
  avatar: 'https://66.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
  name: 'First Cat',
  score: 0,
}

const SECOND_CAT: Cat = {
  _id: 'second_cat',
  avatar: 'https://66.media.tumblr.com/tumblr_lnvyrt5j1M1qce7tgo1_500.gif',
  name: 'Second Cat',
  score: 0,
}

export const Battle = () => (
  <div css={styles.battle}>
    <div css={styles.battleContent}>
      <CatPan cat={FIRST_CAT} />
      <CatPan cat={SECOND_CAT} />
    </div>
    <Footer />
  </div>
)

const styles = {
  battle: {
    backgroundColor: colors.green,
    height: '100%',
  },
  battleContent: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    [mediaQueries.maxScreenWidth1024]: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column' as 'column',
      justifyContent: 'center',
    },
  },
}
