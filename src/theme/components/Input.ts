import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const variantPrimary = definePartsStyle({
  field: {
    color: "darkGray.500",
    bg: "white",
    border: "1px solid #C3CAD6",
    borderRadius: "8px",
    cursor: "pointer",
    p: "15px 12px 15px 12px",
    w: "full",
    h: "40px",
  },
});

const variants = {
  primary: variantPrimary,
};

export const Input = defineMultiStyleConfig({ variants });
