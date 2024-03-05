import {FC} from "react"

import { FieldValues } from "react-hook-form"

import { FormInput, InputFormProps } from "@components/form/FormInput"

export const createInputList = <FVType extends FieldValues>(): { FormInput: FC<InputFormProps<FVType>> } => ({
  FormInput: FormInput as FC<InputFormProps<FVType>>,
})