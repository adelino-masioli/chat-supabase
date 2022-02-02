import { Box } from "@skynexui/components";
import appConfig from "../../../config.json";
export default function Container(props) {
  const bg =
    "https://images.unsplash.com/photo-1510843572979-e4b9e790fdd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80";
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      {props.children}
    </Box>
  );
      }
