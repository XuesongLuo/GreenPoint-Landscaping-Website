
// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSiteConfig } from '../../hooks/useSiteConfig';

const Footer = () => {
  const { config } = useSiteConfig();

  // 提取数据（如果 config 还没加载回来，就给个空对象防止报错）
  // 你也可以在这里保留硬编码的字符串作为“兜底默认值”
  //const brand = config?.brand || {};
  const contact = config?.footer?.contact || {};
  //const social = config?.social || {};

  const currentYear = new Date().getFullYear();


  // 返回顶部函数：平滑滚动
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-[#f2efea] pt-24 pb-12 px-6 md:px-20 relative overflow-hidden">
      {/* 修改点：添加 max-w-7xl mx-auto */}
      <div className="max-w-7xl mx-auto">
        {/* 1. 主内容区：网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-b border-white/10 pb-20">
          
          {/* Brand: 左侧品牌区 */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif tracking-widest mb-6">Green Point</h2>
              <p className="text-sm opacity-60 leading-relaxed max-w-xs font-light">
                We design landscapes that breathe, age, and evolve with nature.
                <br />
                <span className="mt-4 block opacity-50">让建筑在自然中消隐。</span>
              </p>
            </div>
          </div>

          {/* Navigation: 极简导航 */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-moss mb-6">Explore</h4>
            <ul className="space-y-4 font-serif text-lg">
              <li><FooterLink to="/">Home / 首页</FooterLink></li>
              <li><FooterLink to="/projects">Work / 作品</FooterLink></li>
              <li><FooterLink to="/studio">Studio / 工作室</FooterLink></li>
            </ul>
          </div>

          {/* Contact: 联络信息 */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-moss mb-6">Visit</h4>
            <address className="not-italic text-sm opacity-60 leading-loose">
              {/* 地址行 1 */}
              {contact.address_line1}<br />
              {/* 地址行 2 */}
              {contact.address_line2}<br />
              <br />
              {/* 邮箱 (支持点击发送) */}
              <a 
                href={`mailto:${contact.email || "hello@terremoto-east.com"}`} 
                className="hover:text-white transition-colors"
              >
                {contact.email || "hello@terremoto-east.com"}
              </a><br />
              {/* 电话 */}
              {contact.phone || "+86 21 0000 0000"}
            </address>
          </div>

          {/* Back to Top: 返回顶部 (设计成竖排文字) */}
          <div className="md:col-span-2 flex justify-end items-end">
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-4 text-xs tracking-widest opacity-50 hover:opacity-100 transition-opacity"
            >
              <span className="writing-vertical-rl text-upright">返回顶部</span>
              <div className="h-12 w-[1px] bg-white/30 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-white"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* 2. 底部版权：极其低调 */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-30">
          {/*<p>© {currentYear} {brand.name_en || "TERREMOTO EAST"}. All Rights Reserved.</p>*/}
          <p>© {currentYear} GREENPOINT. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">WeChat</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LittleRedBook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 辅助组件：带有 Hover 动效的链接
const FooterLink = ({ to, children }) => {
  return (
    <Link to={to} className="group relative inline-block overflow-hidden">
      <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute top-0 left-0 block w-full transition-transform duration-500 translate-y-[120%] group-hover:translate-y-0 text-moss">
        {children}
      </span>
    </Link>
  );
};

export default Footer;