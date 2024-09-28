
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
          ></Route>
        <
    </div>
  );
}

export default App;
