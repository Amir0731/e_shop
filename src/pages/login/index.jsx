import React from "react";
import {
  LoginCont,
  LoginContMain,
  LoginFooterLink,
  LoginFooterLinksCont,
  LoginFooterLinksDesc,
  LoginLeftCont,
  LoginRightCont,
  LoginRightContBtn,
  LoginRightContBtnWithGoogle,
  LoginRightContDesc,
  LoginRightContInp,
  LoginRightContTitle,
} from "./style";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ReactComponent as IconGoogle } from "../../assets/Icon-Google.svg";

export default function Login() {
  return (
    <LoginCont>
      <Navbar />
      <LoginContMain>
        <LoginLeftCont />
        <LoginRightCont>
          <LoginRightContTitle>Create an account</LoginRightContTitle>
          <LoginRightContDesc>Enter your details below</LoginRightContDesc>
          <LoginRightContInp placeholder="Name" />
          <LoginRightContInp placeholder="Email or Phone Number" type="email" />
          <LoginRightContInp placeholder="Password" type="password" />
          <LoginRightContBtn>Create Account</LoginRightContBtn>
          <LoginRightContBtnWithGoogle>
            <IconGoogle /> Sign up with Google
          </LoginRightContBtnWithGoogle>
          <LoginFooterLinksCont>
            <LoginFooterLinksDesc>Already have account?</LoginFooterLinksDesc>
            <LoginFooterLink href="#">Log in</LoginFooterLink>
          </LoginFooterLinksCont>
        </LoginRightCont>
      </LoginContMain>
      <Footer />
    </LoginCont>
  );
}
