import "./signOut.scss";
import userPhoto from "../../assets/images/profilePhoto.png";
import balanceIcon from "../../assets/icons/walletBalance.png";
import coinsIcon from "../../assets/icons/coin.png";
import purchaseIcon from "../../assets/icons/purchase.png";
import wishList from "../../assets/icons/heart.png";
import settingIcon from "../../assets/icons/setting-2.png";
import logoutIcon from "../../assets/icons/logout.png";

const SignOut = () => {
  return (
    <div className="signOut-container">
      <div className="userInfo">
        <div className="userPhoto">
          <img src={userPhoto} alt="" />
        </div>
        <div className="userName">
          <h3>Yelena Stacia</h3>
          <p>Platinum member</p>
        </div>
      </div>
      <div className="bottomBorder"></div>
      <div className="wallet-cont">
        <p className="contTitle">Wallet</p>
        <div className="balance">
          <div className="balanceTitle">
            <img src={balanceIcon} alt="" />
            <span>Lenny Balance</span>
          </div>
          <div className="balanceAmount">
            <p>$928,28</p>
          </div>
        </div>
        <div className="coins">
          <div className="coinsTitle">
            <img src={coinsIcon} alt="" />
            <span>Lenny Coins</span>
          </div>

          <div className="coinAmount">
            <p>0.092</p>
          </div>
        </div>
      </div>
      <div className="bottomBorder"></div>
      <div className="menu-cont">
        <p className="contTitle">Menu</p>
        <div className="purchase">
          <img src={purchaseIcon} alt="" />
          <p>Purchase</p>
        </div>
        <div className="wishlist">
          <img src={wishList} alt="" />
          <p>Wishlist</p>
        </div>
        <div className="setting">
          <img src={settingIcon} alt="" />
          <p>Setting</p>
        </div>
      </div>
      <div className="bottomBorder"></div>
      <div className="logOut">
        <img src={logoutIcon} alt="" />
        <p>Sign Out</p>
      </div>
    </div>
  );
};

export default SignOut;
