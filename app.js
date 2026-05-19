const STORAGE_KEY = "h5_learning_plan_todolist_v1";

const defaultWeeks = [
  {
    title: "HTML 基础",
    goal: "能写出一个完整网页结构。",
    focus: ["div", "span", "img", "a", "ul", "li", "input", "button", "form", "section", "header", "footer"],
    tasks: [
      "周一：学习 HTML 是什么、网页基本结构，写一个 index.html。",
      "周二：学习标题、段落、图片、链接，做一篇新闻详情页。",
      "周三：学习列表、按钮、分割线，做新闻推荐列表。",
      "周四：学习表单 input、textarea、select，做一个报名表。",
      "周五：学习 div、section、header、footer，把页面结构整理清楚。",
      "周六：学习语义化标签，优化新闻详情页结构。",
      "周日：复盘并做一个活动介绍静态页。"
    ]
  },
  {
    title: "CSS 基础",
    goal: "能让页面变好看。",
    focus: ["color", "font-size", "line-height", "margin", "padding", "border", "border-radius", "background", "display", "width", "height"],
    tasks: [
      "周一：学习 CSS 引入方式、选择器，给第 1 周页面加样式。",
      "周二：学习颜色、字体、字号、行高，美化新闻正文。",
      "周三：学习盒模型 width、height、padding、margin，做卡片布局。",
      "周四：学习 border、border-radius、box-shadow，做按钮和输入框。",
      "周五：学习 background、图片背景，做活动 banner。",
      "周六：学习 hover、active 状态，做按钮点击效果。",
      "周日：综合练习，做一个完整移动端静态首页。"
    ]
  },
  {
    title: "CSS 布局和移动端适配",
    goal: "能写手机端页面布局。",
    focus: ["display: flex", "flex-direction", "justify-content", "align-items", "position: fixed", "position: absolute", "vw", "rem"],
    tasks: [
      "周一：学习 Flex 布局基础，做顶部导航。",
      "周二：学习 justify-content、align-items，做按钮横向排列。",
      "周三：学习 position 定位，做固定底部工具栏。",
      "周四：学习移动端 viewport，理解手机页面宽度。",
      "周五：学习 rem / vw 适配，做 375 设计稿适配。",
      "周六：学习响应式布局，适配不同手机宽度。",
      "周日：综合练习，做新闻列表加底部按钮。"
    ]
  },
  {
    title: "JavaScript 基础",
    goal: "能写简单页面交互。",
    focus: ["let", "const", "function", "if", "for", "array", "object", "addEventListener"],
    tasks: [
      "周一：学习变量、数据类型，写姓名、年龄、文章标题变量。",
      "周二：学习条件判断 if/else，判断是否登录。",
      "周三：学习数组、对象，用数组保存新闻列表。",
      "周四：学习函数，封装格式化时间函数。",
      "周五：学习循环，遍历新闻列表。",
      "周六：学习 click 事件，做按钮点击弹窗。",
      "周日：综合练习，做 Tab 切换。"
    ]
  },
  {
    title: "JavaScript DOM 和异步",
    goal: "能用 JS 控制页面内容。",
    focus: ["document.querySelector", "innerHTML", "classList", "onclick", "Promise", "fetch", "JSON"],
    tasks: [
      "周一：学习 DOM 查询，获取页面元素。",
      "周二：学习修改文本和样式，点击按钮修改标题。",
      "周三：学习创建元素，用 JS 渲染新闻列表。",
      "周四：学习事件委托，点击列表进入详情。",
      "周五：学习 Promise，理解异步。",
      "周六：学习 fetch / axios 概念，请求假接口。",
      "周日：综合练习，用假数据做列表页。"
    ]
  },
  {
    title: "Vue 2 基础",
    goal: "开始进入这个项目的核心技术。",
    focus: ["data", "methods", "v-if", "v-show", "v-for", "v-model", "@click"],
    tasks: [
      "周一：学习 Vue 是什么、new Vue，跑一个 Vue 页面。",
      "周二：学习 data、methods，点击按钮改变数据。",
      "周三：学习插值表达式，显示标题和作者。",
      "周四：学习 v-if、v-show，控制弹窗显示。",
      "周五：学习 v-for，渲染新闻列表。",
      "周六：学习 v-model，做登录表单。",
      "周日：综合练习，做 Vue 版新闻列表页。"
    ]
  },
  {
    title: "Vue 组件化",
    goal: "能像真实项目一样拆组件。",
    focus: ["props", "$emit", "created", "mounted", "computed", "watch", "components"],
    tasks: [
      "周一：学习什么是组件，拆出 Header 组件。",
      "周二：学习 props，让新闻卡片接收数据。",
      "周三：学习子传父事件 $emit，做登录弹窗关闭。",
      "周四：学习 created / mounted，页面加载时请求数据。",
      "周五：学习 computed，处理格式化显示。",
      "周六：学习 watch，监听输入变化。",
      "周日：综合练习，拆一个活动页组件。"
    ]
  },
  {
    title: "Vue Router 路由",
    goal: "能写多页面 H5 应用。",
    focus: ["this.$router.push()", "this.$route.query", "routes", "router-view", "router-link"],
    tasks: [
      "周一：学习 Vue Router 基础，配置首页和详情页。",
      "周二：学习 router-view，显示不同页面。",
      "周三：学习 this.$router.push，点击新闻进入详情。",
      "周四：学习 query 参数，传 informationId。",
      "周五：学习动态路由，理解 /news/:id。",
      "周六：学习 hash 路由，理解 /#/h5/news。",
      "周日：综合练习，做列表页、详情页、投稿页。"
    ]
  },
  {
    title: "Vant 移动端 UI 组件库",
    goal: "能快速做移动端界面。",
    focus: ["van-button", "van-field", "van-form", "van-popup", "van-overlay", "van-toast", "van-uploader", "van-icon"],
    tasks: [
      "周一：学习安装 Vant，在 Vue 项目里引入。",
      "周二：学习 Button、Icon，做按钮区。",
      "周三：学习 Field、Form，做登录表单。",
      "周四：学习 Popup、Overlay，做弹窗。",
      "周五：学习 Toast、Notify，做提示。",
      "周六：学习 Uploader，做文件上传界面。",
      "周日：综合练习，做完整投稿表单。"
    ]
  },
  {
    title: "接口请求、登录、上传",
    goal: "能写真实业务逻辑。",
    focus: ["axios.get", "axios.post", "headers", "Authorization", "localStorage", "FormData", "try/catch"],
    tasks: [
      "周一：学习 axios 基础，请求新闻列表。",
      "周二：学习 GET / POST，提交报名表。",
      "周三：学习 headers / token，模拟登录状态。",
      "周四：学习 localStorage，保存 token。",
      "周五：学习 loading 状态，请求中显示加载。",
      "周六：学习错误处理，接口失败提示。",
      "周日：综合练习，完成登录加投稿流程。"
    ]
  },
  {
    title: "Vue CLI / Webpack / 打包",
    goal: "知道源码如何变成 dist。",
    focus: ["npm install", "npm run serve", "npm run build", "package.json", "src/main.js", "src/App.vue", "src/router/index.js", "public/index.html", "dist"],
    tasks: [
      "周一：学习 Vue CLI 项目结构，看懂 src、public。",
      "周二：学习 npm scripts，运行 npm run serve。",
      "周三：学习 webpack 打包概念，理解 app.js、vendor.js。",
      "周四：学习环境变量，区分测试接口和正式接口。",
      "周五：学习静态资源处理，理解图片、字体、CSS。",
      "周六：学习 build 打包，生成 dist。",
      "周日：综合练习，打包自己的 H5 项目。"
    ]
  },
  {
    title: "微信 H5、分享、综合项目",
    goal: "做出接近当前项目的小型版本。",
    focus: ["wx.config", "wx.ready", "wx.updateAppMessageShareData", "wx.updateTimelineShareData", "navigator.userAgent"],
    tasks: [
      "周一：学习微信 JS-SDK 是什么，了解 wx.config。",
      "周二：学习微信分享，配置分享标题和图片。",
      "周三：学习微信打开 App / 小程序，理解 wx-open-launch-app。",
      "周四：学习判断环境，判断微信、安卓、iOS。",
      "周五：学习移动端兼容，处理不同手机问题。",
      "周六：开始综合项目开发。",
      "周日：打包并复盘，生成最终 dist。"
    ]
  }
];

