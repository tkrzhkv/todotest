import { FC } from "react";

import { FieldValues } from "react-hook-form";

import { FormInput, InputFormProps } from "@components/form/FormInput";

export const createInputList = <FV extends FieldValues>() => ({
  FormInput: FormInput as FC<InputFormProps<FV>>,
});
