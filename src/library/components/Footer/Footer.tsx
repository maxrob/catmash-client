// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { colors } from 'res/colors'

export const Footer = () => (
  <div css={styles.footer}>
    <h1 css={styles.footerTitle}>Catmash</h1>
    <h2 css={styles.footerSubtitle}>Battle of cats</h2>
  </div>
)

const styles = {
  footer: {
    position: 'absolute' as 'absolute',
    bottom: '0',
    color: colors.green,
    width: '100%',
    height: '100px',
    textAlign: 'center' as 'center',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
  },
  footerTitle: {
    margin: '0',
    fontSize: '3rem',
    textTransform: 'uppercase' as 'uppercase',
  },
  footerSubtitle: {
    margin: '0',
    fontSize: '1rem',
    fontStyle: 'italic',
  },
}
