/**
 * async/await 异步编程练习
 * 天气查询模拟
 */

// 模拟天气 API
function fetchWeather(city) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const weatherData = {
        '北京': { temp: 15, weather: '晴', humidity: 40 },
        '上海': { temp: 20, weather: '多云', humidity: 65 },
        '广州': { temp: 25, weather: '雨', humidity: 80 },
        '深圳': { temp: 26, weather: '晴', humidity: 55 },
        '成都': { temp: 18, weather: '阴', humidity: 70 }
      };
      resolve(weatherData[city] || { temp: 0, weather: '未知', humidity: 0 });
    }, Math.random() * 1000 + 500); // 随机延迟 0.5-1.5秒
  });
}

// 串行获取天气（一个一个来）
async function getWeatherSequential(cities) {
  const results = [];
  for (const city of cities) {
    const weather = await fetchWeather(city);
    results.push({ city, ...weather });
  }
  return results;
}

// 并行获取天气（一起请求）
async function getWeatherParallel(cities) {
  const promises = cities.map(city => fetchWeather(city));
  const weatherResults = await Promise.all(promises);
  return cities.map((city, index) => ({
    city,
    ...weatherResults[index]
  }));
}

// 竞速获取（哪个快用哪个）
async function getFastestWeather(cities) {
  const promises = cities.map(city => fetchWeather(city));
  const result = await Promise.race(promises);
  return result;
}

// 带错误处理的天气获取
async function getWeatherWithErrorHandle(cities) {
  const results = [];
  
  for (const city of cities) {
    try {
      const weather = await fetchWeather(city);
      results.push({ city, ...weather, status: 'success' });
    } catch (error) {
      results.push({ city, status: 'error', message: error.message });
    }
  }
  
  return results;
}

// 模拟用户数据获取
async function getUserData(userId) {
  console.log(`开始获取用户 ${userId} 的数据...`);
  
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: userId,
    name: `用户${userId}`,
    email: `user${userId}@example.com`
  };
}

async function getUserPosts(userId) {
  console.log(`开始获取用户 ${userId} 的文章...`);
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return [
    { id: 1, title: '第一篇文章' },
    { id: 2, title: '第二篇文章' }
  ];
}

// 顺序获取用户和文章
async function getUserProfile(userId) {
  const user = await getUserData(userId);
  const posts = await getUserPosts(userId);
  return { user, posts };
}

// 测试
async function runTests() {
  console.log('\n========== async/await 测试 ==========\n');

  // 测试 1: 串行获取
  console.log('--- 测试 1: 串行获取天气 ---');
  const start1 = Date.now();
  const result1 = await getWeatherSequential(['北京', '上海', '广州']);
  console.log(`耗时: ${Date.now() - start1}ms`);
  result1.forEach(r => console.log(`${r.city}: ${r.weather}, ${r.temp}°C`));

  // 测试 2: 并行获取
  console.log('\n--- 测试 2: 并行获取天气 ---');
  const start2 = Date.now();
  const result2 = await getWeatherParallel(['北京', '上海', '广州']);
  console.log(`耗时: ${Date.now() - start2}ms`);
  result2.forEach(r => console.log(`${r.city}: ${r.weather}, ${r.temp}°C`));

  // 测试 3: 竞速获取
  console.log('\n--- 测试 3: 竞速获取 ---');
  const result3 = await getFastestWeather(['北京', '上海', '广州']);
  console.log('最先返回的结果:', result3);

  // 测试 4: 错误处理
  console.log('\n--- 测试 4: 错误处理 ---');
  const result4 = await getWeatherWithErrorHandle(['北京', '不存在的城市', '广州']);
  result4.forEach(r => {
    if (r.status === 'success') {
      console.log(`${r.city}: ${r.weather}`);
    } else {
      console.log(`${r.city}: ${r.message}`);
    }
  });

  // 测试 5: 用户数据获取
  console.log('\n--- 测试 5: 用户数据获取 ---');
  const profile = await getUserProfile(123);
  console.log('用户信息:', profile);

  console.log('\n========== 所有测试完成 ==========\n');
}

// 运行测试
runTests().then(() => {
  console.log('测试执行完毕');
});
