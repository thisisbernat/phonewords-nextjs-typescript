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
          <Text>This is a T9 Keyboard Emulator.</Text>
          <List>
            <Text>Examples you can try</Text>
            <ListItem>5494 47 2665</ListItem>
            <ListItem>4473 63</ListItem>
          </List>
        </Stack>
      }>
        <InformationCircle color="secondary" />
      </Tooltip>
    </div>
  )
}

export default InfoIcon