import "./detailProduct.scss";
import { PiCheckCircleFill } from "react-icons/pi";
import React, { useState } from "react";
import { getSingleProduct } from "../../../api/product.js";

const DetailProduct = ({ productId }) => {
  const [singleProd, setSingleProd] = useState();
  console.log(singleProd, "singpro");

  React.useEffect(() => {
    const getSingleProd = async () => {
      const res = await getSingleProduct(productId);
      setSingleProd(res.data);
    };
    getSingleProd();
  }, [productId]);

  return (
    <div className="detailProduct-container">
      <div className="prodname-cont">
        <h2>{singleProd?.attributes?.title}</h2>
        <p>{singleProd?.attributes?.description}</p>
      </div>
      <div className="prodInfos-cont">
        <div className="specification-cont">
          <h3>Specification</h3>
          <div className="infoDetail">
            <div className="infos bcground">
              <p>Brand</p>
              <h4>Logitech</h4>
            </div>
            <div className="infos">
              <p>Type</p>
              <h4>Wired</h4>
            </div>
            <div className="infos bcground">
              <p>Resolution</p>
              <h4>100-25600 dpi</h4>
            </div>
            <div className="infos">
              <p>Max Speed</p>
              <h4>{">"}40G2</h4>
            </div>
            <div className="infos bcground">
              <p>Max Acceleration</p>
              <h4>{">"}300 IPS</h4>
            </div>
          </div>
        </div>
        <div className="inTheBox-cont">
          <h3>In The Box</h3>
          <div className="checkedDetails">
            <div className="checkedDetail">
              <PiCheckCircleFill className="checkedCircleIcon" />
              <h4>UG502 X LIGHTSPEED Wireless Gaming Mouse</h4>
            </div>
            <div className="checkedDetail">
              <PiCheckCircleFill className="checkedCircleIcon" />
              <h4>DPI-Shift button cover</h4>
            </div>
            <div className="checkedDetail">
              <PiCheckCircleFill className="checkedCircleIcon" />
              <h4>USB-C charging cable</h4>
            </div>
            <div className="checkedDetail">
              <PiCheckCircleFill className="checkedCircleIcon" />
              <h4>LIGHTSPEED USB-A receiver</h4>
            </div>
            <div className="checkedDetail">
              <PiCheckCircleFill className="checkedCircleIcon" />
              <h4>USB extension cable</h4>
            </div>
            <div className="checkedDetail">
              <PiCheckCircleFill className="checkedCircleIcon" />
              <h4>User Documentation</h4>
            </div>
          </div>
        </div>

        <div className="systemRequired-cont">
          <h3>System Required</h3>
          <div className="systemsInfo">
            <p>- USB port</p>
            <p>- Internet access for optional software download</p>
            <p>- Windows® 10 or later</p>
            <p>- macOS 10.14 or later</p>
          </div>
        </div>
      </div>
      <div className="borderBottom"></div>
    </div>
  );
};

export default DetailProduct;
