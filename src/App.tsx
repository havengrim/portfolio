import Home from './Home'; // Correct path for the Home component
import './index.css';
import AnimatedCursor from "react-animated-cursor";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatedCursor
        innerSize={10}
        outerSize={50}
        color="" // fallback color in case CSS var isn't available
        outerAlpha={0.4}
        innerScale={0.8}
        outerScale={2}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)', // Custom CSS variable
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)', // Doughnut effect
        }}
      />
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
