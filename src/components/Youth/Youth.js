import React from 'react';

import QuickLinks from 'components/QuickLinks/QuickLinks';
import TimeTable from 'components/TimeTable';

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

const sampleTimeTableObject = {
  headings: ['Time Period', 'Activity'],
  rows: [
    ['9:00', 'Course Registration Begins'],
    ['9:30', 'Welcome and Orientation talk for children and parents'],
    ['10:00', 'Course begins in Meditation Hall (Anapana and the 5 Promises)'],
    ['10:45', 'Activities'],
    ['11:15', 'Meditation Hall Activities'],
    ['12:00', 'Lunch/Rest/Activities'],
    ['12:50', 'Meditation Hall Activities'],
    ['1:50', 'Activities'],
    ['2:20', 'Meditation Hall Activities'],
    ['2:50', 'Games/Snacks '],
    ['3:20 ', 'Meditation Hall Activities'],
    ['4:00', 'Break'],
    ['4:10', 'Closing Discourse and Metta'],
    ['4:30', 'Course Ends'],
    ['4:30-4:50', 'Cleanup'],
  ]
}

const Youth = () => (
  <div className="youth">
    <article>
      <h1>Youth Courses</h1>
      <h2 id="introduction">Dear Young Friend,</h2>
      <p>
        Children/Teen's one day meditation courses are exclusively for children
        and teens between the ages of 8 to 17. Children interested in a course
        must read the code of conduct and timetable below very carefully and
        complete the required medical emergency form and application form.
        Parents must complete the permission form and return it with your
        application. After we receive your completed application and permission
        forms, accepted students will receive a letter of welcome to attend the
        course.
      </p>
      <p>
        During a children's course, you will learn how to practice Anapana
        meditation - awareness of respiration - along with the five "promises"
        or precepts. These courses have been specifically designed for children.
        You will have the chance to practice Anapana meditation with guided
        instructions in the meditation hall for periods of up to 30 minutes.
        These sessions are mixed with story and discussion sessions, break
        periods and games and art activities throughout the day.
      </p>
      <p>
        In the words of some children who have completed similar meditation
        courses at other Vipassana centers around the world:
      </p>
      <blockquote>
        <p>
          "I learned that I like meditating because it makes me feel relaxed."
        </p>
      </blockquote>
      <blockquote>
        <p>
          "I like this course because I like playing outside, playing with clay.
          We also did tie-dye. I also like this course because it seems like I’m
          at home and the food is so good"
        </p>
      </blockquote>
      <blockquote>
        <p>
          "At school if I need to concentrate on what the teacher is doing or
          saying I can use Anapana. And if I am mad and angry I can use
          Anapana."
        </p>
      </blockquote>
      <blockquote>
        <p>
          "I think meditation is very important in this busy world because it
          helps us to maintain a stable state of our mind and also it helps us
          to do our work with right understanding."
        </p>
      </blockquote>
      <p>
        Adults who have completed a ten-day course can apply to volunteer during
        the children's and teens' courses. Help is needed in the kitchen, as
        well as with leading activities for the children.
      </p>
      <h2 id="code-of-conduct">Code of Conduct for Children/Teen's Course</h2>
      <p>
        Learning to practice Anapana meditation is very valuable because it
        helps you to become a better person. Practicing Anapana meditation will
        help you to train your mind to become concentrated and calm. This will
        make your mind strong so that you will be able to avoid doing or saying
        things that are hurtful or harmful to yourself and to others. This
        strength of mind will help you to feel happier and more peaceful.
        Practicing Anapana and learning to concentrate will help you to become
        the master of your mind.
      </p>
      <p>
        To help you succeed in practicing Anapana meditation it is important
        that you do your best to follow the instructions that you will be given
        during the course. While you are at the course, it is also important
        that you agree to follow the Code of Conduct written below. In the same
        way that a house needs a good foundation to support it, so the practice
        of Anapana needs a good foundation. This good foundation for Anapana is
        built by following the Code of Conduct. It will help you to avoid
        performing actions that are harmful or hurtful to yourself and others.
      </p>
      <p>
        During the first meditation session at the course you will be asked to
        repeat the following five vows or precepts. These are written in bold
        and underneath each is an explanation. Please read them carefully so
        that you will understand what you are saying when the time comes:
      </p>
      <ul className="youth__precept-list">
        <li>
          <div className="youth__precept">I shall abstain from killing</div>
          I promise to try to treat all beings kindly and not kill them or harm
          them in any way.<br />
        </li>
        <li>
          <div className="youth__precept">I shall abstain from stealing</div>
          I promise to take only what is given to me and not take anything which
          belongs to others without permission.<br />
        </li>
        <li>
          <div className="youth__precept">
            I shall abstain from a life of misconduct
          </div>
          I promise to treat other boys and girls as if they were my brothers or
          sisters or best friends.<br />
        </li>
        <li>
          <div className="youth__precept">
            I shall abstain from speaking lies, harsh words, backbiting, etc.
            which will harm others
          </div>
          I promise to speak truthfully, kindly and gently, and not to tell lies
          or to say hurtful things to anybody or about anybody.
        </li>
        <li>
          <div className="youth__precept">
            I shall abstain from taking any intoxicant
          </div>
          I promise not to take any alcohol, drugs or intoxicants, but to keep
          my mind clear.<br />
        </li>
      </ul>
      <h2 id="sample-timetable">Sample Timetable</h2>
      <TimeTable
        headings={sampleTimeTableObject.headings}
        rows={sampleTimeTableObject.rows}
        tableId="youth-sample-timetable"
      />
      <h2 id="apply">Apply</h2>
      <p>
        Application Forms:-
        <a className="youth__application-form-link" href="./files/mva_child_app_packet.pdf" target="_blank">Children's Course Student Application</a>
        <a className="youth__application-form-link" href="./files/mva_ctc_server_app_packet.pdf" target="_blank">Children's Course Server Application</a>
      </p>
      <h2 id="parent">Information for Parent or Guardian</h2>
      <p>
        The children’s/teen course offers young people between the ages 
        of 8 and 17 an introduction to Anapana
        meditation, which is a practice of the observation of natural breath to
        concentrate the mind. They will learn to practice Anapana and begin to
        take their first steps on the path of Dhamma. The entire path of Dhamma,
        rediscovered and taught by Gotama the Buddha more than 2500 years ago,
        is a universal remedy for universal problems and has nothing to do with
        any organized religion or sectarian tradition. For this reason, it can
        be practiced freely by all, in any place, at any time. Its practice does
        not conflict with any race, community or religion and will prove equally
        beneficial to one and all.
      </p>
      <p>
        Young people who have started practicing Anapana have realized many
        benefits. Their ability to concentrate becomes enhanced, their memory
        gets sharper, their ability to comprehend a subject improves and they
        become calmer. In general, they feel they have a practical tool to use
        in the face of any type of adversity or challenge.
      </p>
      <p>
        During the course, there will be meditation instructions as well as
        other activities such as games, art, and storytelling. The children will
        be divided into groups according to their age for many activities. They
        will be assigned group leaders who will personally accompany and assist
        them throughout the course, providing support and guidance as needed.
      </p>
      <p>
        The intent of the children’s/teen course is serious. It is not
        appropriate for children/teens who are unable to follow directions or to
        participate in organized, self-modulating activities. It is also not
        appropriate for children/teens who are unable to understand the meaning
        or purpose of the daily schedule and Code of Conduct. Students attending
        the course will be asked to maintain silence for extended periods of
        time. Segregation of the sexes will be maintained at all times in the
        accommodations as well as in the meditation hall and during much of the
        course.
      </p>
      <p>
        It is not mandatory that a parent or guardian accompanies your
        child/teen to the course. For a residential course: Parents or guardians
        who are students of Goenkaji or his assistant teachers are welcome to
        stay at the center and participate in work projects. Since parents or
        guardians will not be participating in the course, they will follow a
        separate schedule. They will also be accommodated separately from the
        children/teens. Only those children/teens who feel comfortable staying
        in separate accommodations from their parents are encouraged to attend.
        We ask that parents and affiliated adults refrain from communicating
        with or contacting their children/teens throughout the course.
      </p>
      <p>
        Parents or guardians who have not completed a ten-day course with
        Goenkaji or his assistant teachers are welcome to stay with their
        children/teens during registration, but should then leave the center
        until the course is over. There are numerous hotels, motels and
        campsites in the area.
      </p>
      <p>
        In a one-day offsite course, parents or guardians are asked to leave the
        course site after registration and orientation is over and come back at
        the end of the course. Before applying for the course, please make sure
        that both you and your child have read and understood the <a href="#code-of-conduct"> Code of
        Conduct</a> and <a href="#sample-timetable">Sample Timetable</a>.
      </p>
    </article>
    <aside>
      <QuickLinks links={links} />
    </aside>
  </div>
);

export default Youth;
