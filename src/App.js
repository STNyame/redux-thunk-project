import { Switch, Route } from "react-router-dom";
// import "./App.css";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/post/:id?" component={PostPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
