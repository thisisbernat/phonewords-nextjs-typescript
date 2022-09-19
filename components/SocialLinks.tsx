import styles from '../styles/SocialLinks.module.css'
import Github from "@kiwicom/orbit-components/lib/icons/Github"
import Linkedin from "@kiwicom/orbit-components/lib/icons/Linkedin"
import TextLink from "@kiwicom/orbit-components/lib/TextLink"

const SocialLinks = () => {
  return (
    <div className={styles.links}>
      <TextLink href="https://github.com/thisisbernat/phonewords-nextjs-typescript" external={true}><Github /></TextLink>
      <TextLink href="https://www.linkedin.com/in/bernatescarra/" external={true}><Linkedin /></TextLink>
    </div>
  )
}

export default SocialLinks