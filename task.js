arrMenu = Array.from(document.getElementsByClassName('menu__item'));
let cash = [];

arrMenu.forEach((elem) => {                   //Критерий поиска - вложенность. Если вложенность есть, то это не ссылка.
                                              //По чему не активны ссылки во вложенных меню?

    if(elem.children.length > 1) {
        elem.onclick = function() {
            if(cash.length === 0) {
                cash.push(elem.children[1]);
                elem.children[1].className = 'menu menu_sub menu_active';
                return false;
            }
            else {
                cash[0].className = 'menu menu_sub';
                cash[0] = elem.children[1];
                elem.children[1].className = 'menu menu_sub menu_active';
            }
        }
    }
});

