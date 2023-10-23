import { theme } from "@/theme";
import { Box, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
});

const Wrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <div
              className={`${poppins?.className} flex h-screen bg-black flex-col sm:px-6 py-12 lg:px-8`}
            >
              {children}
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  );
};

export default Wrapper;
