import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
const Heroscreen = () => {
  return (
    <div className="heroScreen">
      <h1 className="text-5xl font-bold text-white">Build For Any Screen</h1>
      <div className="imgArea">
        <div className="leftImgArea">
          <img src={two} alt="" className="toprightImg" />
          <div className="imgBottomArea">
            <img src={three} alt="" className="w-[170px] secondimg" />
            <img src={three} alt="" className="w-[170px] " />
          </div>
        </div>
        <img src={one} alt="" className="w-[380px]" />
        <div className="rightImgArea">
          <img src={two} alt="" className="toprightImg" />
        </div>
      </div>
    </div>
  );
};

export default Heroscreen;
