// A股股票查询工具 - 入口文件
// 使用 ES Modules + Composables 模式

import { useStockData } from './composables/useStockData.js';
import { useDisplay } from './composables/useDisplay.js';

async function main() {
  const args = process.argv.slice(2);
  const stockCode = args[0] || '000001';
  
  console.clear();
  
  const { fetchStock, loading, error } = useStockData();
  const { formatStockInfo } = useDisplay();
  
  console.log(`📊 正在查询股票: ${stockCode}...\n`);
  
  try {
    const data = await fetchStock(stockCode);
    
    if (error.value) {
      console.error('❌ 查询失败:', error.value);
      return;
    }
    
    console.log(formatStockInfo(data));
    
  } catch (err) {
    console.error('❌ 程序异常:', err.message);
  }
}

main();
