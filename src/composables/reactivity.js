// 简化版响应式系统 - 参考 Vue 3 ref 实现
export function ref(value) {
  const observers = new Set();
  
  return {
    _value: value,
    get value() {
      return this._value;
    },
    set value(newValue) {
      this._value = newValue;
      observers.forEach(fn => fn(newValue));
    }
  };
}
