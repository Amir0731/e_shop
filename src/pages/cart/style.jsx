import { styled } from "styled-components";
import Monitor from "../../assets/thumbnail/MSI_Monitor.png";
import Controller from "../../assets/thumbnail/Mini_Controller.png";
import DropUp from "../../assets/DropUp.svg";
import DropDown from "../../assets/DropDownMini.svg";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 135px 140px;
`;

export const Nav = styled.div`
  width: 100%;
  margin-bottom: 80px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

export const NavTxtOpacity = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  opacity: 0.5;
`;

export const NavTxt = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

export const SellCartsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 24px;
`;

export const SellSection = styled.div`
  display: flex;
  /* width: 1170px; */
  width: 100%;
  justify-content: space-between;
  padding: 24px 39px 24px 40px;
  align-items: center;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
`;

export const BasTxt = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const CartSection = styled.div`
  display: flex;
  width: 100%;
  height: 102px;
  padding: 24px 66px 24px 40px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
  & > p {
    margin: auto 0;
    width: 42%;
  }
`;

export const SellDiv = styled.div`
  display: flex;
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: 20px;
`;

export const CartMonitor = styled.div`
  width: 50px;
  height: 39px;
  background: url("${Monitor}");
`;

export const CartController = styled.div`
  width: 48.884px;
  height: 42.222px;
  background: url("${Controller}");
`;

export const JCSB = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > p {
    margin: auto 0;
  }
`;

export const Quantity = styled.div`
  display: flex;
  gap: 16px;
  /* height: 44px; */
  padding: 6px 12px;
  border-radius: 4px;
  border: 1.5px solid rgba(0, 0, 0, 0.4);
  & > p {
    margin: auto 0;
  }
`;

export const DropDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

export const DropUpBtn = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  background: url("${DropUp}");
`;

export const DropDownBtn = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  background: url("${DropDown}");
`;

export const FrameBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const FrameBtn = styled.button`
  display: flex;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background-color: transparent;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const FrameTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Coupon = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
`;

export const CouponInp = styled.input`
  display: flex;
  width: 300px;
  padding: 16px 24px 16px 24px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  outline: none;
`;

export const CouponBtn = styled.button`
  display: flex;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #db4444;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #fafafa;
  border: none;
  cursor: pointer;
`;

export const CartTotal = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  border-radius: 4px;
  border: 1.5px solid #000;
`;

export const BasTxt20 = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 8px;
`;

export const CartBorder = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #000;
`;

export const CartBorderNone = styled.div`
  display: flex;
  padding-top: 16px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const CheckBtn = styled.button`
  display: inline-flex;
  margin: 0 auto;
  width: 260px;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #db4444;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #fafafa;
  border: none;
  cursor: pointer;
`;
