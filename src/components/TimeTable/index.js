import React, { PropTypes } from 'react';

const TimeTable = ({ headings, rows, tableId, customClassName}) => {
  const renderHeadings = () =>
    headings.map((heading, index) => (
      <div className="time-table__column-heading" key={`${tableId}-heading-${index}`}>
        {heading}
      </div>
    ));
  const renderCells = (row, rowIndex) => headings.map((heading, index) => (
    <div className="time-table__cell" key={`${tableId}-row${rowIndex}-cell-${index}`}>{row[index]}</div>
  ));
  const renderRows = () => rows.map((row, index) => (
    <div className="time-table__row" key={`${tableId}-row-${index}`}>
      {renderCells(row, index)}
    </div>
  ))
  return (
    <div className="time-table" id={tableId}>
      <div className="time-table__column-headings">
        {renderHeadings()}
      </div>
      <div className="time-table__rows">
        {renderRows()}
      </div>
    </div>
  );
}

TimeTable.propTypes = {
  tableId: PropTypes.string,
  headings: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
}

export default TimeTable;
