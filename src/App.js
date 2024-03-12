import './App.css';
import { AuthProvider } from './components/AuthContext/AuthContext';
import AppRouter from './routes';

function App() {
  return (
    <AuthProvider>
      <div>
        <AppRouter/>
      </div>
    </AuthProvider>
  );
}

export default App;
