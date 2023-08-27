import React from "react";
import {
  NavbarCont,
  NavbarFooterCont,
  NavbarFooterLogo,
  NavbarFooterMainSearchCont,
  NavbarFooterMenu,
  NavbarFooterMenuItems,
  NavbarFooterSearchBtn,
  NavbarFooterSearchInp,
  NavbarFooterSearchInpCont,
  NavbarFooterSearchLinks,
  NavbarFooterSearchLinksCont,
  NavbarHeaderCont,
  NavbarHeaderLang,
  NavbarHeaderLink,
  NavbarHeaderTitle,
} from "./style";
import { ReactComponent as DropDown } from "../../assets/DropDown.svg";
import { ReactComponent as WishList } from "../../assets/Wishlist.svg";
import { ReactComponent as Cart } from "../../assets/Cart1.svg";
import { ReactComponent as User } from "../../assets/user.svg";

export default function Navbar() {
  return (
    <NavbarCont>
      <NavbarHeaderCont>
        <NavbarHeaderTitle>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <NavbarHeaderLink href="#">ShopNow</NavbarHeaderLink>
        </NavbarHeaderTitle>
        <NavbarHeaderLang>
          English
          <DropDown />
        </NavbarHeaderLang>
      </NavbarHeaderCont>
      <NavbarFooterCont>
        <NavbarFooterLogo>Exclusive</NavbarFooterLogo>
        <NavbarFooterMenu>
          <NavbarFooterMenuItems to={'/'}>Home</NavbarFooterMenuItems>
          <NavbarFooterMenuItems to={'/contact'}>Contact</NavbarFooterMenuItems>
          <NavbarFooterMenuItems to={'/about'}>About</NavbarFooterMenuItems>
          <NavbarFooterMenuItems to={'/register'}>Sign Up</NavbarFooterMenuItems>
        </NavbarFooterMenu>
        <NavbarFooterMainSearchCont>
          <NavbarFooterSearchInpCont>
            <NavbarFooterSearchInp
              type="search"
              placeholder="What are you looking for?"
            />
            <NavbarFooterSearchBtn />
          </NavbarFooterSearchInpCont>
          <NavbarFooterSearchLinksCont>
            <NavbarFooterSearchLinks to={'/wishlist'}>
              <WishList />
            </NavbarFooterSearchLinks>
            <NavbarFooterSearchLinks to={'/cart'}>
              <Cart />
            </NavbarFooterSearchLinks>
            <NavbarFooterSearchLinks to={'/account'}>
              <User />
            </NavbarFooterSearchLinks>
          </NavbarFooterSearchLinksCont>
        </NavbarFooterMainSearchCont>
      </NavbarFooterCont>
    </NavbarCont>
  );
}
