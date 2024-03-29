import React from "react";
import moment from "moment";
import { Formik, Form } from "formik";
import Loader from "../../Loader";
import Input from "../form-inputs/Input";
import ErrorMessage from "../../ErrorMessage";
import validate from "./validate";

const BetSlipForm = ({
  initialValues: _inititalValues,
  onSubmit,
  submitText = "Submit",
  disabled = [],
  isEditForm
}) => {
  // Define default values and override with any passed in from props
  const now = moment().seconds(0).milliseconds(0).format("Y-MM-DDTkk:mm:ss");
  const initialValues = {
    amount: 0,
    ..._inititalValues
  };

  const getDisabled = field => disabled.some(v => v === field);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      enableReinitialize
    >
      {({ isSubmitting, errors }) => (
        <Form className="betslip-form">
          <Input
            label="Amount"
            name="amount"
            disabled={getDisabled("amount")}
          />
          {isEditForm || (
            <Input label="Rate" name="rate" disabled={getDisabled("rate")} />
          )}
          <ErrorMessage error={errors.hidden} />
          <button
            className="btn btn-primary btn-block relative d-flex justify-content-center"
            type="submit"
            disabled={isSubmitting}
          >
            <Loader
              loading={isSubmitting}
              noBackground
              noStretch
              light
              diameter="1.4rem"
            />
            <span className="mx-2">{submitText}</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BetSlipForm;
