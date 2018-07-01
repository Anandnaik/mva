import React from 'react';

import QuickLinks from 'components/QuickLinks/QuickLinks';
import Intro from './components/intro';
import CodeOfConduct from './components/code-of-conduct';
import SampleTimeTable from './components/sample-time-table';
import Apply from './components/apply';
import ParentInfo from './components/parent-info';
import { new_wip } from '../../app';

const quickLinks = () => [
  {
    text: `Introduction`,
    url: `#introduction`
  },
  {
    text: `Code of conduct`,
    url: `#code-of-conduct`
  },
  {
    text: `Sample Timetable`,
    url: `#sample-timetable`
  },
  {
    text: `Register / Apply`,
    url: `#apply`
  },
  {
    text: `Information for Parent or Guardian`,
    url: `#parent`
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
      <QuickLinks links={quickLinks()} />
    </aside>
  </div>
);

export default Youth;