const weekTabs = document.querySelector("#weekTabs");
const weekList = document.querySelector("#weekList");
const totalTasks = document.querySelector("#totalTasks");
const doneTasks = document.querySelector("#doneTasks");
const progressRate = document.querySelector("#progressRate");
const resetButton = document.querySelector("#resetButton");

let state = loadState();
let activeWeekIndex = 0;

function createDefaultState() {
  return {
    checked: {},
    custom: {},
    notes: {}
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...createDefaultState(), ...JSON.parse(saved) } : createDefaultState();
  } catch (error) {
    console.warn("学习计划读取失败，已使用默认状态。", error);
    return createDefaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("学习计划保存失败，本次页面状态仍会更新。", error);
  }
}

function getCustomTasks(weekIndex) {
  return state.custom[String(weekIndex)] || [];
}

function isChecked(id) {
  return Boolean(state.checked[id]);
}

function render() {
  renderTabs();
  renderActiveWeek();
  renderSummary();
}

function renderTabs() {
  weekTabs.innerHTML = "";

  defaultWeeks.forEach((week, weekIndex) => {
    const stats = getWeekStats(weekIndex);
    const tab = document.createElement("button");
    const selected = weekIndex === activeWeekIndex;
    tab.className = `week-tab${selected ? " is-active" : ""}`;
    tab.type = "button";
    tab.id = `weekTab${weekIndex}`;
    tab.role = "tab";
    tab.setAttribute("aria-selected", String(selected));
    tab.setAttribute("aria-controls", "weekPanel");
    tab.tabIndex = selected ? 0 : -1;
    tab.innerHTML = `
      <span class="tab-week">第 ${weekIndex + 1} 周</span>
      <span class="tab-title">${escapeHtml(week.title)}</span>
      <span class="tab-progress">${stats.done}/${stats.total}</span>
    `;
    tab.addEventListener("click", () => setActiveWeek(weekIndex));
    tab.addEventListener("keydown", (event) => handleTabKeydown(event, weekIndex));
    weekTabs.appendChild(tab);
  });

  const activeTab = weekTabs.querySelector(".week-tab.is-active");
  if (activeTab) {
    const centeredLeft = activeTab.offsetLeft - ((weekTabs.clientWidth - activeTab.clientWidth) / 2);
    weekTabs.scrollTo({ left: Math.max(0, centeredLeft), behavior: "smooth" });
  }
}

