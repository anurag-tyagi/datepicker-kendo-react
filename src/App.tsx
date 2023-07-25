import {
  Field,
  Form,
  FormElement,
  FormRenderProps,
} from "@progress/kendo-react-form";
import * as React from "react";
import { CustomDateExt } from "./CustomDateExt";
import { CustomDatePicker } from "./CustomDatePicker";

const App = () => {
  const [details, setDetails] = React.useState([]);
  const handleSubmit = (dataItem: { [name: string]: any }, e: any) => {
    const formData = new FormData(e.target);
    // setDetails([...formData]);
  };
  return (
    <div style={{ padding: 30 }}>
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps: FormRenderProps) => (
          <FormElement style={{ maxWidth: 650 }}>
            <fieldset className={"k-form-fieldset"}>
              <legend className={"k-form-legend"}>
                Please fill in the fields:
              </legend>
              <div className='mb-3'>
                <Field
                  name={"date"}
                  type={"date"}
                  component={CustomDatePicker}
                  label={"Date"}
                  dateFormat={"MMMM dd, yyyy"}
                  placeHolder={"Enter the date"}
                />
              </div>
              <div className='mb-3'>
                <Field
                  name={"dateExt"}
                  type={"dateExt"}
                  component={CustomDateExt}
                  label={"External Date"}
                  dateFormat={"MMMM dd, yyyy"}
                  placeHolder={"Enter the date"}
                />
              </div>
            </fieldset>
            <div className='k-form-buttons'>
              <button
                type={"submit"}
                className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
                disabled={!formRenderProps.allowSubmit}>
                Submit
              </button>
            </div>
          </FormElement>
        )}
      />
      {details.map((d) => (
        <p>{d} </p>
      ))}
    </div>
  );
};

export default App;
