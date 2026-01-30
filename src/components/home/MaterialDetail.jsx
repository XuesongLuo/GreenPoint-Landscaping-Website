import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const materials = [
  {
    id: 1,
    title: "太湖石",
    subtitle: "Stone",
    desc: "瘦漏透皱，以石观心",
    img: "/assets/images/mat-stone.jpg",
  },
  {
    id: 2,
    title: "青苔",
    subtitle: "Moss",
    desc: "时间的皮肤，在此生长",
    img: "/assets/images/mat-moss.jpg",
  },
  {
    id: 3,
    title: "老杉木",
    subtitle: "Wood",
    desc: "取自古建，枯木逢春",
    img: "/assets/images/mat-wood.jpg",
  },
  {
    id: 4,
    title: "黑山砂",
    subtitle: "Gravel",
    desc: "黑川如水，枯山冥想",
    img: "/assets/images/mat-sand.jpg",
  },
];

const MaterialDetail = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 纯粹的水平移动：从 0% 到 -60%
  // 配合 sticky，视觉效果就是：人不动，画卷向左徐徐展开
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    // 外层容器：高度决定了滚动的时长（300vh = 3倍屏幕高度的滚动距离）
    <section ref={targetRef} className="relative h-[300vh] bg-paper">
      
      {/* Sticky 容器：这就是“锁定”的关键
          h-screen 占满全屏，sticky top-0 把它钉在视口顶部
      */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* 【装饰】画卷的“天头”和“地脚”：模拟装裱的丝绸边框 */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-ink/5 border-b border-ink/10 z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-ink/5 border-t border-ink/10 z-20" />

        {/* 移动轨道 */}
        <motion.div style={{ x }} className="flex items-center pl-20 md:pl-40 gap-20 md:gap-32">
          
          {/* 卷首：题字 */}
          <div className="flex-shrink-0 w-[300px] md:w-[400px] flex flex-col justify-center border-r border-ink/10 pr-12 h-[60vh]">
            <span className="writing-vertical-rl text-xs tracking-[0.4em] text-moss opacity-60 h-24 block mb-8">
              Microcosm
            </span>
            <h2 className="text-6xl md:text-8xl font-serif tracking-widest text-ink/80 mb-8">
              微<br/>观
            </h2>
            <p className="text-sm font-light tracking-widest leading-loose text-ink/60 max-w-[200px]">
              一石一世界<br/>
              一叶一菩提<br/>
              于细微处见大千
            </p>
          </div>

          {/* 画芯：内容卡片 */}
          {materials.map((item) => (
            <div key={item.id} className="relative group flex-shrink-0 w-[280px] md:w-[360px] flex flex-col items-center">
              
              {/* 月亮门设计：
                  为了更有“画”的感觉，我们给它加一个双重边框
              */}
              <div className="relative p-2 border border-ink/10 rounded-t-[180px] rounded-b-sm">
                <div className="overflow-hidden rounded-t-[170px] rounded-b-sm aspect-[3/5] relative bg-stone-200">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1 }}
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* 编号：像印章一样盖在角落 */}
                  <div className="absolute top-6 right-6 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white/50 text-xs font-serif backdrop-blur-sm">
                    {item.id}
                  </div>
                </div>
              </div>

              {/* 题跋：竖排文字，更具古韵 */}
              <div className="mt-8 text-center">
                 <h3 className="text-2xl font-serif mb-2 text-ink">{item.title}</h3>
                 <span className="text-[10px] uppercase tracking-widest text-moss opacity-70 block mb-3">{item.subtitle}</span>
                 <p className="text-xs text-ink/50 writing-vertical-rl h-24 mx-auto tracking-widest border-l border-ink/10 pl-2">
                   {item.desc}
                 </p>
              </div>
            </div>
          ))}

          {/* 卷尾：留白 */}
          <div className="w-[50vw]" />
          
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialDetail;