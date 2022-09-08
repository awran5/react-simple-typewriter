import styles from '../styles.module.css'

interface CursorProps {
  cursorStyle?: string
  cursorColor?: string
}

export const Cursor = ({
  cursorStyle = '|',
  cursorColor = 'inherit'
}: CursorProps): JSX.Element => {
  return (
    <span style={{ color: cursorColor }} className={styles.blinkingCursor}>
      {cursorStyle}
    </span>
  )
}
