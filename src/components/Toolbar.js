import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/auth/selectors";
import { logOut } from "../store/auth/actions";

export default function Toolbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Link to="/">Home</Link>
      {!user.accessToken ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <button onClick={() => dispatch(logOut())}>Log out</button>
      )}
    </>
  );
}
