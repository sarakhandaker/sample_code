import React from 'react'
import Student from './Student'
import LoaderHOC from '../HOC/LoaderHOC'
import PrivacyHOC from '../HOC/PrivacyHOC'

function StudentContainer(props) {
  // console.log("Student Container", props)
  return <div>
     {
       props.students.map( (student, index) => (
         <Student student={student} key={index}/>
       ))
     }
  </div>
}

export default PrivacyHOC(LoaderHOC(StudentContainer));