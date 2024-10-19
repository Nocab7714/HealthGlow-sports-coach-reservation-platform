// 引入 Flatpickr 主程式及其樣式
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// flatpickr 客製
  flatpickr('.datepicker', {
    onReady: function (selectedDates, dateStr, instance) {
      const newDiv = document.createElement('div');
      const newUl = document.createElement('ul');

      const timeItems = ['main.js', '上午', '下午', '晚上'];

      newUl.classList.add(
        'flatpickr-custom-time',
        'list-unstyled',
        'd-flex',
        'gap-2'
      );

      timeItems.forEach((timeText) => {
        const newLi = document.createElement('li');
        const newBtn = document.createElement('button');
        newLi.classList.add('nav-item');
        newBtn.classList.add('nav-link', 'w-100');
        newBtn.type = 'button';
        newBtn.textContent = timeText;
        newLi.append(newBtn);
        newUl.appendChild(newLi);
      });

      newDiv.classList.add('flatpickr-custom-div');
      // 建立自定義按鈕元素
      const customButtonCancel = document.createElement('button');
      customButtonCancel.type = 'button';
      customButtonCancel.classList.add(
        'btn',
        'btn-outline-secondary',
        'w-50',
        'rounded-0'
      );
      customButtonCancel.innerText = '清除';

      const customButtonConfirm = document.createElement('button');
      customButtonConfirm.type = 'button';
      customButtonConfirm.classList.add('btn', 'btn-primary', 'w-50');
      customButtonConfirm.innerText = '確定';

      customButtonConfirm.addEventListener('click', function () {
        instance.setDate(new Date()); // 設定為今天的日期
      });
      newDiv.append(customButtonCancel, customButtonConfirm);
      instance.calendarContainer.append(newUl, newDiv);
    },
  }); 