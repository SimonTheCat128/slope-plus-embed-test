import {
    Controller
} from "@hotwired/stimulus"

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static values = {
        url: String,
        name: String,
        image: String,
        limit: {
            type: Number,
            default: 15
        },
        locale: String
    };

    connect() {
        this.save();
    }

    save() {
        const {
            urlValue: url,
            nameValue: name,
            imageValue: image,
            limitValue: limit
        } = this;
        const locale = this.hasLocaleValue ? this.localeValue : 'en';

        const storageKey = 'recentlyPlayedPerLocale';
        const stored = JSON.parse(localStorage.getItem(storageKey)) || {};
        const games = stored[locale] || [];

        // Удаляем старую запись с таким же URL (если есть)
        const updatedGames = games.filter(game => game.url !== url);

        // Добавляем новую игру в начало списка
        updatedGames.unshift({
            name,
            image,
            url
        });

        // Ограничиваем список
        stored[locale] = updatedGames.slice(0, limit);

        // Сохраняем обратно
        localStorage.setItem(storageKey, JSON.stringify(stored));
    }
}