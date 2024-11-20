const klase_x = 'x'
const klase_o = 'circle'

/*
0 1 2
3 4 5
6 7 8
*/

const uzvaras_nosacijumi = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const visi_laucini = document.querySelectorAll('.cell')
const rezultatu_logs = document.querySelector('#resultBox')
const rezultatu_pazinojums = document.querySelector('.resultInfo')
const punkti_logs = document.querySelector('.punkti')
const atjaunot_poga = document.querySelector('#restartButton')
const attelot_speletaju = document.querySelector('.display')
let speletajs_O

sakt_speli()

function sakt_speli(){
    rezultatu_logs.classList.remove('show')
    speletajs_O = false
    visi_laucini.forEach(laucins =>{
        laucins.classList.remove(klase_x)
        laucins.classList.remove(klase_o)
        laucins.addEventListener('click', lietotaja_darbiba, {once: true})
    })
}

function lietotaja_darbiba(klikskis){
    const laucins = klikskis.target
    const aktivais_speletajs = speletajs_O ? klase_o : klase_x
    atzimet_laucinu(laucins, aktivais_speletajs)
    if(parbaudit_uzvaru(aktivais_speletajs)){
        beigt_speli(false)
    }else if(neizkirts()){
        beigt_speli(true)
    }else{
        mainit_speletaju()
    }
}

function atzimet_laucinu(laucins, aktivais_speletajs){
    laucins.classList.add(aktivais_speletajs)
}

function mainit_speletaju(){
    speletajs_O = !speletajs_O
    attelot_speletaju.innerText = `${speletajs_O ? "0" : 'X'}`
}

function krasu_maina(){
    if(`${speletajs_O == "0"}`){
        body.style.color = "#1c2c1a"
    }else body.style.color = "1a252c"
}

//iziet visam cauri un parbauda vai nosacijumi sakrit ar masiva esosajiem
function parbaudit_uzvaru(aktivais_speletajs){
    return uzvaras_nosacijumi.some(nosacijums =>{
        return nosacijums.every(index => {
            return visi_laucini[index].classList.contains(aktivais_speletajs)
        })
    })
}
 //parbauda vai visi laucini ir aizpilditi
function neizkirts(){
    return [...visi_laucini].every(laucins => {
        return laucins.classList.contains(klase_x) || laucins.classList.contains(klase_o)
    })
}

function skaitit_punktus(){
    if(speletajs_O = "0"){
        y+=1
    }else
        x+=1
}

function beigt_speli(neizkirts){
    if(neizkirts){
        rezultatu_pazinojums.innerText = "Neizšķirts rezultāts!"
    }else{
        rezultatu_pazinojums.innerText = `Spēlētājs ${speletajs_O ? "0" : 'X'} uzvarēja!`
    }

    rezultatu_logs.classList.add('show')
}

function izmet(){
    const kopaUzvaras = [add.speletajs_O]
    rezultatu_pazinojums.innerText = `Spēlētājs ${speletajs_O ? "0" : 'X'} uzvarēja!`
}

atjaunot_poga.addEventListener('click', sakt_speli)


