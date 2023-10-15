import "./ipadAirGen.scss";
import Buttons from "../../../components/Buttons/Buttons";
import ipadAirImage from "../../../assets/images/iPad Air 2020.png";

const IpadAirGen = () => {
  return (
    <div className="ipadAirGen-container">
      <div className="ipadAir">
        <div className="ipadAir-image">
          <img src={ipadAirImage} alt="" />
        </div>
        <div className="ipadAir-about">
          <div className="ipad-text">
            <h1>Ipad Air Gen 5</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
              sapien quam risus sed diam.
            </p>
          </div>
          <div className="ipad-buttons">
            <Buttons text="Buy $900" textColor="white" color="#1E4C2F" />
            <Buttons
              text="View Detail"
              textColor="#1E4C2F"
              color="transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadAirGen;
