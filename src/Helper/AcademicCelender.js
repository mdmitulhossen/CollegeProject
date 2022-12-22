import React from 'react';
import { Calendar } from 'antd';
const AcademicCelender= () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div className="w-25">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};
export default AcademicCelender;