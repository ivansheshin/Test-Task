document.addEventListener('DOMContentLoaded', () => {
    const blockForLogs = document.querySelector('.log-block')
    const startButton = document.querySelector('.start-button')
    startButton.addEventListener('click', () => {
        changeBtnState(true, 'in progress...')
        animateCells()
        blockForLogs.insertAdjacentHTML('beforeend', `<p class="log-block__message">---PROGRESS START---</p>`)

    })


    function changeBtnState(isDisabled, btnText) {

        startButton.textContent = btnText
        startButton.disabled = isDisabled
    }

    function animateCells() {
        const cells = document.querySelectorAll('.cells__item')
        cells.forEach((item, index) => {

            setTimeout(() => {
                item.classList.add('cells__item_animation')
            }, index * 200)

            item.addEventListener('animationstart', () => {
                showLogs(item, 'START')
            }, {once: true})

            item.addEventListener('animationend', () => {
                item.classList.remove('cells__item_animation')
                showLogs(item, 'END')

                if (index === cells.length - 1) {
                    blockForLogs.insertAdjacentHTML('beforeend', `<p class="log-block__message">---PROGRESS END---</p>`)
                    changeBtnState(false, 'start')
                    blockForLogs.scrollTop = blockForLogs.scrollHeight

                    setTimeout(() => alert('success'), 0)
                }
            }, {once: true})



        })
    }

    function showLogs(arrayItem, animationState) {
        blockForLogs.insertAdjacentHTML('beforeend', `<p class="log-block__message">Cell ${arrayItem.textContent} Animation ${animationState}</p>`)
        blockForLogs.scrollTop = blockForLogs.scrollHeight
    }

})