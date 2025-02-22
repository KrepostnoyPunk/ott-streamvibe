class Slider{
    selectors = {  
        root:  '[data-js-slider-root]',
        sliderControls: '[data-js-slider-controls]',
        sliderControlsBtn: '[data-js-slider-controls-btn]',
        pageMark: '[data-js-slider-page-mark]',
        slidesWrapper: '[data-js-slider-slides-wrapper]',
        slide: '[data-js-slider-slide]',
        mobileProgressBar: '[data-js-slider-mobile-progress-bar]',
        heroAltInner: '[data-js-hero-alt-inner]',
        heroBgImg: 'data-js-slide-bg-img',
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
        this.mobileProgressBarEl = this.rootEl.querySelector(this.selectors.mobileProgressBar);
        this.heroAltInnerEls = this.rootEl.querySelectorAll(this.selectors.heroAltInner);

        this.totalSlides = this.slideItemEls.length; // 4 but max === 3, b-se 0 === 1 by array rules
        this.currentSlide = 0; 

        if(document.querySelector('.slider--hero')){
            this.autoUpdate = setInterval(() => {
                this.sliderControlsBtnEls[1].click()
            }, 10000);
        }

        this.bindEvents()
    }

    updateSlide = (event) => {
        if(event.target.id === "prev-btn"){
            this.currentSlide--
        } else {
            this.currentSlide++
        }

        if (this.currentSlide < 0) {
            this.currentSlide = this.totalSlides - 1; // if currentSlide less then 0 let currentSlide be equal to last slide of slides list
        } else if (this.currentSlide >= this.totalSlides) { // if currentSlide greater then totalSlides quantity
            this.currentSlide = 0; // drop currentSlide to start of slides list
        }

        this.showSlide(this.currentSlide);
    }

    showSlide(index){
        this.slideItemEls.forEach(slideItem => {
            slideItem.classList.remove(this.stateClasses.isActive)
        })

        this.pageMarkEls.forEach(pageMark => {
            pageMark.classList.remove(this.stateClasses.isActive)
        })

        this.slideItemEls[index].classList.add(this.stateClasses.isActive)

        this.pageMarkEls[index].classList.add(this.stateClasses.isActive)

        const bgImg = this.slideItemEls[index].getAttribute(this.selectors.heroBgImg);
        if(bgImg){
            this.heroAltInnerEls[index].style.background  = `linear-gradient(0deg, rgb(20, 20, 20) 0%, rgba(20, 20, 20, 0) 100%), url('${bgImg}') center / cover, no-repeat`;
        }
    }

    updateProgressBar = () => {

        const currentScrollPosition = this.slidesWrapperEl.scrollLeft;
        const maxScrollWidth = this.slidesWrapperEl.scrollWidth - this.slidesWrapperEl.clientWidth; // max scroll space - max client space

        const progress = (currentScrollPosition / maxScrollWidth) * 100;
        this.mobileProgressBarEl.style.setProperty("--progressMarkWidth", `${progress}%`)
    }
    
    bindEvents(){
        this.sliderControlsBtnEls.forEach(btn => {
            btn.addEventListener("click", this.updateSlide)
        })

        if(document.querySelector(this.selectors.mobileProgressBar)){
            this.slidesWrapperEl.addEventListener("scroll", this.updateProgressBar)
        }

        this.pageMarkEls.forEach((mark, index) => {
            mark.addEventListener('click', () => {
                this.currentSlide = index;
                this.showSlide(this.currentSlide);
            })
        })
    }
}

export default Slider