import { useState } from "react";
export default function Player({Intialname,symbol,isActive,onchangename}){
    const[Playername,SetPlayerName]=useState(Intialname);
    const[IsEditing,SetIsEditing]= useState(false);
    function HandleEditClick(){
        SetIsEditing((editing)=>!editing);  
       if(IsEditing) {onchangename(symbol,Playername);}
    }
    function handleChange(event){
        SetPlayerName(event.target.value)
    }
    let EditableName=<span className="player-name">{Playername}</span>
    if(IsEditing){
        EditableName=<input type ="text" required value={Playername} onChange={handleChange}/>
    }
    return(
        <li className={isActive?'active':undefined}>
            <span className="player">
           {EditableName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={HandleEditClick}>{IsEditing?"Save":"Edit"}</button>
          </li>
    );
}