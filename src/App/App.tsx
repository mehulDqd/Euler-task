import { UserProvider } from "../Context";
import Home from "../Pages/Home";

const App = () => (
  <UserProvider>
    <Home />
  </UserProvider>
);

export default App;
