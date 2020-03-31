import React, {useState} from "react";
import Treasures from './treasures'

function Start(){


    const [pearls, setPearls] = useState({
      verses: "",
      scripture: "",
      gem: "",
      faith: "",
      application: "",
      help: "",
      jehovah: "",
    })

    const {verses, scripture, gem, faith, application, help, jehovah} = pearls

      function makePearls(event){
          const item = event.target.value
          const itemName = event.target.name
          setPearls(nothing => ({...nothing, [itemName]: item}))
          console.log(pearls)
      }

      function makeStorage(event){
        if(localStorage.getItem('pearl')){
          const currentPearls = JSON.parse(localStorage.getItem('pearl'))
          currentPearls.push(pearls)
          localStorage.setItem('pearl', JSON.stringify(currentPearls))
        } else{
            localStorage.setItem('pearl', JSON.stringify([pearls]))
          }
        event.preventDefault()

      }



      






    return (
        <div>
            <center>
                <form onSubmit={makeStorage}>
                    <div className="card" style={{margin: "30px"}}>
                        <textarea onChange={makePearls} value={verses} className="margin" name="verses" id="verses" placeholder="verses"></textarea>
                        <textarea onChange={makePearls} value={scripture} className="margin" name="scripture" id="scripture" placeholder="scripture"></textarea>
                        <textarea onChange={makePearls} value={gem} className="margin" name="gem" id="gem" placeholder="gem"></textarea>
                        <textarea onChange={makePearls} value={faith} className="margin" name="faith" id="faith" placeholder="faith"></textarea>
                        <textarea onChange={makePearls} value={application} className="margin" name="application" id="application" placeholder="application"></textarea>
                        <textarea onChange={makePearls} value={help} className="margin" name="help" id="help" placeholder="help"></textarea>
                        <textarea onChange={makePearls} value={jehovah} className="margin" name="jehovah" id="jehovah" placeholder="jehovah"></textarea>
                        <button   type="submit" name="add">Add a card</button>
                    </div>

                </form>

            </center>
        </div>
    )
}

export default Start