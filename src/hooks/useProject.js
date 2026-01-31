// src/hooks/useProject.js
import { useState, useEffect } from 'react';

// 获取环境变量
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * 自定义 Hook: 获取单个项目详情
 * @param {string} id - 项目 ID
 */
export const useProject = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 如果没有 ID，不执行请求
    if (!id) return;

    const fetchProjectDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${API_BASE_URL}/projects/${id}`);
        
        if (!response.ok) {
          throw new Error('Project not found');
        }

        const data = await response.json();
        setProject(data);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("无法寻得此方天地 (Project Not Found)");
      } finally {
        // 保持呼吸感的延迟
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchProjectDetail();
  }, [id]); // 依赖项是 id，当 id 变化时重新请求

  return { project, loading, error };
};