import { styled } from "styled-components";
import loginContImg from "../../assets/Side-Image.svg";

export const LoginCont = styled.div``;

export const LoginContMain = styled.div`
  padding: 60px 0 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 129px;
`;

export const LoginLeftCont = styled.div`
  width: 805px;
  height: 781px;
  background-size: cover;
  background-image: url("${loginContImg}");
`;

export const LoginRightCont = styled.div`
  display: flex;
  margin: 0 135px 0 0;
  flex-direction: column;
`;

export const LoginRightContTitle = styled.p`
  font-family: "Inter";
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1.44px;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const LoginRightContDesc = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 40px;
`;

export const LoginRightContInp = styled.input`
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #000;
  border: none;
  outline: none;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  ::placeholder {
    opacity: 0.4;
  }
`;

export const LoginRightContBtn = styled.button`
  border-radius: 4px;
  background-color: #db4444;
  padding: 16px 122px;
  font-family: "Poppins";
  color: #fafafa;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 32px;
  border: none;
  cursor: pointer;
`;

export const LoginRightContBtnWithGoogle = styled.button`
  border-radius: 4px;
  background-color: transparent;
  padding: 16px 86px;
  font-family: "Poppins";
  color: #fafafa;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 32px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  display: flex;
  gap: 16px;
  color: #000;
  cursor: pointer;
`;

export const LoginFooterLinksCont = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const LoginFooterLinksDesc = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const LoginFooterLink = styled.a`
  color: #000;
  opacity: 0.7;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
