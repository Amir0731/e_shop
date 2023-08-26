import { styled } from "styled-components";
import Controller from "../../assets/thumbnail/Mini_Controller.png";
import Monitor from "../../assets/thumbnail/MSI_Monitor.png";
import okash from "../../assets/okash.png"
import visa from "../../assets/visa.png"
import master from "../../assets/mastercard.png"
import chine from "../../assets/bank.png"

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 135px 140px;
`;

export const Roadmap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 80px;
`;

export const BasicTxt14Opacity = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  opacity: 0.5;
`;

export const BasicTxt14 = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

export const BasicTxt36 = styled.p`
  color: #000;
  font-family: "Inter";
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 1.44px;
  margin-bottom: 48px;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 24px;
`;

export const DeatilFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const BasicTxt16Opacity = styled.p`
  display: flex;
  color: #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.4;
`;

export const RedStar = styled.p`
  color: #db4444;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.4;
`;

export const DetailInp = styled.input`
  width: 470px;
  height: 50px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  background: #f5f5f5;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  outline: none;
`;

export const SaveDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const SaveInp = styled.input`
  width: 24px;
  height: 24px;
  accent-color: #db4444;
  /* &:checked {
    background-color: red;
  } */
`;

export const BasicTxt16 = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const TotalFrame = styled.div`
  width: 527px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const InfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  &>button {
    width: 190px;
  }
`;

export const CartSection = styled.div`
  width: 425px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const CartDiv = styled.div`
  display: flex;
  width: 54px;
  height: 54px;
  padding: 8px 2px 7px 2px;
  justify-content: center;
  align-items: center;
`;

export const CardImgC = styled.div`
  width: 48.884px;
  height: 42.222px;
  background: url("${Controller}");
`;

export const CardImgM = styled.div`
  width: 50px;
  height: 39px;
  background: url("${Monitor}");
`;

export const JCSB = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CartBorder = styled.div`
  width: 422px;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #000;
`;

export const CartBorderNone = styled.div`
  width: 422px;
  display: flex;
  padding-top: 16px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const CardTotal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BankPay = styled.div`
  width: 427px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const IconbKash = styled.div`
width: 37.8px;
height: 16.8px;
background: url("${okash}");
`

export const IconVisa = styled.div`
width: 37.8px;
height: 11.2px;
background: url("${visa}");
`

export const IconMasterCard = styled.div`
width: 39.2px;
height: 25.2px;
background: url("${master}");
`

export const IconChineBank = styled.div`
width: 39.2px;
height: 18.2px;
background: url("${chine}");
`

export const RadioDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const RadioInp = styled.input`
  width: 24px;
  height: 24px;
  accent-color: black;
`;

export const CashPay = styled.div`
  display: flex;
  gap: 16px;
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