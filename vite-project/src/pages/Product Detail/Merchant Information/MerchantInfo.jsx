import "./merchantInfo.scss";
import logitechLogo2 from "../../../assets/images/logitechLogo2.png";
import Buttons from '../../../components/Buttons/Buttons'
import {PiChatCenteredDots} from 'react-icons/pi'
import {BsShop} from 'react-icons/bs'

const MerchantInfo = () => {
  return (
    <div className="merchantInfo-container">
      <h3>Merchant Information</h3>
      <div className="merchant-infos">
        <div className="infoAndName-cont">
          <img src={logitechLogo2} alt="" />
        <div className="merch-information">
          <h3>Logitech Indonesia</h3>
          <p>Jakarta Pusat</p>
          <div className="bestMerchants">
            <span>Top Rated Merchant</span>
            <span>Best Merchand</span>
          </div>
        </div>
      </div>
      <div className="merchantsButtons">
        <Buttons img={<PiChatCenteredDots className="merchantIcon"/>} text="Chat" textColor="#1E4C2F" color="white"/>
        <Buttons img={<BsShop className="merchantIcon"/>} text="Visit Merchant" textColor="#1E4C2F" color="white"/>
      </div>
      </div>
      <div className="borderBottom"></div>
      </div>

  );
};

export default MerchantInfo;
