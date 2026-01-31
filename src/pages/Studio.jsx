// src/pages/Studio.jsx
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Philosophy from '../components/home/Philosophy';
import Footer from '../components/common/Footer';

const Studio = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-paper min-h-screen flex flex-col"
    >
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-20 px-8 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
          
          {/* 左侧：哲学说明 (Philosophy) */}
          <section className="space-y-12">
            <Philosophy 
              variant="simple" 
              title="Design Philosophy" 
              quote="以东方之笔，绘加州之境。"
            />
            <p className="mt-8 text-moss leading-loose font-light">
              在 GreenPoint，我们相信园林不是对自然的征服，而是对大地的“留白”。
              我们融合了京都禅寺的静谧尺度与加州海岸的明亮自由，利用当地抗旱植物营造出既符合现代生活方式，又具有深厚精神内核的景观空间。
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
                  1200 Coastal Way, <br/>
                  Santa Monica, CA 90401
                </address>
              </div>

              {/* 联系方式 */}
              <div>
                <h2 className="text-stone text-xs tracking-zen uppercase mb-6">Inquiries</h2>
                <div className="space-y-2">
                  <p className="text-ink font-serif text-xl hover:text-moss transition-colors cursor-pointer">
                    hello@greenpoint.landscaping
                  </p>
                  <p className="text-ink font-serif text-xl">
                    +1 (310) 555-0199
                  </p>
                </div>
              </div>

              {/* 社交媒体/额外信息 (可选，保持布局平衡) */}
              <div>
                <h2 className="text-stone text-xs tracking-zen uppercase mb-6">Follow</h2>
                <p className="text-ink font-serif text-lg italic">@greenpoint.studio</p>
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