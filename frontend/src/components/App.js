import { GlobalProvider } from "../contexts/GlobalContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          {/* Header here} */}
          <Route exact path="/">
            <div>
              <h1>Landing page</h1>
            </div>
          </Route>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
