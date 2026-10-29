import {
    Controller
} from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['content'];

    static outlets = ['slideover']

    connect() {
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        document.addEventListener('click', this.handleOutsideClick);
    }

    disconnect() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    toggle() {
        this.contentTarget.classList.toggle('hidden');
    }

    close() {
        this.contentTarget.classList.add('hidden');
    }

    handleOutsideClick(event) {
        if (!this.contentTarget.classList.contains('hidden') &&
            !this.element.contains(event.target)
        ) {
            this.close();
        }
    }

    openFeedback() {
        this.slideoverOutlet.show()
        this.slideoverOutlet.showMainMenu()
        this.close()
    }
}