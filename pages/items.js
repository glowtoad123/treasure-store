//import React from 'react'
import Link from 'next/link'



function Items(props){


    return(
        <div onClick={props.makeaddress} className="card">
            <p className="verses">{props.verses}</p>
            <p style={{display: "none"}} name="scripture" className="inside" id={props.verses}>{props.scripture}</p>
            <p style={{display: "none"}} name="scripture" className="inside" id={props.verses}>{props.gem}</p>
            <p style={{display: "none"}} name="scripture" className="inside" id={props.verses}>{props.faith}</p>
            <p style={{display: "none"}} name="scripture" className="inside" id={props.verses}>{props.application}</p>
            <p style={{display: "none"}} name="scripture" className="inside" id={props.verses}>{props.help}</p>
            <p style={{display: "none"}} name="scripture" className="inside" id={props.verses}>{props.jehovah}</p>
            <p style={{display: "none"}}>{props.position}</p>
            <button value="reveal" key={props.position} id="reveal" onClick={props.onClick} className="reveal">reveal</button>
            <Link href={props.url}><a title="edit" id="edit" className="ms-depth-64">edit</a></Link>

            {/*<p name="cardId" style={{display: "none"}}>{props.verses}</p>*/}
        </div>
    )
}

export default Items