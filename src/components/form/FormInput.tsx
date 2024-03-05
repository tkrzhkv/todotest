import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import { Input } from "@chakra-ui/react";

export type InputFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  control: Control<TFieldValues>;
  type?: string;
  placeholder?: string;
};

export const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: InputFormProps<TFieldValues, TName>,
) => {
  const { control, name, type, placeholder } = props;

  const { field } = useController({ name, control });

  return (
    <Input
      {...field}
      value={field.value || ""}
      type={type ?? "text"}
      placeholder={placeholder}
    />
  );
};
