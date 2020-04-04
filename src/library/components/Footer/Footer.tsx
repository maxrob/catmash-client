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
    textAlign: 'center' as 'center',
    backgroundColor: colors.white,
  },
  footerTitle: {
    margin: '20px 0 0 0',
    fontSize: '3rem',
    textTransform: 'uppercase' as 'uppercase',
  },
  footerSubtitle: {
    margin: '0 0 20px 0',
    fontSize: '1rem',
    fontStyle: 'italic',
  },
}
