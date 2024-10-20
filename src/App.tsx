import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import './index.css';
import AnimatedCursor from "react-animated-cursor";
import { ThemeProvider } from "@/components/theme-provider";
import Projects from './Pages/projects';
import Experience from './Pages/experience';
import Tools from './Pages/tools';
import Thoughts from './Pages/thoughts';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatedCursor
        innerSize={10}
        outerSize={50}
        color="" 
        outerAlpha={0.4}
        innerScale={0.8}
        outerScale={2}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)', 
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)',
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/thoughts" element={<Thoughts />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
