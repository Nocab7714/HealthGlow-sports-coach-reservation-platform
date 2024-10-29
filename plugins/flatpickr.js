// 引入 Flatpickr 主程式及其樣式
import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// flatpickr 客製
flatpickr(".flatpickr", {
  static: true,
  onReady: function (selectedDates, dateStr, instance) {
    const timeDiv = document.createElement("div");
    instance.calendarContainer.append(timeDiv);

    createTimeSelection(timeDiv);

    // 開始新增「清除」、「確定」按鈕
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("d-flex", "gap-4");
    let str = `
    <button type="button" class="btn btn-outline-secondary w-50 rounded-0">清除</button>
    <button type="button" class="btn btn-primary w-50">確定</button>`;

    btnDiv.innerHTML += str;

    instance.calendarContainer.append(btnDiv);
  },
});
// ==========================================================================
// offcanvas 中 accordion 內的 行事曆
flatpickr(".flatpickr-inline", {
  inline: true,
  onReady: function (selectedDates, dateStr, instance) {
    const timeDiv = document.createElement("div");
    instance.calendarContainer.append(timeDiv);

    createTimeSelection(timeDiv);
  },
});
// ==========================================================================
// 建立時間選擇區塊 (任何時段、上午、下午、晚上)
function createTimeSelection(parentElement) {
  const newUl = document.createElement("ul");
  newUl.classList.add(
    "flatpickr-custom-time",
    "list-unstyled",
    "d-flex",
    "gap-2"
  );

  const timeItems = [
    {
      text: "任何時段",
      id: "anytime",
    },
    {
      text: "上午",
      id: "morning",
    },
    {
      text: "下午",
      id: "afternoon",
    },
    {
      text: "晚上",
      id: "evening",
    },
  ];
  let str = "";
  timeItems.forEach(function (time, index) {
    str += `<li><input class="btn-check" type="checkbox" id="btn-check-${time.id}"><label class="btn btn-outline-gray-800 p-2 w-100" for="btn-check-${time.id}">${time.text}</label></li>`;
  });
  newUl.innerHTML += str;

  parentElement.appendChild(newUl);

  newUl.querySelector("input").checked = true;
}

// ========================================================================
// 學員專區 行事曆
flatpickr(".flatpickr-student", {
  inline: true,
  static: true,

  prevArrow: `<span class="material-symbols-outlined border border-gray-800 border-primary-hover p-2 text-gray-800 link-primary position-absolute top-0 start-0">chevron_left</span>`, // 使用自定義 HTML
  nextArrow: `<span class="material-symbols-outlined border border-gray-800 border-primary-hover p-2 text-gray-800 link-primary position-absolute top-0 start-0">chevron_right</span>`, // 使用自定義 HTML
  onChange: addEventModalAttribute,
  onReady: function (selectedDates, dateStr, instance) {
    wrapTodayDate();
    addEventModalAttribute();
  },
  onDayCreate: function (dObj, dStr, fp, dayElem) {
    // 假設有事件的日期
    const eventDates = [
      "October 14, 2024",
      "October 20, 2024",
      "October 28, 2024",
    ];
    // 格式化 dayElem 日期為 yyyy-mm-dd
    const dateStr = dayElem.getAttribute("aria-label");

    // 如果日期符合事件日期，則加入區塊
    if (eventDates.includes(dateStr)) {
      if (dayElem.classList.contains("today")) {
        const selectedDaySpan = document.createElement("span");
        selectedDaySpan.classList.add("date"); // 添加 class

        // 將原有的文本添加到新的 <span> 中
        selectedDaySpan.textContent = dayElem.textContent; // 將文本設置為原有的內容

        // 清空原有的 <span> 並將新的 <span> 添加進去
        dayElem.textContent = ""; // 清空原有的內容
        dayElem.appendChild(selectedDaySpan); // 將新的 <span> 添加到原有的 <span> 中
      }

      // 創建一個自定義區塊
      const eventBlock = document.createElement("div");
      eventBlock.innerHTML = `<span class="fs-10" style="color: #FF5E1F">●</span><span class='text-secondary d-none d-lg-inline fs-8'>Jeremy 教練｜1對1課程</span>`;

      // 將自定義區塊加入到日期元素中
      dayElem.appendChild(eventBlock);

      // 加上樣式
      dayElem.classList.add("has-event");
    }
  },
});
// ====================================================================
// 為「今天」日期「數字」外層再包一個 <span>，以便對數字本身套用樣式，而不是整個日期方框
function wrapTodayDate() {
  // 獲取所有符合條件的 <span> 元素
  const dayElements = document.querySelectorAll(".today");

  // 遍歷每個 <span> 元素
  dayElements.forEach((today) => {
    // 創建新的 <span> 元素
    // console.log(today);
    // console.log(today.childNodes.length);

    if (today.childNodes.length > 1) {
      return;
    }

    const selectedDaySpan = document.createElement("span");
    selectedDaySpan.classList.add("date"); // 添加 class

    // 將原有的文本添加到新的 <span> 中
    selectedDaySpan.textContent = today.textContent; // 將文本設置為原有的內容

    // 清空原有的 <span> 並將新的 <span> 添加進去
    today.textContent = ""; // 清空原有的內容
    today.appendChild(selectedDaySpan); // 將新的 <span> 添加到原有的 <span> 中
  });
}
// ====================================================================
// 點擊出現 modal 視窗
function addEventModalAttribute() {
  const events = document.querySelectorAll(".has-event");
  console.log(events);
  events.forEach((event, index) => {
    event.setAttribute("data-bs-toggle", "modal");
    event.setAttribute("data-bs-target", `#eventModal-${index}`);
  });
}
