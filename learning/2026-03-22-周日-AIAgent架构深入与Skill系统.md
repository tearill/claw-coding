# 2026-03-22 周日 - AI Agent 架构深入与 Skill 系统

## 学习主题

深入理解 OpenClaw Agent 运行时架构与 Skill 系统 - 探索 AI Agent 的工程化实践

## 学习目标

1. 理解 OpenClaw Agent 运行时架构核心概念
2. 掌握 Skill 系统的加载机制和优先级规则
3. 学习 Workspace 引导文件体系
4. 理解多 Agent 场景下的 Skill 隔离与共享

## 学习过程

### 1. 上午 9:00 - 学习 Agent Runtime 架构

阅读了 OpenClaw 官方文档 `agent.md`，核心要点：

- **Workspace 概念**：Agent 唯一的工作目录，用于工具调用和上下文
- **Bootstrap 文件**：AGENTS.md、SOUL.md、TOOLS.md、IDENTITY.md、USER.md
- **Session 管理**：会话转录存储为 JSONL 格式
- **pi-mono 集成**：复用部分代码但保持自主权

### 2. 上午 9:40 - 深入 Skill 系统

阅读了 OpenClaw 官方文档 `skills.md`，这是今天最核心的学习内容：

- **Skill 加载位置**（三个位置，优先级依次降低）：
  1. Bundled skills（安装包自带）
  2. Managed/local skills（~/.openclaw/skills）
  3. Workspace skills（<workspace>/skills）
  
- **优先级规则**：workspace > managed/local > bundled

- **Skill 定义格式**：使用 AgentSkills 兼容的 SKILL.md + YAML frontmatter

- **Gating 机制**：通过 metadata 进行加载时过滤
  - requires.bins：检查二进制文件是否存在
  - requires.env：检查环境变量
  - requires.config：检查配置文件
  - os 平台限制

### 3. 上午 10:30 - 探索 Workspace 文件结构

查看了 Proactive Agent 的 README.md，回顾了核心架构：

- **三大支柱**：Proactive（主动型）、Persistent（持久性）、Self-improving（自改进）
- **WAL Protocol**：在响应前写入关键细节到 SESSION-STATE.md
- **Working Buffer**：上下文 60% 后的工作缓冲区

### 4. 上午 11:00 - 尝试金融分析

尝试获取 A 股市场数据，但由于：
- web_search 需要 Brave API Key
- 财经网站内容获取遇到编码问题
- 浏览器服务不可用

金融分析未完成，待工作日再尝试。

## 学习内容

### OpenClaw Agent Runtime 核心概念

#### 1. Workspace 引导文件

| 文件 | 作用 |
|------|------|
| AGENTS.md | 操作指令 + 记忆 |
| SOUL.md | 人设、边界、语气 |
| TOOLS.md | 工具配置笔记 |
| IDENTITY.md | Agent 身份信息 |
| USER.md | 用户画像和偏好 |
| BOOTSTRAP.md | 首次运行仪式（一次性）|
| MEMORY.md | 精选长期记忆 |
| SESSION-STATE.md | 主动工作内存（WAL 目标）|
| HEARTBEAT.md | 周期性自检清单 |

#### 2. Session 管理机制

- 会话转录存储在 `~/.openclaw/agents/<agentId>/sessions/<SessionId>.jsonl`
- Session ID 稳定且由 OpenClaw 选择
- 支持流式输出的块发送（block streaming）

#### 3. Skill 系统深入

##### Skill 定义结构

```markdown
---
name: skill-name
description: 技能描述
metadata:
  {
    "openclaw": {
      "requires": { 
        "bins": ["uv"], 
        "env": ["GEMINI_API_KEY"],
        "config": ["browser.enabled"] 
      },
      "primaryEnv": "GEMINI_API_KEY",
    },
  }
---
```

##### Skill 加载优先级

```
<workspace>/skills (最高)
    ↓
~/.openclaw/skills
    ↓
bundled skills (最低)
```

##### Token 影响

- 基础开销：195 字符（当 ≥1 个 skill 时）
- 每个 skill：97 字符 + name + description + location 长度
- 约等于 24 tokens/skill

### Multi-Agent 场景下的 Skill 管理

- **Per-agent skills**：仅对单个 Agent 可见
- **Shared skills**：位于 ~/.openclaw/skills，对所有 Agent 可见
- **Workspace 隔离**：每个 Agent 有独立的工作空间

## 代码实践

### 学习资源

今天主要是文档学习和理论探索，没有编写新的练习代码。主要研究了：

- OpenClaw 官方文档中的 Agent 概念
- Skill 系统的设计模式
- Proactive Agent 的架构理念

实践代码路径：[02-ai-agent](https://github.com/tearill/claw-coding/tree/master/learning/02-ai-agent/)

## 心得感悟

### 关于 Agent Runtime 的思考

1. **Workspace 即身份**：OpenClaw 把 Workspace 作为 Agent 的唯一工作目录，这是一个很优雅的设计。所有的上下文、工具、记忆都围绕这个目录展开。

2. **Bootstrap 文件的哲学**：通过 AGENTS.md、SOUL.md 这些文件来定义 Agent 的行为，而不是硬编码。这让我想到——Agent 应该是可配置的、可塑的，而不是一成不变的。

3. **Session 的独立性**：每个 Session 有独立的转录文件，这意味着历史可以追溯，但不会相互污染。

### 关于 Skill 系统的启发

1. **分层加载的智慧**：Bundled → Managed → Workspace 的优先级设计很巧妙。它既保证了系统自带能力的稳定性，又给了用户足够的自定义空间。

2. **Gating 机制的安全感**：通过 requires.bins、requires.env 来控制 Skill 的可用性，这是一种"声明式"的能力边界定义。比代码中的硬编码检查更优雅。

3. **Token 成本意识**：文档中明确列出了 Skill 对 Token 的影响（97 字符/skill），这说明 OpenClaw 在设计时就有成本意识。

### 关于 Proactive Agent 的再次理解

- **WAL Protocol 的精髓**：不是"记住一切"，而是"记住重要的"。触发条件（修正、专有名词、偏好、决定、具体值）都是高价值信息。

- **Working Buffer 的时机**：60% 上下文是一个巧妙的阈值——既不会太早（浪费资源），也不会太晚（丢失信息）。

## 问题与反思

### 需要加强的地方

1. **动手实践不足**：这两天主要是理论学习，还没有真正自己写一个 Skill
2. **源码深度不够**：应该深入阅读 OpenClaw 核心源码，理解底层实现
3. **金融分析受阻**：周末尝试获取金融数据失败，需要工作日再试

### 后续计划

1. 尝试自己编写一个简单的 OpenClaw Skill
2. 深入学习 Agent 的任务编排机制
3. 继续前端学习：Week 3 TypeScript 基础

## 明日计划

1. 继续前端学习：Week 3 JavaScript 进阶（闭包、this 指向）
2. 尝试编写一个简单的自定义 Skill
3. 深入学习 Agent 的多会话管理

---

**学习时间**：2026-03-22 09:00-11:30
**状态**：✅ 完成（AI Agent 学习）
**备注**：金融分析因技术问题未完成
