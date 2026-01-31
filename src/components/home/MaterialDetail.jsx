// src/components/home/MaterialDetail.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const materials = [
  {
    id: 1,
    title: "太湖石",
    subtitle: "Stone / 瘦漏透皱",
    desc: "选用太湖原生水蚀石，保留千年的自然孔洞与纹理，作为庭院视觉焦点。",
    img: "https://loremflickr.com/550/750/stone", 
  },
  {
    id: 2,
    title: "青苔",
    subtitle: "Moss / 时间的皮肤",
    desc: "不仅是植物，更是时间的度量。我们在阴面转角处培育原生苔藓。",
    img: "https://loremflickr.com/550/750/moss", 
  },
  {
    id: 3,
    title: "老杉木",
    subtitle: "Wood / 枯木逢春",
    desc: "回收自明清古建筑的拆房老料，通过打磨重现木纹的温润质感。",
    img: "https://loremflickr.com/550/750/wood",
  },
  {
    id: 4,
    title: "黑山砂",
    subtitle: "Gravel / 枯山水",
    desc: "极细的黑色玄武岩颗粒，用于模拟水的流动，营造枯山水的冥想空间。",
    img: "https://loremflickr.com/550/750/rock",
  },
  {
    id: 5,
    title: "清水砼",
    subtitle: "Concrete / 灰色的诗",
    desc: "致敬加州现代主义。不加修饰的混凝土表面，记录光影最真实的表情。",
    img: "https://loremflickr.com/550/750/water",
  },
  {
    id: 6,
    title: "耐候钢",
    subtitle: "Corten / 锈蚀之美",
    desc: "随季节更替而变化的锈红色保护层，在绿色植物中形成强烈的补色对比。",
    img: "https://loremflickr.com/550/750/iron",
  },
  {
    id: 7,
    title: "紫竹",
    subtitle: "Bamboo / 风的形状",
    desc: "墨色竹干挺拔而坚韧。当风吹过时，竹叶的沙沙声是园林的听觉背景。",
    img: "https://loremflickr.com/550/750/rock",
  },
  {
    id: 8,
    title: "静水",
    subtitle: "Water / 天空的镜子",
    desc: "黑色花岗岩池底的静水面，倒映着天空与树影，拓展空间的垂直维度。",
    img: "https://loremflickr.com/550/750/water",
  },
];

const MaterialDetail = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 修正逻辑：
  // 1. 从 -88% 改为 -70%：确保最后一张卡片刚好停在屏幕内，而不是跑出屏幕。
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    // 修正高度：从 400vh 减为 300vh，让滚动节奏更快，减少等待感
    // 修正背景：bg-ink (黑) -> bg-paper (宣纸白)
    <section ref={targetRef} className="relative h-[300vh] bg-paper">
      
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-16 md:gap-24 px-10 md:px-20">
          
          {/* 卷首语：文字颜色适配浅色背景 */}
          <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px] text-ink z-10">
            <div className="flex items-center gap-4 mb-8">
              {/* 装饰线变黑 */}
              <span className="h-[1px] w-12 bg-ink/30"></span>
              <span className="text-xs uppercase tracking-[0.3em] opacity-60">Materiality</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif tracking-widest leading-tight mb-6">
              八物<br />
              <span className="italic opacity-50 text-4xl">之</span><br />
              格致
            </h2>
            <p className="text-sm font-light tracking-widest opacity-60 leading-loose max-w-xs text-ink/80">
              从粗糙的断裂面到细腻的包浆。<br/>
              我们构建的不是风景，而是质感的合集。
            </p>
          </div>

          {materials.map((item) => (
            <MaterialCard key={item.id} item={item} />
          ))}

          {/* 尾部留白减少，因为不需要滚那么远了 */}
          <div className="min-w-[50px] md:min-w-[100px]" />
          
        </motion.div>
      </div>
    </section>
  );
};

const MaterialCard = ({ item }) => {
  return (
    <div className="group relative w-[300px] md:w-[400px] flex-shrink-0 flex flex-col justify-center">
      {/* 图片区域 */}
      <div className="relative overflow-hidden aspect-[3/5] bg-stone/20">
        <motion.img 
          src={item.img} 
          alt={item.title}
          // 在浅色背景下，保持一定的灰度，hover时变亮
          className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:mix-blend-normal"
        />
        
        {/* 编号大字：适配浅色背景，使用深色文字但极低透明度 */}
        <span className="absolute -bottom-6 -right-4 text-[120px] font-serif leading-none text-ink opacity-5 select-none pointer-events-none group-hover:opacity-10 transition-opacity">
          {item.id}
        </span>
      </div>

      {/* 文字区域：适配浅色背景 */}
      <div className="mt-8 text-ink relative pl-4 border-l border-ink/10 group-hover:border-moss transition-colors duration-500">
        <h3 className="text-2xl font-serif tracking-widest mb-2 flex flex-col">
          {item.title}
          <span className="text-[10px] font-sans uppercase tracking-widest opacity-40 mt-1">{item.subtitle}</span>
        </h3>
        <p className="text-xs md:text-sm font-light leading-relaxed opacity-60 mt-4 line-clamp-3 group-hover:line-clamp-none group-hover:opacity-90 transition-all">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default MaterialDetail;