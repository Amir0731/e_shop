import { styled } from "styled-components";

export const ContactCont = styled.div``;

export const ContactMainCont = styled.div``;

export const ContactTitleMainCont = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 80px 0 80px 135px;
`;

export const ContactTitle = styled.p`
  opacity: 0.5;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #000;
`;

export const ContactTitleDesc = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #000;
`;

export const ContactMainContentCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 135px 140px;
`;

export const ContactMainLeftCont = styled.div`
  padding: 40px 35px 35px 35px;
  display: flex;
  flex-direction: column;
`;

export const ContactMainLeftTitleCont = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ContactMainLeftTitle = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #000;
`;

export const ContactMainLeftTitleDesc = styled.p`
  font-family: "Poppins";
  color: #000;
  margin-bottom: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

export const ContactMainLeftTitleDesc2 = styled.p`
  font-family: "Poppins";
  color: #000;
  margin-bottom: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  width: 250px;
`;

export const ContactMainLeftContBorder = styled.div`
  opacity: 0.5;
  background-color: #000;
  width: 100%;
  margin: 16px 0 32px;
  height: 1px;
`;

export const ContactMainRightCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 32px;
`;

export const ContactMainRightInpsCont = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

export const ContactMainRightInp = styled.input`
  padding: 13px 50px 13px 16px;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #db4444;
  background-color: #f5f5f5;
  border: none;
  outline: none;

  ::placeholder {
    opacity: 0.5;
    color: #000;
  }
`;

export const ContactMainRIghtInpTxtArea = styled.input`
  padding: 13px 608px 170px 16px;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #db4444;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  margin-bottom: 32px;

  ::placeholder {
    opacity: 0.5;
    color: #000;
  }
`;

export const ContactMainRightBtn = styled.button`
  padding: 16px 48px;
  background-color: #db4444;
  color: #fafafa;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: none;
  border-radius: 4px;
  width: 215px;
  margin-left: 618px;
`;
