// import "./App.css";
// import { ApolloProvider } from "@apollo/client";
// import client from "./graphql/apolloClient";
import { GlobalStyle } from "./features/global/style/Global.styled";
import { BrowserRouter } from "react-router-dom";
import Router from "./features/global/routers/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        {/* <ApolloProvider client={client}> */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        {/* </ApolloProvider> */}
      </Provider>
    </>
  );
}

export default App;
