import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faLocationDot, faBuildingColumns, faMap } from '@fortawesome/free-solid-svg-icons'

const StudentInfo = ({ id, studentid, fullname, fullflname, fullminame, dob, address1, address2, city, state, zip, degree, degreecredits, residency }) => {
  return (
    <>
        <div className="border-solid borderbottom-pbsc-darkgreen">
            <h2 className="text-pbsc-darkgreen text-2xl font-semibold p-1">
                <FontAwesomeIcon icon={ faAddressCard } className="fa-regular fa-address-card text-pbsc-gold mr-3" />
                Student Info
            </h2>
        </div>
        <div className="m-6">
            <p>Name: { fullflname }</p>
            <p>Student ID: { studentid }</p>
            <p>Date of Birth: { dob }</p>
        </div>
        <div className="border-solid borderbottom-pbsc-darkgreen p-1">
            <h2 className="text-pbsc-darkgreen text-2xl font-semibold">
            <FontAwesomeIcon icon={ faLocationDot } className="fa-regular fa-address-card text-pbsc-gold mr-3" />
                Address
            </h2>
        </div>
        <div className="m-6">
            <p>{ address1 }</p>
            <p>{ address2 }</p>
            <p>{ city }, {state} { zip }</p>
            <p className="mt-3">Residency Status: { residency }</p>
        </div>
        <div className="border-solid borderbottom-pbsc-darkgreen p-1">
            <h2 className="text-pbsc-darkgreen text-2xl font-semibold">
            <FontAwesomeIcon icon={ faBuildingColumns } className="fa-regular fa-address-card text-pbsc-gold mr-3" />
                Major
            </h2>
        </div>
        <div className="m-6">
            <p>{ degree }</p>
            <p>Required Credits: { degreecredits }</p>
        </div>
    </>
  )
}

export default StudentInfo