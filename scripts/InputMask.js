const rootSelector = '[data-js-field-input-mask]';

class InputMask{

    phonePatterns = {
        ru: "(000) 000-00-00",
        us: "(000) 000-0000",
        // etc...
    }

    constructor(rootEl){
        this.rootEl = rootEl;

        this.init()
    }

    init(){
        const libraryReady = typeof window.IMask !== "undefined"; // true if loaded/false if not loaded

        if(libraryReady){
            window.IMask(this.rootEl, {
                mask: this.phonePatterns.us
            }) 
        } else {
            console.log("Library is not loaded.");
        }
    }
}

class InputMaskCollection{
    constructor(){
        this.init()
    }

    init(){
        document.querySelectorAll(rootSelector).forEach((InputMaskGroup) => {
            new InputMask(InputMaskGroup)
        })
    }
}

export default InputMaskCollection