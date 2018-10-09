import  React from "react";
import Expense from "./ReportRowItem";
import moment from 'moment';

export default class ReportRow extends React.PureComponent {
  static defaultProps = {
    items: [],
    date: "00"
  };

  render() {
    const date = moment(this.props.date, 'D').format('ddd');
    const total = this.props.items.reduce((acc, item) => acc + +item.amount, 0);
    return (
      <div className="row-report flex flex-row flex-justify-content-space flex-align-items-center width-100vw">
        <div className="detail-wrapper flex overflow-auto">
          <div className="details flex">
            <div className="day">{date} {this.props.date}</div>
            {this.props.items.map((item, index) => (<Expense key={index} {...item} />))}
          </div>
        </div>
        <div className="row-report-total">{total}</div>
      </div>
    );
  }
}
