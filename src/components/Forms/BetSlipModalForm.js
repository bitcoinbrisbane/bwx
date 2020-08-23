import React from "react";
import { mutate } from "swr";
import BetSlipForm from "./BetSlipForm";
import { history } from "../../Router";
import ModalForm from "../ModalForm";

const parseSubmitValues = (v, id) => {
  // Parse values
  const parsed = {
    ...v,
    rate: Number(v.rate),
    amount: Number(v.amount),
    bankID: Number(v.bankID),
    fee: Number(v.fee)
  };

  // Massage data for POST /deposit
  if (!id) {
    const { rate, ...deposit } = parsed;
    return {
      rate,
      deposits: [deposit]
    };
  }

  // Else massage data for PUT /deposit/:id
  delete parsed.bank;
  delete parsed.rate;
  return parsed;
};

const BetSlipModalForm = () => {
  const onSuccess = async (id, v, data) => {
    const add = deposits => [...deposits, { ...v, ...data }];
    const replace = ds => ds.map(d => (d.id !== id ? d : data));
    mutate("/deposit", id ? replace : add);
  };

  const onDismiss = () => {
    history.push("/deposits");
  };

  const onError = (e, formActions) => {
    formActions.setErrors({ hidden: e });
    formActions.setSubmitting(false);
  };

  return (
    <ModalForm
      parseSubmitValues={parseSubmitValues}
      resource="deposit"
      onSuccess={onSuccess}
      onError={onError}
      onDismiss={onDismiss}
      form={BetSlipForm}
    />
  );
};

export default BetSlipModalForm;
