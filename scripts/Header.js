class Header{
    selectors = {
        root: '[data-js-header]',
        menu: '[data-js-header-mobile-overlay]',
        btn: '[data-js-header-burger-btn]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLocked: 'is-locked'
    }

    constructor(){
        this.rootEl = document.querySelector(this.selectors.root);
        this.overlayMenuEl = this.rootEl.querySelector(this.selectors.menu);
        this.burgerBtnEl = this.rootEl.querySelector(this.selectors.btn);

        this.bindEvents()
    }

    onBurgerBtnClick = () => {
        this.burgerBtnEl.classList.toggle(this.stateClasses.isActive);
        this.overlayMenuEl.classList.toggle(this.stateClasses.isActive);
        document.documentElement.classList.toggle(this.stateClasses.isLocked);
    }

    bindEvents(){
        this.burgerBtnEl.addEventListener('click', this.onBurgerBtnClick)
    }
}

export default Header