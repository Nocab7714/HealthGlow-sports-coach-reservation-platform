let bookedCourses = [
  {
    calendarDate: "October 9, 2023",
    modalDate: "2023/10/09, 星期三",
    courseName: "Jeremy 教練｜1對1課程",
    timeStart: "20:00",
    timeEnd: "21:00",
    location: "中山體育館-2樓健身房",
    hasFinished: true,
  },
  {
    calendarDate: "October 9, 2024",
    modalDate: "2024/10/09, 星期三",
    courseName: "Jeremy 教練｜1對1課程",
    timeStart: "20:00",
    timeEnd: "21:00",
    location: "中山體育館-2樓健身房",
    hasFinished: true,
  },
  {
    calendarDate: "October 30, 2024",
    modalDate: "2024/10/30, 星期三",
    courseName: "Jeremy 教練｜3對3課程",
    timeStart: "21:00",
    timeEnd: "22:00",
    location: "中山體育館-2樓健身房",
    hasFinished: true,
  },
  {
    calendarDate: "October 22, 2024",
    modalDate: "2024/10/22, 星期三",
    courseName: "Jeremy 教練｜2對2課程",
    timeStart: "21:00",
    timeEnd: "22:00",
    location: "中山體育館-2樓健身房",
    hasFinished: true,
  },
  {
    calendarDate: "November 1, 2024",
    modalDate: "2024/11/01, 星期三",
    courseName: "Jeremy 教練｜1對1課程",
    timeStart: "20:00",
    timeEnd: "21:00",
    location: "中山體育館-2樓健身房",
    hasFinished: true,
  },
  {
    calendarDate: "November 4, 2024",
    modalDate: "2024/11/04, 星期一",
    courseName: "Jeremy 教練｜1對1課程",
    timeStart: "20:00",
    timeEnd: "21:00",
    location: "中山體育館-2樓健身房",
    hasFinished: false,
  },
  {
    calendarDate: "November 18, 2024",
    modalDate: "2024/11/18, 星期一",
    courseName: "Jeremy 教練｜1對1課程",
    timeStart: "20:00",
    timeEnd: "21:00",
    location: "中山體育館-2樓健身房",
    hasFinished: false,
  },

];

