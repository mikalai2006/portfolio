const btn = document.querySelectorAll('.btn');
const wrapper = document.querySelector('.wrapper');
const btnTypex = document.querySelectorAll('.typex');
const typeClassBtnDefault = 'btn-primary';
const typeClassBtnActive = 'd-none';

function changeActiveBtn(type) {

    btnTypex.forEach(function (button) {
        button.classList.remove(typeClassBtnActive);
        button.classList.add(typeClassBtnDefault);
    });
    const activeBtn = document.querySelector('[data-typex='+ type +']');
    activeBtn.classList.add(typeClassBtnActive);
    activeBtn.classList.remove(typeClassBtnDefault);

}

function changeMode(typex) {

    if (typex === 'desktop'){
        wrapper.style.width = '100%';
        changeActiveBtn(typex);
    } else if (typex === 'mobile') {
        if (window.innerWidth <= 640) {
            wrapper.style.width = '100%';
        } else {
            wrapper.style.width = '640px';
        }
        changeActiveBtn(typex);
    } else {
        window.history.back();
    }

}

btn.forEach(function(button) {

    button.addEventListener('click', function() {
        const type = this.getAttribute('data-typex');
        changeMode(type);
    });

})

function toggleBtn() {

    if (window.innerWidth < 900) {
        
        btnTypex.forEach(function(button) {
            button.style.display = 'none';
        });

        changeMode('mobile');

    } else {

        btnTypex.forEach(function(button) {
            button.style.display = 'block';
        });

        changeMode('desktop');

    }
}

toggleBtn();

window.addEventListener('resize', function() {

    toggleBtn();
    
})

