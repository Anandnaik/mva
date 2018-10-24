import React from 'react';
import QuickLinks from "components/QuickLinks/QuickLinks";
import { new_wip } from '../../app';

const quickLinks = () => [
  {
    text: `What to bring`,
    url: `#what-to-bring`
  },
  {
    text: `Do not bring`,
    url: `#do-not-bring`
  },
  {
    text: `Contact Info`,
    url: `${new_wip}/contact-us`
  },
  {
    text: `Course Schedule`,
    url: "https://www.dhamma.org/en-US/schedules/noncenter/mi.us",
    isExternal: true
  }
];

const ContactUs = () => {
  return <div className="already-registered">
      <article>
        <h1>Contact Us</h1>
        <h2>Shiva Bongu:-</h2>
        <div>Phone: (248) 345-0529</div>
        <div>
          Email: <a href="mailto:info@mi.us.dhamma.org">
            info@mi.us.dhamma.org
          </a>
        </div>
      </article>
      <aside>
        <QuickLinks links={quickLinks()} />
      </aside>
    </div>;
}

export default ContactUs;
