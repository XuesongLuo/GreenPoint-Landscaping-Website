// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
// ... 引入 Lenis 相关代码 ...

function App() {
  const location = useLocation();

  return (
    <>
       {/* 导航栏如果是全局的，也可以放这里，或者放在具体 Page 里 */}
       
       {/* AnimatePresence 让页面离开时也有动画 */}
       <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname}>
           <Route path="/" element={<Home />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/project/:id" element={<ProjectDetail />} />
         </Routes>
       </AnimatePresence>
    </>
  );
}

export default App;