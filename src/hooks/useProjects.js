import { useState, useEffect, useCallback } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // 新增分页状态
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 获取数据的函数，由 UI 触发（例如点击“Load More”）
  const fetchProjects = useCallback(async (pageNum = 1, isRefresh = false) => {
    try {
      setLoading(true);
      // 假设我们每页取 6 个
      const response = await fetch(`${API_BASE_URL}/projects?page=${pageNum}&limit=6`);
      if (!response.ok) throw new Error('Failed to fetch');
      
      const result = await response.json();
      
      // 关键逻辑：如果是刷新(第一页)，覆盖数据；如果是翻页，追加数据
      if (isRefresh || pageNum === 1) {
        setProjects(result.data);
      } else {
        setProjects(prev => [...prev, ...result.data]);
      }
      
      setHasMore(result.meta.hasMore);
      setPage(pageNum);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 初始加载第一页
  useEffect(() => {
    fetchProjects(1);
  }, [fetchProjects]);

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchProjects(page + 1);
    }
  };

  return { projects, loading, error, hasMore, loadMore };
};