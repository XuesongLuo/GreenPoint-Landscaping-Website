// src/hooks/useSiteConfig.jsx
import { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// 简单的内存缓存，避免页面切换时重复请求
let configCache = null;
let pendingPromise = null; // 防止并发请求的锁

export const useSiteConfig = () => {
  const [config, setConfig] = useState(configCache);
  const [loading, setLoading] = useState(!configCache);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 如果已有缓存，直接使用，不再请求
    if (configCache) {
      setLoading(false);
      return;
    }

    const fetchConfig = async () => {
      try {
        if (!pendingPromise) {
          pendingPromise = fetch(`${API_BASE_URL}/config`)
            .then(res => {
              if (!res.ok) throw new Error('Failed to load config');
              return res.json();
            })
            .then(data => {
              configCache = data; // 存数据
              return data;
            })
            .catch(err => {
              pendingPromise = null; // 出错后重置锁，允许重试
              throw err;
            });
        }
        const data = await pendingPromise;
        setConfig(data);
      } catch (err) {
        console.error("Error fetching config:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
};