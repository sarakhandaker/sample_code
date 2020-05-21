import React from 'react'
import {Redirect} from 'react-router-dom'

export default function PrivacyHOC(WrappedComponent) {
        return (
    class PrivacyHOC extends React.Component{
        Authorize=()=>{
            return false
        }
        render(){
            return this.Authorize()? <WrappedComponent {...this.props}/>:<Redirect to= "/noyall"/>
        }
    }
    )
}