import "./App.css";
import AppRouter from "./components/routing/AppRouter";

function App() {
  return (
    <div class="loader-wrapper">
      <div className="main-content">
        <AppRouter />;
      </div>
    </div>
  );
  // return <AppRouter />;
}

export default App;
