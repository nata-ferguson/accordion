const acc = document.querySelectorAll('.accordion')

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active')
        const desc = this.nextElementSibling

        if(desc.style.maxHeight) {
            desc.style.maxHeight = null
            desc.style.margin = '0'
        } else {
            desc.style.maxHeight = desc.scrollHeight + 'px'
            desc.style.margin = '10px 0'
        }
    })
}
