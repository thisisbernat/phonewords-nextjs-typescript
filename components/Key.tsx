import Button from "@kiwicom/orbit-components/lib/Button"
import Text from "@kiwicom/orbit-components/lib/Text"

interface Props {
  label: string
  subtitle?: string
  keyFn?: (digits: string | void) => void
  special?: boolean
}

const Key = ({ label, subtitle, keyFn, special }: Props) => {
  if (keyFn) {
    if (special) {
      return (
        <Button width={"4.5rem"} onClick={() => keyFn()}>{label}<br /></Button>
      )
    } else {
      return (
        <Button width={"4.5rem"} onClick={() => keyFn(label)}>{label}<br /><Text as="span" type="white" italic={true}>{subtitle}</Text></Button>
      )
    }
  } else {
    return (
      <Button width={"4.5rem"} disabled={true}>{label}<br /><Text as="span" type="white" italic={true}>{subtitle}</Text></Button>
    )
  }

}

export default Key