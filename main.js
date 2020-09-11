function $getElById(id) {
    return document.getElementById(id);
}

const $btn = $getElById('btn-kick');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-character'), 
    elProgressbar: $getElById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    }

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-enemy'), 
    elProgressbar: $getElById('progressbar-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

$btn.addEventListener('click', function () {
    console.log('Klick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife(person) {
        this.elHP.innerText = this.damageHP + ' / '+ this.defaultHP;
}

function renderProgressbarHP(person) {
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count, person) {
    this.damageHP -= count;

    if (this.damageHP <= 0) {
        this.damageHP = 0;
        alert('Бедный ' + this.name +' проиграл бой!');
        $btn.disabled = true;
}
       
    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

init();
