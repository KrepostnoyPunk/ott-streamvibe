const rootSelector = '[data-js-tabs-root]'; // global initialization to separate different groups of tabs so they won't trigger at the same time

class Tabs{
    selectors = {
        root: rootSelector,
        controls: '[data-js-tabs-controls]',
        btn: '[data-js-tabs-btn]',
        tab: '[data-js-tabs-tab]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    stateAttributes = {
        ariaSelected: 'aria-selected',
        tabIndex: 'tabindex',
    }

    constructor(rootEl){
        this.rootEl = rootEl; // root el for tabs
        this.tabsControlsEl = document.querySelector(this.selectors.controls); // root el for buttons
        this.tabBtnEls = this.tabsControlsEl.querySelectorAll(this.selectors.btn);
        this.tabsEls = rootEl.querySelectorAll(this.selectors.tab);
        this.state = {
            activeIndex: [...this.tabBtnEls].findIndex(btnEl => btnEl.classList.contains(this.stateClasses.isActive)) // make array from NodeList, then find index of current active btn
        }

        this.bindEvents()
    }

    updateUI(){
        const {activeIndex} = this.state; // get current activeIndex

        this.tabBtnEls.forEach((btnEl, index) => {
            const isActive = index === activeIndex; // if index of btn equals to activeIndex === true/false

            btnEl.classList.toggle(this.stateClasses.isActive, isActive)
            btnEl.setAttribute(this.stateAttributes.ariaSelected, isActive) // active === aria-selected
            btnEl.setAttribute(this.stateAttributes.tabIndex, isActive ? '0' : "-1") // active === tabindex
        })

        this.tabsEls.forEach((tabEl, index) => {
            const isActive = index === activeIndex; // if index of tab equals to activeIndex === true/false

            tabEl.classList.toggle(this.stateClasses.isActive, isActive)
        })
    }

    onBtnClick(btnIndex){
        this.state.activeIndex = btnIndex; // assign index of clicked btn as activeIndex
        this.updateUI()
    }

    bindEvents(){
        this.tabBtnEls.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.onBtnClick(index)
            })
        })
    }
}

class TabsCollection{
    constructor(){
        this.init()
    }

    init(){
        document.querySelectorAll(rootSelector).forEach((tabsGroup) => { // for each group of tabs initialize it's individual class with all functionality
            new Tabs(tabsGroup)
        })
    }
}

export default TabsCollection