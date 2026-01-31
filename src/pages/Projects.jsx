// src/pages/Projects.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// 复用组件
import Navbar from '../components/common/Navbar';
import ProjectGrid from '../components/home/ProjectGrid';
import Footer from '../components/common/Footer';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {

  // 1. 获取数据和方法
  const { projects, loading, error, hasMore, loadMore } = useProjects();

  // 2. 创建一个“哨兵”引用，用于监听滚动到底部
  const loaderRef = useRef(null);

  // 确保进入页面时回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // 3. 设置 IntersectionObserver (无限滚动核心逻辑)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0] 就是我们要观察的那个 loaderRef 元素
        const target = entries[0];
        
        // 如果元素进入视口 (isIntersecting) 且 还有更多数据 (hasMore) 且 当前没有在加载 (!loading)
        if (target.isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      {
        root: null, // 视口为浏览器窗口
        rootMargin: '100px', // 提前 100px 触发，让加载更丝滑，用户几乎感觉不到等待
        threshold: 0.1, // 只要露出 10% 就触发
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // 清理函数：组件卸载时断开观察
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading, loadMore]); // 依赖项变化时重新设定


  return (
    <div className="bg-paper min-h-screen text-ink">
      <Navbar />
      
      <main className="pt-40 pb-20">
        <div className="px-6 md:px-20 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-zen mb-6 uppercase"
          >
            全案作品 Project Archive
          </motion.h1>
          <div className="h-[1px] w-20 bg-ink mb-4 opacity-20"></div> {/* 增加一根极细的线条 */}
          <p className="text-xs uppercase tracking-[0.4em] opacity-40">融合东方哲思与加州现代生活</p>
        </div>


        <div className="px-6 md:px-20">
          
          {/* 错误提示 */}
          {error && (
            <div className="text-center py-20 text-red-800/50 font-serif">
              无法加载项目数据。<br/>
              <span className="text-xs font-sans mt-2 block opacity-50">{error}</span>
            </div>
          )}
        {/* 项目网格 */}
        <ProjectGrid projects={projects} />
        {/* --- 底部哨兵区域 (Sentinel) --- */}
          {/* 这是一个隐形的(或显示加载动画的)区域，只要它卷入屏幕，就会触发加载 */}
          <div 
            ref={loaderRef} 
            className="mt-24 h-20 flex justify-center items-center"
          >
            {loading ? (
               // 加载状态：显示呼吸灯文字
               <motion.span 
                 animate={{ opacity: [0.3, 1, 0.3] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
                 className="text-stone text-xs tracking-[0.3em] uppercase"
               >
                 Loading...
               </motion.span>
            ) : !hasMore && projects.length > 0 ? (
               // 没有更多数据了：显示优雅的结束符
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="flex flex-col items-center gap-4 opacity-40"
               >
                 <span className="h-[1px] w-12 bg-ink"></span>
                 <span className="text-[10px] tracking-widest uppercase">End of Collection</span>
               </motion.div>
            ) : null}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Projects;