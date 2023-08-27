import React, { useState } from "react";
import { ActionBtn, ActionButtonsBox, AddToCardBtn, BasicTxt20, Body, Btn, Category, DiscountBox, DiscountText, Frame778, ItemImgBox, Itembox, ItemsRatingBox, Itemsreviews, OtherItemsBox, OtheritemName, Prices, PricesWrapper, RatingBox, RealAndDiscountPriceBox, Roadmap,} from "./style";
import bag from "../../assets/thumbnail/Gucci_Bag.png";
import cooler from "../../assets/thumbnail/Water_cool.png";
import controller from "../../assets/thumbnail/Big_Controller.png";
import jacket from "../../assets/thumbnail/jacket.png";
import laptop from "../../assets/thumbnail/Laptop.png"
import monitor from "../../assets/thumbnail/Monitor.png"
import gamepad from "../../assets/thumbnail/Gamepad.png"
import keyboard from "../../assets/thumbnail/Keyboard.png"
import { ReactComponent as IconBucket } from "../../assets/icon-delete.svg";
import { ReactComponent as IconEye } from "../../assets/eye.svg";
import { ReactComponent as Rentagle } from "../../assets/CategoryRectangle.svg";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as YarimStar } from "../../assets/YarimStar.svg";
import { ReactComponent as EmptyStar } from "../../assets/EptyStar.svg";

export default function Wishlist() {
  const [otherItemDatas, setotherItemDatas] = useState([
    { id: 1, src: bag, discount: 35, itemName: "Gucci duffle bag", realPrice: 1160},
    { id: 2, src: cooler, discount: 0, itemName: "RGB liquid CPU Cooler", realPrice: 1960},
    { id: 3, src: controller, discount: 0, itemName: "GP11 Shooter USB Gamepad", realPrice: 550},
    { id: 4, src: jacket, discount: 0, itemName: "Quilted Satin Jacket", realPrice: 750}
  ]);
  
  const [RatingDatas, setRatingDatas] = useState([
    { id: 1, src: laptop, discount: 35, itemName: "ASUS FHD Gaming Laptop", realPrice: 1160, rating: 5, reviews: 65},
    { id: 2, src: monitor, discount: 0, itemName: "IPS LCD Gaming Monitor", realPrice: 1160, rating: 5, reviews: 65},
    { id: 3, src: gamepad, discount: 0, itemName: "HAVIT HV-G92 Gamepad", realPrice: 560, rating: 5, reviews: 65},
    { id: 4, src: keyboard, discount: 0, itemName: "AK-900 Wired Keyboard", realPrice: 200, rating: 5, reviews: 65}
  ]);

  function getrating(num) {
    const starList = [];
    const emptyStarList = [];
    const chalaStar = [];
    let son;
    for (let i = 1; i <= num; i++) {
      son = 5 - num;
      starList.push(<Star />);
    }
    if (son - Math.floor(son) <= 0.5 && son - Math.floor(son) > 0) {
      chalaStar.push(<YarimStar />);
    } else if (son - Math.floor(son) > 0.5 && son - Math.floor(son) > 0) {
      emptyStarList.push(<EmptyStar />);
    }

    for (let i = 1; i <= son; i++) {
      emptyStarList.push(<EmptyStar />);
    }
    let arr;
    arr = starList.concat(chalaStar, emptyStarList);
    arr.length = 5;
    return arr;
  }

  return (
    <Body>
      <Frame778>
        <Roadmap>
          <BasicTxt20>Wishlist (4)</BasicTxt20>
          <Btn>Move All To Bag</Btn>
        </Roadmap>
        <OtherItemsBox>
          {otherItemDatas.map((item) => (
            <Itembox key={item.id}>
              <ItemImgBox style={{ backgroundImage: `url(${item.src})` }}>
                <ActionButtonsBox>
                  <ActionBtn>
                    <IconBucket />
                  </ActionBtn>
                </ActionButtonsBox>
                {item.discount > 0 ? (
                  <DiscountBox>
                    <DiscountText>-{item.discount}%</DiscountText>
                  </DiscountBox>
                ) : null}
              </ItemImgBox>
              <AddToCardBtn className={"addToCardBtn"}>
                Add To Cart
              </AddToCardBtn>
              <OtheritemName>{item.itemName}</OtheritemName>
              <PricesWrapper>
                {item.discount > 0 ? (
                  <RealAndDiscountPriceBox>
                    <Prices className={"discountPrice"}>
                      ${item.realPrice - (item.realPrice / 100) * item.discount}
                    </Prices>
                    <Prices className="realPrice">${item.realPrice}</Prices>
                  </RealAndDiscountPriceBox>
                ) : (
                  <Prices>${item.realPrice}</Prices>
                )}
              </PricesWrapper>
            </Itembox>
          ))}
        </OtherItemsBox>
      </Frame778>
      <Frame778>
        <Roadmap>
          <Category>
            <Rentagle />
            <BasicTxt20>Just For You</BasicTxt20>
          </Category>
          <Btn>See All</Btn>
        </Roadmap>
        <OtherItemsBox>
          {RatingDatas.map((item) => (
            <Itembox key={item.id}>
              <ItemImgBox style={{ backgroundImage: `url(${item.src})` }}>
                <ActionButtonsBox>
                  <ActionBtn>
                    <IconEye />
                  </ActionBtn>
                </ActionButtonsBox>
                {item.discount > 0 ? (
                  <DiscountBox>
                    <DiscountText>-{item.discount}%</DiscountText>
                  </DiscountBox>
                ) : null}
              </ItemImgBox>
              <AddToCardBtn className={"addToCardBtn"}>
                Add To Cart
              </AddToCardBtn>
              <OtheritemName>{item.itemName}</OtheritemName>
              <PricesWrapper>
                {item.discount > 0 ? (
                  <RealAndDiscountPriceBox>
                    <Prices className={"discountPrice"}>
                      ${item.realPrice - (item.realPrice / 100) * item.discount}
                    </Prices>
                    <Prices className="realPrice">${item.realPrice}</Prices>
                  </RealAndDiscountPriceBox>
                ) : (
                  <Prices>${item.realPrice}</Prices>
                )}
              </PricesWrapper>

              <RatingBox>
                <ItemsRatingBox>{getrating(item.rating)}</ItemsRatingBox>
                <Itemsreviews>({item.reviews})</Itemsreviews>
              </RatingBox>
            </Itembox>
          ))}
        </OtherItemsBox>
      </Frame778>
    </Body>
  );
}
