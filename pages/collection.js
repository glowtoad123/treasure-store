import React, {useState} from 'react'
import Treasures from './treasures'
import Topbar from './topbar'
import Items from './items'


function Collection(){

    const newPearls = JSON.parse(localStorage.getItem('pearl'))
    const [appearance, setAppearance] = useState(false)
    const [siteaddress, setsiteaddress] = useState("")

    function revealfood(event){
        if(event.target.value === "reveal"){
        const revealantElements = [
            event.target.parentElement.children[1],
            event.target.parentElement.children[2],
            event.target.parentElement.children[3],
            event.target.parentElement.children[4],
            event.target.parentElement.children[5],
            event.target.parentElement.children[6],
        ]
        console.log(event.target.parentElement.children[1].style.display)
        setAppearance((exists) => {return !exists})
        !appearance ? revealantElements.map((eachOne) => {return eachOne.style.display = "inline-block" }) : revealantElements.map((eachOne) => {return eachOne.style.display = "none" })
        }/* else if(event.target.value === "edit"){
            const part1 = '/post?title=$'
            const part2 = event.target.parentElement.children[0].innerText
            const whole = part1 + part2
            setsiteaddress(whole)
        }*/
    }

    const [info, setInfo] = useState({
        verses: "",
        scripture: "",
        gem: "",
        faith: "",
        application: "",
        help: "",
        jehovah: "",
    })

    function makesiteaddress(event){
        /*const part1 = "/post?title=$"
        const part2 = event.target.parentElement.children[7].innerText
        const whole = part1 + part2
        const divs = document.getElementsByTagName("div")
        //const divLocation = divs.filter(part => event.target.parent === part)
        //console.log(divLocation)
        setsiteaddress(whole)*/
        setInfo({
               verses: event.target.parentElement.children[0].innerText,
            scripture: event.target.parentElement.children[1].innerText,
                  gem: event.target.parentElement.children[2].innerText,
                faith: event.target.parentElement.children[3].innerText,
          application: event.target.parentElement.children[4].innerText,
                 help: event.target.parentElement.children[5].innerText,
              jehovah: event.target.parentElement.children[6].innerText,
        })
        const idNum = event.target.parentElement.children[7].innerText
        if(localStorage.getItem('pearlInfo')){
            localStorage.setItem('pearlInfo', JSON.stringify(info))
          } else{
              localStorage.setItem('pearlInfo', JSON.stringify(info))
            }

        if(localStorage.getItem('pearlId')){
            localStorage.setItem('pearlId', idNum)
          } else{
              localStorage.setItem('pearlId', idNum)
            }
    }
    console.log(newPearls[0])
    const [list, setList] = useState(newPearls)


    function deleteCard(id){
        setList((selected) => {
            console.log(selected)
            console.log(id)
            return selected.filter((list, index) => {return index !== id})
        })
        console.log(list)
        localStorage.setItem('pearl', JSON.stringify(list))
    }







    return(
        <div>
            <Topbar />
            {/*{Treasures.map((card, index) => {return <Items key={index} onClick={revealfood} verses={card.verse} scripture={card.scripture} gem={card.gem} faith={card.faith} application={card.application} help={card.help} jehovah={card.jehovah}/>})}*/}
            {list.map((card, index) => {return <Items deleteCard={deleteCard} makeaddress={makesiteaddress} position={index} url={siteaddress} onClick={revealfood} verses={card.verses} scripture={card.scripture} gem={card.gem} faith={card.faith} application={card.application} help={card.help} jehovah={card.jehovah}/>})}
      
        </div>
    )
}



export default Collection