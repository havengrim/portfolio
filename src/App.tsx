// App.tsx
import Home from './Home'; // Make sure the path is correct
import './index.css';
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
