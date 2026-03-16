# 参与 Agent Skills 贡献

感谢您有兴趣为 Agent Skills 做出贡献！本文档说明了如何参与贡献，以及不同类型的反馈应提交到何处。

## 贡献类型

### 文档改进

我们欢迎对[文档网站](https://agentskills.io)的改进 —— 修复错别字、提高清晰度、提供更好的示例以及新增指南。文档存放在 `docs/` 目录中。

### Bug 报告

在规范、文档或参考库中发现了 bug？请[提交 Issue](https://github.com/agentskills/agentskills/issues)。

### 提案、问题和反馈

有功能请求、规范设计问题或一般性反馈？请[发起 Discussion](https://github.com/agentskills/agentskills/discussions)。我们使用 Discussions 进行提案和开放式对话，并将 Issues 保留用于具体的 bug 和问题。

提案应解决您遇到的实际实施挑战，而不是理论上的担忧。请向我们展示您面临的问题以及您的提案如何解决该问题。

我们对向规范中添加内容保持很高的标准 —— 向规范中添加内容比删除内容要容易得多。每一个新功能都会增加复杂性，所有实施者都必须理解并支持这些复杂性。如有疑问，请暂不添加。

> [!NOTE]
> **不确定发在哪里？** 默认发到 [Discussions](https://github.com/agentskills/agentskills/discussions)。如果最后确认是一个 bug，我们会将其转换为 Issue。

### 生态系统列表与 Logo 请求

如果您的产品或平台已经实现了 Agent Skills 兼容性，您可以请求将其列在 [agentskills.io](https://agentskills.io) 上。您的产品必须是公开可用的，并且目前能够发现和执行 Skills —— 我们不会列出仅宣布有意支持 Skills 或仍处于内测阶段的产品。

提交 Pull Request 时请包含：

1. **Logo 文件** —— 首选 SVG；接受 PNG（最小 200×200px）。请提供浅色和深色变体，并遵循 `docs/images/logos/` 中现有的格式。
2. **轮播图条目** —— 将您的 Logo 添加到 [`docs/snippets/LogoCarousel.jsx`](docs/snippets/LogoCarousel.jsx) 的数组中。
3. **产品信息** —— 在您的 PR 描述中，包含您的产品名称、产品链接，以及展示您 Skills 实施情况的文档链接。

我们可能会要求提供演示或屏幕截图以验证实施情况。Logo 请求由 Anthropic 团队审核。

### 参考库 (`skills-ref/`)

我们仍在确定参考库的发展方向，目前暂不接受对其的代码贡献。不过，我们仍然欢迎分别通过 [Issues](https://github.com/agentskills/agentskills/issues) 和 [Discussions](https://github.com/agentskills/agentskills/discussions) 提交 bug 报告和反馈。

### 我们（暂）不接受的内容

为了在早期阶段保持项目的专注，我们目前不接受：

- **Skill 提交** —— 我们不维护社区 Skills 目录。这在未来可能会改变。
- **重大架构变更** —— 我们仍在迭代核心规范。大规模的重新设计为时尚早。

如果您不确定您的贡献是否合适，请在投入大量精力之前发起一个 [Discussion](https://github.com/agentskills/agentskills/discussions)。

## 开发环境设置

### 文档网站

文档网站使用 [Mintlify](https://mintlify.com/) 构建。

```bash
# 安装 Mintlify CLI
npm i -g mint

# 从 docs/ 目录运行本地开发服务器
cd docs && mint dev
```

本地预览地址为 `http://localhost:3000`。

## 提交更改

1. [Fork 仓库](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. 为您的更改创建一个分支
3. 进行更改并验证它们在本地正常工作
4. 提交 Pull Request

保持 PR 专注于一个逻辑更改，并关联任何相关的 Issue。

## AI 辅助贡献

> [!IMPORTANT]
> 如果您在为 Agent Skills 贡献时使用了**任何形式的 AI 辅助**，必须在 Pull Request 或 Issue 中予以披露。

我们欢迎并鼓励使用 AI 工具来帮助改进 Agent Skills。许多有价值的贡献都得益于 AI 在代码生成、问题检测和文档编写方面的辅助。

话虽如此，如果您在为 Agent Skills 贡献时使用了任何形式的 AI 辅助（例如 Claude Code、ChatGPT 等 Agent），**必须在 Pull Request 或 Issue 中予以披露**，并说明使用 AI 辅助的程度（例如，是用于文档注释还是代码生成）。

如果您的 PR 回复或评论是由 AI 生成的，也请予以披露。

作为例外，微小的空格或错别字修复不需要披露。

披露示例：

> 本 PR 主要由 Claude Code 编写。

或更详细的披露：

> 我咨询了 ChatGPT 以理解代码库，但解决方案完全由我自己手动编写。

未披露 AI 辅助首先对 Pull Request 另一端的人类审查者是不礼貌的，同时也会导致难以确定该对贡献应用何种程度的审查。

### 我们的期望

在提交 AI 辅助的贡献时，请确保包含：

- **清晰的 AI 使用披露** —— 对 AI 的使用及其使用程度保持透明
- **人类理解** —— 您个人理解这些更改的作用
- **明确的理由** —— 您能够解释为什么需要此更改，以及它如何符合 Agent Skills 的目标
- **具体的证据** —— 包含证明改进效果的测试用例、场景或示例

### 我们将关闭的提交

对于似乎未遵循披露政策的提交，我们保留关闭的权利。

## 许可证

通过参与贡献，您同意您的代码和规范文件贡献将采用 [Apache License 2.0](LICENSE) 许可证，文档贡献将采用 [CC-BY 4.0](docs/LICENSE) 许可证。