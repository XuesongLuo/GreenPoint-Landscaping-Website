// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis'; // 引入 Lenis

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Studio from './pages/Studio';

function App() {
  const location = useLocation();

  // 初始化平滑滚动
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 经典的 easeOutQuart
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* 导航栏如果是全局的，也可以放这里，或者放在具体 Page 里 */}
      
      {/* AnimatePresence 让页面离开时也有动画 */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;