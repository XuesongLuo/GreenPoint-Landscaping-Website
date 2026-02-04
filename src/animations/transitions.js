export const inkSplotch = {
  initial: { opacity: 0, filter: 'blur(20px)', scale: 1.1 },
  animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  exit: { opacity: 0, filter: 'blur(10px)' },
  transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
};
  
export const frameView = {
  initial: { clipPath: 'inset(10% 20% 10% 20%)' },
  animate: { clipPath: 'inset(0% 0% 0% 0%)' },
  transition: { duration: 2, ease: "circOut" }
};

// --- 新增：页面标准过渡动画 ---
// 这种缓慢的淡入淡出（0.8秒）模拟了眼睛适应新环境的过程，非常适合营造宁静的氛围
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, ease: "easeInOut" } // 使用 easeInOut 让起止更柔和
};

export const contentFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35, ease: "easeInOut" },
};