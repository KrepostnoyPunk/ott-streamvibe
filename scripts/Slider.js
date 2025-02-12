class Slider{
    selectors = {  
        root:  '[data-js-slider-root]',
        sliderControls: '[data-js-slider-controls]',
        sliderControlsBtn: '[data-js-slider-controls-btn]',
        pageMark: '[data-js-slider-page-mark]',
        slidesList: '[data-js-slider-slides-list]',
        slideItem: '[data-js-slider-item]',
        mobileProgressBar: '[data-js-slider-mobile-progress-bar]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    // stateAttributes = {
    //     ariaSelected: 'aria-selected',
    //     tabIndex: 'tabindex',
    // }

    constructor(){
        this.rootEl = document.querySelector(this.selectors.root);
        this.sliderControlsEl = document.querySelector(this.selectors.sliderControls);
        this.sliderControlsBtnEls = this.sliderControlsEl.querySelectorAll(this.selectors.sliderControlsBtn);
        this.pageMarkEls = this.sliderControlsEl.querySelectorAll(this.selectors.pageMark);
        this.slidesListEl = this.rootEl.querySelector(this.selectors.slidesList);
        this.slideItemEls = this.rootEl.querySelector(this.selectors.slideItem);
        this.mobileProgressBarEl = this.rootEl.querySelector(this.selectors.mobileProgressBar)

        this.currentSlide = 0;

        this.bindEvents()
    }

    UpdateSlide = (event) => {
        if(event.target.id === "prev-btn"){

        } else if(event.target.id === "next-btn"){
            
        } else {
            return
        }
    }
    
    bindEvents(){
        this.sliderControlsBtnEls.forEach(btn => {
            btn.addEventListener("click", this.UpdateSlide)
        })
    }
}

export default Slider