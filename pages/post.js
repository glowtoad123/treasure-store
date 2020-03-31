<<<<<<< HEAD
import React, {useState} from 'react'
import Topbar from '../pages/topbar'
import Link from 'next/link'
import {useRouter} from 'next/router'





function Post(props){


    const router = useRouter()
    const treasures = JSON.parse(localStorage.getItem('pearl'))
    const relevantInfo = JSON.parse(localStorage.getItem("pearlInfo"))
    const treasureIdThing = router.query.title
    console.log(treasures[Number(treasureIdThing)].verses)
    const treasureId = localStorage.getItem("pearlId")
    //treasureId = Number(treasureId)
    const treasureIdNum = Number(treasureId)
    console.log(typeof(treasureIdNum))
    console.log(treasures)
    

    const [newInfo, setNewInfo] = useState({
        verses: treasures[Number(treasureIdThing)].verses,
        scripture: treasures[Number(treasureIdThing)].scripture,
        gem: treasures[Number(treasureIdThing)].gem,
        faith: treasures[Number(treasureIdThing)].faith,
        application: treasures[Number(treasureIdThing)].application,
        help: treasures[Number(treasureIdThing)].help,
        jehovah: treasures[Number(treasureIdThing)].jehovah,
    })

    const {verses, scripture, gem, faith, application, help, jehovah} = newInfo

    function editInfo(event){
        const textValue = event.target.value
        const textName = event.target.name
        setNewInfo(nothing => ({...nothing, [textName]: textValue}))
        console.log(newInfo)
        console.log(treasures[treasureIdNum])
        /*treasures[treasureIdNum] = newInfo
        console.log(treasures)
        localStorage.setItem('pearl', JSON.stringify(treasures))
        event.preventDefault()*/
    }

    

    function replaceInfo(event){
        treasures[treasureIdNum] = newInfo
        localStorage.setItem('pearl', JSON.stringify(treasures))
        alert("This card has been successfully updated")
        event.preventDefault()
    }

    return (
        <div>
        <Topbar />
            <label>WARNING!! Updates automatically as you type</label>
              <center>
                <form onSubmit={replaceInfo}>
                    <div class="card ms-depth-64">
                        <h1 className="ms-depth-64" id="title">{scripture}</h1>
                        <div class="inputbox">
                            <h2 class="inputTitle ms-depth-64">VERSES</h2>
                            <textarea className="ms-depth-64" onChange={editInfo} value={verses}   name="verses" id="verses">{verses}</textarea>
                        </div>
                        <div class="inputbox">
                            <h2 class="inputTitle ms-depth-64">SCRIPTURE</h2>
                            <textarea className="ms-depth-64" onChange={editInfo} value={scripture}   name="scripture" id="scripture">{scripture}</textarea>
                        </div>
                        <div class="inputbox">
                            <h2 class="inputTitle ms-depth-64">GEM</h2>
                            <textarea className="ms-depth-64" onChange={editInfo} value={gem}   name="gem" id="gem">{gem}</textarea>
                        </div>
                        <div class="inputbox">
                            <h2 class="inputTitle ms-depth-64">FAITH</h2>
                            <textarea className="ms-depth-64" onChange={editInfo} value={faith}   name="faith" id="faith">{faith}</textarea>
                        </div>
                        <div class="inputbox">
                            <h2 class="inputTitle ms-depth-64">APPLICATION</h2>
                            <textarea className="ms-depth-64" onChange={editInfo} value={application}   name="application" id="application">{application}</textarea>
                        </div>
                        <div class="inputbox">
                            <h2 class="inputTitle ms-depth-64">HELP</h2>
                            <textarea className="ms-depth-64" onChange={editInfo} value={help}   name="help" id="help">{help}</textarea>
                        </div>
                        <div class="inputbox">
                            <h2 class="inputTitle ms-depth-64">JEHOVAH</h2>
                            <textarea className="ms-depth-64" onChange={editInfo} value={jehovah}   name="jehovah" id="jehovah">{jehovah}</textarea>
                        </div>
                        <button type="submit" name="add">Update</button>
                    </div>
                </form>
            </center>

        <p name="id">""</p></div>
        )
}

=======
import React, {useState} from 'react'
import Topbar from '../pages/topbar'




function Post(props){

    //const treasures = JSON.parse(localStorage.getItem('pearl'))
    const relevantInfo = JSON.parse(localStorage.getItem("pearlInfo"))
    const treasureId = localStorage.getItem("pearlId")
    //treasureId = Number(treasureId)
    const treasureIdNum = Number(treasureId)
    console.log(treasures)
    

    const [newInfo, setNewInfo] = useState({
        verses: relevantInfo.verses,
        scripture: relevantInfo.scripture,
        gem: relevantInfo.gem,
        faith: relevantInfo.faith,
        application: relevantInfo.application,
        help: relevantInfo.help,
        jehovah: relevantInfo.jehovah,
    })

    const {verses, scripture, gem, faith, application, help, jehovah} = newInfo

    function editInfo(event){
        const textValue = event.target.value
        const textName = event.target.name
        setNewInfo(nothing => ({...nothing, [textName]: textValue}))
        event.preventDefault()
    }

    function replaceInfo(){
        treasures[treasureIdNum] = newInfo
        localStorage.setItem('pearl', JSON.stringify(treausres))
    }

    return (
        <div><form onSubmit={replaceInfo}>
        <Topbar />
              <center>
                <div class="card ms-depth-64">
                    <h1 className="ms-depth-64" id="title">{relevantInfo.scripture}</h1>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">VERSES</h2>
                        <textarea className="ms-depth-64" onChange={editInfo} value={verses}   name="verses" id="verses">{relevantInfo.verses}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">SCRIPTURE</h2>
                        <textarea className="ms-depth-64" onChange={editInfo} value={scripture}   name="scripture" id="scripture">{relevantInfo.scripture}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">GEM</h2>
                        <textarea className="ms-depth-64" onChange={editInfo} value={gem}   name="gem" id="gem">{relevantInfo.gem}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">FAITH</h2>
                        <textarea className="ms-depth-64" onChange={editInfo} value={faith}   name="faith" id="faith">{relevantInfo.faith}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">APPLICATION</h2>
                        <textarea className="ms-depth-64" onChange={editInfo} value={application}   name="application" id="application">{relevantInfo.application}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">HELP</h2>
                        <textarea className="ms-depth-64" onChange={editInfo} value={help}   name="help" id="help">{relevantInfo.help}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">JEHOVAH</h2>
                        <textarea className="ms-depth-64" onChange={editInfo} value={jehovah}   name="jehovah" id="jehovah">{relevantInfo.jehovah}</textarea>
                    </div>
                    <button type="submit" name="add">update card</button>
                </div>
            </center>

        </form>
        <p name="id">""</p></div>
        )
}

>>>>>>> 228517d6616031cacc9f0c345768b060a06dbf5a
export default Post