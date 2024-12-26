import Heroscreen from "../components/Heroscreen"
import Nav from "../components/Nav"
import Toast from "../components/Toast"

const Header = () => {
  return (
    <div className="mainHeader">
      <Toast/>
      <Nav/>
      <div className="mainherotheme">
        <div className="leftTheme"></div>
        <div className="rightTheme"></div>
        <div className="heroBacktheme"></div>
      <Heroscreen/>
      </div>
     <h1 className="absolute">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid hic labore, porro ea minus autem tenetur debitis consequatur quos ut dolores, ipsa inventore expedita dolorem. Sunt aliquid necessitatibus nihil!</h1>
    </div>
  )
}

export default Header
