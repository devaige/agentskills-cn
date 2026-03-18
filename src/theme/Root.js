import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Docusaurus 自身也使用此 key 存储用户的语言偏好
const LOCALE_STORAGE_KEY = 'docusaurus.locale.preferred';

export default function Root({ children }) {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 开发模式下 docusaurus start 只服务单一 locale，跳过自动重定向
    // 预览中文版请使用 npm run start:zh
    if (process.env.NODE_ENV === 'development') return;

    const pathname = window.location.pathname;

    // 防止死循环：若 URL 中已包含 /zh-Hans/，说明当前就在中文版，不再重定向
    if (pathname.startsWith('/zh-Hans')) {
      localStorage.setItem(LOCALE_STORAGE_KEY, 'zh-Hans');
      return;
    }

    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

    if (currentLocale === 'en') {
      if (storedLocale === 'zh-Hans') {
        // 用户之前明确选择了简体中文，跳回 zh-Hans 对应页面
        window.location.replace('/zh-Hans' + pathname + window.location.search);
      } else if (!storedLocale) {
        // 首次访问且未设置偏好：根据浏览器语言决定
        const browserLang = (navigator.language || '').toLowerCase();
        if (browserLang.startsWith('zh')) {
          window.location.replace('/zh-Hans' + pathname + window.location.search);
        }
        // 非中文浏览器语言：保持英文，不跳转
      }
      // storedLocale === 'en'：用户主动选择了英文，尊重该选择，不跳转
    }
  }, [currentLocale]);

  return <>{children}</>;
}
