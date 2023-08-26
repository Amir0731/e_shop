import { styled } from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 135px 140px;
`;

export const RoadmapJC = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const LeftRoadmap = styled.div`
  display: flex;
  gap: 12px;
`;

export const RightRoadmap = styled.div`
  display: flex;
  gap: 12px;
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

export const BasicTxt14Red = styled.p`
  color: #db4444;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

export const JCSB = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BasicTxt16Bold = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const SBMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BasicTxt16Red = styled.p`
  color: #db4444;
  margin-left: 35px;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const BasicTxt16Opacity = styled.p`
  color: #000;
  margin-left: 35px;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.5;
`;

export const EditDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
`;

export const BasicTxt20BoldRed = styled.p`
  color: #db4444;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 16px;
`;

export const Gap24 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NameFrame = styled.div`
  width: 710px;
  display: flex;
  gap: 50px;
`;

export const MiniInpDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const BasicTxt16 = styled.p`
  color: #000;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Inp = styled.input`
  width: 100%;
  padding: 13px 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  background: var(--secondary, #f5f5f5);
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &::placeholder {
    opacity: 0.5;
  }
`;

export const PasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InpsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Btns = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;
`;

export const WhiteBtn = styled.button`
  border: none;
  background: transparent;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
`;

export const Btn = styled.button`
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