
import Services from "../../about/page/services"
import HomepageIntro from "../components/homepageIntro/homepageIntro"
import MernStack from "../components/mernstackpage/mernStackpage"
import Myresume from "../components/MyResume/Myresume"

import './homepage.scss'

const Homepage = () => {
  return (
  
    <div className="sections">
      <HomepageIntro />
      <MernStack />
      <Myresume/>
   </div>
  )
}

export default Homepage