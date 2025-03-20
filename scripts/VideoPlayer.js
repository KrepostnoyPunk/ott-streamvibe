const rootSelector = '[data-js-video-player-root]';

class VideoPlayer{
    selectors = {
        root: rootSelector,
        video: '[data-js-video-player-video]',
        panel: '[data-js-video-player-panel]',
        btn: '[data-js-video-player-btn]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor(rootEl){
        this.rootEl = rootEl;
        this.videoEl = rootEl.querySelector(this.selectors.video);
        this.panelEl = rootEl.querySelector(this.selectors.panel);
        this.playBtnEl = rootEl.querySelector(this.selectors.btn);

        this.bindEvents()
    }

    onPlayBtnClick = () => {
        this.videoEl.play();
        this.videoEl.controls = true;
        this.panelEl.classList.remove(this.stateClasses.isActive);
    }

    onPauseClick = () => {
        this.videoEl.controls = false;
        this.panelEl.classList.add(this.stateClasses.isActive);
    }

    bindEvents(){
        this.playBtnEl.addEventListener('click', this.onPlayBtnClick);
        this.videoEl.addEventListener('pause', this.onPauseClick);
    }
}

class VideoPlayerCollection{
    constructor(){
        this.init()
    }

    init(){
        document.querySelectorAll(rootSelector).forEach((videoPlayersGroup) => {
            new VideoPlayer(videoPlayersGroup)
        })
    }
}

export default VideoPlayerCollection