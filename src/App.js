import Routes from "./routes/Routes";
import CssBaseline from '@material-ui/core/CssBaseline';
import { AuthProvider } from "./contexts/Auth";
import { AlertProvider } from "./contexts/Alerts";

function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <CssBaseline />
        <Routes />
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
