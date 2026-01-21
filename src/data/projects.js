// src/data/projects.js

export const projectsData = [
    {
      id: 1,
      slug: "cloud-valley",
      title: "云谷山房",
      subtitle: "Cloud Valley Retreat",
      location: "Hangzhou, China",
      year: "2024",
      area: "1,200 m²",
      category: "Resort",
      // 核心叙事文字
      description: "设计旨在消解建筑的物理边界。我们利用场地原本的高差，将庭院分为‘入尘’、‘洗心’、‘归隐’三进空间。石材取自当地废弃的采石场，保留了粗糙的断裂面，与细腻的玻璃幕墙形成对话。",
      // 封面大图 (用于首页飞入)
      coverImage: "/assets/images/p1.jpg", 
      // 概念草图
      sketchImage: "/assets/images/sketch-01.jpg",
      // 画廊图片
      gallery: [
        "/assets/images/p1-1.jpg",
        "/assets/images/p1-2.jpg",
        "/assets/images/p1-3.jpg",
        "/assets/images/p1-4.jpg",
      ],
      // 植物配置表
      plants: [
        { name: "早樱", latin: "Cerasus sp.", type: "乔木" },
        { name: "细叶芒", latin: "Miscanthus sinensis", type: "观赏草" },
        { name: "苔藓", latin: "Bryophyta", type: "地被" },
        { name: "鸡爪槭", latin: "Acer palmatum", type: "灌木" },
      ]
    },
    // 你可以在这里复制添加更多项目...
    {
      id: 2,
      slug: "tea-house",
      title: "松间茶室",
      // ... 其他数据
    }
  ];