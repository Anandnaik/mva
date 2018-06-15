import React from "react";

import QuickLinks from "components/QuickLinks/QuickLinks";

const quickLinks = [
  {
    text: `Contact Info`,
    url: "/contactus"
  },
  {
    text: `Course Schedule`,
    url: "https://www.dhamma.org/en-US/schedules/noncenter/mi.us",
    isExternal: true
  }
];

const Mva = () => (
  <div className="mva">
    <article>
      <h1>About MVA</h1>
      <p>
        The Michigan Vipassana Association is a registered non-profit,
        charitable organization whose sole purpose is to provide Vipassana
        courses to the public. It attempts to fulfill this obligation by
        organizing meditation courses for adults and children on a continued
        basis.
      </p>
      <h2>History of Michigan Vipassana Association</h2>
      <p>
        In 2002, a small group of old students from Michigan organized the first
        10-day course in Michigan. The group was inspired by the Dr. Bhogilal
        and Dr. (Mrs.) Kamala Gandhi, who encouraged and supported this
        endeavor. Before their move to the United States in February 2002, the
        Gandhis were responsible for conducting and organizing courses held all
        over Europe for 20 years.
      </p>
      <p>
        A suitable site was found near Brighton, Michigan. The course was held
        from 17th to 28th April 2002. Thirty-three new students, five old
        students and nine full-time dhamma servers attended the course. The
        course was conducted by Dr. and Mrs. Gandhi, Vipassana teachers
        appointed as acharyas by Goenkaji.
      </p>
      <p>
        On July 19, 2002, during the 2002 tour of North America, Goenkaji
        honored the MVA by visiting the group in Brighton, Michigan. Goenkaji
        decided to give Anapana to the students attending the course. Goenkaji
        was very keen on the prospects for developing a Vipassana meditation
        center in Michigan. During the brief visit he recommended that the site
        be secured for conducting courses and establishing a center.
      </p>
    </article>
    <aside>
      <QuickLinks links={quickLinks} />
    </aside>
  </div>
);

export default Mva;
