import React from "react";

import TimeTable from "components/TimeTable";

const sampleTimeTableObject = {
  headings: ["Time Period", "Activity"],
  rows: [
    ["9:00", "Course Registration Begins"],
    ["9:30", "Welcome and Orientation talk for children and parents"],
    ["10:00", "Course begins in Meditation Hall (Anapana and the 5 Promises)"],
    ["10:45", "Activities"],
    ["11:15", "Meditation Hall Activities"],
    ["12:00", "Lunch/Rest/Activities"],
    ["12:50", "Meditation Hall Activities"],
    ["1:50", "Activities"],
    ["2:20", "Meditation Hall Activities"],
    ["2:50", "Games/Snacks "],
    ["3:20", "Meditation Hall Activities"],
    ["4:00", "Break"],
    ["4:10", "Closing Discourse and Metta"],
    ["4:30", "Course Ends"],
    ["4:30-4:50", "Cleanup"]
  ]
};

const SampleTimeTable = () => (
  <section>
    <h2 id="sample-timetable">Sample Timetable</h2>
    <TimeTable
      headings={sampleTimeTableObject.headings}
      rows={sampleTimeTableObject.rows}
      tableId="youth-sample-timetable"
    />
  </section>
);

export default SampleTimeTable;
