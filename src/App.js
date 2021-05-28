import { Switch, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
// import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { bootstrapLoginState } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/post/:id?" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
