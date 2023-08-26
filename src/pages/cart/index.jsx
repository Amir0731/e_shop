import React from "react";
import {
  BasTxt,
  BasTxt20,
  Body,
  CartBorder,
  CartBorderNone,
  CartController,
  CartMonitor,
  CartSection,
  CartTotal,
  CheckBtn,
  Coupon,
  CouponBtn,
  CouponInp,
  DropDiv,
  DropDownBtn,
  DropUpBtn,
  FrameBtn,
  FrameBtns,
  FrameTotal,
  JCSB,
  Nav,
  NavTxt,
  NavTxtOpacity,
  Quantity,
  SellCartsDiv,
  SellDiv,
  SellSection,
} from "./style";

export default function Cart() {
  return (
    <Body>
      <Nav>
        <NavTxtOpacity>Home</NavTxtOpacity>
        <NavTxtOpacity>/</NavTxtOpacity>
        <NavTxt>Cart</NavTxt>
      </Nav>
      <SellCartsDiv>
        <SellSection>
          <BasTxt>Product</BasTxt>
          <BasTxt>Price</BasTxt>
          <BasTxt>Quantity</BasTxt>
          <BasTxt>Subtotal</BasTxt>
        </SellSection>
        <CartSection>
          <SellDiv>
            <CartMonitor />
          </SellDiv>
          <BasTxt>LCD Monitor</BasTxt>
          <JCSB>
            <BasTxt>$650</BasTxt>
            <Quantity>
              <BasTxt>01</BasTxt>
              <DropDiv>
                <DropUpBtn />
                <DropDownBtn />
              </DropDiv>
            </Quantity>
            <BasTxt>$650</BasTxt>
          </JCSB>
        </CartSection>
        <CartSection>
          <SellDiv>
            <CartController />
          </SellDiv>
          <BasTxt>H1 Gamepad</BasTxt>
          <JCSB>
            <BasTxt>$550</BasTxt>
            <Quantity>
              <BasTxt>02</BasTxt>
              <DropDiv>
                <DropUpBtn />
                <DropDownBtn />
              </DropDiv>
            </Quantity>
            <BasTxt>$1100</BasTxt>
          </JCSB>
        </CartSection>
      </SellCartsDiv>
      <FrameBtns>
        <FrameBtn>Return To Shop</FrameBtn>
        <FrameBtn>Update Cart</FrameBtn>
      </FrameBtns>
      <FrameTotal>
        <Coupon>
          <CouponInp placeholder="Coupon Code" />
          <CouponBtn>Apply Coupon</CouponBtn>
        </Coupon>
        <CartTotal>
          <BasTxt20>Cart Total</BasTxt20>
          <CartBorder>
            <BasTxt>Subtotal:</BasTxt>
            <BasTxt>$1750</BasTxt>
          </CartBorder>
          <CartBorder>
            <BasTxt>Shipping:</BasTxt>
            <BasTxt>Free</BasTxt>
          </CartBorder>
          <CartBorderNone>
            <BasTxt>Total:</BasTxt>
            <BasTxt>$1750</BasTxt>
          </CartBorderNone>
        <CheckBtn>Procees to checkout</CheckBtn>
        </CartTotal>
      </FrameTotal>
    </Body>
  );
}
