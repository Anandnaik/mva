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

const AlreadyRegistered = () => {
  return <div className="already-registered">
      <article>
        <h1>Already Registered</h1>
        <h2>Course Checklist</h2>
        <ul>
          <li>
            I’ve double checked course dates A ten day course actually spans
            12 days in total. Please double check your course finish date and
            make plans accordingly.
          </li>
          <li>
            I know how to get to the centre For directions see Getting Here
          </li>
          <li>I have packed everything I need</li>
        </ul>
        <h1 id="what-to-bring" className="already-registered__sub-h1">What to bring</h1>
        <h2>Required Items (Not Provided)</h2>
        <ul>
          <li>
            Alarm Clock, flashlight, and batteries for both. (You may not use
            your cell phone or other personal electronic device as an alarm
            clock)
          </li>
          <li>Top and bottom sheet and pillowcase for a twin-size bed</li>
          <li>
            Enough comfortable, loose fitting, modest, “somewhat baggy”
            clothing for the duration of your stay: pants or skirts that cover
            your knees when you are meditating (when sitting either on a chair
            or on the floor), T-shirts without distracting images and words.
            If you have tattoos, please bring clothing to cover them so they
            do not distract others. These guidelines allow other students to
            focus on their meditation more easily.
          </li>
          <li>
            Towel and all needed toiletries, non-scented personal hygiene
            articles and feminine sanitary protection
          </li>
          <li>Water Bottle</li>
          <li>
            Any prescribed medication you are taking. Please make sure you
            bring enough for the entire course.
          </li>
        </ul>
        <h2>Suggested Items</h2>
        <ul>
          <li>
            Indoor footwear/slippers: easy slip-ons e.g. clogs, flip flops,
            etc.
          </li>
          <li>
            A shawl or light blanket other than your sleeping blanket for use
            in the meditation hall
          </li>
        </ul>
        <h2>Seasonal Items</h2>
        <ul>
          <li>
            Seasonal outdoor wear: raincoat, umbrella, boots, hat, warm
            clothing, and Yak Trax (or similar shoe traction devices for the
            ice/snow).
          </li>
          <li>
            Blanket or sleeping bag, in the event you are accommodated in a
            tent during the summer months.
          </li>
        </ul>
        <h2>We provide</h2>
        <ul>
          <li>
            Meditation cushions: We supply a large base cushion for every
            student. We have a limited supply of smaller sitting cushions, so
            please bring any additional cushions that you may need.
          </li>
          <li>
            Bedding: sleeping pillow and one light fleece blanket. A limited
            supply of extra blankets is available so you may wish to bring one
            of your own.
          </li>
        </ul>
        <h1 id="do-not-bring" className="already-registered__sub-h1">Do not bring</h1>
        <h2>Distracting Clothing</h2>
        <ul>
          <li>
            Tight, transparent, revealing or otherwise striking clothing (such
            as low risers, shorts, short skirts, tights, leggings, sleeveless,
            tank, low-cut or skimpy tops) should not be worn at the center.
            Modest dress is required for both men and women.
          </li>
          <li>
            Bedding: sleeping pillow and one light fleece blanket. A limited
            supply of extra blankets is available so you may wish to bring one
            of your own.
          </li>
        </ul>
        <h2>Other</h2>
        <ul>
          <li>
            books, diaries, journals and other reading/writing materials
          </li>
          <li>electronic equipment such as personal computers</li>
          <li>musical instruments</li>
          <li>personal food items</li>
          <li>tobacco in any form</li>
          <li>non-prescribed drugs (you may bring supplements and vitamins with permission)</li>
          <li>perfumes or strongly scented toiletries</li>
          <li>religious or spiritual objects</li>
          <li>jewelry or other unnecessary valuables</li>
        </ul>
      </article>
      <aside>
        <QuickLinks links={quickLinks()} />
      </aside>
    </div>;
}

export default AlreadyRegistered;
