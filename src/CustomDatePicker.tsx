import { FieldRenderProps } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";

import {
  MultiViewCalendar,
  MultiViewCalendarProps,
} from "@progress/kendo-react-dateinputs";

import { DatePicker } from "@progress/kendo-react-dateinputs";

const MultiviewCalendar = (props: MultiViewCalendarProps) => {
  return <MultiViewCalendar {...props} views={1} />;
};

export const CustomDatePicker = (fieldRenderProps: FieldRenderProps) => {
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
        calendar={MultiviewCalendar}
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
