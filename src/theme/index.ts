import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import { components } from "@theme/components";

const theme = extendTheme({
  ...defaultTheme,
  components,
});

export default theme;
