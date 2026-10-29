import {
    Controller
} from "@hotwired/stimulus"

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect() {
        document.addEventListener('fullscreenchange', this.onFullscreenchange.bind(this))
    }

    onFullscreenchange() {
        document.body.classList.toggle('isFullscreen', !!document.fullscreenElement)
    }

    toggle() {
        if (document.fullscreenElement) {
            document.exitFullscreen()
            document.body.classList.remove('isFullscreen')
        } else {
            document.documentElement.requestFullscreen()
            document.body.classList.add('isFullscreen')
        }
    }
}