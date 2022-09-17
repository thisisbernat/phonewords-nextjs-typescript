import Grid from "@kiwicom/orbit-components/lib/utils/Grid"
import Key from './Key'

interface Props {
  updateDisplay: (digits: string | void) => void
  clearData: () => void
  backspace: () => void
}

const Keyboard = ({ updateDisplay, clearData, backspace }: Props) => {
  return (
    <Grid
      rowGap="1rem"
      columnGap="1rem"
      columns="repeat(3, 1fr)"
    >
      <Key label="1" subtitle="_" />
      <Key label="2" subtitle="abc" keyFn={updateDisplay} />
      <Key label="3" subtitle="def" keyFn={updateDisplay} />
      <Key label="4" subtitle="ghi" keyFn={updateDisplay} />
      <Key label="5" subtitle="jkl" keyFn={updateDisplay} />
      <Key label="6" subtitle="mno" keyFn={updateDisplay} />
      <Key label="7" subtitle="pqrs" keyFn={updateDisplay} />
      <Key label="8" subtitle="tuv" keyFn={updateDisplay} />
      <Key label="9" subtitle="wxyz" keyFn={updateDisplay} />
      <Key label="Clear" special={true} keyFn={clearData} />
      <Key label="0" />
      <Key label="◁" special={true} keyFn={backspace} />
    </Grid>
  )
}

export default Keyboard