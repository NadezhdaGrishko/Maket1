document.addEventListener("DOMContentLoaded", function () {
  const helpItems = document.querySelectorAll(".help__item");
  const arrowIcons = document.querySelectorAll(".icon-arrow");

  function initHelpAccordion() {
    if (window.innerWidth <= 768) {
      arrowIcons.forEach((arrow) => {
        arrow.addEventListener("click", function (event) {
          event.stopPropagation();
          const item = this.closest(".help__item");
          const isActive = item.classList.contains("active");

          helpItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
          });

          if (!isActive) {
            item.classList.add("active");
          }
        });
      });

      helpItems.forEach((item) => {
        const header = item.querySelector(".help__item-header");
        if (header) {
          header.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
              const arrow = this.querySelector(".icon-arrow");
              if (arrow) {
                arrow.click();
              }
            }
          });
        }
      });
    } else {
      helpItems.forEach((item) => {
        item.classList.remove("active");
      });
    }
  }

  initHelpAccordion();

  window.addEventListener("resize", initHelpAccordion);
});
