import "./App.css";
import Welcome from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <Welcome />
        <AppBar />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
