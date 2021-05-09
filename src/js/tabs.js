const tab1 = document.querySelector('._summery');
const tab2 = document.querySelector('._information');
const tab3 = document.querySelector('._rooms');

const blocksList = document.querySelectorAll('.tabs-hotel__block');
const tabsList = document.querySelectorAll('.tabs-hotel__link');
console.log(tabsList.length);

if (tabsList.length > 0 && blocksList.length > 0) {

  tab1.addEventListener('click', () => {
    tabsHandler(tabsList, blocksList, "_block-summery", tab1.classList[1])
  });
  tab2.addEventListener('click', () => {
    tabsHandler(tabsList, blocksList, "_block-information", tab2.classList[1])
  });
  tab3.addEventListener('click', () => {
    tabsHandler(tabsList, blocksList, "_block-rooms", tab3.classList[1])
  });
}





function tabsHandler (tabs, blocks, blockClass, tabClass) {
  tabs.forEach(tab => {
    if(tab.classList.contains(tabClass)){
      tab.classList.add('_active-tab');
    }
    else
      tab.classList.remove('_active-tab');
  });

  blocks.forEach((block) => {
    if(block.classList.contains(blockClass)) {
      block.classList.remove('d-none');
    }
    else
      block.classList.add('d-none');
  });
 }










