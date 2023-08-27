import { styled } from "styled-components";
import RegisterBg from "../../assets/Side-Image.svg";

export const RegisterMainCont = styled.div``;

export const RegisterCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0 140px;
`;

export const RegisterLeftCont = styled.div`
  width: 805px;
  height: 706px;
  background-image: url("${RegisterBg}");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RegisterRightCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 135px 0 0;
`;

export const RegisterRightContTitle = styled.p`
  font-family: "Inter";
  color: #000;
  margin-bottom: 24px;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 1.44px;
`;

export const RegisterRightContDesc = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #000;
  margin-bottom: 48px;
`;

export const RegisterRightContInp = styled.input`
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #000;
  margin-bottom: 40px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;

  ::placeholder {
    opacity: 0.4;
  }
`;

export const RegisterRightBtnsCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterRightBtn = styled.button`
  padding: 16px 48px;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #fafafa;
  background-color: #db4444;
  border: none;
  border-radius: 4px;
`;

export const RegisterRightLink = styled.a`
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #db4444;
`;
