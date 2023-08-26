import { styled } from "styled-components";

export const DetailsWrapper = styled.div`
    padding: 80px 0 140px;
`

export const DetailsLinksBox = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 80px;
`

export const DetailsLinks = styled.p`
    font-size: 14px;
    line-height: 21px;
    opacity: .5;
    &>a{
        color: black;
        text-decoration: none;
    }
    &:has(a.active){
        opacity: 1;
    }
`

export const ItemDetailsBox = styled.div`
    display: flex;
    gap: 70px;
`

export const ItemDetailsImgBox = styled.div`
    display: flex;
    gap: 30px;
`

export const ItemSmallImgBoxsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ItemSmallImgBox = styled.div`
    display: flex;
    width: 170px;
    height: 138px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #F5F5F5;
`

export const ItemBigImgBox = styled.div`
    width: 500px;
    background: #F5F5F5;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemName = styled.h1`
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.72px;
    margin-bottom: 16px;
`

export const UsersDataWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

export const StarsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

export const UserReviewsText = styled.pre`
    font-size: 14px;
    line-height: 21px;
    opacity: 0.5;
    &>span{
        color: #0F6;
    }
`

export const ItemPrice = styled.h1`
    font-family: Inter;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.72px;
    margin-top: 16px;
    margin-bottom: 24px;
`

export const AboutItem = styled.p`
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 24px;
`

export const ColoursWrapper = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    height: 28px;
    margin: 24px 0;
`

export const Colourstitle = styled.h1`
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.6px;
`

export const ColorBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ColorBoxBorder = styled.div`
    border-radius: 50%;
    &:hover{
        border: 3px solid black;
        transform: scale(1.1);
    }
`

export const ColorBox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
`

export const SizesBigWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;
`

export const SizesSmallWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

export const SizeBox = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    cursor: pointer;
    &:hover{
        border-radius: 4px;
        background: #DB4444;
        color: white;
        border: none;
        transition: .5s;
    }
`

export const SizeText = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
`

export const Salesbox = styled.div`
    display: flex;
    gap: 16px;
`

export const CounterBox = styled.div`
    display: flex;
    width: 160px;
    height: 44px;
`

export const MinusCountBtn = styled.button`
    width: 40px;
    border-radius: 4px 0px 0px 4px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const PlusCountBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    border: 1px solid #DB4444;
    border-radius: 0px 4px 4px 0px;
    background: #DB4444;
    cursor: pointer;
`

export const CountBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    border-top: 1px solid rgba(0, 0, 0, 0.50);
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

export const CountText = styled.h1`
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
`

export const BuyBtn = styled.p`
    padding: 10px 48px;
    border-radius: 4px;
    background: #DB4444;
    border: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: white;
    cursor: pointer;
`

export const WishHeartBtn = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    background-color: transparent;
    cursor: pointer;
`

export const Opportunitywrapper = styled.div`
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    margin-top: 40px;
`

export const OpportunityBox = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    height: 90px;
    padding-left: 16px;

    &>svg>g>path {
        stroke: black;
    }
`

export const OpportunityTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

export const OpportunityText = styled.p`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    &.deliveryText{
        text-decoration: underline;
    }
`

export const OtherItemsTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 140px 0 60px;
`

export const OtherItemsTitle = styled.h1`
    color: #DB4444;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
`

export const OtherItemsBox = styled.div`
    display: flex;
    gap: 30px;
`

export const Itembox = styled.div`
    width: calc(100vw * 0.1875);
`

export const ItemImgBox = styled.div`
    height: 250px;
    padding: 12px 12px 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    border-radius: 4px;
    background: #F5F5F5;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;
    &:hover>.addToCardBtn {
        transition: all .3s;
        transform: translateY(0);
    }
`

export const DiscountBox = styled.div`
    height: max-content;
    border-radius: 4px;
    background: #DB4444;
    padding: 4px 12px;
`

export const DiscountText = styled.p`
    color: #FAFAFA;
    font-size: 12px;
    line-height: 18px;
`

export const ActionButtonsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

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
`

export const AddToCardBtn = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    width: 100%;
    height: 41px;
    border-radius: 0px 0px 4px 4px;
    background: #000;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    border: none;
`

export const PricesWrapper = styled.div`
    margin: 8px 0;
`

export const OtheritemName = styled.h3`
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

export const RealAndDiscountPriceBox = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Prices = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    opacity: 0.5;
    &.discountPrice{
        opacity: 1;
        color: #DB4444;
    }
    &.realPrice{
        text-decoration: line-through;
    }
`

export const RatingBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ItemsRatingBox = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

export const Itemsreviews = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    opacity: 0.5;
`
