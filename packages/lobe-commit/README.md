# 🦊 lobe2 – 魔改版 AI Commit CLI

这是一个基于 [LobeHub](https://github.com/lobehub/lobe-cli-toolbox) 的 commit 工具魔改版本，已在 monorepo 仓库中完成独立命令命名与配置隔离，命令名为：

```
lobe2
```

---

## 📁 项目结构说明

当前项目是 monorepo，其中 `lobe2` CLI 工具位于：

```
packages/lobe-commit/
```

仓库地址：[github.com/senzi/lobe-cli-toolbox](https://github.com/senzi/lobe-cli-toolbox)

---

## 🛠 使用方式

### 第一次使用：

```bash
cd packages/lobe-commit

# 安装依赖
bun install

# 编译 + 注入 shebang + 生成 dist/
bun run build

# 注册为全局命令（生成 lobe2）
npm link
```

### 然后即可运行：

```bash
lobe2
```

---

## ⚙️ 初始化配置（推荐 DeepSeek 模型）

执行以下命令进入配置面板：

```bash
lobe2 --option
```

- **模型选择**：选 `deepseek-chat`

- **API 代理地址**：
  设置为 DeepSeek 提供的地址，例如：

  ```
  https://api.deepseek.com/v1/
  ```

  或任何支持 DeepSeek 模型的 API 代理（如 OpenRouter、OneAPI 等）

- **OpenAI Token**：填写你自己的 Key（或不填，走环境变量）

---

## 🧪 测试交互（可用）

- 运行 `lobe2 --hook`：以交互方式生成 Git commit message
- 运行 `lobe2 -a`：由 AI 根据 `git diff` 自动生成 commit

---

## 💾 配置隔离说明

- 配置文件默认保存在 `~/.config/lobe2/config.json`
- 与原版 `lobe-commit` 完全隔离，可并行使用不冲突

---

## 👨‍💻 开发建议（未来的你）

- 所有入口逻辑在：`src/cli.tsx`
- 配置管理：`src/store/config.ts`
- 模型逻辑（如果你要支持更多模型）：看 `src/commands/Ai/`

---

## 🏁 最后

本项目是自用魔改版，暂不发布 npm 包。使用、扩展、混改随你高兴。
