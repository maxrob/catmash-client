// eslint-disable-next-line
import React, { useContext } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { colors } from 'res/colors'
import { mediaQueries } from 'res/mediaQueries'

import { CatMashContext } from 'pages/CatMash'

export const CatImage = ({ cat }: { cat: Cat }) => {
  const { incrementCat, updateCatMashes } = useContext(CatMashContext)

  const handleClick = () => {
    incrementCat(cat._id)
    updateCatMashes()
  }

  return (
    // eslint-disable-next-line
    <a data-testid="catmash-link" onClick={handleClick}>
      <div
        css={styles.catImage}
        style={{ backgroundImage: `url(${cat.avatar})` }}
      />
    </a>
  )
}

const styles = {
  catImage: {
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    height: '40vh',
    width: '40vh',
    borderRadius: '40vh',
    border: `10px solid ${colors.white}`,
    [mediaQueries.maxScreenWidth1024]: {
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      height: '20vh',
      width: '20vh',
      borderRadius: '20vh',
      border: `5px solid ${colors.white}`,
      transition: 'none',
    },
  },
}
