import React from "react";
import {
  RegisterCont,
  RegisterLeftCont,
  RegisterMainCont,
  RegisterRightBtn,
  RegisterRightBtnsCont,
  RegisterRightCont,
  RegisterRightContDesc,
  RegisterRightContInp,
  RegisterRightContTitle,
  RegisterRightLink,
} from "./style";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";

export default function Register() {
  return (
    <RegisterMainCont>
      <Navbar />
      <RegisterCont>
        <RegisterLeftCont />
        <RegisterRightCont>
          <RegisterRightContTitle>Log in to Exclusive</RegisterRightContTitle>
          <RegisterRightContDesc>
            Enter your details below
          </RegisterRightContDesc>
          <RegisterRightContInp
            type="email"
            placeholder="Email or Phone Number"
          />
          <RegisterRightContInp type="password" placeholder="Password" />
          <RegisterRightBtnsCont>
            <RegisterRightBtn>Log In</RegisterRightBtn>
            <RegisterRightLink href="#">Forget Password?</RegisterRightLink>
          </RegisterRightBtnsCont>
        </RegisterRightCont>
      </RegisterCont>
      <Footer />
    </RegisterMainCont>
  );
}
