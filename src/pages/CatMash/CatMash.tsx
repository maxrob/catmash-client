// eslint-disable-next-line
import React, { useState, useEffect, useContext, Fragment } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { CatPan } from './components/CatPan'
import { Footer } from 'library/components/Footer'
import { colors } from 'res/colors'
import { mediaQueries } from 'res/mediaQueries'

import { CatMashContext } from 'pages/CatMash'

export const CatMash = () => {
  const { catMashes } = useContext(CatMashContext)

  return (
    <div css={styles.catMash}>
      <div css={styles.catMashContent}>
        {catMashes.length > 0 && (
          <Fragment>
            <CatPan cat={catMashes[0][0]} />
            <CatPan cat={catMashes[0][1]} />
          </Fragment>
        )}
      </div>
      <Footer />
    </div>
  )
}

const styles = {
  catMash: {
    backgroundColor: colors.green,
    height: '100%',
  },
  catMashContent: {
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
