import React, { useState } from 'react'
import girls from '../../assets/girls.png'
import tom from '../../assets/tom.png'
import will from '../../assets/will.png'
import emma from '../../assets/emma.png'
import { ReactComponent as Store } from '../../assets/store.svg'
import { ReactComponent as Sac } from '../../assets/sac.svg'
import { ReactComponent as Sale } from '../../assets/sale.svg'
import { ReactComponent as Bag } from '../../assets/bag.svg'
import { ReactComponent as Twitter } from '../../assets/twiiter.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as In } from '../../assets/in.svg'
import { ReactComponent as EmptyCircle } from '../../assets/circle.svg'
import { ReactComponent as Circle } from '../../assets/paintedCrcle2.svg'
import { ReactComponent as Delivery } from '../../assets/delivery.svg'
import { ReactComponent as Naushnik } from '../../assets/naushnik.svg'
import { ReactComponent as Guarantee } from '../../assets/guarantee.svg'
import { BgiBox, CirclesBox, Links, Linkswrapper, ManagersBox, ManagersImgBox, ManagersJobTitle, ManagersName, ManagersWrapper, SalesInfoBox, SalesInfoBoxWrapper, ServicesBox, ServicesText, ServicesTitle, StoryBox, StoryInfo, StoryTitle, StoryWrapper, StoryinfoBox, WorkersSocialNetworkBox } from './style'
export default function About() {
  const [workers, setWorkers] = useState([
    { id: 1, name: 'Tom Cruise', jobTitle: 'Founder & Chairman', imgsrc: tom },
    { id: 2, name: 'Emma Watson', jobTitle: 'Managing Director', imgsrc: will },
    { id: 3, name: 'Will Smith', jobTitle: 'Product Designer', imgsrc: emma },
  ])
  return (
    <>
      <StoryWrapper >
        <Linkswrapper>
          <Links to={'/'}>Home</Links>
          <p>/</p>
          <Links to={'/about'}>About</Links>
        </Linkswrapper>
        <StoryBox >
          <StoryinfoBox>
            <StoryTitle>Our Story</StoryTitle>
            <StoryInfo className='firstText'>
              Launced in 2015, Exclusive is South Asia’s
              premier online shopping makterplace with an
              active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and
              service solutions, Exclusive has 10,500
              sallers and 300 brands and serves 3 millioons
              customers across the region.
            </StoryInfo>
            <StoryInfo>Exclusive has more than 1 Million products to
              offer, growing at a very fast. Exclusive offers
              a diverse assotment in categories ranging
              from consumer.
            </StoryInfo>
          </StoryinfoBox>
          <div>
            <img src={girls} alt="img" />
          </div>
        </StoryBox>
      </StoryWrapper>

      <div className="container">
        <SalesInfoBoxWrapper>
          <SalesInfoBox>
            <BgiBox className='bgibox'>
              <Store />
            </BgiBox>
            <h1>10.5k </h1>
            <p>Sallers active our site</p>
          </SalesInfoBox>
          <SalesInfoBox>
            <BgiBox className='bgibox'>
              <Sale />
            </BgiBox>
            <h1>33k </h1>
            <p>Mopnthly Produduct Sale</p>
          </SalesInfoBox>
          <SalesInfoBox>
            <BgiBox className='bgibox'>
              <Bag />
            </BgiBox>
            <h1>45.5k </h1>
            <p>Customer active in our site</p>
          </SalesInfoBox>
          <SalesInfoBox>
            <BgiBox className='bgibox'>
              <Sac />
            </BgiBox>
            <h1>25k </h1>
            <p>Anual gross sale in our site</p>
          </SalesInfoBox>
        </SalesInfoBoxWrapper>
      </div>

      <ManagersWrapper>
        <div className="container">
          <ManagersBox >
            {
              workers.map(item =>
                <div key={item.id}>
                  <ManagersImgBox>
                    <img src={item.imgsrc} alt="picture" />
                  </ManagersImgBox>
                  <ManagersName>{item.name}</ManagersName>
                  <ManagersJobTitle>{item.jobTitle}</ManagersJobTitle>
                  <WorkersSocialNetworkBox>
                    <Twitter className='twitter' />
                    <Instagram />
                    <In className='in' />
                  </WorkersSocialNetworkBox>
                </div>
              )
            }
          </ManagersBox>
          <CirclesBox>
            <EmptyCircle />
            <EmptyCircle />
            <Circle />
            <EmptyCircle />
            <EmptyCircle />
          </CirclesBox>
        </div>
      </ManagersWrapper>

      <ServicesBox>
        <div>
          <BgiBox className='bgibox'>
            <Delivery />
          </BgiBox>
          <ServicesTitle>FREE AND FAST DELIVERY</ServicesTitle>
          <ServicesText>Free delivery for all orders over $140</ServicesText>
        </div>
        <div>
          <BgiBox className='bgibox'>
            <Naushnik />
          </BgiBox>
          <ServicesTitle>24/7 CUSTOMER SERVICE</ServicesTitle>
          <ServicesText>Friendly 24/7 customer support</ServicesText>
        </div>
        <div>
          <BgiBox className='bgibox'>
            <Guarantee />
          </BgiBox>
          <ServicesTitle>MONEY BACK GUARANTEE</ServicesTitle>
          <ServicesText>We reurn money within 30 days</ServicesText>
        </div>
      </ServicesBox>
    </>
  )
}
