# Todo

## 2026-11-24 · React 18 组件库与文档站审查

范围为组件源码、仓库发布目录 `dist/` 与文档站 `docs/`。基线提交为 `5e4bd19`，使用锁文件中的 React / React DOM 18.2.0。每个编号是一个独立实现与提交单元。历史计划保留在下方。

- [x] 01 · 恢复可执行的文档站测试。原 Jest 无法解析 `@/lib`，唯一断言仍检查 CRA 模板文字。对齐源码别名及 ESM 依赖处理，用真实 Router 测首页/组件页，确认测试实际运行。 `d0febf4`
- [x] 02 · 使组件库打包失败可见且保留上次成功产物。根目录安装依赖后可直接构建，先在临时目录生成并校验 JS、声明、CSS，再替换发布目录。验证成功路径及注入构建错误时的退出码与旧产物。 `e9ea1f3`
- [x] 03 · 修正发布声明。消费方 TS 4.9.5 在 `skipLibCheck:false` 下导入 Button 原有四处声明错误。修正 Paginator 原生事件冲突、Table 列键与公共索引签名，从实际发布入口严格编译。 `c618bd8`
- [x] 04 · 移除导入时的 DOM 副作用。Toast、Alert 与图片工具推迟到首次客户端使用时创建资源；核对 Toast 离场和 Msg 的 React root 清理。验收 Node 导入、浏览器仅导入不增加宿主节点，以及通知显示与离场。 `2db4bb1`
- [x] 05 · 优化发布入口并界定 React 18 peer。保留命名导出与全局样式路径，隔离 React / React DOM 子路径及高亮、日历等重依赖，让消费构建可移除未使用组件。复测同配置单 Button 生产 JS（原生 44.0 KiB、原公共入口 513.8 KiB gzip）。 `3af111e`
- [x] 06 · 修复 Form 的字段生命周期和提交。稳定 Context，用按名索引替代全量读取的二次复杂度；处理空值、默认值、动态卸载和同组注册。原生提交和命令式提交均返回同一份字段数据。 `058f771`
  - [x] 06b · 验证表单事件时序。子组件首次 effect 可提交完整初值，Select 的 onChange 中同步读取和提交能看到已接受的值，受控父级保留决定权；展开菜单继承可见标签的无障碍名称。 `3628a03`
- [x] 07 · 修复 CheckBox / Radio 组的选值。验证默认勾选后挂未选项、取消不存在项、A→B→A、禁用和原生键盘选择，确保表单数据与界面一致。 `cac7d80`
- [x] 08 · 修复 Input 和 Slider 的受控状态。Input 的外部更新、默认值、正则校验及 Enter 反馈正确；Slider 滑块、填充、提示与表单随同一值更新。移除调试弹窗，测试受控与非受控路径。 `4d2256e`
- [x] 09 · 修复 Select 选值及关闭时的开销。统一可见值、原生提交值和 Form 数据，支持键盘操作，菜单按需挂载。验证 1,000 项关闭状态、受控更新、鼠标/键盘选择以及禁用项。 `2573cbd`
  - [x] 09b · 为展开的超长菜单实现可见窗口与缓冲区。验证 5,000 项滚动、末项定位、键盘活动项的可访问性和选择后原生提交；短列表维持原布局。 `2940526`
- [x] 10 · 为分页和评分限定有效区间。只生成可见窗口内的页号，移除派生页码 effect，处理零页长、非有限数及小数。验证百万页窗口、首末页、跳转和 Rate 非法计数。 `aa99729`
- [x] 11 · 修复 Table / List 分页与记录身份。只给 pageSize 也正确切片，表头表体共用可见列，排序和翻页不把勾选态转移给其他记录。验证 30 条每页 10 条、隐藏列与反转顺序。 `fd51069`
- [x] 12 · 稳定 Reactive 的快照、订阅和 Hook 顺序。消除 useMemo 回调中的 Hook，确保连续写入、稳定 ref、上下文与取消订阅在 React 18 正常工作。 `21c0e33`
- [x] 13 · 避免 Dom 和 Img 预建隐藏子树。空 Dom 原挂载 18 个元素，关闭预览的单图原有 131 个元素。按需挂载 spinner、modal 与预览图，验证首次打开、再次打开以及有状态内容的保留。 `02cff5d`
- [x] 14 · 消除普通按钮和静态日历的无效更新。仅启用 ripple 时测量按钮，只在显示实时时钟时计时。验证 click、定时器清理、固定时间及关闭时钟。 `fcbe6e8`
- [x] 15 · 使原子样式解析保持纯函数。避免修改调用方传入的 style，减少重复遍历和间距判断的序列化，保持覆盖顺序与零值。验证冻结对象、速记与显式样式。 `b244c68`
  - [x] 15b · 在 500 个带 key 的 Dom 挂载验收中消除 React 开发模式警告。解析普通参数对象时保留显式 key，解析 React props 时跳过其保留的 key 访问器。 `5ef6e01`
