import { motion } from 'framer-motion';
import { inkSplotch } from '../../animations/transitions';

/**
 * 增强版 Philosophy 组件
 * * @param {string} title - 底部的小标题 (如 "Design Philosophy" 或 "Our Belief")
 * @param {string} quote - 核心引言
 * @param {string} quote_cn - [新增] 副引言 (中文 - 虚 - 东方意境)
 * @param {string} variant - 样式变体: 'full' (首页用, 全宽深背景) | 'simple' (Studio用, 无背景)
 */
const Philosophy = ({ 
  title = "Philosophy", 
  quote,                // 接收父组件传来的英文内容
  quote_cn,             // 接收父组件传来的中文内容
  variant = 'full'
}) => {
  const isFull = variant === 'full';

  if (!quote) return null;

  return (
    <section className={`${isFull ? 'py-32 px-6 md:px-20 bg-[#f2efea]' : 'py-0'}`}>
      <div className={`${isFull ? 'max-w-4xl mx-auto text-center' : 'w-full text-left'}`}>
        <motion.div
          {...inkSplotch}
          viewport={{ once: true, margin: "-10%" }}
        >
          <h2 className={`${isFull ? 'text-2xl md:text-3xl' : 'text-4xl'} font-serif leading-relaxed text-[#1a1a1a]`}>
            {quote}
          </h2>
          {/* 2. 副引言 (中文) - 只有传入了才显示 */}
          {quote_cn && (
            <p className="mt-4 font-serif text-lg text-stone-400 font-light select-none italic">
              {quote_cn}
            </p>
          )}
          <div className={`mt-12 flex items-center gap-4 ${isFull ? 'justify-center' : ''}`}>
            <span className="h-[1px] w-12 bg-[#8c927d]"></span>
            <span className="text-sm tracking-widest text-[#8c927d] uppercase font-bold">
              {title}
            </span>
            {isFull && <span className="h-[1px] w-12 bg-[#8c927d]"></span>}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;