const ProjectInfo = ({ project }) => {
  return (
    <section className="px-6 md:px-20 py-32 grid grid-cols-1 md:grid-cols-12 gap-10 bg-paper">
      {/* 左侧：专业档案 (经纬度在这里) */}
      <div className="md:col-span-4 sticky top-32 h-fit">
        <h2 className="text-sm uppercase tracking-zen text-moss mb-10">— ARCHIVE</h2>
        <div className="space-y-6 text-sm border-l border-ink/10 pl-6">
          <p className="flex flex-col"><span className="opacity-40 uppercase text-[10px]">Area</span>{project.area}</p>
          <p className="flex flex-col">
            <span className="opacity-40 uppercase text-[10px]">Coordinates</span>
            <span className="font-mono text-[11px] mt-1 italic">
               {/* 模拟坐标细节 */}
               {project.id === 2 ? "34.0259° N, 118.7798° W" : "30.2741° N, 120.1551° E"}
            </span>
          </p>
        </div>
      </div>

      {/* 右侧：非对称偏移的叙事文字 (md:col-start-6) */}
      <div className="md:col-span-7 md:col-start-6">
        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-ink/80 italic">
          {project.description}
        </p>
      </div>
    </section>
  );
};

{/*
const InfoItem = ({ label, value }) => (
  <div>
    <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-1">{label}</h4>
    <p className="font-serif text-lg text-moss">{value}</p>
  </div>
);
*/}
export default ProjectInfo;