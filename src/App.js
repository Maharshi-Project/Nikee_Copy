import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Contact from "./Contact.js";
import About from "./About.js";
import ErrorPage from "./ErrorPage.js";
import { GlobalStyle } from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header.js";
import Home from "./Home.js";
import Footer from "./components/Footer.js";
import SingleProducts from "./components/SingleProducts.js";
import Products from "./Products.js";

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#fff",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/singleproduct/:id">
              <SingleProducts />
              {/* <ProductDetails /> */}
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <ErrorPage/>
            </Route>
          </Switch>
          <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
