import { GlobalStyle } from "./Styles/global";
import { Router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
