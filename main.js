const tabItems=document.querySelectorAll('.tab-item');
const link=document.querySelectorAll('.link');
//Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add Border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const link = document.querySelector(#${this.id}-content);
    //Add show class
    link.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    link.forEach(item => item.classList.remove('show'));
}
    //Listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));
