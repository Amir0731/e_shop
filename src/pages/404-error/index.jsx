import React from "react";
import {
  ErrorCont,
  ErrorMainCont,
  ErrorPageCont,
  ErrorPageTitle,
  ErrorPageTitleBtn,
  ErrorPageTitleDesc,
  ErrorTitleCont,
  ErrorTitleContDesc,
  ErrorTitleContTxt,
} from "./style";


export default function ErrorPage() {
  return (
    <ErrorMainCont>
      <ErrorCont>
        <ErrorTitleCont>
          <ErrorTitleContDesc>Home</ErrorTitleContDesc>
          <ErrorTitleContDesc>/</ErrorTitleContDesc>
          <ErrorTitleContTxt>404 Error</ErrorTitleContTxt>
        </ErrorTitleCont>
        <ErrorPageCont>
          <ErrorPageTitle>404 Not Found</ErrorPageTitle>
          <ErrorPageTitleDesc>
            Your visited page not found. You may go home page.
          </ErrorPageTitleDesc>
          <ErrorPageTitleBtn>Back to home page</ErrorPageTitleBtn>
        </ErrorPageCont>
      </ErrorCont>
    </ErrorMainCont>
  );
}
