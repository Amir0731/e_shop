import styled from "styled-components";
import { Link } from "react-router-dom";
import Blackbgi from '../../assets/backgroungBlack.svg'
import Whitebgi from '../../assets/backgroundWhite.svg'

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`
export const TopAdv = styled.div`
    display: flex;
`
export const TopTextDiv = styled.div``
export const TopAdvText = styled.p`
    color: #000;
    margin-top: 40px;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;
`
export const TopAdvLine = styled.div`
    width: 0.5px;
    height: 384px;
    opacity: 0.3;
    margin-left: auto;
    background: #000; 
`
export const TopAdvDiv = styled.div`
    width: 892px;
    height: 344px;
    background: #000;
    margin-top: 40px;
    margin-left: 45px;
    display: flex;
    align-items: center;
`
export const TopAdvTitle = styled.div`
    padding-left: 64px;
`
export const AppleText = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`
export const AppleImg = styled.img``
export const IphoneText = styled.p`
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`
export const Voucher = styled.p`
    color: #FAFAFA;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 1.92px;
    padding-top: 20px;
`
export const ShopIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 22px;
`
export const AdvShopNow = styled(Link)`
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`
export const TopAdvImg = styled.img``
export const Buttons = styled.div``
export const InputRadio = styled.input``
export const RedTextDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 80px;
`
export const RedText = styled.h3`
    color: #DB4444;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
`
export const FlashSalesDiv = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 87px;
    margin-top: 13px;
`
export const FlashSalesText = styled.h3`
    color: #000;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 1.44px;
`
export const TimeDiv = styled.div``
export const TimeTextDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TwoDot = styled.h1`
    color: #E07575;
`
export const TimeNumDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
`
export const TimeText = styled.p`
    padding-bottom: 4px;
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
`
export const TimeNum = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 1.28px;
`
export const ArrowCont = styled.div`
    display: flex;
    gap: 8px;
    margin-left: auto;
`
export const ArrowCircle = styled.div`
    width: 46px;
    height: 46px;
    background-color: #F5F5F5;
    border-radius: 50%;
    padding: 11px;
`
export const CardCont = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    gap: 30px;
`
export const Card = styled.div``
export const CardImg = styled.img``
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 0;
    width: 270px;
    height: 250px;
    border-radius: 4px;
    background: #F5F5F5;
    overflow: hidden;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    &:hover > button {
        transition: .5s;
        transform: translateY(0%);
    }
`
export const AddToCart = styled.button`
    width: 270px;
    height: 41px;
    border-radius: 0px 0px 4px 4px;
    background: #000;
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    border: none;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    transform: translateY(100%);
`
export const BoxCircle = styled.div`
    width: 34px;
    border-radius: 50%;
    height: 34px;
    margin-bottom: 8px;
    background-color: #FFF;
`
export const CircleDiv = styled.div`
    display: flex;
`
export const CircleIcons = styled.div``
export const HeartSmall = styled.img`
    padding: 5px;
`
export const Eye = styled.img`
    padding: 7px;
`
export const ButtonChegirma = styled.button`
    border-radius: 4px;
    background: #DB4444;
    border: none; 
    padding: 4px 12px;
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    height: max-content;
`
export const CardTitle = styled.h3`
    color: #000;
    padding-top: 16px;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`
export const PriceDiv = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
`
export const NewPrice = styled.p`
    color: #DB4444;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`
export const OldPrice = styled.p`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration: line-through;
    opacity: 0.5;
`
export const Star = styled.img``
export const AllProducts = styled.button`
    padding: 16px 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px auto;
    border-radius: 4px;
    background: #DB4444;
    color:  #FAFAFA;
    border: none;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`
export const Line = styled.div`
    width: 1170px;
    height: 1px;
    opacity: 0.3;
    background: #000;
`
export const BrowseCategoryCont = styled.div`
    display: flex;
    padding-top: 22px;
`
export const BrowseCategory = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 1.44px;
`
export const CategoryCont = styled.div`
    margin-top: 60px;
    gap: 30px;
    display: flex;
    align-items: center;
`
export const CategoryCard = styled.div`
    width: 170px;
    height: 145px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.30);

    &:hover {
        background: #DB4444;
        box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    }
    &:hover > div > svg{
        stroke: white;
    }
    &:hover > p {
        color: white;
    }
`
export const ItemCont = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ItemText = styled.p`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-top: 16px;
    text-align: center;
