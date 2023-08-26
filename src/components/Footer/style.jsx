import { styled } from "styled-components";
import SendIcon from "../../assets/icon-send.svg";
import QrCode from "../../assets/Qr Code.svg";
import PMIcon from "../../assets/GooglePlay.svg";
import ASIcon from "../../assets/AppStore.svg";

export const FooterBody = styled.div`
  height: 376px;
  display: flex;
  padding: 80px 135px 60px;
  background-color: #000;
  justify-content: space-between;
  border-bottom: 1px solid rgb(250, 250, 250, 0.2);
`;

export const FooterExclusive = styled.div`
  width: 217px;
`;

export const ExclusivePs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Exclusive = styled.p`
  color: #fafafa;
  font-family: "Inter";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.72px;
`;

export const FooterP20 = styled.p`
  color: #fafafa;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

export const FooterP16 = styled.p`
  color: #fafafa;
  font-family: "Poppins";
  font-size: 16px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const InpBtn = styled.div`
  width: 217px;
  display: flex;
  padding: 12px 0 12px 16px;
  background-color: transparent;
  border-radius: 4px;
  border: 1.5px solid #fff;
`;

export const Inp = styled.input`
  width: 130px;
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-right: 32px;
  &::placeholder {
    opacity: 0.5;
  }
`;

export const SendBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  background-image: url("${SendIcon}");
  cursor: pointer;
`;

export const FooterSupport = styled.div`
  width: 175px;
  display: flex;
  flex-direction: column;
`;

export const SaqDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SaqdP20 = styled.p`
  color: #fafafa;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 24px;
`;

export const SaqP16 = styled.p`
  color: #fafafa;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const FooterAccount = styled.div`
  width: 123px;
  display: flex;
  flex-direction: column;
`;

export const FooterQuickL = styled.div`
  width: 109px;
  display: flex;
  flex-direction: column;
`;

export const FooterQR = styled.div`
  width: 198px;
  display: flex;
  flex-direction: column;
`;

export const FooterP12 = styled.p`
  color: rgba(250, 250, 250, 0.7);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 12px;
`;

export const Links = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const Qr = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 2px;
  background-image: url("${QrCode}");
`;

export const Apps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PlayMarketBtn = styled.a`
  width: 106px;
  height: 32px;
  background-image: url("${PMIcon}");
  background-position: center;
  border: none;
  cursor: pointer;
`;

export const AppStoreBtn = styled.a`
  width: 110px;
  height: 36px;
  background-image: url("${ASIcon}");
  background-position: center;
  border: none;
  cursor: pointer;
`;

export const FAppDiv = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: column;
`;

export const AppDiv = styled.div`
  display: flex;
  padding: 3px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const SocialLink = styled.a`
  width: 24px;
  height: 24px;
`;

export const CopyBody = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  padding: 16px 0 24px;
`;

export const CopyTxt = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #fafafa;
  opacity: 0.3;
`;