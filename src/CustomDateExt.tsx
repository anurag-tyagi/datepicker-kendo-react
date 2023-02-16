import { FieldRenderProps } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { DatePicker } from "@progress/kendo-react-dateinputs";

const CustomCalendar = (props: any) => {
  const handleDateSelect = (date: Date) => {
    props.onChange?.({
      value: date,
      syntheticEvent: null,
      target: null,
    });
  };

  return (
    <div>
      <Calendar onChange={(value, event) => handleDateSelect(value)} />
    </div>
  );
};

export const CustomDateExt = (fieldRenderProps: FieldRenderProps) => {
  const {
    label,
    value,
    onChange,
    name,
    validationMessage,
    visited,
    dateFormat,
    placeHolder,
  } = fieldRenderProps;

  return (
    <>
      <span>{label}</span>
      <DatePicker
        calendar={CustomCalendar}
        defaultValue={value}
        onChange={onChange}
        name={name}
        format={dateFormat}
        placeholder={placeHolder}
      />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </>
  );
};
