import React from "react";
import {
  BasicTxt14,
  BasicTxt14Opacity,
  BasicTxt14Red,
  BasicTxt16,
  BasicTxt16Bold,
  BasicTxt16Opacity,
  BasicTxt16Red,
  BasicTxt20BoldRed,
  Body,
  Btn,
  Btns,
  EditDiv,
  Gap24,
  Inp,
  InpsDiv,
  JCSB,
  LeftRoadmap,
  MiniInpDiv,
  NameFrame,
  PasswordDiv,
  RightRoadmap,
  RoadmapJC,
  SBMenu,
  Sidebar,
  WhiteBtn,
} from "./style";

export default function Account() {
  return (
    <Body>
      <RoadmapJC>
        <LeftRoadmap>
          <BasicTxt14Opacity>Home</BasicTxt14Opacity>
          <BasicTxt14Opacity>/</BasicTxt14Opacity>
          <BasicTxt14>My Account</BasicTxt14>
        </LeftRoadmap>
        <RightRoadmap>
          <BasicTxt14>Welcome!</BasicTxt14>
          <BasicTxt14Red> Md Rimel</BasicTxt14Red>
        </RightRoadmap>
      </RoadmapJC>
      <JCSB>
        <Sidebar>
          <BasicTxt16Bold>Manage My Account</BasicTxt16Bold>
          <SBMenu>
            <BasicTxt16Red>My Profile</BasicTxt16Red>
            <BasicTxt16Opacity>Address Book</BasicTxt16Opacity>
            <BasicTxt16Opacity>My Payment Options</BasicTxt16Opacity>
          </SBMenu>
          <BasicTxt16Bold>My Orders</BasicTxt16Bold>
          <SBMenu>
            <BasicTxt16Opacity>My Returns</BasicTxt16Opacity>
            <BasicTxt16Opacity>My Cancellations</BasicTxt16Opacity>
          </SBMenu>
          <BasicTxt16Bold>My WishList</BasicTxt16Bold>
        </Sidebar>
        <EditDiv>
          <BasicTxt20BoldRed>Edit Your Profile</BasicTxt20BoldRed>
          <Gap24>
            <NameFrame>
              <MiniInpDiv>
                <BasicTxt16>First Name</BasicTxt16>
                <Inp placeholder="Md" />
              </MiniInpDiv>
              <MiniInpDiv>
                <BasicTxt16>Last Name</BasicTxt16>
                <Inp placeholder="Rimel" />
              </MiniInpDiv>
            </NameFrame>
            <NameFrame>
              <MiniInpDiv>
                <BasicTxt16>Email </BasicTxt16>
                <Inp type="email" placeholder="rimel1111@gmail.com" />
              </MiniInpDiv>
              <MiniInpDiv>
                <BasicTxt16>Address</BasicTxt16>
                <Inp placeholder="Kingston, 5236, United State" />
              </MiniInpDiv>
            </NameFrame>
            <PasswordDiv>
              <BasicTxt16>Password Changes</BasicTxt16>
              <InpsDiv>
                <Inp type="password" placeholder="Current Passwod" />
                <Inp type="password" placeholder="New Passwod" />
                <Inp type="password" placeholder="Confirm New Passwod" />
              </InpsDiv>
            </PasswordDiv>
            <Btns>
              <Btn>Save Changes</Btn>
              <WhiteBtn>Cancel</WhiteBtn>
            </Btns>
          </Gap24>
        </EditDiv>
      </JCSB>
    </Body>
  );
}
