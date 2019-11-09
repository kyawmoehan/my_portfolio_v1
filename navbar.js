var value = 0;



function show_menu() {

    if (value == 0) {
        document.getElementById('menu-icon').setAttribute('class', 'fas fa-times ');
        document.getElementById('show-one').setAttribute('class', '');
        document.getElementById('show-two').setAttribute('class', '');
        document.getElementById('hide-one').setAttribute('class', 'hide-nav-link');
        value++;
    } else {
        document.getElementById('menu-icon').setAttribute('class', 'fas fa-bars ');
        document.getElementById('show-one').setAttribute('class', 'hide-nav-link');
        document.getElementById('show-two').setAttribute('class', 'hide-nav-link');
        document.getElementById('hide-one').setAttribute('class', '');
        value--;
    }
    console.log('hi');
}