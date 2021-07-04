import React from 'react'
import styles from '../styles.module.css'

export interface CursorProps {
  cursorStyle?: string
}

export const Cursor = ({ cursorStyle = '|' }: CursorProps): JSX.Element => {
  return <span className={styles.blinkingCursor}>{cursorStyle}</span>
}
