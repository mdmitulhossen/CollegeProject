import React, { useState } from 'react';
import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';
import "./Celender.css"
const CelenderB = () => {
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className='Acelender'>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <br/>
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </div>
  );
};
export default CelenderB;