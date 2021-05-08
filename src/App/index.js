import "./App.css";
import Welcome from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar"

function App() {
  return (
    <AppLayout>
      <Welcome />
      <AppBar />
    </AppLayout>
  );
}

export default App;
