import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import djostik1 from '../images/djostik1.png'
import djostik2 from '../images/djostik2.png'
import djostik3 from '../images/djostik3.png'
import djostik4 from '../images/djostik4.png'
import djostik5 from '../images/djostik5.png'
import { ReactComponent as Star } from '../images/star.svg'
import { ReactComponent as EmptyStar } from '../images/emptystar.svg'
import { ReactComponent as YarimStar } from '../images/yarimYulduz.svg'
import { ReactComponent as BlueCircle } from '../images/bluecircle.svg'
import { ReactComponent as RedCircle } from '../images/crimsoncircle.svg'
import { ReactComponent as Minus } from '../images/minus.svg'
import { ReactComponent as Plus } from '../images/plus.svg'
import { ReactComponent as WishHeart } from '../images/wishheart.svg'
import { ReactComponent as Delivery } from '../images/delivery.svg'
import { ReactComponent as Return } from '../images/return.svg'
import gamepad from '../images/redgamepad.png'
import keyboard from '../images/keyboard.png'
import kalonka from '../images/kalonka.png'
import manitor from '../images/monitor.png'
import { ReactComponent as Category } from '../images/category.svg'
import { ReactComponent as Heart } from '../images/heart.svg'
import { ReactComponent as Eye } from '../images/eye.svg'
import { AboutItem, ActionBtn, ActionButtonsBox, AddToCardBtn, BuyBtn, ColorBox, ColorBoxBorder, ColorBoxWrapper, ColoursWrapper, Colourstitle, CountBox, CountText, CounterBox, DetailsLinks, DetailsLinksBox, DetailsWrapper, DiscountBox, DiscountText, ItemBigImgBox, ItemDetailsBox, ItemDetailsImgBox, ItemImgBox, ItemName, ItemPrice, ItemSmallImgBox, ItemSmallImgBoxsWrapper, Itembox, ItemsRatingBox, Itemsreviews, MinusCountBtn, OpportunityBox, OpportunityText, OpportunityTitle, Opportunitywrapper, OtherItemsBox, OtherItemsTitle, OtherItemsTitleWrapper, OtheritemName, PlusCountBtn, Prices, PricesWrapper, RatingBox, RealAndDiscountPriceBox, Salesbox, SizeBox, SizeText, SizesBigWrapper, SizesSmallWrapper, StarsWrapper, UserReviewsText, UsersDataWrapper, WishHeartBtn } from './style'
export default function DetailsPage() {
    const [itemCount, setItemCount] = useState(0)
    const [otherItemDatas, setotherItemDatas] = useState([
        { id: 1, src: gamepad, discount: 40, itemName: 'HAVIT HV-G92 Gamepad', realPrice: 160, rating: 3, reviews: 88 },
        { id: 2, src: keyboard, discount: 35, itemName: 'AK-900 Wired Keyboard', realPrice: 1160, rating: 4.8, reviews: 75 },
        { id: 3, src: manitor, discount: 30, itemName: 'IPS LCD Gaming Monitor', realPrice: 400, rating: 4, reviews: 99 },
        { id: 4, src: kalonka, discount: 0, itemName: 'RGB liquid CPU Cooler', realPrice: 170, rating: 4.6, reviews: 65 }
    ])

    const [detailsImg, setdetailsImg] = useState([djostik1, djostik2, djostik3, djostik4, djostik5])
    const [itemDetails, setItemDetails] = useState([
        { id: 1, itemName: 'Havic HV G-92 Gamepad', rating: 4.5, reviews: 150, instock: true, price: 192.00, aboutItem: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.', colours: ['#A0BCE0', '#E07575'], sizes: ['xs', 's', 'm', 'l', 'xl'] }
    ])

    function getrating(num) {
        const starList = []
        const emptyStarList = []
        const chalaStar = []
        let son;
        for (let i = 1; i <= num; i++) {
            son = 5 - num
            starList.push(<Star />)
        }
        if (son - Math.floor(son) <= 0.5 && son - Math.floor(son) > 0) {
            chalaStar.push(<YarimStar />)
        } else if (son - Math.floor(son) > 0.5 && son - Math.floor(son) > 0) {
            emptyStarList.push(<EmptyStar />)
        }

        for (let i = 1; i <= son; i++) {
            emptyStarList.push(<EmptyStar />)
        }
        let arr;
        arr = starList.concat(chalaStar, emptyStarList)
        arr.length = 5
        return arr
    }

    function getColours(coloursArr) {
        const colours = []
        const filteredColoursList = []
        for (let item of coloursArr) {
            if (!filteredColoursList.includes(item)) {
                filteredColoursList.push(item)
            }
        }
        for (let item of filteredColoursList) {
            colours.push(<ColorBoxBorder key={item}><ColorBox style={{ background: `${item}` }}></ColorBox></ColorBoxBorder>)
        }
        return colours
    }

    function addItem() {
        setItemCount(prev => prev + 1)
    }

    function minusItem() {
        if (itemCount > 0) {
            setItemCount(prev => prev - 1)
        }
    }

    function addWishList() {
        document.getElementById('wishHeart').classList.toggle('qushildi')
    }

    function changeImg(num) {
        setdetailsImg(prev => [...prev, prev[4] = prev[num]])
    }
    // console.log(detailsImg);

    return (
        <>
            <DetailsWrapper>
                <div className="container">
                    <DetailsLinksBox>
                        <DetailsLinks >
                            <NavLink to={'acount'}>Acount</NavLink>
                        </DetailsLinks>
                        <DetailsLinks>
                            /
                        </DetailsLinks>
                        <DetailsLinks>
                            <NavLink to={'/gaming'}> Gaming</NavLink>
                        </DetailsLinks>
                        <DetailsLinks>
                            /
                        </DetailsLinks>
                        <DetailsLinks>
                            <NavLink to={'/'}> Havic HV G-92 Gamepad</NavLink>
                        </DetailsLinks>
                    </DetailsLinksBox>

                    <ItemDetailsBox>
                        <ItemDetailsImgBox>
                            {
                                <>
                                    <ItemSmallImgBoxsWrapper>
                                        <ItemSmallImgBox>
                                            <img onClick={() => changeImg(0)} src={detailsImg[0]} alt="" />
                                        </ItemSmallImgBox>
                                        <ItemSmallImgBox>
                                            <img onClick={() => changeImg(1)} src={detailsImg[1]} alt="" />
                                        </ItemSmallImgBox>
                                        <ItemSmallImgBox>
                                            <img onClick={() => changeImg(2)} src={detailsImg[2]} alt="" />
                                        </ItemSmallImgBox>
                                        <ItemSmallImgBox>
                                            <img onClick={() => changeImg(3)} src={detailsImg[3]} alt="" />
                                        </ItemSmallImgBox>
                                    </ItemSmallImgBoxsWrapper>
                                    <ItemBigImgBox >
                                        <img onClick={() => changeImg(4)} src={detailsImg[4]} alt="" />
                                    </ItemBigImgBox>
                                </>
                            }
                        </ItemDetailsImgBox>

                        <div>
                            {
                                itemDetails.map(i =>
                                    <>
                                        <div key={i.id}>
                                            <ItemName>{i.itemName}</ItemName>
                                            <UsersDataWrapper >
                                                <StarsWrapper >
                                                    {
                                                        getrating(i.rating)
                                                    }
                                                </StarsWrapper>
                                                <UserReviewsText >({i.reviews} Reviews)  |  <span>{i.instock ? 'In Stock' : 'qomadi'}</span></UserReviewsText>
                                            </UsersDataWrapper>
                                        </div>

                                        <ItemPrice >${i.price}</ItemPrice>
                                        <AboutItem>{i.aboutItem}</AboutItem>

                                        <hr />

                                        <ColoursWrapper>
                                            <Colourstitle >Colours:</Colourstitle>
                                            <ColorBoxWrapper>
                                                {
                                                    getColours(i.colours)
                                                }
                                            </ColorBoxWrapper>
                                        </ColoursWrapper>

                                        <SizesBigWrapper>
                                            <Colourstitle>Size:</Colourstitle>
                                            <SizesSmallWrapper>
                                                {
                                                    i.sizes.map(item =>
                                                        <SizeBox>
                                                            <SizeText>{item}</SizeText>
                                                        </SizeBox>
                                                    )
                                                }
                                            </SizesSmallWrapper>
                                        </SizesBigWrapper>
                                    </>
                                )
                            }

                            <Salesbox>
                                <CounterBox>
                                    <MinusCountBtn onClick={minusItem}><Minus /></MinusCountBtn>
                                    <CountBox >
                                        <CountText>{itemCount}</CountText>
                                    </CountBox>
                                    <PlusCountBtn onClick={addItem}><Plus /></PlusCountBtn>
                                </CounterBox>
                                <BuyBtn>Buy Now</BuyBtn>
                                <WishHeartBtn onClick={addWishList}><WishHeart id='wishHeart' /></WishHeartBtn>
                            </Salesbox>

                            <Opportunitywrapper>
                                <OpportunityBox>
                                    <Delivery />
                                    <div>
                                        <OpportunityTitle>Free Delivery</OpportunityTitle>
                                        <OpportunityText className={'deliveryText'}>Enter your postal code for Delivery Availability</OpportunityText>
                                    </div>
                                </OpportunityBox>
                                <hr />
                                <OpportunityBox  >
                                    <Return />
                                    <div>
                                        <OpportunityTitle>Return Delivery</OpportunityTitle>
                                        <OpportunityText >Free 30 Days Delivery Returns. Details</OpportunityText>
                                    </div>
                                </OpportunityBox>
                            </Opportunitywrapper>
                        </div>
                    </ItemDetailsBox>

                    <OtherItemsTitleWrapper >
                        <Category />
                        <OtherItemsTitle >Related Item</OtherItemsTitle>
                    </OtherItemsTitleWrapper>

                    <OtherItemsBox >
                        {
                            otherItemDatas.map(item =>
                                <Itembox key={item.id}>
                                    <ItemImgBox style={{ backgroundImage: `url(${item.src})` }}>
                                        <ActionButtonsBox >
                                            <ActionBtn><Heart /></ActionBtn>
                                            <ActionBtn><Eye /></ActionBtn>
                                        </ActionButtonsBox>
                                        {
                                            item.discount > 0 ?
                                                <DiscountBox>
                                                    <DiscountText>-{item.discount}%</DiscountText>
                                                </DiscountBox>
                                                :
                                                null
                                        }
                                        <AddToCardBtn className={'addToCardBtn'}>Add To Cart</AddToCardBtn>
                                    </ItemImgBox>
                                    <OtheritemName>{item.itemName}</OtheritemName>
                                    <PricesWrapper>
                                        {
                                            item.discount > 0 ?
                                                <RealAndDiscountPriceBox >
                                                    <Prices className={'discountPrice'}>${item.realPrice - (item.realPrice / 100) * item.discount}</Prices>
                                                    <Prices className='realPrice'>${item.realPrice}</Prices>
                                                </RealAndDiscountPriceBox>
                                                :
                                                <Prices>${item.realPrice}</Prices>
                                        }
                                    </PricesWrapper>

                                    <RatingBox>
                                        <ItemsRatingBox>
                                            {
                                                getrating(item.rating)
                                            }
                                        </ItemsRatingBox>
                                        <Itemsreviews>({item.reviews})</Itemsreviews>
                                    </RatingBox>
                                </Itembox>
                            )
                        }
                    </OtherItemsBox>
                </div>
            </DetailsWrapper>
        </>
    )
}
