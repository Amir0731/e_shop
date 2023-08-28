import React, { useState } from 'react'
import { ReactComponent as RedIcon } from '../../images/todaysIcon.svg'
import { ReactComponent as ArrowLeft } from '../../images/icons_arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../images/icons arrow-right.svg'
import { ReactComponent as Iphone } from '../../images/Category-CellPhone.svg'
import { ReactComponent as Computer } from '../../images/Category-Computer.svg'
import { ReactComponent as SmartWatch } from '../../images/Category-SmartWatch.svg'
import { ReactComponent as Kamera } from '../../images/Category-Camera.svg'
import { ReactComponent as HeadPhones } from '../../images/Category-Headphone.svg'
import { ReactComponent as Gaming } from '../../images/Category-Gamepad.svg'
import { ReactComponent as StarIcon } from '../../images/star.svg'
import { ReactComponent as EmptyStar } from '../../images/star-empty.svg'
import { ReactComponent as YarimStar } from '../../images/yarimstar.svg'
import { ReactComponent as AdvShopIcon } from '../../images/adv arrow-right.svg'
import { ReactComponent as ArrowUp } from '../../images/arrow-up.svg'
import { ReactComponent as Heartfull } from '../../images/heartfull.svg'
import { ReactComponent as HeartEmpty } from '../../images/heart small.svg'
import { ELEKTRONIK, EXPLORE } from './electronik'
import noutbuk from '../../images/noutbuk.png'
import boombox from '../../images/boombox.png'
import advIphone from '../../images/adv-phone.png'
import apple from '../../images/apple.png'
import ps5 from '../../images/ps5.png'
import women from '../../images/women.png'
import speakers from '../../images/speakers.png'
import perfume from '../../images/perfume.png'
import AdvImgItem from './advImg'
import { AllProducts, ArrowCircle, ArrowCont, Box, BoxCircle, ButtonChegirma, Card, CardCont, CardTitle, CircleDiv, CircleIcons, Container, Eye, FlashSalesDiv, FlashSalesText, HeartSmall, NewPrice, OldPrice, PriceDiv, Star, TimeDiv, TimeNum, TimeNumDiv, TimeText, TimeTextDiv, RedText, RedTextDiv, Line, TwoDot, BrowseCategoryCont, BrowseCategory, AddToCart, CategoryCard, CategoryCont, ItemCont, ItemText, Advertising, AdvCategories, AdvTitle, AdvCont, BoomboxImg, AdvCircleCont, AdvCircle, AdvCircleText, AdvCircleTime, AdvBuyNow, NewItem, PriceStar, CardExpTitle, StarDiv, ColorDiv, ColorSvg1, ColorSvg2, TopAdv, TopAdvText, TopAdvLine, TopAdvDiv, TopTextDiv, AppleImg, AppleText, TopAdvTitle, IphoneText, Voucher, ShopIcon, AdvShopNow, CircleArrowUp, NewArrival, ArrivalCont, ArrivalDiv, PlayStation5, ArrivalText, ArrivalShopNow, ArrivalDiv2, ArrivalCont2, ArrivalDiv3, ArrivalDiv4, ArrivalCont3, ArrivalShopNow2, ArrivalDivText2, ArrivalDivTitle2, ArrivalDivTitle3, ArrivalDivText3, ArrivalShopNow3 } from './style'

