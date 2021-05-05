import smoothx from '../smoothx.min.js'

const MEDIA_PHONE_WIDTH = 711

const animateCardOnView = () => {
    let card_list_displayed = false

    // card opacity to 0
    smoothx.sequence('.js-grid-list > div')
        .transition({duration: 0, endStateMode: "keep"},
            smoothx.payloads.toOpacity(0)
        )
        .play()

    let animateCardOnViewHandler = (e) => {
        let scroll = e.target.scrollTop

        if (scroll >= 260 && !card_list_displayed) {
            smoothx.sequence('.js-grid-list > div')
                .transition({duration: 0, endStateMode: "keep"},
                    smoothx.payloads.toTranslate(60, 60)
                )
                .transition({duration: 500, gap: 150, endStateMode: "keep"},
                    smoothx.payloads.toTranslate(0, 0),
                    smoothx.payloads.toOpacity(1)
                ).play()

            card_list_displayed = true
            e.target.removeEventListener('scroll', animateCardOnViewHandler)
        }
    }

    document.querySelector('.mdl-layout__content').addEventListener("scroll", animateCardOnViewHandler)
}

document.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth > MEDIA_PHONE_WIDTH)
        animateCardOnView()
})