function renderActiveWeek() {
  weekList.innerHTML = "";

  const weekIndex = activeWeekIndex;
  const week = defaultWeeks[weekIndex];
  const card = document.createElement("article");
  const stats = getWeekStats(weekIndex);
  const customTasks = getCustomTasks(weekIndex);
  card.className = "week-card";
  card.id = "weekPanel";
  card.role = "tabpanel";
  card.setAttribute("aria-labelledby", `weekTab${weekIndex}`);

  card.innerHTML = `
    <header class="week-header">
      <div class="week-topline">
        <span class="week-number">第 ${weekIndex + 1} 周</span>
        <span class="week-progress">${stats.done}/${stats.total} 完成</span>
      </div>
      <h2 class="week-title">${escapeHtml(week.title)}</h2>
      <p class="week-goal">${escapeHtml(week.goal)}</p>
      ${renderFocus(week.focus)}
    </header>
  `;

  const taskList = document.createElement("ul");
  taskList.className = "task-list";

  week.tasks.forEach((task, taskIndex) => {
    const id = getDefaultTaskId(weekIndex, taskIndex);
    taskList.appendChild(createTaskItem({
      id,
      text: task,
      done: isChecked(id),
      onToggle: (checked) => toggleDefaultTask(id, checked)
    }));
  });

  const customList = document.createElement("ul");
  customList.className = "custom-list";

  customTasks.forEach((task) => {
    customList.appendChild(createTaskItem({
      id: task.id,
      text: task.text,
      done: task.done,
      onToggle: (checked) => toggleCustomTask(weekIndex, task.id, checked),
      onDelete: () => deleteCustomTask(weekIndex, task.id)
    }));
  });

  card.appendChild(taskList);
  card.appendChild(customList);
  card.appendChild(createAddForm(weekIndex));
  card.appendChild(createNoteBox(weekIndex));
  weekList.appendChild(card);
}

function getWeekStats(weekIndex) {
  const week = defaultWeeks[weekIndex];
  const defaultDone = week.tasks.filter((_, taskIndex) => isChecked(getDefaultTaskId(weekIndex, taskIndex))).length;
  const customTasks = getCustomTasks(weekIndex);
  const customDone = customTasks.filter((task) => task.done).length;

  return {
    total: week.tasks.length + customTasks.length,
    done: defaultDone + customDone
  };
}

function setActiveWeek(weekIndex) {
  activeWeekIndex = weekIndex;
  render();
}

function handleTabKeydown(event, weekIndex) {
  const lastIndex = defaultWeeks.length - 1;
  let nextIndex = weekIndex;

  if (event.key === "ArrowRight") {
    nextIndex = weekIndex === lastIndex ? 0 : weekIndex + 1;
  } else if (event.key === "ArrowLeft") {
    nextIndex = weekIndex === 0 ? lastIndex : weekIndex - 1;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = lastIndex;
  } else {
    return;
  }

  event.preventDefault();
  setActiveWeek(nextIndex);
  requestAnimationFrame(() => {
    const nextTab = document.querySelector(`#weekTab${nextIndex}`);
    if (nextTab) {
      nextTab.focus();
    }
  });
}

