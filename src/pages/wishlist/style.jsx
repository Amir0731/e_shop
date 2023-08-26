import { styled } from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 135px 140px;
  gap: 80px;
`;

export const Frame778 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Roadmap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BasicTxt20 = styled.p`
  color: #000;
  text-align: center;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export const Btn = styled.button`
  display: flex;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  background: transparent;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;

export const OtherItemsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 140px 0 60px;
`;

export const OtherItemsTitle = styled.h1`
  color: #db4444;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export const OtherItemsBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const Itembox = styled.div`
  flex-grow: 1;
`;

export const ItemImgBox = styled.div`
  height: 250px;
  padding: 12px 12px 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  border-radius: 4px;
  background: #f5f5f5;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

export const DiscountBox = styled.div`
  height: max-content;
  border-radius: 4px;
  background: #db4444;
  padding: 4px 12px;
`;

export const DiscountText = styled.p`
  color: #fafafa;
  font-size: 12px;
  line-height: 18px;
`;

export const ActionButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ActionBtn = styled.button`
  background-color: white;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const AddToCardBtn = styled.button`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 41px;
  border-radius: 0px 0px 4px 4px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  cursor: pointer;
`;

export const PricesWrapper = styled.div`
  margin: 8px 0;
`;

export const OtheritemName = styled.h3`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const RealAndDiscountPriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Prices = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  opacity: 0.5;
  &.discountPrice {
    opacity: 1;
    color: #db4444;
  }
  &.realPrice {
    text-decoration: line-through;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemsRatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Itemsreviews = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  opacity: 0.5;
`;
