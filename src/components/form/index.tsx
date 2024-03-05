import React, { FC } from 'react'

import { FieldValues } from 'react-hook-form'
import { FormInput, InputFormProps } from '@components/form/form-input'

export const createInputList = <FVType extends FieldValues>():{
  FormInput: React.FunctionComponent<InputFormProps<FVType>>
} => ({ 'FormInput': FormInput as FC<InputFormProps<FVType>> })
