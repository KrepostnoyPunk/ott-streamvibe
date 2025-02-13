class Slider{
    selectors = {  
        root:  '[data-js-slider-root]',
        sliderControls: '[data-js-slider-controls]',
        sliderControlsBtn: '[data-js-slider-controls-btn]',
        pageMark: '[data-js-slider-page-mark]',
        slidesWrapper: '[data-js-slider-slides-wrapper]',
        slide: '[data-js-slider-slide]',
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
        this.slidesWrapperEl = this.rootEl.querySelector(this.selectors.slidesWrapper);
        this.slideItemEls = this.rootEl.querySelectorAll(this.selectors.slide);
        this.mobileProgressBarEl = this.rootEl.querySelector(this.selectors.mobileProgressBar)

        this.totalSlides = this.slideItemEls.length; // 4 but max === 3, b-se 0 === 1 by array rules
        this.currentSlide = 0; 

        this.bindEvents()
    }

    UpdateSlide = (event) => {
        if(this.currentSlide >= this.totalSlides){ // if currentSlide greater then totalSlides quantity
            this.currentSlide = 0; // drop currentSlide to start
        } else if (this.currentSlide < 0){
            this.currentSlide = this.totalSlides - 1; // if currentSlide less then 0 let currentSlide be equal to last slide
        }

        // TODOOOO
        if(event.target.id === "prev-btn"){
            this.currentSlide--;
            this.slidesWrapperEl.style.transform = `translateX(+${this.slideItemEls[0].offsetWidth}px)`;
        } else {
            this.currentSlide++;
            this.slidesWrapperEl.style.transform = `translateX(-${this.slideItemEls[0].offsetWidth}px)`;
        }

        console.log(this.currentSlide);
    }
    
    bindEvents(){
        this.sliderControlsBtnEls.forEach(btn => {
            btn.addEventListener("click", this.UpdateSlide)
        })
    }
}

export default Slider