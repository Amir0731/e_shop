import React from "react";
import {
  ContactCont,
  ContactMainCont,
  ContactMainContentCont,
  ContactMainLeftCont,
  ContactMainLeftContBorder,
  ContactMainLeftTitle,
  ContactMainLeftTitleCont,
  ContactMainLeftTitleDesc,
  ContactMainLeftTitleDesc2,
  ContactMainRIghtInpTxtArea,
  ContactMainRightBtn,
  ContactMainRightCont,
  ContactMainRightInp,
  ContactMainRightInpsCont,
  ContactTitle,
  ContactTitleDesc,
  ContactTitleMainCont,
} from "./style";
import { ReactComponent as PhoneIcon } from "../../assets/icons-phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons-mail.svg";

export default function Contact() {
  return (
    <ContactCont>
      <ContactMainCont>
        <ContactTitleMainCont>
          <ContactTitle>Home</ContactTitle>
          <ContactTitle>/</ContactTitle>
          <ContactTitleDesc>Cantact</ContactTitleDesc>
        </ContactTitleMainCont>
        <ContactMainContentCont>
          <ContactMainLeftCont>
            <ContactMainLeftTitleCont>
              <PhoneIcon />
              <ContactMainLeftTitle>Call To Us</ContactMainLeftTitle>
            </ContactMainLeftTitleCont>
            <ContactMainLeftTitleDesc>
              We are available 24/7, 7 days a week.
            </ContactMainLeftTitleDesc>
            <ContactMainLeftTitleDesc>
              Phone: +8801611112222
            </ContactMainLeftTitleDesc>
            <ContactMainLeftContBorder />
            <ContactMainLeftTitleCont>
              <EmailIcon />
              <ContactMainLeftTitle>Write To US</ContactMainLeftTitle>
            </ContactMainLeftTitleCont>
            <ContactMainLeftTitleDesc2>
              Fill out our form and we will contact you within 24 hours.
            </ContactMainLeftTitleDesc2>
            <ContactMainLeftTitleDesc>
              Emails: customer@exclusive.com
            </ContactMainLeftTitleDesc>
            <ContactMainLeftTitleDesc>
              Emails: support@exclusive.com
            </ContactMainLeftTitleDesc>
          </ContactMainLeftCont>
          <ContactMainRightCont>
            <ContactMainRightInpsCont>
              <ContactMainRightInp placeholder="Your Name *" />
              <ContactMainRightInp type="email" placeholder="Your Email *" />
              <ContactMainRightInp placeholder="Your Phone *" />
            </ContactMainRightInpsCont>
            <ContactMainRIghtInpTxtArea placeholder="Your Massage" />
            <ContactMainRightBtn>Send Massage</ContactMainRightBtn>
          </ContactMainRightCont>
        </ContactMainContentCont>
      </ContactMainCont>
    </ContactCont>
  );
}
