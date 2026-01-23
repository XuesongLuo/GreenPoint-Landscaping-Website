// src/utils/imageHelper.js

/**
 * 获取图片 URL。
 * 如果是开发环境且没有真实图片，返回符合品牌色调的占位图。
 * * @param {string} path -原本的图片路径 (如 "/assets/images/hero-bg.jpg")
 * @param {string} type - 图片类型 ('hero', 'card', 'square') 用于决定尺寸
 * @returns {string} - 可用的图片 URL
 */
export const getAssetUrl = (path, type = 'card') => {
    // 这里的逻辑是：如果我们需要调试布局，先统一返回占位图
    // 等你有真实图片后，只需修改这个变量为 false
    const USE_PLACEHOLDER = true; 
  
    if (!USE_PLACEHOLDER) {
      return path;
    }
  
    // 定义尺寸
    const sizes = {
      hero: '1920x1080',
      card: '800x1000',   // 竖向构图，适合 ProjectGrid
      square: '800x800',
      wide: '1200x600'
    };
  
    const size = sizes[type] || sizes.card;
    
    // 使用 Placehold.co 服务，配色使用我们的主题色
    // 背景: Moss (#8C927D) 或 Stone (#D1CDC4)
    // 文字: Paper (#F2EFEA)
    const bg = type === 'hero' ? '1A1A1A' : '8C927D'; // Hero 用深色，其他用苔藓绿
    const text = 'F2EFEA';
    const label = path.split('/').pop(); // 获取文件名作为文字
  
    return `https://placehold.co/${size}/${bg}/${text}?text=${label}&font=playfair-display`;
  };