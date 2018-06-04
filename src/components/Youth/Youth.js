import React from 'react';

import QuickLinks from 'components/QuickLinks/QuickLinks';
import Intro from './components/intro';
import CodeOfConduct from './components/code-of-conduct';
import SampleTimeTable from './components/sample-time-table';
import Apply from './components/apply';
import ParentInfo from './components/parent-info';

const links = [
  {
    text: `Introduction`,
    url: "/youth#introduction"
  },
  {
    text: `Code of conduct`,
    url: "/youth#code-of-conduct"
  },
  {
    text: `Sample Timetable`,
    url: "/youth#sample-timetable"
  },
  {
    text: `Register / Apply`,
    url: "/youth#apply"
  },
  {
    text: `Information for Parent or Guardian`,
    url: "/youth#parent"
  },
  {
    text: `International Children's Course Website`,
    url: "http://www.children.dhamma.org/",
    isExternal: true
  }
];

const Youth = () => (
  <div className="youth">
    <article>
      <Intro />
      <CodeOfConduct />
      <SampleTimeTable />
      <Apply />
      <ParentInfo />
    </article>
    <aside>
      <QuickLinks links={links} />
    </aside>
  </div>
);

export default Youth;
