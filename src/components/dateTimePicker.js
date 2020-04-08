import React, { Fragment, useState } from "react";

import moment from "moment-timezone";

const timezones = [
  { name: "Melbourne", timezone: "Australia/Melbourne" },
  { name: "Singapore", timezone: "Asia/Singapore" },
  { name: "New York", timezone: "America/New_York" },
];

const DateTimePicker = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(
    "Australia/Melbourne"
  );

  const changeTimezone = (event) => {
    setSelectedTimezone(event.target.value);
  };

  const dateTime = moment(new Date());
  return (
    <Fragment>
      <div className="content">
        {timezones ? (
          <select onChange={changeTimezone}>
            {timezones.map(({ name, timezone }, index) => {
              return (
                <option key={index} value={timezone}>
                  {name}
                </option>
              );
            })}
          </select>
        ) : (
          <div>Timezone not found!</div>
        )}
      </div>
      <div className="content">
        <h2>
          {dateTime.tz(selectedTimezone).format("dddd, MMMM D, YYYY, hh:mm A")}
        </h2>
      </div>
    </Fragment>
  );
};

export default DateTimePicker;
