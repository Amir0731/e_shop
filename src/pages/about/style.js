import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Blackbgi from '../assets/backgroungBlack.svg'
import Whitebgi from '../assets/backgroundWhite.svg'

export const StoryWrapper = styled.div`
    padding: 80px 0 140px 273px;
`

export const Linkswrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    margin-bottom: 42px;
    &>p{
        color: rgba(0, 0, 0, 0.50);
    }
`

export const Links = styled(NavLink)`
    font-size: 14px;
    line-height: 21px;
    color: black;
    opacity: .5;
    text-decoration: none;
    &.active{
        opacity: 1;
    }
`

export const StoryBox = styled.div`
    display: flex;
    justify-content: space-between;
    /* gap: 75px; */
    align-items: center;
`

export const StoryinfoBox = styled.div`
    max-width: 525px;
`

export const StoryTitle = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 54px;
    font-weight: 600;
    line-height: 64px;
    letter-spacing: 3.24px;
`

export const StoryInfo = styled.p`
    color: #000;
    font-size: 16px;
    line-height: 26px;
    &.firstText{
        margin: 40px 0 24px;
    }
`

export const SalesInfoBoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`

export const SalesInfoBox = styled.div`
    padding-top: 30px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.30);
    cursor: pointer;
    transition: .3s;
    width: 270px;
    height: 230px;
    &:hover{
        background-color: red;
        color: white;
    }
    &:hover>.bgibox{
        background-image: url('${Whitebgi}');
    }
    &:hover>.bgibox>svg>g>path {
        stroke: black;
    }
    &>h1 {
        font-family: Inter;
        font-size: 32px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 1.28px;
        margin-bottom: 12px;
        margin-top: 24px;
    }
    &>p {
        font-size: 16px;
        line-height: 24px;
    }
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

export const ManagersWrapper = styled.div`
    margin-top: 140px;
`

export const ManagersBox = styled.div`
    display: flex;
    gap: 30px;
`

export const ManagersImgBox = styled.div`
    border-radius: 4px;
    background: #F5F5F5;
    width: 370px;
    height: 430px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const ManagersName = styled.h1`
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 1.28px;
    margin: 32px 0 8px;
`

export const ManagersJobTitle = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
`

export const WorkersSocialNetworkBox = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    &>svg>g>path {
        stroke: black;
    }
    &>.twitter>g>path {
        stroke-width: 1.5;
    }
    &>.in>g>path {
        fill: black;
    }
`

export const CirclesBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 40px 0 140px;
`

export const ServicesBox = styled.div`
    display: flex;
    gap: 88px;
    justify-content: center;
    padding-bottom: 140px;
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




