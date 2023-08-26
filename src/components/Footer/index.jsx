import React from "react";
import { ReactComponent as FacebookIcon } from "../../assets/Icon-Facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/Icon-Twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icon-instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/Icon-Linkedin.svg";
import {
  AppDiv,
  AppStoreBtn,
  CopyBody,
  CopyTxt,
  Exclusive,
  ExclusivePs,
  FAppDiv,
  FooterAccount,
  FooterBody,
  FooterExclusive,
  FooterP12,
  FooterP16,
  FooterP20,
  FooterQR,
  FooterQuickL,
  FooterSupport,
  Inp,
  InpBtn,
  Links,
  PlayMarketBtn,
  Qr,
  SaqDiv,
  SaqP16,
  SaqdP20,
  SendBtn,
  SocialLink,
  SocialLinks,
} from "./style";

export default function Footer() {
  return (
    <>
      <FooterBody>
        <FooterExclusive>
          <ExclusivePs>
            <Exclusive>Exclusive</Exclusive>
            <FooterP20>Subscribe</FooterP20>
            <FooterP16>Get 10% off your first order</FooterP16>
          </ExclusivePs>
          <InpBtn>
            <Inp type="email" placeholder="Enter your email" />
            <SendBtn />
          </InpBtn>
        </FooterExclusive>
        <FooterSupport>
          <SaqdP20>Support</SaqdP20>
          <SaqDiv>
            <SaqP16>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</SaqP16>
            <SaqP16>exclusive@gmail.com</SaqP16>
            <SaqP16>+88015-88888-9999</SaqP16>
          </SaqDiv>
        </FooterSupport>
        <FooterAccount>
          <SaqdP20>Account</SaqdP20>
          <SaqDiv>
            <SaqP16>My Account</SaqP16>
            <SaqP16>Login / Register</SaqP16>
            <SaqP16>Cart</SaqP16>
            <SaqP16>Wishlist</SaqP16>
            <SaqP16>Shop</SaqP16>
          </SaqDiv>
        </FooterAccount>
        <FooterQuickL>
          <SaqdP20>Quick Link</SaqdP20>
          <SaqDiv>
            <SaqP16>Privacy Policy</SaqP16>
            <SaqP16>Terms Of Use</SaqP16>
            <SaqP16>FAQ</SaqP16>
            <SaqP16>Contact</SaqP16>
          </SaqDiv>
        </FooterQuickL>
        <FooterQR>
          <SaqdP20>Download App</SaqdP20>
          <FooterP12>Save $3 with App New User Only</FooterP12>
          <Links>
            <Qr />
            <FAppDiv>
              <AppDiv>
                <PlayMarketBtn href="#" />
              </AppDiv>
              <AppDiv>
                <AppStoreBtn href="#" />
              </AppDiv>
            </FAppDiv>
          </Links>
          <SocialLinks>
            <SocialLink href="#">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="#">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="#">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="#">
              <LinkedInIcon />
            </SocialLink>
          </SocialLinks>
        </FooterQR>
      </FooterBody>
      <CopyBody>
        <CopyTxt>&copy; Copyright Rimel 2022. All right reserved</CopyTxt>
      </CopyBody>
    </>
  );
}
