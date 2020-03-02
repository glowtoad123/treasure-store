import React from 'react'
import Topbar from '../pages/topbar'




function Post(props){

    const treasures = JSON.parse(localStorage.getItem('pearl'))
    const relevantInfo = JSON.parse(localStorage.getItem("pearlInfo"))
    const treasureId = JSON.parse(localStorage.getItem("pearlId"))
    //treasureId = Number(treasureId)
    console.log(typeOf(treasureId))
    
    //const treasurePearls = {treasures.filter((card, index) => {return })}

    return (
        <div><form method="POST">
        <Topbar />
              <center>
                <div class="card ms-depth-64">
                    <h1 class="ms-depth-64" id="title">{relevantInfo.scripture}</h1>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">VERSES</h2>
                        <textarea class="ms-depth-64"  class="ms-depth-64"   name="verses" id="verses">{relevantInfo.verses}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">SCRIPTURE</h2>
                        <textarea class="ms-depth-64"  class="ms-depth-64"   name="scripture" id="scripture">{relevantInfo.scripture}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">GEM</h2>
                        <textarea class="ms-depth-64"  class="ms-depth-64"   name="gem" id="gem">{relevantInfo.gem}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">FAITH</h2>
                        <textarea class="ms-depth-64"  class="ms-depth-64"   name="faith" id="faith">{relevantInfo.faith}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">APPLICATION</h2>
                        <textarea class="ms-depth-64"  class="ms-depth-64"   name="application" id="application">{relevantInfo.application}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">HELP</h2>
                        <textarea class="ms-depth-64"  class="ms-depth-64"   name="help" id="help">{relevantInfo.help}</textarea>
                    </div>
                    <div class="inputbox">
                        <h2 class="inputTitle ms-depth-64">JEHOVAH</h2>
                        <textarea class="ms-depth-64"  class="ms-depth-64"   name="jehovah" id="jehovah">{relevantInfo.jehovah}</textarea>
                    </div>
                    <button type="submit" name="add">update card</button>
                </div>
            </center>

        </form>
        <p name="id">""</p></div>
        )
}

export default Post