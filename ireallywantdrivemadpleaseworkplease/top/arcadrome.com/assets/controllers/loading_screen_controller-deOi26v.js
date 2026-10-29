import {
    Controller
} from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['iframe', 'loader'];

    connect() {
        if (this.hasIframeTarget) {
            this.iframeTarget.addEventListener('load', () => {
                this.hideLoadingScreen();
            });

            this.timeout = setTimeout(() => {
                this.hideLoadingScreen();
            }, 5000);
        } else {
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 2000);
        }
    }

    hideLoadingScreen() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (this.hasLoaderTarget) {
            this.loaderTarget.remove();
        }
    }

    disconnect() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }
}