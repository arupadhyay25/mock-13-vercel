import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div data-testid="watch-app">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
