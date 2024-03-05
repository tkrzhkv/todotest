import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form'
import { Input } from '@chakra-ui/react'
import { FC } from 'react'

export type InputFormProps<
  TFieldValuesType extends FieldValues =
  FieldValues, TNameType extends FieldPath<
  TFieldValuesType> = FieldPath<TFieldValuesType>,
> = {
  name: TNameType
  control: Control<TFieldValuesType>
  type?: string
  placeholder?: string
}

export const FormInput: FC<InputFormProps> = <
  TFieldValuesType extends FieldValues =
  FieldValues, TNameType extends FieldPath<
  TFieldValuesType> = FieldPath<TFieldValuesType>,
>
(props: InputFormProps<TFieldValuesType, TNameType>) => {
  const { control, name, type, placeholder } = props

  const { field } = useController({ name, control })

  return (
    <Input
      {...field}
      value={field.value || ''}
      type={type ?? 'text'}
      placeholder={placeholder}
    />
  )
}
