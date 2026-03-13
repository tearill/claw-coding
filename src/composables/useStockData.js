// useStockData composable - 股票数据获取
import { ref } from './reactivity.js';

export function useStockData() {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);
  
  async function fetchStock(code) {
    loading.value = true;
    error.value = null;
    
    try {
      const secid = formatSecId(code);
      const url = `https://push2.eastmoney.com/api/qt/stock/get?secid=${secid}&fields=f43,f44,f45,f46,f47,f48,f58,f116,f162,f168,f170,f196`;
      
      const response = await fetch(url);
      const json = await response.json();
      
      if (json.data) {
        data.value = parseStockData(json.data, code);
      } else {
        error.value = '未找到该股票';
      }
    } catch (err) {
      error.value = err.message || '网络请求失败';
    } finally {
      loading.value = false;
    }
    
    return data.value;
  }
  
  return { data, loading, error, fetchStock };
}

function formatSecId(code) {
  if (code.startsWith('6')) return `1.${code}`;
  return `0.${code}`;
}

function parseStockData(raw, code) {
  const price = raw.f43 / 1000;
  const prevClose = raw.f170 / 1000;
  const change = price - prevClose;
  
  return {
    code,
    name: raw.f58 || '未知',
    price: price.toFixed(2),
    change: (change > 0 ? '+' : '') + change.toFixed(2),
    changePct: prevClose ? ((change / prevClose) * 100).toFixed(2) : 0,
    open: (raw.f46 / 1000).toFixed(2),
    high: (raw.f44 / 1000).toFixed(2),
    low: (raw.f45 / 1000).toFixed(2),
    volume: (raw.f47 / 100000000).toFixed(2) + '亿',
    amount: (raw.f48 / 100000000).toFixed(2) + '亿',
    turnover: raw.f168 ? (raw.f168 / 100).toFixed(2) + '%' : '-',
    amplitude: raw.f196 ? (raw.f196 / 100).toFixed(2) + '%' : '-',
    marketCap: raw.f116 ? (raw.f116 / 100000000).toFixed(2) + '亿' : '-',
    pe: raw.f162 ? raw.f162.toFixed(2) : '-',
    time: new Date().toLocaleString('zh-CN')
  };
}