export default function Home() {

  const [advImg, setAdvImg] = useState([
    { id: 1, src: noutbuk, checked: true },
    { id: 2, src: advIphone, checked: false }
  ])

  function onChecked(obj) {
    setAdvImg(prev => prev.map(item => item.id === obj.id ? { ...item, checked: true } : { ...item, checked: false }))
  }

  function getrating(num) {
    const starList = []
    const emptyStarList = []
    const chalaStar = []
    let son;
    for (let i = 1; i <= num; i++) {
      son = 5 - num
      starList.push(<StarIcon />)
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

  return (
    <Container>
      <TopAdv>
        <TopTextDiv>
          <TopAdvText>Phones</TopAdvText>
          <TopAdvText>Computers</TopAdvText>
          <TopAdvText>Smart watch</TopAdvText>
          <TopAdvText>Camera</TopAdvText>
          <TopAdvText>Head phones</TopAdvText>
          <TopAdvText>Gaming</TopAdvText>
        </TopTextDiv>
        <TopAdvLine></TopAdvLine>
        <TopAdvDiv>
          <TopAdvTitle>
            <AppleText>
              <AppleImg src={apple} />
              <IphoneText>iPhone 14 Series</IphoneText>
            </AppleText>
            <Voucher>Up to 10% <br />off Voucher</Voucher>
            <ShopIcon>
              <AdvShopNow to={'#'}>Shop Now</AdvShopNow>
              <AdvShopIcon />
            </ShopIcon>
          </TopAdvTitle>
          {
            advImg.map(item => <AdvImgItem key={item.id} img={item} onChecked={onChecked} />)
          }
        </TopAdvDiv>
      </TopAdv>
      <RedTextDiv>
        <RedIcon />
        <RedText>Today’s</RedText>
      </RedTextDiv>
      <FlashSalesDiv>
        <FlashSalesText>Flash Sales</FlashSalesText>
        <TimeDiv>
          <TimeTextDiv>
            <TimeText>Days</TimeText>
            <TimeText>Hours</TimeText>
            <TimeText>Minutes</TimeText>
            <TimeText>Seconds</TimeText>
          </TimeTextDiv>
          <TimeNumDiv>
            <TimeNum>03</TimeNum>
            <TwoDot>:</TwoDot>
            <TimeNum>23</TimeNum>
            <TwoDot>:</TwoDot>
            <TimeNum>19</TimeNum>
            <TwoDot>:</TwoDot>
            <TimeNum>56</TimeNum>
          </TimeNumDiv>
        </TimeDiv>
        <ArrowCont>
          <ArrowCircle>
            <ArrowLeft />
          </ArrowCircle>
          <ArrowCircle>
            <ArrowRight />
          </ArrowCircle>
        </ArrowCont>
      </FlashSalesDiv>
      <CardCont>
        {ELEKTRONIK.map((elektronik) =>
          <Card key={elektronik.id}>
            <Box style={{ backgroundImage: `url(${elektronik.img})` }}>
              <ButtonChegirma>{elektronik.buttonChegirma}</ButtonChegirma>
              <CircleDiv>
                <CircleIcons>
                  <BoxCircle>
                    <HeartEmpty />
                  </BoxCircle>
                  <BoxCircle>
                    <Eye src={elektronik.eye} />
                  </BoxCircle>
                </CircleIcons>
              </CircleDiv>
              <AddToCart>Add To Cart</AddToCart>
            </Box>
            <CardTitle>{elektronik.title}</CardTitle>
            <PriceDiv>
              <NewPrice>${elektronik.newPrice}</NewPrice>
              <OldPrice>${elektronik.oldPrice}</OldPrice>
            </PriceDiv>
            <StarDiv>
              {
                getrating(elektronik.star)
              }
            </StarDiv>
          </Card>
        )}
      </CardCont>
      <AllProducts>View All Products</AllProducts>
      <Line></Line>
      <RedTextDiv>
        <RedIcon />
        <RedText>Categories</RedText>
      </RedTextDiv>
      <BrowseCategoryCont>
        <BrowseCategory>Browse By Category</BrowseCategory>
        <ArrowCont>
          <ArrowCircle>
            <ArrowLeft />
          </ArrowCircle>
          <ArrowCircle>
            <ArrowRight />
          </ArrowCircle>
        </ArrowCont>
      </BrowseCategoryCont>
      <CategoryCont>
        <CategoryCard>
          <ItemCont>
            <Iphone stroke='black' />
          </ItemCont>
          <ItemText>Iphone</ItemText>
        </CategoryCard>
        <CategoryCard>
          <ItemCont>
            <Computer stroke='black' />
          </ItemCont>
          <ItemText>Computers</ItemText>
        </CategoryCard>
        <CategoryCard>
          <ItemCont>
            <SmartWatch stroke='black' />
          </ItemCont>
          <ItemText>SmartWatch</ItemText>
        </CategoryCard>
        <CategoryCard>
          <ItemCont>
            <Kamera stroke='black' />
          </ItemCont>
          <ItemText>Camera</ItemText>
        </CategoryCard>
        <CategoryCard>
          <ItemCont>
            <HeadPhones stroke='black' />
          </ItemCont>
          <ItemText>HeadPhones</ItemText>
        </CategoryCard>
        <CategoryCard>
          <ItemCont>
            <Gaming stroke='black' />
          </ItemCont>
          <ItemText>Gaming</ItemText>
        </CategoryCard>
      </CategoryCont>
      <Advertising>
        <AdvCont>
          <AdvCategories>Categories</AdvCategories>
          <AdvTitle>Enhance Your <br /> Music Experience</AdvTitle>
          <AdvCircleCont>
            <AdvCircle>
              <AdvCircleText>05</AdvCircleText>
              <AdvCircleTime>Days</AdvCircleTime>
            </AdvCircle>
            <AdvCircle>
              <AdvCircleText>23</AdvCircleText>
              <AdvCircleTime>Hours</AdvCircleTime>
            </AdvCircle>
            <AdvCircle>
              <AdvCircleText>59</AdvCircleText>
              <AdvCircleTime>Minutes</AdvCircleTime>
            </AdvCircle>
            <AdvCircle>
              <AdvCircleText>35</AdvCircleText>
              <AdvCircleTime>Seconds</AdvCircleTime>
            </AdvCircle>
          </AdvCircleCont>
          <AdvBuyNow>Buy Now!</AdvBuyNow>
        </AdvCont>
        <BoomboxImg src={boombox} />
      </Advertising>
      <RedTextDiv>
        <RedIcon />
        <RedText>Our Products</RedText>
      </RedTextDiv>
      <FlashSalesDiv>
        <FlashSalesText>Explore Our Products</FlashSalesText>
        <ArrowCont>
          <ArrowCircle>
            <ArrowLeft />
          </ArrowCircle>
          <ArrowCircle>
            <ArrowRight />
          </ArrowCircle>
        </ArrowCont>
      </FlashSalesDiv>
      <CardCont>
        {EXPLORE.map((explore) =>
          <Card key={explore.id}>
            <Box style={{ backgroundImage: `url(${explore.expImg})` }}>
              <NewItem>{explore.new}</NewItem>
              <CircleDiv>
                <CircleIcons>
                  <BoxCircle>
                    <HeartSmall src={explore.heartSmall} />
                  </BoxCircle>
                  <BoxCircle>
                    <Eye src={explore.eye} />
                  </BoxCircle>
                </CircleIcons>
              </CircleDiv>
              <AddToCart>Add To Cart</AddToCart>
            </Box>
            <CardExpTitle>{explore.title}</CardExpTitle>
            <PriceStar>
              <PriceDiv>
                <NewPrice>${explore.price}</NewPrice>
                <StarDiv>
                  {
                    getrating(explore.star)
                  }
                </StarDiv>
              </PriceDiv>
              <StarDiv>
                <Star src={explore.star1} />
                <Star src={explore.star2} />
                <Star src={explore.star3} />
                <Star src={explore.star4} />
                <Star src={explore.star5} />
              </StarDiv>
            </PriceStar>

          </Card>
        )}
      </CardCont>
      <AllProducts>View All Products</AllProducts>
      <RedTextDiv>
        <RedIcon />
        <RedText>Featured</RedText>
      </RedTextDiv>
      <NewArrival>New Arrival</NewArrival>
      <ArrivalCont>
        <ArrivalDiv style={{ backgroundImage: `url(${ps5})` }}>
          <PlayStation5>PlayStation 5</PlayStation5>
          <ArrivalText>Black and White version of the PS5 <br /> coming out on sale.</ArrivalText>
          <ArrivalShopNow>Shop Now</ArrivalShopNow>
        </ArrivalDiv>
        <ArrivalCont2>
          <ArrivalDiv2 style={{ backgroundImage: `url(${women})` }}>
            <ArrivalDivTitle2>Women’s Collections</ArrivalDivTitle2>
            <ArrivalDivText2>Featured woman collections that <br /> give you another vibe.</ArrivalDivText2>
            <ArrivalShopNow2>Shop Now</ArrivalShopNow2>
          </ArrivalDiv2>
          <ArrivalCont3>
            <ArrivalDiv3 style={{ backgroundImage: `url(${speakers})` }}>
              <ArrivalDivTitle3>Speakers</ArrivalDivTitle3>
              <ArrivalDivText3>Amazon wireless speakers</ArrivalDivText3>
              <ArrivalShopNow3>Shop Now</ArrivalShopNow3>
            </ArrivalDiv3>
            <ArrivalDiv4 style={{ backgroundImage: `url(${perfume})` }}>
              <ArrivalDivTitle3>Perfume</ArrivalDivTitle3>
              <ArrivalDivText3>GUCCI INTENSE OUD EDP</ArrivalDivText3>
              <ArrivalShopNow3>Shop Now</ArrivalShopNow3>
            </ArrivalDiv4>
          </ArrivalCont3>
        </ArrivalCont2>
      </ArrivalCont>
      <CircleArrowUp>
        <ArrowUp />
      </CircleArrowUp>
    </Container>
  )
}