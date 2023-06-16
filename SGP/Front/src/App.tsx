import { ThemeProvider } from "styled-components";
import lightTheme from "./styles/themes/lightTheme";
import Router from "./routes/Router";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
