import Button from "@kiwicom/orbit-components/lib/Button"
import Github from "@kiwicom/orbit-components/lib/icons/Github"
import Linkedin from "@kiwicom/orbit-components/lib/icons/Linkedin"

const SocialLinks = () => {
  return (
    <div>
      <Button type="white" iconLeft={<Github />} href="https://github.com/thisisbernat/phonewords-nextjs-typescript" external={true}>GitHub</Button>
      <Button type="white" iconLeft={<Linkedin />} href="https://www.linkedin.com/in/bernatescarra/" external={true}>LinkedIn</Button>
    </div>
  )
}

export default SocialLinks