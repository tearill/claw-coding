# AI Agent 智能体学习

> 来自 proactive-agent skill 的学习

## Proactive Agent 核心概念

### 三大支柱

**1. Proactive（主动型）**
- 预判人类需求，而不是等待指令
- 反向提示（Reverse Prompting）：主动提出人类没想到的想法
- 主动检查：监控重要事项并在需要时主动联系

**2. Persistent（持久性）**
- WAL Protocol（预写日志）：在响应前写入关键细节
- Working Buffer：在上下文危险的"危险区域"捕获每次交互
- Compaction Recovery：上下文截断后的精确恢复

**3. Self-improving（自改进）**
- Self-healing：自动修复自己的问题
- Relentless Resourcefulness：尝试 10 种方法后再放弃
- Safe Evolution：护栏防止偏离和复杂性蔓延

---

## 架构概览

```
workspace/
├── ONBOARDING.md      # 首次运行设置
├── AGENTS.md          # 操作规则、经验、工作流
├── SOUL.md            # 身份、原则、边界
├── USER.md            # 人类上下文、目标、偏好
├── MEMORY.md          # 精选长期记忆
├── SESSION-STATE.md   # ⭐ 主动工作内存（WAL 目标）
├── HEARTBEAT.md       # 周期性自检清单
├── TOOLS.md           # 工具配置、注意事项、凭据
└── memory/
    ├── YYYY-MM-DD.md  # 每日原始记录
    └── working-buffer.md  # ⭐ 危险区域日志
```

---

## WAL Protocol（预写日志）

### 触发条件 - 扫描每条消息：

- ✏️ **修正** — "是 X，不是 Y" / "实际上..." / "不，我的意思是..."
- 📍 **专有名词** — 名称、地点、公司、产品
- 🎨 **偏好** — 颜色、风格、方式、"我喜欢/不喜欢"
- 📋 **决定** — "我们做 X" / "用 Y" / "用 Z"
- 📝 **草稿更改** — 正在处理的内容的编辑
- 🔢 **具体值** — 数字、日期、ID、URL

### 协议流程

**如果出现以上任意情况：**
1. **停止** — 不要开始组织回复
2. **写入** — 将细节更新到 SESSION-STATE.md
3. **然后** — 回应人类

---

## Working Buffer Protocol

### 目的：在上下文刷新和压缩之间的"危险区域"捕获每次交互

### 工作流程

1. **60% 上下文时**（通过 session_status 检查）：清除旧 buffer，重新开始
2. **60% 之后的每条消息**：附加人类消息和你的响应摘要
3. **压缩后**：首先读取 buffer，提取重要上下文
4. **保持 buffer 不变**，直到下一个 60% 阈值

---

## 今日心得

- 主动型 Agent 的核心是"预判需求"而非"等待任务"
- 记忆系统是持久性的关键：SESSION-STATE > daily logs > MEMORY
- WAL Protocol 确保重要细节不会丢失
- Self-improvement 需要安全护栏防止偏离

**下一步**：
- 继续学习 Hello-Agents 课程
- 探索更多 AI Agent 框架