// 引入 Flatpickr 主程式及其樣式
import flatpickr from "flatpickr";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
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
  locale: {
    weekdays: {
      shorthand: ['日', '一', '二', '三', '四', '五', '六'], // 簡寫格式
      longhand: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] // 完整格式
    }
  },

  onChange: wrapTodayDate,
  onMonthChange: wrapTodayDate,
  onMonthChange: function(selectedDates, dateStr, instance) {
    wrapTodayDate();
    updateMonthYearDisplay(instance);
},
  onReady: function (selectedDates, dateStr, instance) {
    updateMonthYearDisplay(instance);
    wrapTodayDate();

    // 開始新增「清除」、「確定」按鈕
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("d-none", "d-lg-flex", "gap-8", "ms-auto");
    let str = `
    <div class="d-flex align-items-center gap-4">
          <p class="text-gray-600 text-nowrap">篩選顯示</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>全部教練</option>
            <option value="Jeremy">Jeremy 教練</option>
            <option value="Mike">Mike 教練</option>
            <option value="Matt">Matt 教練</option>
          </select>
        </div>
        <div class="d-flex align-items-center gap-4">
          <p class="text-gray-600 text-nowrap">預約狀態</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>全部狀態</option>
            <option value="Jeremy">課程完成</option>
            <option value="Mike">預約成功</option>
            <option value="Matt">預約已取消</option>
          </select>
        </div>`;

    btnDiv.innerHTML += str;

    // 選取 flatpickr-months 區塊
    const monthsContainer = instance.calendarContainer.querySelector(".flatpickr-months");
    monthsContainer.appendChild(btnDiv);
 
  },
  onDayCreate: function (dObj, dStr, fp, dayElem) {
    // format dayElem's date to yyyy-mm-dd
    const dateStr = dayElem.getAttribute("aria-label");
    
    // if bookCourse's calendarDate is equal to dateStr, and then add the following element section

    let todayEvents = bookedCourses.filter((bookCourse) => bookCourse.calendarDate === dateStr);
    
    if (todayEvents === undefined || todayEvents.length == 0) {
      // array does not exist or is empty
      return;
    }
    // Same as wrapTodayDate(), but do it inside onDayCreate
    if (dayElem.classList.contains("today")) {
      const selectedDaySpan = document.createElement("span");
      selectedDaySpan.classList.add("date"); // 添加 class

      // 將原有的文本添加到新的 <span> 中
      selectedDaySpan.textContent = dayElem.textContent; // 將文本設置為原有的內容

      // 清空原有的 <span> 並將新的 <span> 添加進去
      dayElem.textContent = ""; // 清空原有的內容
      dayElem.appendChild(selectedDaySpan); // 將新的 <span> 添加到原有的 <span> 中
    }

    // create event div and content
    const eventBlock = document.createElement("div");

    let dayEvents = "";

    todayEvents.forEach((event) => {
      let color = event.hasFinished ? "gray" : "#FF5E1F";
      dayEvents += `<span class="fs-10" style="color: ${color}">●</span><span class='text-secondary d-none d-lg-inline fs-8'>${event.courseName}</span><br>`;
    });

    eventBlock.innerHTML = dayEvents;

    // 將自定義區塊加入到日期元素中
    dayElem.appendChild(eventBlock);

    // add modal attribute

    //dayElem.setAttribute("data-bs-toggle", "modal");
    //dayElem.setAttribute("data-bs-target", `#eventModal`);

    dayElem.addEventListener("click", function () {

      //// MODAL TITLE
      // Take todayEvents' year/month/day for modal
      // get modal-title-date element
      let modalTitleDate = document.querySelector(".modal-title-date");
      
      // clear modal-title-date first
      modalTitleDate.innerHTML = '';
      // get event's year/month/day
      let year = todayEvents[0].modalDate.slice(0, 4);
      let month = todayEvents[0].modalDate.slice(5, 7);
      let day = todayEvents[0].modalDate.slice(8, 10);

      // check if it is mobile size or not
      // if mobile, show modal-title-date as 2024 年 10 月
      // if desktop, show modal-title-date as 2024 年 10 月 09 日
      let modalTitleDateContent = isMobile() ? `${year} 年 ${month} 月` : `${year} 年 ${month} 月 ${day} 日`; 
      modalTitleDate.innerHTML = modalTitleDateContent;

      //// MODAL BODY
      // check if it is mobile size or not
      // if yes, modal shows all bookedCourse of the month
      // if not, modal shows specific day (todayEvents)'s bookedCourse
      // calendarDate: "October 9, 2024",
      let modalCalendarMonth = todayEvents[0].calendarDate.split(' ')[0]; // October
      let modalCalendarYear = todayEvents[0].calendarDate.split(' ')[2]; // 2024
    

      let modalEvents = isMobile() ? getEventsForModel(bookedCourses.filter((bookCourse) => bookCourse.calendarDate.startsWith(modalCalendarMonth) && bookCourse.calendarDate.endsWith(modalCalendarYear))) : getEventsForModel(todayEvents);

      let modalBody = document.querySelector(".event-list");
      modalBody.innerHTML = ``;
      modalBody.innerHTML = modalEvents;
      console.log(modalBody);
      
      // check if containing cancelBtn
      const ifSetupCancelModal = modalBody.querySelector('.cancelBtn') !== null ? true : false;
      setupCancelModal(ifSetupCancelModal);

      // show modal programmatically
      let myModal = new bootstrap.Modal(
        document.getElementById("eventModal"),
        {}
      );
      myModal.show();

      

    });
  },
});
// create Modal Body Content for each event, and return 'todayEventsList' for modalBody
function getEventsForModel(todayEvents) {
  let todayEventsList = "";

  todayEvents.forEach((event) => {
    let hasFinishedContent = event.hasFinished ? '課程完成' : '預約成功';
    let hasFinishedButton = event.hasFinished 
      ? `<a href="course-introduction.html#customerReviews" class="btn btn-outline-secondary px-2 py-1">評價教練</a>` 
      : `<button class="cancelBtn btn btn-outline-primary px-2 py-1">取消預約</button>`;
    
    todayEventsList += `<li>
                    <date class="text-gray-700 fw-semibold fs-7 mb-1">${event.modalDate}</date>
                    <div class="d-flex justify-content-between align-items-center ps-2"
                      style="border-left: 4px solid #9747FF;">
                      <div>
                        <p class="text-secondary fw-semibold fs-7 mb-0-5">${event.courseName}</p>
                        <p class="fs-8">${event.location}</p>
                      </div>
                      <div class="d-flex flex-column fs-8">
                        <time datetime="" class="text-secondary fw-semibold">${event.timeStart}</time>
                        <time datetime="">${event.timeEnd}</time>
                      </div>
                      <div class="text-center">
                        <p>${hasFinishedContent}</p>
                        <!-- 連結至教練評價區塊 -->
                        ${hasFinishedButton}
                      </div>
                    </div>
                  </li>`;
  });
  return todayEventsList;
}
// setup cancel booking button's modal, and course modal stays in the back
function setupCancelModal(hasFinised){
  if(!hasFinised){
    return;
  }else{
    const cancelBtn = document.querySelector('.cancelBtn');
    const cancelModal = document.querySelector('#cancelModal');
    const cancelModalCloseBtn = document.querySelector('#cancelModal .btn-close');
  
    cancelBtn.addEventListener('click', function () {
      cancelModal.classList.add('show', 'd-block');
      cancelModal.style.zIndex = 1056;
      const modalBackdrop = document.querySelector(".modal-backdrop.fade.show");
      modalBackdrop.style.zIndex = 1055;
    })
    cancelModalCloseBtn.addEventListener('click', closeModal);
  
    const cancelBtnFooter = document.querySelector("#cancelModal button.btn.btn-outline-secondary");
  
    cancelBtnFooter.addEventListener('click', closeModal);
  
    function closeModal() {
      cancelModal.classList.remove('show', 'd-block');
      const modalBackdrop = document.querySelector(".modal-backdrop.fade.show");
      modalBackdrop.style.zIndex = 1050;
    }
  }
}
// check if the screen size is under 992 or not
// in order to determine to show specific day modal or the whole month modal
// if mobile, show the whole month booked courses
// if desktop, show the specific day booked courses
function isMobile(){
  console.log(window.screen.width < 992);
  return window.screen.width < 992;
}

// ====================================================================
// 自訂函數來更新顯示的年份和月份 => 年月
function updateMonthYearDisplay(instance) {
  const currentYear = instance.currentYear;
  const currentMonth = instance.currentMonth + 1; // 月份是從 0 開始，所以加 1

  // 選取 flatpickr-months 區塊並更新顯示
  const monthContainer = instance.calendarContainer.querySelector(".flatpickr-month");
  if (monthContainer) {
    monthContainer.textContent = `${currentYear}年 ${currentMonth}月`;
  }
}
// ====================================================================
// 為「今天」日期「數字」外層再包一個 <span>，以便對數字本身套用樣式，而不是整個日期方框
function wrapTodayDate() {
  // 獲取所有符合條件的 <span> 元素
  const dayElements = document.querySelectorAll(".today");

  // 遍歷每個 <span> 元素
  dayElements.forEach((today) => {
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
