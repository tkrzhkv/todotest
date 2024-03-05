import React, {FC} from "react"

import { Button, HStack, VStack, Text } from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"
import TodoList from "@components/todo/components/todo-list"
import { useStoreCrudOperations } from "@components/todo/hooks/useStoreCrudOperations"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createInputList } from "@components/form"
import { z } from "zod"
import TodoFilters from "@components/todo/components/filters"
import TodoCounter from "@components/todo/components/counter"

const InputSchema = z.object({
  task: z
    .string()
    .min(3, { message: "Minimum 3 symbols " })
    .max(10, { message: "Maximum 10 symbols" }),
})

const { FormInput } = createInputList<InputType>()

export type InputType = z.infer<typeof InputSchema>
export const TodoComponent: FC = () => {
  const { handleAddTodo } = useStoreCrudOperations()

  const methods = useForm<InputType>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      task: "",
    },
  })

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    handleAddTodo(data.task)
    reset()
  }

  return (
    <VStack h={500}>
      <VStack mb={12}>
        <TodoFilters />
        <TodoCounter />
      </VStack>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack>
            <Fade direction="left">
              <VStack pos="relative">
                <Text
                  color="red"
                  fontSize="12px"
                  textAlign="start"
                  w="full"
                  pos="absolute"
                  top={-6}
                >
                  {errors.task?.message}
                </Text>
                <FormInput name="task" control={control} />
              </VStack>
            </Fade>
            <Fade direction="right">
              <Button type="submit">Add</Button>
            </Fade>
          </HStack>
          <TodoList />
        </form>
      </FormProvider>
    </VStack>
  )
}
