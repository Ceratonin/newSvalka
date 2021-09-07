import * as React from 'react'
import './App'



export interface TymblerType {
    
        name:string,
        type:string,
        disabled?:boolean,
        func?:()=>void,
        loading?:boolean;
        }
const MyPage =(props:TymblerType)=>{

    const func =()=>{
        console.log('Done')
    };

    return(
        <div>
        <input type={props.type} className={props.name} onClick={func}/>
        </div>
    )

}

export default MyPage
