import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 模拟材料数据
const materials = [
  {
    id: 1,
    title: "太湖石",
    subtitle: "Stone / 瘦漏透皱",
    desc: "选用太湖原生水蚀石，保留千年的自然孔洞与纹理，作为庭院视觉焦点。",
    img: "/assets/images/mat-stone.jpg", // 请替换为实际图片路径
    color: "#5c5c5c"
  },
  {
    id: 2,
    title: "青苔",
    subtitle: "Moss / 时间的皮肤",
    desc: "不仅是植物，更是时间的度量。我们在阴面转角处培育原生苔藓。",
    img: "/assets/images/mat-moss.jpg",
    color: "#5c6b47" // 苔藓绿
  },
  {
    id: 3,
    title: "老杉木",
    subtitle: "Wood / 枯木逢春",
    desc: "回收自明清古建筑的拆房老料，通过打磨重现木纹的温润质感。",
    img: "/assets/images/mat-wood.jpg",
    color: "#8a7b6e"
  },
  {
    id: 4,
    title: "黑山砂",
    subtitle: "Gravel / 枯山水",
    desc: "极细的黑色玄武岩颗粒，用于模拟水的流动，营造枯山水的冥想空间。",
    img: "/assets/images/mat-sand.jpg",
    color: "#2c2c2c"
  },
];

const MaterialDetail = () => {
  const targetRef = useRef(null);
  
  // 监听该组件在视口中的滚动进度
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 核心逻辑：将垂直滚动进度 (0 -> 1) 映射为水平位移 (0% -> -X%)
  // 根据卡片数量调整这里的 -75%，确保最后一张卡片能完整划入
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    // 1. 外层容器：高度必须足够高 (300vh)，以创造足够的滚动行程
    <section ref={targetRef} className="relative h-[300vh] bg-ink">
      
      {/* 2. 粘性容器：始终固定在视口顶部，直到外层容器滚完 */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* 3. 运动轨道：根据滚动进度向左平移 */}
        <motion.div style={{ x }} className="flex gap-20 px-20 md:px-40">
          
          {/* 标题卡片：作为画卷的卷首 */}
          <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px] text-[#f2efea]">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-white/30"></span>
              <span className="text-xs uppercase tracking-[0.3em] opacity-60">Craftsmanship</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif tracking-widest leading-tight mb-6">
              造物<br />
              <span className="italic opacity-50 text-4xl">与</span><br />
              微观
            </h2>
            <p className="text-sm font-light tracking-widest opacity-60 leading-loose max-w-xs">
              上帝存在于细节之中。我们关注每一块石头的摆放，每一株苔藓的呼吸。
            </p>
          </div>

          {/* 材料卡片列表 */}
          {materials.map((item) => (
            <MaterialCard key={item.id} item={item} />
          ))}

          {/* 卷尾留白：确保最后一张卡片后有空间 */}
          <div className="min-w-[200px]" />
          
        </motion.div>
      </div>
    </section>
  );
};

// 子组件：单张材料卡片
const MaterialCard = ({ item }) => {
  return (
    <div className="group relative w-[350px] md:w-[450px] flex-shrink-0 flex flex-col justify-center">
      {/* 图片区域 */}
      <div className="relative overflow-hidden aspect-[3/4] bg-neutral-800 border border-white/5">
        <motion.img 
          src={item.img} 
          alt={item.title}
          className="w-full h-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
        />
        
        {/* 装饰：图片上的色块遮罩 */}
        <div 
          className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-60"
        ></div>
      </div>

      {/* 文字区域 */}
      <div className="mt-8 text-[#f2efea] relative">
        {/* 序号 */}
        <span className="absolute -top-16 -left-4 text-[100px] font-serif opacity-5 font-bold select-none text-white">
          0{item.id}
        </span>
        
        <h3 className="text-2xl font-serif tracking-widest mb-2 flex items-baseline gap-4">
          {item.title}
          <span className="text-xs font-sans uppercase tracking-widest opacity-40 text-stone">{item.subtitle}</span>
        </h3>
        <div className="h-[1px] w-full bg-white/10 my-4 origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-50"></div>
        <p className="text-sm font-light leading-relaxed opacity-60 text-justify">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default MaterialDetail;