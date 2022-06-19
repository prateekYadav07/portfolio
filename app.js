const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransitions(){

    // active button animation
    for(let i=0 ; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', () => { 
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove("active-btn")
            sectBtn[i].classList.add('active-btn')
        })
    }

    //active section
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove the selected from the other btns
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove('active')
            // })
            // e.target.classList.add('active')

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')

        }
    })
}

pageTransitions()