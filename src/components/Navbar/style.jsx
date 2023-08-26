import { styled } from "styled-components";
import searchIcon from "../../assets/search.svg";

export const NavbarCont = styled.div``;

export const NavbarHeaderCont = styled.div`
  padding: 10px 136px 10px 0;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 25%;
`;

export const NavbarHeaderTitle = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #fafafa;
  margin-right: 8px;
`;

export const NavbarHeaderLink = styled.a`
  color: #fafafa;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-left: 8px;
`;

export const NavbarHeaderLang = styled.button`
  font-family: "Poppins";
  display: flex;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #fafafa;
  gap: 5;
  background-color: transparent;
  border: none;
`;

export const NavbarFooterCont = styled.div`
  padding: 38px 135px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const NavbarFooterLogo = styled.h1`
  font-family: "Inter";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.72px;
  color: #000;
`;

export const NavbarFooterMenu = styled.div`
  gap: 48px;
  display: flex;
`;

export const NavbarFooterMenuItems = styled.a`
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #000;
  text-decoration: none;
`;

export const NavbarFooterMainSearchCont = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NavbarFooterSearchInpCont = styled.div`
  padding: 7px 12px 7px 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
`;

export const NavbarFooterSearchInp = styled.input`
  width: 185px;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #000;
  background-color: transparent;
  border: none;
  outline: none;

  ::placeholder {
    opacity: 0.5;
  }
`;

export const NavbarFooterSearchBtn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${searchIcon});
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NavbarFooterSearchLinksCont = styled.div`
  display: flex;
  gap: 16px;
`;

export const NavbarFooterSearchLinks = styled.a`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
