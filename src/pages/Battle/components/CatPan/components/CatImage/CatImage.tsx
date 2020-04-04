// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { colors } from 'res/colors'

export const CatImage = ({ cat }: { cat: Cat }) => {
  const handleClick = () => {
    alert(cat._id)
  }

  return (
    // eslint-disable-next-line
    <a onClick={handleClick}>
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
    transition: '0.3s',
    ':hover': {
      border: `15px solid ${colors.white}`,
    },
    '@media screen and (max-width: 1024px)': {
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
