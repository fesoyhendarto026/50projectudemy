// fungsi quary adalah untuk mengambil // semua jenis tag dan menjadikannya satu pack, dan kalo tak pakea all nanti hanya memilih yang pertama
const panels = document.querySelectorAll ('.panel')

// console.log(panels) untuk ngecek query saelector node list
panels.forEach((panel) =>{
    panel.addEventListener('click', ()=>{  
        removeActiveClasses()
        panel.classList.add("active")
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

