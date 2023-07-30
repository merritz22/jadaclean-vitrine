let ls = 1
window.onload = (e) =>{
    document.querySelector('.navbar li #lang').src = './fr.svg'
    document.querySelector('.navbar li #lang').onclick = (e) => {
        e.target.src= langValue[ls];
        localStorage.setItem('lang', langValue[ls])
        ls = (ls+1)%3
        // console.log(ls);
        navbar()
        footer()
        try {
            pricing()
        } catch (error) {
            console.log(error);
        }
        home()
    }
    navbar()
    footer()
    try {
        pricing()
    } catch (error) {
        console.log(error);
    }
    home()
}

function navbar() { 
    let li = document.querySelectorAll('.navbar ul  li a')
    let i = 0
    if(localStorage.getItem('lang') && (!localStorage.getItem('lang').includes('fr'))){
        let head = lang.en
        if (localStorage.getItem('lang').includes('ro'))
            head = lang.ro
        li.forEach(element => {
            element.innerHTML = head.accueil[i]
            i ++
        });
    }else{
        li.forEach(element => {
            element.innerHTML = lang.fr.accueil[i]
            i ++
        });
    }
}

function footer() {
    const title = document.querySelectorAll('.box h3')[0]
    const text = document.querySelectorAll('.box p')[0]
    const contact = document.querySelectorAll('.box h3')[1]
    // console.log();
    if(localStorage.getItem('lang') && (!localStorage.getItem('lang').includes('fr'))){
        let head = lang.en
        if (localStorage.getItem('lang').includes('ro'))
            head = lang.ro
        title.innerHTML = head.footer.title
        text.innerHTML = head.footer.text
        contact.innerHTML = head.footer.contact
    }else{
        title.innerHTML = lang.fr.footer.title
        text.innerHTML = lang.fr.footer.text
        contact.innerHTML = lang.fr.footer.contact
    }
}

function home() {
    const title = document.querySelector('.content h2')
    const text = document.querySelector('.content p')
    const cardsTitles = document.querySelectorAll('h1.card-title.text-uppercase')
    const cardsBody = document.querySelectorAll('p.card-text')
    let i = 0
    if(localStorage.getItem('lang') && (!localStorage.getItem('lang').includes('fr'))){
        let head = lang.en
        if (localStorage.getItem('lang').includes('ro'))
            head = lang.ro
        title.innerHTML = head.home.title
        text.innerHTML = head.home.subtitle
        cardsTitles.forEach(cardTitle => {
            cardTitle.innerHTML = head.home.body.title[i]
            i++
        });
        i=0
        cardsBody.forEach(cardBody => {
            cardBody.innerHTML = head.home.body.text[i]
            i++
        });
    }else{
        title.innerHTML = lang.fr.home.title
        text.innerHTML = lang.fr.home.subtitle
        cardsTitles.forEach(cardTitle => {
            cardTitle.innerHTML = lang.fr.home.body.title[i]
            i++
        });
        i=0
        cardsBody.forEach(cardBody => {
            cardBody.innerHTML = lang.fr.home.body.text[i]
            i++
        });
    }
}

function pricing() {
    if(localStorage.getItem('lang') && (!localStorage.getItem('lang').includes('fr'))){
        let head = lang.en
        if (localStorage.getItem('lang').includes('ro'))
            head = lang.ro
        let i = 0, j = 0, k = 0, l = 1, cpt =0
        document.querySelector('div#card-alert h1').innerHTML = head.pricing.alertTitle
        document.querySelector('div#card-alert p').innerHTML = head.pricing.alertText
        document.querySelector('div.card-body .card-title').innerHTML = head.pricing.cards.first.title
        document.querySelector('#warning').innerHTML = head.pricing.cards.first.warning
        document.querySelectorAll('.first h3').forEach(e => {
            e.innerHTML = head.pricing.cards.first.subTilte[i]
            i++
        });
        document.querySelectorAll('.first p').forEach(e => {
            e.innerHTML = head.pricing.cards.first.text[j]
            j++
        });
        document.querySelectorAll('.second h3').forEach(e =>{
            e.innerHTML = head.pricing.cards.second.title[k]
            k++
        })
        const spans = document.querySelectorAll('.second .d-flex span')
        while (l < spans.length) {
            spans[l].innerHTML = head.pricing.cards.second.btnText[cpt]
            cpt++
            // console.log();
            l+=2
        }
    }else{
        let i = 0, j = 0, k = 0, l = 1, cpt =0
        document.querySelector('div#card-alert h1').innerHTML = lang.fr.pricing.alertTitle
        document.querySelector('div#card-alert p').innerHTML = lang.fr.pricing.alertText
        document.querySelector('div.card-body .card-title').innerHTML = lang.fr.pricing.cards.first.title
        document.querySelector('#warning').innerHTML = lang.fr.pricing.cards.first.warning
        document.querySelectorAll('.first h3').forEach(e => {
            e.innerHTML = lang.fr.pricing.cards.first.subTilte[i]
            i++
        });
        document.querySelectorAll('.first p').forEach(e => {
            e.innerHTML = lang.fr.pricing.cards.first.text[j]
            j++
        });
        document.querySelectorAll('.second h3').forEach(e =>{
            e.innerHTML = lang.fr.pricing.cards.second.title[k]
            k++
        })
        const spans = document.querySelectorAll('.second .d-flex span')
        while (l < spans.length) {
            spans[l].innerHTML = lang.fr.pricing.cards.second.btnText[cpt]
            cpt++
            // console.log();
            l+=2
        }
        // for (let index = 1; index < spans.length; index+2) {
        //     console.log(spans[index]);
        // }
    }
}