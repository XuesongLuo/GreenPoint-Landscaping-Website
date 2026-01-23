import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 模拟数据
const projects = [
  { id: 1, title: "云谷山房", img: "/assets/images/p1.jpg", type: "Resort" },
  { id: 2, title: "松间茶室", img: "/assets/images/p2.jpg", type: "Private" },
  // ...更多数据
];

const ProjectGrid = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-paper">
      {/* 修改点：添加容器 div 来限制最大宽度并居中 */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={index % 2 !== 0 ? "md:mt-32" : ""} // 错落布局的关键代码
            >
              <Link to={`/project/${item.id}`} className="block group">
                {/* 图片容器：月亮门效果 */}
                <div className="overflow-hidden rounded-t-[150px] aspect-[4/5] relative">
                  <motion.img 
                    // 这里的 layoutId 是实现跨页面平滑飞入的关键
                    layoutId={`project-img-${item.id}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                <div className="mt-8 flex justify-between items-center border-t border-ink/10 pt-4">
                  <h3 className="text-2xl font-serif tracking-widest">{item.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-moss">{item.type}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;