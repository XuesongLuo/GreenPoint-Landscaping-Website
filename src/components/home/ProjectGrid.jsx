// src/components/home/ProjectGrid.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
//import { projectsData } from '../../data/projects'; // 引入真实数据


const ProjectGrid = ({ projects = [], limit }) => {
  // 1. 优先使用传入的 projects 数据
  // 如果传入了 limit（比如在首页），就进行切片；否则显示全部
  const displayProjects = limit && projects.length > 0 
    ? projects.slice(0, limit) 
    : projects;
  
  // 如果没有数据（比如加载中或空数据），不渲染或显示占位
  if (!displayProjects || displayProjects.length === 0) {
    return null; // 或者返回一个 "No Projects Found" 的提示
  }

  return (
    <section className="py-32 px-6 md:px-20 bg-paper">
      {/* 修改点：添加容器 div 来限制最大宽度并居中 */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {displayProjects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={index % 2 !== 0 ? "md:mt-32" : ""} // 错落布局的关键代码
            >
              <Link to={`/projects/${item.id}`} className="block group">
                {/* 图片容器：月亮门效果 */}
                <div className="overflow-hidden rounded-t-[150px] aspect-[4/5] relative">
                  <motion.img 
                    // 这里的 layoutId 是实现跨页面平滑飞入的关键
                    layoutId={`project-img-${item.id}`}
                    whileHover={{
                      scale: 1.05,
                      filter: "brightness(1.1) contrast(1.05) saturate(1.1)", // 模拟阳光照上去的感觉
                    }}
                    transition={{ duration: 0.8 }}
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    // 如果你的后端图片没有域名，可能需要在这里拼接 import.meta.env.VITE_API_ASSETS_URL
                  />
                  {/* 遮罩层，增加交互质感 */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500"></div>
                </div>
                
                <div className="mt-8 flex justify-between items-center border-t border-ink/10 pt-4">
                <div>
                  <h3 className="text-2xl font-serif tracking-widest">{item.title}</h3>
                  <p className="text-[10px] opacity-40 uppercase tracking-tighter mt-1">
                    {item.location} / {item.year}
                  </p>
                </div>
                  <span className="text-xs uppercase tracking-widest text-moss">{item.category}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 首页特有的“查看更多”按钮 */}
        {limit && (
          <div className="mt-20 text-center">
            <Link to="/projects" className="text-sm tracking-[0.3em] uppercase border-b border-ink pb-2 hover:opacity-60 transition-opacity">
              View All Projects / 查看全部
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectGrid;