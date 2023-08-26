import React, { useState } from "react";
import {
  BasicTxt14,
  BasicTxt14Opacity,
  BasicTxt16,
  BasicTxt16Opacity,
  BasicTxt36,
  Body,
  CartDiv,
  CardImgC,
  CartSection,
  DeatilFrame,
  DetailInp,
  DetailsFrame,
  FlexDiv,
  InfoFrame,
  JCSB,
  RedStar,
  Roadmap,
  SaveDiv,
  SaveInp,
  TotalFrame,
  CardImgM,
  CartBorder,
  CartBorderNone,
  CardTotal,
  BankPay,
  RadioDiv,
  RadioInp,
  IconsDiv,
  IconbKash,
  IconVisa,
  IconMasterCard,
  IconChineBank,
  CashPay,
  Coupon,
  CouponInp,
  CouponBtn,
} from "./style";
// import CustomCheckbox from "./style";

export default function Check() {
  //   const App = () => {
  //     const [isChecked, setIsChecked] = useState(false);

  //     const handleChange = () => {
  //       setIsChecked(!isChecked);
  //     };

  return (
    <Body>
      <Roadmap>
        <BasicTxt14Opacity>Account</BasicTxt14Opacity>
        <BasicTxt14Opacity>/</BasicTxt14Opacity>
        <BasicTxt14Opacity>My Account</BasicTxt14Opacity>
        <BasicTxt14Opacity>/</BasicTxt14Opacity>
        <BasicTxt14Opacity>Product</BasicTxt14Opacity>
        <BasicTxt14Opacity>/</BasicTxt14Opacity>
        <BasicTxt14Opacity>View Cart</BasicTxt14Opacity>
        <BasicTxt14Opacity>/</BasicTxt14Opacity>
        <BasicTxt14>CheckOut</BasicTxt14>
      </Roadmap>
      <BasicTxt36>Billing Details</BasicTxt36>
      <FlexDiv>
        <DetailsFrame>
          <DeatilFrame>
            <BasicTxt16Opacity>
              First Name<RedStar>*</RedStar>
            </BasicTxt16Opacity>
            <DetailInp />
          </DeatilFrame>
          <DeatilFrame>
            <BasicTxt16Opacity>Company Name</BasicTxt16Opacity>
            <DetailInp />
          </DeatilFrame>
          <DeatilFrame>
            <BasicTxt16Opacity>
              Street Address<RedStar>*</RedStar>
            </BasicTxt16Opacity>
            <DetailInp />
          </DeatilFrame>
          <DeatilFrame>
            <BasicTxt16Opacity>
              Apartment, floor, etc. (optional)
            </BasicTxt16Opacity>
            <DetailInp />
          </DeatilFrame>
          <DeatilFrame>
            <BasicTxt16Opacity>
              Town/City<RedStar>*</RedStar>
            </BasicTxt16Opacity>
            <DetailInp />
          </DeatilFrame>
          <DeatilFrame>
            <BasicTxt16Opacity>
              Phone Number<RedStar>*</RedStar>
            </BasicTxt16Opacity>
            <DetailInp />
          </DeatilFrame>
          <DeatilFrame>
            <BasicTxt16Opacity>
              Email Address<RedStar>*</RedStar>
            </BasicTxt16Opacity>
            <DetailInp />
          </DeatilFrame>
          <SaveDiv>
            <SaveInp type="checkbox" />
            <BasicTxt16>
              Save this information for faster check-out next time
            </BasicTxt16>
            {/* <CustomCheckbox isChecked={isChecked} onChange={handleChange} /> */}
          </SaveDiv>
        </DetailsFrame>
        <TotalFrame>
          <InfoFrame>
            <CartSection>
              <CartDiv>
                <CardImgM />
              </CartDiv>
              <JCSB>
                <BasicTxt16>LCD Monitor</BasicTxt16>
                <BasicTxt16>$650</BasicTxt16>
              </JCSB>
            </CartSection>
            <CartSection>
              <CartDiv>
                <CardImgC />
              </CartDiv>
              <JCSB>
                <BasicTxt16>H1 Gamepad</BasicTxt16>
                <BasicTxt16>$1100</BasicTxt16>
              </JCSB>
            </CartSection>
            <CardTotal>
              <CartBorder>
                <BasicTxt16>Subtotal:</BasicTxt16>
                <BasicTxt16>$1750</BasicTxt16>
              </CartBorder>
              <CartBorder>
                <BasicTxt16>Shipping:</BasicTxt16>
                <BasicTxt16>Free</BasicTxt16>
              </CartBorder>
              <CartBorderNone>
                <BasicTxt16>Total:</BasicTxt16>
                <BasicTxt16>$1750</BasicTxt16>
              </CartBorderNone>
            </CardTotal>
            <BankPay>
              <RadioDiv>
                <RadioInp type="radio" name="option" value="option1" />
                <BasicTxt16>Bank</BasicTxt16>
              </RadioDiv>
              <IconsDiv>
                <IconbKash />
                <IconVisa />
                <IconMasterCard />
                <IconChineBank />
              </IconsDiv>
            </BankPay>
            <CashPay>
              <RadioInp type="radio" name="option" value="option2" />
              <BasicTxt16>Cash on delivery</BasicTxt16>
            </CashPay>
            <Coupon>
              <CouponInp placeholder="Coupon Code" />
              <CouponBtn>Apply Coupon</CouponBtn>
            </Coupon>
            <CouponBtn>Place Order</CouponBtn>
          </InfoFrame>
        </TotalFrame>
      </FlexDiv>
    </Body>
  );
}
