import { createTheme } from "@mui/material/styles";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  // Customize your theme here
  typography: {
    h1: {
      fontFamily: bebasNeue.style.fontFamily,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  // Add more customizations as needed
});

export default theme;
