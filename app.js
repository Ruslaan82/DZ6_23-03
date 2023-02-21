// Сделайте верстку: кнопка + , кнопка - и инпут со значением 0.
// Напишите логику счетчика, чтобы при клике на + значение инпута
// увеличивалась на 1,а при клике на - наоборот уменьшалась на 1.
// Добавьте условие , чтобы счетчик не превышал 10 и -10.

const btns = document.querySelectorAll('.counter__btn');
btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue + 1 < 10 ? currentValue + 1 : 10;
        } else {
            newValue = currentValue - 1 > -10 ? currentValue - 1 : -10;
        }
        inp.value = parseInt(newValue);
    })
})