function createTaskItem({ id, text, done, onToggle, onDelete }) {
  const item = document.createElement("li");
  item.className = `task-item${onDelete ? " custom-item" : ""}${done ? " is-done" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.className = "task-check";
  checkbox.type = "checkbox";
  checkbox.checked = done;
  checkbox.id = id;
  checkbox.addEventListener("click", () => onToggle(checkbox.checked));

  const label = document.createElement("label");
  label.className = "task-text";
  label.textContent = text;

  item.append(checkbox, label);

  if (onDelete) {
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "删除";
    deleteButton.addEventListener("click", onDelete);
    item.appendChild(deleteButton);
  }

  item.addEventListener("click", (event) => {
    if (event.target === checkbox || event.target.closest("button")) {
      return;
    }

    checkbox.checked = !checkbox.checked;
    onToggle(checkbox.checked);
  });

  return item;
}

function renderFocus(focusItems) {
  if (!Array.isArray(focusItems) || focusItems.length === 0) {
    return "";
  }

  const tags = focusItems
    .map((item) => `<span class="focus-tag">${escapeHtml(item)}</span>`)
    .join("");

  return `
    <div class="focus-box">
      <p class="focus-title">重点掌握</p>
      <div class="focus-tags">${tags}</div>
    </div>
  `;
}

function createAddForm(weekIndex) {
  const form = document.createElement("form");
  form.className = "add-form";
  form.innerHTML = `
    <label class="sr-only" for="customInput${weekIndex}">新增学习内容</label>
    <input class="add-input" id="customInput${weekIndex}" type="text" placeholder="新增本周学习内容">
    <button class="add-button" type="submit">新增</button>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector(".add-input");
    const text = input.value.trim();

    if (!text) {
      input.focus();
      return;
    }

    addCustomTask(weekIndex, text);
  });

  return form;
}

function createNoteBox(weekIndex) {
  const box = document.createElement("div");
  const noteId = `weekNote${weekIndex}`;
  box.className = "note-box";
  box.innerHTML = `
    <label class="note-label" for="${noteId}">本周笔记</label>
    <textarea class="note-area" id="${noteId}" placeholder="写下你的问题、复盘或补充资料..."></textarea>
  `;

  const textarea = box.querySelector("textarea");
  textarea.value = state.notes[String(weekIndex)] || "";
  textarea.addEventListener("input", () => {
    state.notes[String(weekIndex)] = textarea.value;
    saveState();
  });

  return box;
}

function getDefaultTaskId(weekIndex, taskIndex) {
  return `week-${weekIndex}-task-${taskIndex}`;
}

function toggleDefaultTask(id, checked) {
  state.checked[id] = checked;
  saveState();
  render();
}

function addCustomTask(weekIndex, text) {
  const key = String(weekIndex);
  const task = {
    id: `custom-${Date.now()}`,
    text,
    done: false,
    createdAt: new Date().toISOString()
  };

  state.custom[key] = [task, ...getCustomTasks(weekIndex)];
  saveState();
  render();
}

function toggleCustomTask(weekIndex, id, checked) {
  const key = String(weekIndex);
  state.custom[key] = getCustomTasks(weekIndex).map((task) => {
    if (task.id !== id) {
      return task;
    }

    return {
      ...task,
      done: checked
    };
  });

  saveState();
  render();
}

function deleteCustomTask(weekIndex, id) {
  const key = String(weekIndex);
  state.custom[key] = getCustomTasks(weekIndex).filter((task) => task.id !== id);
  saveState();
  render();
}

function renderSummary() {
  let total = 0;
  let done = 0;

  defaultWeeks.forEach((week, weekIndex) => {
    total += week.tasks.length;
    done += week.tasks.filter((_, taskIndex) => isChecked(getDefaultTaskId(weekIndex, taskIndex))).length;

    const customTasks = getCustomTasks(weekIndex);
    total += customTasks.length;
    done += customTasks.filter((task) => task.done).length;
  });

  totalTasks.textContent = String(total);
  doneTasks.textContent = String(done);
  progressRate.textContent = total === 0 ? "0%" : `${Math.round((done / total) * 100)}%`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

resetButton.addEventListener("click", () => {
  const ok = window.confirm("确定要清空所有勾选、新增内容和笔记吗？");
  if (!ok) {
    return;
  }

  state = createDefaultState();
  saveState();
  render();
});

render();