- [x] 16 · 拆分文档路由和高亮器。原首页同步加载 67 个路由以及完整高亮器，主 JS 约 495 KiB gzip。按页加载、按需加载语言和主题，保留示例展示效果；复测首页资源、组件深链与首次展开代码。 `1a0e985`
- [x] 17 · 修复文档导航及窄屏布局。明确 URL 优先于最近历史，损坏存储可回退；首页不挂隐藏菜单，选中更新按差异通知并注销条目。侧栏使用真实链接、支持键盘和可见焦点；375px 下可打开菜单并阅读正文。 `efb51a4`
  - [x] 17b · 去掉全局 CSS 对宿主页面所有元素的焦点轮廓重置。用键盘 Tab 验证普通原生按钮及库按钮都具有可见焦点，并保留侧栏自己的焦点样式。 `8cb92f6`
  - [x] 17c · 校验禁用菜单项的语义。禁用项向辅助技术说明状态，不提供可访问的目标地址，不占据 Tab 顺序，点击不触发选择；普通链接保留原生行为。 `5b08292`
- [x] 18 · 修复示例复制及代码与预览不一致。为原有无处理器的 copy 控件提供可工作的统一实现，复制当前示例；Table 的展示和实际运行来自同一示例源码。验证折叠及展开时复制、多示例隔离与代码一致性。 `9a2cffe`
- [x] 19 · 重建并验收仓库产物。以最终源码生成 dist 和 docs，运行 React 18 测试、源码/消费方类型检查、实际打包消费及浏览器流程。核对单 Button 包体、首页资源、分页与 DOM 基线，记录本地实测结果。

### 最终验收

- 构建与测试。全新目录执行 `npm ci` 成功，锁定 React / React DOM 18.2.0。源码 `tsc --noEmit` 通过，Jest 的 16 个套件、35 个测试全部通过。仓库原有 143 个 JS 命名导出全部保留。打包失败注入实验保留了原产物，子进程返回非零。
- 消费包体积。桌面生产 Webpack 下，相同的单按钮页面使用公共命名导入后为 147,522 B JS、47,755 B gzip，原公共入口为 526,167 B gzip。同轮原生按钮为 45,070 B gzip，组件增量为 2,685 B。运行 `npm run package` 后可用 `npm run test:package` 复核严格类型、ESM/CJS、CSS 及 Button 依赖。
- 独立安装。用 `npm pack` 的真实归档分别安装到两个全新应用。React / React DOM 18.2.0、18.3.1 的 ESM 和 CommonJS 入口都可在无 DOM 环境渲染 Button、Calendar、Code。两套应用的 TypeScript 4.9.5 均在 `strict` 和 `skipLibCheck: false` 下通过。此轮归档为 176,297 B，SHA-256 为 `c7bb54badda1be723ce6c0858be5928795c2ec6fba243b51252941c1f361c255`。
- 文档站。Chrome 冷开首页只请求 1 个 JS，gzip 从 507,221 B 降到 90,574 B。首页 body 后代从 473 减至 169。首页进入 General、Table 再展开示例累计加载 153,939 B JS gzip。375px 视口下 Button 页滚动宽度从 957px 降至 375px，键盘能通过菜单前往 Table。访问 Table 后新开 Button 深链会停在 Button。
- 路由和复制。生产站 67 条组件路由逐一打开，未捕获到页面异常；144 个复制控件逐一触发，均写入非空内容。其中 Table 五个示例另外验证了折叠和展开时复制结果与实际 TSX 一致。
- 组件开销。默认 Dom 从 18 个元素降至 1 个，500 个空 Dom 总计 500 个元素；关闭预览的 Img 从 131 个降至 2 个。5,000 项 Select 首次打开挂载 12 个选项，中段滚动时实测 16 个；按 End 可到达第 5,000 项并提交。分页测试覆盖 100 万页只生成可见页码。
- 验证口径。上述传输体积为本地 gzip 第 9 级；浏览器数据来自本机 Chrome。生产文档构建成功，仍报告 70 条既有 ESLint 告警。

## 历史计划

- 2023 / 10 / 14
  - [ ] refactor menu selection mechanism
  - [ ] fullfill icons to at lease 100
  - [x] fullfill the developing scripts

- 2023 / 10 /09
  - [ ] standardize all components' props and events.
  - [ ] remove unnecessary useEffect.

- 2023 / 10 / 06
  - [ ] upgrade evp-menu's useMenu, useMenuRef and controllability.
  - [x] refactor evp-menu's apis to ApiTable.
  - [x] refactor evp-slider with raw input
  - [x] upgrade evp-slider to support step

- 2023 / 10 / 05
  - [ ] upgrade docs' api to AptTable and DemoCard to latest.
    - [x] anchor
    - [ ] badge
    - [ ] breadcrumb
    - [ ] button
    - [ ] calendar
    - [ ] card
    - [ ] checkbox
    - [ ] code
    - [ ] col
    - [ ] color
    - [ ] counter
    - [ ] datetime-picker
    - [ ] dialog
    - [ ] divider
    - [ ] dom
    - [ ] drawer
    - [ ] flexbar
    - [ ] form
    - [ ] header
    - [x] img
    - [ ] input
    - [ ] label
    - [ ] loading
    - [x] menu
    - [ ] modal
    - [ ] msg
    - [x] paginator
    - [ ] popover
    - [ ] progress
    - [ ] radio
    - [x] required
    - [ ] row
    - [ ] select
    - [ ] shadow
    - [x] slider
    - [x] slides
    - [ ] steps
    - [ ] switch
    - [ ] table
    - [ ] tag
    - [x] title
    - [ ] toast
    - [x] tooltip
    - [x] waterfalls
  - [ ] fix popover position. ( same with tooltip )

- 2023 / 10 / 04
  - [x] make Paginator tab color customizable.
  - [x] make Img toolbtns' tooltips customizable.
  - [x] complete position of Tooltip.
