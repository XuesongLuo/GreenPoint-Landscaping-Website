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
    description: "设计旨在消解建筑的物理边界。我们利用场地原本的高差，将庭院分为‘入尘’、‘洗心’、‘归隐’三进空间。石材取自当地废弃的采石场，保留了粗糙的断裂面，与细腻的玻璃幕墙形成对话。",
    coverImage: "/assets/images/p1.jpg", 
    sketchImage: "/assets/images/sketch-01.jpg",
    gallery: ["/assets/images/p1-1.jpg", "/assets/images/p1-2.jpg"],
    plants: [
      { name: "早樱", latin: "Cerasus sp.", type: "乔木" },
      { name: "细叶芒", latin: "Miscanthus sinensis", type: "观赏草" }
    ]
  },
  {
    id: 2,
    slug: "solstice-canyon",
    title: "曦谷居",
    subtitle: "Solstice Canyon Residence",
    location: "Malibu, California",
    year: "2023",
    area: "850 m²",
    category: "Residential",
    // 体现加州风格：阳光、室内外衔接、旱生景观
    description: "项目坐落于马里布的阳光山脊。我们将东方园林的‘框景’手法应用于加州海岸线。通过大面积的浅色混凝土平台与耐旱的油橄榄林，创造出一个即便在烈日下也能感受到清凉禅意的现代居所。室内外的界限被彻底打破，空气与光线自由流淌。",
    coverImage: "/assets/images/p2.jpg", 
    sketchImage: "/assets/images/sketch-02.jpg",
    gallery: ["/assets/images/p2-1.jpg", "/assets/images/p2-2.jpg"],
    plants: [
      { name: "百年油橄榄", latin: "Olea europaea", type: "核心主景" },
      { name: "翡翠盘龙舌兰", latin: "Agave attenuata", type: "雕塑植物" },
      { name: "墨西哥羽毛草", latin: "Nassella tenuissima", type: "观赏草" }
    ]
  },
  {
    id: 3,
    slug: "napa-zen-pavilion",
    title: "纳帕禅亭",
    subtitle: "The Napa Zen Pavilion",
    location: "St. Helena, California",
    year: "2022",
    area: "2,100 m²",
    category: "Estate",
    // 体现融合：东方哲学处理加州酒庄大地景观
    description: "在纳帕谷的葡萄园环抱中，我们借鉴了‘枯山水’的精神，但使用了加州本地的碎石与岩块。建筑采用了大量的雪松木材，随时间推移会变为银灰色，与远处的山脉融为一体。这是一个关于‘时间’与‘自然演变’的景观实验。",
    coverImage: "/assets/images/p3.jpg", 
    sketchImage: "/assets/images/sketch-03.jpg",
    gallery: ["/assets/images/p3-1.jpg", "/assets/images/p3-3.jpg"],
    plants: [
      { name: "加州活栎", latin: "Quercus agrifolia", type: "原生乔木" },
      { name: "薰衣草", latin: "Lavandula", type: "地被" },
      { name: "迷迭香", latin: "Rosmarinus officinalis", type: "灌木" }
    ]
  }
];