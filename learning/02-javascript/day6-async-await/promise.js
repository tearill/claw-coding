/**
 * 手写 Promise 实现
 * 理解 Promise 原理
 */

// 简单的 Promise 实现
class SimplePromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.callbacks.forEach(cb => cb.onFulfilled(value));
      }
    };

    const reject = (error) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.value = error;
        this.callbacks.forEach(cb => cb.onRejected(error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new SimplePromise((resolve, reject) => {
      const handleCallback = (callback, value, resolver) => {
        try {
          const result = callback(value);
          // 如果返回的是 Promise，需要等待它完成
          if (result instanceof SimplePromise) {
            result.then(resolver, reject);
          } else {
            resolver(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        handleCallback(onFulfilled, this.value, resolve);
      } else if (this.state === 'rejected') {
        handleCallback(onRejected, this.value, reject);
      } else {
        this.callbacks.push({
          onFulfilled: (value) => handleCallback(onFulfilled, value, resolve),
          onRejected: (value) => handleCallback(onRejected, value, reject)
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      value => {
        onFinally();
        return value;
      },
      error => {
        onFinally();
        throw error;
      }
    );
  }

  // 静态方法
  static resolve(value) {
    return new SimplePromise((resolve) => resolve(value));
  }

  static reject(error) {
    return new SimplePromise((_, reject) => reject(error));
  }

  static all(promises) {
    return new SimplePromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('参数必须是数组'));
      }
      
      const results = [];
      let completed = 0;

      if (promises.length === 0) {
        return resolve(results);
      }

      promises.forEach((promise, index) => {
        SimplePromise.resolve(promise).then(
          value => {
            results[index] = value;
            completed++;
            if (completed === promises.length) {
              resolve(results);
            }
          },
          error => reject(error)
        );
      });
    });
  }

  static race(promises) {
    return new SimplePromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('参数必须是数组'));
      }

      promises.forEach(promise => {
        SimplePromise.resolve(promise).then(
          value => resolve(value),
          error => reject(error)
        );
      });
    });
  }
}

// 测试
console.log('=== 测试 SimplePromise ===');

// 测试 1: 基本用法
new SimplePromise((resolve, reject) => {
  setTimeout(() => {
    resolve('操作成功');
  }, 100);
}).then(result => {
  console.log('Test 1 - 结果:', result);
});

// 测试 2: 链式调用
new SimplePromise((resolve) => {
  resolve(1);
})
  .then(result => {
    console.log('Test 2 - 第一次:', result);
    return result + 1;
  })
  .then(result => {
    console.log('Test 2 - 第二次:', result);
    return result + 1;
  })
  .then(result => {
    console.log('Test 2 - 第三次:', result);
  });

// 测试 3: 错误处理
new SimplePromise((resolve, reject) => {
  reject(new Error('出错了'));
})
  .then(result => {
    console.log('Test 3 - 成功:', result);
  })
  .catch(error => {
    console.log('Test 3 - 错误:', error.message);
  });

// 测试 4: Promise.all
SimplePromise.all([
  new SimplePromise(resolve => setTimeout(() => resolve(1), 100)),
  new SimplePromise(resolve => setTimeout(() => resolve(2), 200)),
  new SimplePromise(resolve => setTimeout(() => resolve(3), 50))
]).then(results => {
  console.log('Test 4 - Promise.all:', results);
});

// 测试 5: Promise.race
SimplePromise.race([
  new SimplePromise(resolve => setTimeout(() => resolve('慢'), 500)),
  new SimplePromise(resolve => setTimeout(() => resolve('快'), 100))
]).then(result => {
  console.log('Test 5 - Promise.race:', result);
});

// 测试 6: finally
new SimplePromise((resolve) => {
  resolve('finally 测试');
})
  .then(result => {
    console.log('Test 6 - then:', result);
  })
  .finally(() => {
    console.log('Test 6 - finally 执行');
  });

console.log('测试代码已提交到事件循环');
