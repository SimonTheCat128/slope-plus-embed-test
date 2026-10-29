import {
    Controller
} from "@hotwired/stimulus"

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static values = {
        gameId: Number,
        upVotes: Number,
        downVotes: Number,
        url: String,
        likeText: String,
        dislikeText: String,
        removeText: String
    }

    connect() {
        this.adjustInitialVotes() // Корректируем начальные значения на основе сохраненного голоса
        this.loadVoteState()
    }

    toggle(event) {
        const button = event.currentTarget;
        const voteType = button.dataset.votingType;
        const currentVote = this.getCurrentVote();
        const newVote = this.calculateNewVote(currentVote, voteType);

        // Отправка текущего и нового состояния голоса на сервер
        fetch(this.urlValue, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currentVote: currentVote, // текущее состояние: 0, 1 или -1
                newVote: newVote // новое состояние: 0, 1 или -1
            })
        });

        // Локально обновляем состояние кнопок и счетчики
        this.saveVote(newVote);
        this.updateVoteCounts(currentVote, newVote);
        this.updateButtonStates();
    }

    adjustInitialVotes() {
        const currentVote = this.getCurrentVote()
        // Если пользователь уже голосовал, корректируем начальные значения
        if (currentVote === 1 && !this.hasAdjustedUp) {
            this.upVotesValue += 1
            this.hasAdjustedUp = true
        } else if (currentVote === -1 && !this.hasAdjustedDown) {
            this.downVotesValue += 1
            this.hasAdjustedDown = true
        }
    }

    loadVoteState() {
        const currentVote = this.getCurrentVote()
        this.updateButtonStates(currentVote)
        this.element.querySelector('.up-votes-count').textContent = this.shortNumber(this.upVotesValue)
        this.element.querySelector('.down-votes-count').textContent = this.shortNumber(this.downVotesValue)
    }

    calculateNewVote(currentVote, voteType) {
        if (voteType === 'up') {
            return currentVote === 1 ? 0 : 1
        }
        if (voteType === 'down') {
            return currentVote === -1 ? 0 : -1
        }
        return 0
    }

    updateVoteCounts(currentVote, newVote) {
        if (currentVote === newVote) return

        if (newVote === 1) {
            this.upVotesValue += 1
            if (currentVote === -1) this.downVotesValue -= 1
        } else if (newVote === -1) {
            this.downVotesValue += 1
            if (currentVote === 1) this.upVotesValue -= 1
        } else {
            if (currentVote === 1) this.upVotesValue -= 1
            if (currentVote === -1) this.downVotesValue -= 1
        }

        this.element.querySelector('.up-votes-count').textContent = this.shortNumber(this.upVotesValue)
        this.element.querySelector('.down-votes-count').textContent = this.shortNumber(this.downVotesValue)
    }

    updateButtonStates() {
        const currentVote = this.getCurrentVote()
        const buttons = this.element.querySelectorAll('.game-toolbar-vote-button')

        buttons.forEach(button => {
            const voteType = button.dataset.votingType
            const label = button.querySelector('.game-toolbar-vote-button-tip')
            const isActive = (voteType === 'up' && currentVote === 1) ||
                (voteType === 'down' && currentVote === -1)

            button.classList.toggle('active', isActive)

            // Используем переведенные значения из values
            if (isActive) {
                label.textContent = this.removeTextValue
            } else {
                label.textContent = voteType === 'up' ? this.likeTextValue : this.dislikeTextValue
            }
        })
    }

    getCurrentVote() {
        const votes = JSON.parse(localStorage.getItem('userVotes') || '{}')
        return votes[this.gameIdValue] || 0
    }

    saveVote(vote) {
        const votes = JSON.parse(localStorage.getItem('userVotes') || '{}')
        votes[this.gameIdValue] = vote
        localStorage.setItem('userVotes', JSON.stringify(votes))
    }

    shortNumber(number) {
        if (!Number.isFinite(number)) return '0'
        if (number < 1000) return number.toString()

        const units = ['', 'K', 'M', 'B', 'T']
        const exp = Math.floor(Math.log10(number) / 3)
        const value = number / Math.pow(10, exp * 3)
        return `${Math.round(value * 10) / 10}${units[exp]}`
    }
}