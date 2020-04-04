// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { colors } from 'res/colors'
import { mediaQueries } from 'res/mediaQueries'
import { pluralize } from 'library/helpers/pluralize'

export const CatLine = ({ cat, position }: { cat: Cat; position: number }) => (
  <div css={styles.catLine}>
    <p css={styles.catLinePosition}>#{position}</p>
    <div
      css={styles.catLineAvatar}
      style={{ backgroundImage: `url(${cat.avatar})` }}
    />
    <p css={styles.catLineName}>{cat.name}</p>
    <p css={styles.catLineScore}>
      {cat.score} {pluralize(cat.score, 'point', 'points')}
    </p>
  </div>
)

const styles = {
  catLine: {
    display: 'flex',
    alignItems: 'center',
    color: colors.white,
    padding: '10px 0',
    width: '70%',
    margin: '0 auto',
    ':not(:last-of-type)': {
      borderBottom: `1px solid ${colors.white}`,
    },
    [mediaQueries.maxScreenWidth1024]: {
      width: '100%',
    },
  },
  catLineAvatar: {
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    width: '15vh',
    height: '15vh',
    borderRadius: '15vh',
    border: `5px solid ${colors.white}`,
    margin: '0 50px 0 80px',
    [mediaQueries.maxScreenWidth1024]: {
      margin: '0 10px',
      width: '10vh',
      height: '10vh',
      borderRadius: '10vh',
    },
  },
  catLinePosition: {
    width: '10vh',
    fontSize: '2.5em',
    fontWeight: 'bold' as 'bold',
    [mediaQueries.maxScreenWidth1024]: {
      marginLeft: '10px',
      fontSize: '1.3em',
    },
  },
  catLineName: {
    fontSize: '1.5em',
    [mediaQueries.maxScreenWidth1024]: {
      fontSize: '0.8em',
      fontWeight: 'bold' as 'bold',
    },
  },
  catLineScore: {
    fontSize: '1.5em',
    marginLeft: 'auto',
    fontWeight: 'bold' as 'bold',
    [mediaQueries.maxScreenWidth1024]: {
      fontSize: '0.8em',
      marginRight: '10px',
    },
  },
}