`
export const Advertising = styled.div`
    width: 1170px;
    height: 500px;
    background-color: #000;
    margin-top: 140px;
    display: flex;
    align-items: center;
`
export const AdvCont = styled.div``
export const AdvCategories = styled.p`
    color: #0F6;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 0 0 32px 56px;
`
export const AdvTitle = styled.h3`
    color: #FAFAFA;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 1.92px;
    padding: 0 43px 32px 56px;
`
export const BoomboxImg = styled.img`
    margin-top: 82px;
    &::before  {
        content: '';
        background: lightgray -99.767px -240.854px / 135.847% 234.327% no-repeat;
        /* opacity: 0.48; */
        /* filter: blur(67.957px); */
        /* position: absolute; */
    }
`
export const AdvCircleCont = styled.div`
    display: flex;
    align-items: center;
    margin-left: 56px;
    gap: 24px;
`
export const AdvCircle = styled.div`
    width: 62px;
    height: 62px;
    background: #fff;
    border-radius: 50%;
`
export const AdvCircleText = styled.h5`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    padding-top: 14px;
`
export const AdvCircleTime = styled.p`
    color: #000;
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
`
export const AdvBuyNow = styled.button`
    border-radius: 4px;
    background: #0F6;
    padding: 16px 48px;
    border: none;
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 40px 0 0 56px;
`
export const NewItem = styled.div`
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    border-radius: 4px;
    padding: 4px 12px;
    background: #0F6;
    height: max-content;
`
export const PriceStar = styled.div`
    display: flex;
    align-items: start;
    gap: 8px;
`
export const CardExpTitle = styled.h1`
    padding-top: 16px;
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`
export const StarDiv = styled.div`
    display: flex;
    align-items: center;
`
export const CircleArrowUp = styled.div`
    width: 46px;
    height: 46px;
    background: #f5f5f5;
    margin-top: 62px;
    margin-left: calc(100vw * 0.9);
    margin-bottom: 32px;
    border-radius: 50%;
    padding: 11px;
`
export const NewArrival = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 1.44px;
    padding-top: 20px;
`
export const ArrivalCont = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 60px;
`
export const ArrivalDiv = styled.div`
    width: 570px;
    height: 600px;
    border-radius: 4px;
    background: #000;
    background-repeat: no-repeat;
    background-position: top 89px left 29px;
`
export const PlayStation5 = styled.h4`
    color: #FAFAFA;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.72px;
    padding: 446px 0 0 32px;
`
export const ArrivalText = styled.p`
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    padding: 16px 0 16px 32px;
`
export const ArrivalShopNow = styled(Link)`
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding-left: 32px;
`
export const ArrivalDiv2 = styled.div`
    width: 570px;
    height: 284px;
    border-radius: 4px;
    background: #0D0D0D;
    background-repeat: no-repeat;
    background-position: top 0 left 138px;
`
export const ArrivalDivTitle2 = styled.h4`
    color: #FAFAFA;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.72px;
    padding: 138px 0 0 24px;
`
export const ArrivalDivText2 = styled.p`
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    padding: 16px 0 16px 24px;
`
export const ArrivalShopNow2 = styled(Link)`
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding-left: 24px;
`
export const ArrivalCont2 = styled.div`
`
export const ArrivalCont3 = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 30px;
`
export const ArrivalDiv3 = styled.div`
    width: 270px;
    height: 284px;
    border-radius: 4px;
    background: #000;
    background-repeat: no-repeat;
    background-position: top 31px left 40px;
`
export const ArrivalDivTitle3 = styled.h4`
    color: #FAFAFA;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.72px;
    padding: 175px 0 0 24px;
`
export const ArrivalDivText3 = styled.p`
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    padding: 8px 0 8px 24px;
`
export const ArrivalShopNow3 = styled(Link)`
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding-left: 24px;
`
export const ArrivalDiv4 = styled.div`
    width: 270px;
    height: 284px;
    border-radius: 4px;
    background: #000;
    background-repeat: no-repeat;
    background-position: top 38px left 34px;
`


export const ServicesBox = styled.div`
    display: flex;
    gap: 88px;
    justify-content: center;
    margin-top: 140px;
`

export const ServicesTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin: 24px 0 8px;
`

export const ServicesText = styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 21px;
`

export const BgiBox = styled.div`
    width: 80px;
    height: 80px;
    background-image: url('${Blackbgi}');
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
