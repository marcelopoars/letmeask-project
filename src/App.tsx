import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { AuthContextProvider } from "./contexts/AuthContext";

import { GlobalStyle } from "./styles/global";

const darkTheme = {
  primaryBgColor: "var(--primary-bg-color)",
  secundaryBgColor: "var(--secundary-bg-color)",
};

export function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <AuthContextProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />

              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </AuthContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
