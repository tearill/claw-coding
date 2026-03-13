// useDisplay composable - 格式化输出
export function useDisplay() {
  
  function formatStockInfo(stock) {
    const isUp = parseFloat(stock.change) >= 0;
    const emoji = isUp ? '📈' : '📉';
    const color = isUp ? '🟢' : '🔴';
    
    return `
┌─────────────────────────────────┐
│     📊 ${stock.name} (${stock.code})      │
├─────────────────────────────────┤
│  💰 价格: ${stock.price}                 │
│  ${color} 涨跌: ${stock.change} (${stock.changePct}%) │
├─────────────────────────────────┤
│  📊 开盘: ${stock.open}                   │
│  🔝 最高: ${stock.high}                   │
│  🔻 最低: ${stock.low}                   │
├─────────────────────────────────┤
│  📈 成交量: ${stock.volume}            │
│  💵 成交额: ${stock.amount}            │
│  🔄 换手率: ${stock.turnover}             │
├─────────────────────────────────┤
│  📏 振幅: ${stock.amplitude}              │
│  🏢 市值: ${stock.marketCap}            │
│  📈 市盈率: ${stock.pe}                  │
└─────────────────────────────────┘
⏰ 更新时间: ${stock.time}
    `.trim();
  }
  
  return { formatStockInfo };
}
