import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "585px",
  md: "501px",
  lg: "901px",
  xl: "1200px",
};

const theme = extendTheme({ breakpoints });
export default theme;
