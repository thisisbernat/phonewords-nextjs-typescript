import styles from '../styles/Screen.module.css'
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive"
import Loading from "@kiwicom/orbit-components/lib/Loading"

interface Props {
  message: string
  isLoading: boolean
  words: string[]
  updateScreen: (newWord: string) => void
}

const Screen = ({ message, isLoading, words, updateScreen }: Props) => {
  return (
    <div className={styles.screen}>
      {message ? message : <div> </div>}
      <span className={styles.predictedWords}>
        {isLoading ? <BadgePrimitive background="#007F6D" foregroundColor="#fff"><Loading type="inlineLoader" /></BadgePrimitive> : words.map((word, i) => word && <div key={`pred-${i}`} onClick={() => updateScreen(word)} style={{ cursor: "pointer" }}><BadgePrimitive background="#007F6D" foregroundColor="#fff">{word}</BadgePrimitive></div>)}
      </span>
    </div>
  )
}

export default Screen