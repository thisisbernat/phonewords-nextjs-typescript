import styles from '../styles/DigitsDisplay.module.css'

interface Props {
  digits: string
}

const DigitsDisplay = ({ digits }: Props) => {
  return (
    <div className={styles.digitsDisplay}>{digits}<span className={styles.blink}>_</span></div>
  )
}

export default DigitsDisplay