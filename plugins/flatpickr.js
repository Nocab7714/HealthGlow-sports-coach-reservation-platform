// 引入 Flatpickr 主程式及其樣式
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// flatpickr 客製
// flatpickr('.datepicker', {
//   static: true,
//   onReady: function (selectedDates, dateStr, instance) {
//     // 開始建立元件在 calendar 上
//     const newDiv = document.createElement('div');
//     const newUl = document.createElement('ul');

//     const timeItems = ['任何時段', '上午', '下午', '晚上'];

//     newUl.classList.add(
//       'flatpickr-custom-time',
//       'list-unstyled',
//       'd-flex',
//       'gap-2'
//     );

//     timeItems.forEach((timeText) => {
//       const newLi = document.createElement('li');
//       const newBtn = document.createElement('button');
//       newLi.classList.add('nav-item');
//       newBtn.classList.add('nav-link', 'w-100');
//       newBtn.type = 'button';
//       newBtn.textContent = timeText;
//       newLi.append(newBtn);
//       newUl.appendChild(newLi);
//     });

//     newDiv.classList.add('flatpickr-custom-div');
//     // 建立自定義按鈕元素
//     const customButtonCancel = document.createElement('button');
//     customButtonCancel.type = 'button';
//     customButtonCancel.classList.add(
//       'btn',
//       'btn-outline-secondary',
//       'w-50',
//       'rounded-0'
//     );
//     customButtonCancel.innerText = '清除';

//     const customButtonConfirm = document.createElement('button');
//     customButtonConfirm.type = 'button';
//     customButtonConfirm.classList.add('btn', 'btn-primary', 'w-50');
//     customButtonConfirm.innerText = '確定';

//     customButtonConfirm.addEventListener('click', function () {
//       instance.setDate(new Date()); // 設定為今天的日期
//     });
//     newDiv.append(customButtonCancel, customButtonConfirm);
//     instance.calendarContainer.append(newUl, newDiv);
//   },

// }); 

// flatpickr('.datepicker-inline', {
//   inline: true,
//   onReady: function (selectedDates, dateStr, instance) {

//     // 開始建立元件在 calendar 上
//     const newDiv = document.createElement('div');
//     const newUl = document.createElement('ul');

//     const timeItems = ['任何時段', '上午', '下午', '晚上'];

//     newUl.classList.add(
//       'flatpickr-custom-time',
//       'list-unstyled',
//       'd-flex',
//       'gap-2'
//     );

//     timeItems.forEach((timeText) => {
//       const newLi = document.createElement('li');
//       const newBtn = document.createElement('button');
//       newLi.classList.add('nav-item');
//       newBtn.classList.add('nav-link', 'w-100');
//       newBtn.type = 'button';
//       newBtn.textContent = timeText;
//       newLi.append(newBtn);
//       newUl.appendChild(newLi);
//     });

//     newDiv.classList.add('flatpickr-custom-div');

//     instance.calendarContainer.append(newUl, newDiv);
//   },
// }); 


// 函數：創建時間選擇按鈕列表
function createTimeButtons(timeItems) {
  const newUl = document.createElement('ul');
  newUl.classList.add('flatpickr-custom-time', 'list-unstyled', 'd-flex', 'gap-2');

  timeItems.forEach((timeText) => {
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    newLi.classList.add('nav-item', 'p-0');
    newBtn.classList.add('nav-link', 'w-100', 'p-2');
    newBtn.type = 'button';
    newBtn.textContent = timeText;
    newLi.append(newBtn);
    newUl.appendChild(newLi);
  });

  return newUl;
}

// 函數：創建自定義按鈕
function createCustomButtons(instance) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('flatpickr-custom-div');

  const customButtonCancel = document.createElement('button');
  customButtonCancel.type = 'button';
  customButtonCancel.classList.add('btn', 'btn-outline-secondary', 'w-50', 'rounded-0');
  customButtonCancel.innerText = '清除';

  const customButtonConfirm = document.createElement('button');
  customButtonConfirm.type = 'button';
  customButtonConfirm.classList.add('btn', 'btn-primary', 'w-50');
  customButtonConfirm.innerText = '確定';
  customButtonConfirm.addEventListener('click', () => {
    instance.setDate(new Date()); // 設定為今天的日期
  });

  newDiv.append(customButtonCancel, customButtonConfirm);
  return newDiv;
}

// 函數：初始化 flatpickr
function initFlatpickr(selector, options = {}) {
  flatpickr(selector, {
    ...options,
    onReady: function (selectedDates, dateStr, instance) {
      const timeItems = ['任何時段', '上午', '下午', '晚上'];
      const timeButtons = createTimeButtons(timeItems);
      const customButtons = !options.inline ? createCustomButtons(instance) : null;

      instance.calendarContainer.append(timeButtons);
      if (customButtons) {
        instance.calendarContainer.append(customButtons);
      }
    },
  });
}

// 初始化兩個不同模式的 flatpickr
initFlatpickr('.datepicker', { static: true });
initFlatpickr('.datepicker-inline', { inline: true });