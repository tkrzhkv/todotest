import { theme as defaultTheme } from '@chakra-ui/react'
import { components as customComponents } from '@theme/components/components'

export const components = {
  ...defaultTheme.components,
  ...customComponents,
}
