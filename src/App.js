import React, { Fragment } from "react";

import Globalstyle from "./styles/Global";

import Main from "./pages/Main";

const App = () => (
  <Fragment>
    <Globalstyle>
      <Main />
    </Globalstyle>
  </Fragment>
);

export default App;
