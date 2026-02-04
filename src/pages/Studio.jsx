// src/pages/Studio.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/transitions';
import { useSiteConfig } from '../hooks/useSiteConfig';
import Navbar from '../components/common/Navbar';
import Philosophy from '../components/home/Philosophy';
import Footer from '../components/common/Footer';

const Studio = () => {
  // 1. 调用 Hook 获取后端数据
  const { config, loading } = useSiteConfig();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // 2. 加载状态：显示极简的加载文字
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
        <span className="text-stone-400 font-serif tracking-widest animate-pulse">
          Loading Philosophy...
        </span>
      </div>
    );
  }

  // 3. 安全检查：如果数据没取到，不渲染报错，而是返回空
  if (!config || !config.studio) return null;

  // 4. 解构数据，让代码更干净
  const { philosophy, contact } = config.studio;
  console.log(contact);
  return (
    <motion.div 
      {...pageTransition}
      className="bg-paper min-h-screen flex flex-col relative"
    >
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-20 px-8 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
          
          {/* 左侧：哲学说明 (Philosophy) */}
          <section className="space-y-12">
            <Philosophy 
              variant="simple" 
              title={philosophy.title}
              quote={philosophy.headline}
              quote_cn={philosophy.headline_cn}
            />
            <p className="mt-8 text-moss leading-loose font-light">
              {philosophy.description}
            </p>
            {/*</div> */}
            
            <div className="aspect-[3/4] bg-stone/20 overflow-hidden relative">
               <img 
                 src="/assets/images/background/cardboard-flat.png" 
                 alt="Studio Atmosphere" 
                 className="w-full h-full object-cover mix-blend-multiply opacity-60"
               />
               {/* 装饰性的边框线，增加一点精致感 */}
               <div className="absolute inset-4 border border-paper/30 pointer-events-none"></div>
            </div>
          </section>

          {/* 右侧：联系方式 (Contact) - 已移除表单，改为垂直居中展示 */}
          <section className="flex flex-col justify-center h-full">
            <div className="space-y-16 pl-0 md:pl-12 border-l-0 md:border-l border-stone/30">
              
              {/* 地址 */}
              <div>
                <h2 className="text-stone text-xs tracking-zen uppercase mb-6">Visit Us</h2>
                <address className="not-italic text-ink font-serif text-2xl leading-relaxed">
                  {/* 地址行 1 */}
                  {contact.address_line1}<br />
                  {/* 地址行 2 */}
                  {contact.address_line2}
                </address>
              </div>

              {/* 联系方式 */}
              <div>
                <h2 className="text-stone text-xs tracking-zen uppercase mb-6">Inquiries</h2>
                <div className="space-y-2">
                  <a 
                    href={`mailto:${contact.email}`}
                    className="block text-ink font-serif text-xl hover:text-green-800 transition-colors cursor-pointer"
                  >
                    {contact.email}
                  </a>
                  <p className="text-ink font-serif text-xl">
                    {contact.phone}
                  </p>
                </div>
              </div>

              {/* 社交媒体/额外信息 (可选，保持布局平衡) */}
              <div>
                <h2 className="text-stone text-xs tracking-zen uppercase mb-6">Follow</h2>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-ink font-serif text-lg italic hover:text-green-800 transition-colors"
                >
                  {contact.instagram}
                </a>  
              </div>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Studio;