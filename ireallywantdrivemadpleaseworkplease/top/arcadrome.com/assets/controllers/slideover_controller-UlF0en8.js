import {
    Controller
} from '@hotwired/stimulus'

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['menu', 'mainMenu', 'reportMenu', 'ideaMenu', 'confirmationMenu', 'background']
    static values = {
        open: {
            type: Boolean,
            default: false
        }
    }

    initialize() {
        window.addEventListener('feedback:saved', (event) => {
            this.showConfirmationMenu()
        });
    }

    connect() {
        this.currentMenu = this.mainMenuTarget;

        document.addEventListener('keydown', this.handleEscapeKey.bind(this))
        this.backgroundTarget.addEventListener('click', this.handleClickBackground.bind(this))
    }

    disconnect() {
        document.removeEventListener('keydown', this.handleEscapeKey.bind(this))
        this.backgroundTarget.removeEventListener('click', this.handleClickBackground.bind(this))
    }

    openValueChanged() {
        if (this.openValue) {
            this.backgroundTarget.classList.remove('hidden')
        } else {
            this.backgroundTarget.classList.add('hidden')
        }
    }

    show() {
        this.openValue = true
    }

    hide(event) {
        this.openValue = false
    }

    toggle() {
        this.openValue = !this.openValue
    }

    handleEscapeKey(event) {
        if (event.key === 'Escape' && this.openValue) {
            this.hide()
        }
    }

    handleClickBackground(event) {
        if (!this.menuTarget.contains(event.target)) {
            this.hide()
        }
    }

    switchMenu(targetMenu) {
        this.currentMenu.classList.add('hidden');
        targetMenu.classList.remove('hidden');
        this.currentMenu = targetMenu;
    }

    showMainMenu() {
        this.switchMenu(this.mainMenuTarget)
    }

    showReportMenu() {
        this.switchMenu(this.reportMenuTarget)
    }

    showIdeaMenu() {
        this.switchMenu(this.ideaMenuTarget)
    }

    showConfirmationMenu() {
        this.switchMenu(this.confirmationMenuTarget)
    }
}