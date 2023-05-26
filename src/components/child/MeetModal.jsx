import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from 'primereact/button';


const options = [
  { label: "Skype", value: "skype" },
  { label: "Zoom", value: "zoom" },
  { label: "Google Meet", value: "meet" },
  { label: "Duo", value: "duo" },
];
const MeetModal = ({ actions }) => {
  let { visible, setVisible } = actions;
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.value);
  };

  return (
    <div className="">
      <Dialog
        header="Book a Schedule"
        visible={visible}
        style={{ width: "40vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="p-4 border rounded-md">
          <div className="flex justify-center gap-4 my-6">
            <Dropdown
              value={selectedOption}
              options={options}
              onChange={handleOptionChange}
              placeholder="Select an method"
            />

            <Calendar
              showTime
              value={selectedTime}
              onChange={handleTimeChange}
              showIcon
              placeholder="Select a time"
              hourFormat="24"
            />
                <Button className="px-2 py-1 text-sm" label="Book" />

          </div>

          {/* Footer */}
          <div>
            <p className="text-center  mb-2">Meet us with</p>
            <img
              className="w-1/4 block mx-auto"
              src="https://t4.ftcdn.net/jpg/05/41/92/71/360_F_541927163_WFWPlp28veCNKx3tkMDnddqTbnK8LGkD.webp"
              alt=""
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MeetModal;
