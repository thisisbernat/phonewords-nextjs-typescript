import styles from '../styles/Screen.module.css'
import InformationCircle from "@kiwicom/orbit-components/lib/icons/InformationCircle"
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Text from "@kiwicom/orbit-components/lib/Text"
import List, { ListItem } from "@kiwicom/orbit-components/lib/List"

const InfoIcon = () => {
  return (
    <div className={styles.info}>
      <Tooltip placement="bottom-start" content={
        <Stack>
          <Text>You can find the CVV in the right corner of your credit card.</Text>
          <List>
            <ListItem>Additional information</ListItem>
          </List>
        </Stack>
      }>
        <InformationCircle color="secondary" />
      </Tooltip>
    </div>
  )
}

export default InfoIcon