import Grid from "@kiwicom/orbit-components/lib/utils/Grid"
import Button from "@kiwicom/orbit-components/lib/Button"
import Text from "@kiwicom/orbit-components/lib/Text"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"

interface Props {
  updateDisplay: (digits: string) => void
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
      <Button width={"4.5rem"} disabled={true}>1<br /><Text as="span" type="white" italic={true}>_</Text></Button>
      <Button width={"4.5rem"} onClick={() => updateDisplay('2')}>2<br /><Text as="span" type="white" italic={true}>abc</Text></Button>
      <Button width={"4.5rem"} onClick={() => updateDisplay('3')}>3<br /><Text as="span" type="white" italic={true}>def</Text></Button>
      <Button width={"4.5rem"} onClick={() => updateDisplay('4')}>4<br /><Text as="span" type="white" italic={true}>ghi</Text></Button>
      <Button width={"4.5rem"} onClick={() => updateDisplay('5')}>5<br /><Text as="span" type="white" italic={true}>jkl</Text></Button>
      <Button width={"4.5rem"} onClick={() => updateDisplay('6')}>6<br /><Text as="span" type="white" italic={true}>mno</Text></Button>
      <Button width={"4.5rem"} onClick={() => updateDisplay('7')}>7<br /><Text as="span" type="white" italic={true}>pqrs</Text></Button>
      <Button width={"4.5rem"} onClick={() => updateDisplay('8')}>8<br /><Text as="span" type="white" italic={true}>tuv</Text></Button>
      <Button width={"4.5rem"} onClick={() => updateDisplay('9')}>9<br /><Text as="span" type="white" italic={true}>wxyz</Text></Button>
      <Button width={"4.5rem"} onClick={clearData}>Clear</Button>
      <Button width={"4.5rem"} disabled={true}>0</Button>
      <Button width={"4.5rem"} onClick={backspace}><ChevronLeft /></Button>
    </Grid>
  )
}

export default Keyboard