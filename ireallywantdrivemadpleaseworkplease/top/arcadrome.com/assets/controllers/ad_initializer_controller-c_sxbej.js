import {
    Controller
} from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        // Ждем загрузки AdSense, затем инициализируем
        this.waitForAdSenseAndInitialize()

        // Следим за добавлением новых блоков
        this.observer = new MutationObserver(() => {
            this.initializeAds()
        })

        this.observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    }

    disconnect() {
        if (this.observer) {
            this.observer.disconnect()
        }
        if (this.checkInterval) {
            clearInterval(this.checkInterval)
        }
    }

    waitForAdSenseAndInitialize() {
        // Если AdSense уже загружен
        if (typeof window.adsbygoogle !== 'undefined') {
            // Небольшая задержка чтобы DOM точно был готов
            setTimeout(() => this.initializeAds(), 100)
            return
        }

        // Ждем загрузки AdSense (проверяем каждые 100мс)
        this.checkInterval = setInterval(() => {
            if (typeof window.adsbygoogle !== 'undefined') {
                clearInterval(this.checkInterval)
                this.checkInterval = null
                this.initializeAds()
            }
        }, 100)

        // Таймаут на 10 секунд
        setTimeout(() => {
            if (this.checkInterval) {
                clearInterval(this.checkInterval)
                this.checkInterval = null
                console.warn('AdSense script failed to load within 10 seconds')
            }
        }, 10000)
    }

    initializeAds() {
        if (typeof window.adsbygoogle === 'undefined') {
            return
        }

        const uninitializedAds = document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])')

        if (uninitializedAds.length === 0) {
            return
        }

        console.log(`Initializing ${uninitializedAds.length} AdSense block(s)`)

        uninitializedAds.forEach((ad, index) => {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
                console.log(`AdSense block ${index + 1} initialized`)
            } catch (e) {
                console.error(`AdSense initialization error for block ${index + 1}:`, e)
            }
        })
    }
}