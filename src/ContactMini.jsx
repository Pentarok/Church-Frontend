import React from 'react'


import { MdEmail, MdCall } from "react-icons/md";
import { FaMapMarkerAlt } from 'react-icons/fa'; // FontAwesome
const ContactMini = () => {
    const contacts = [
        "+254705678934","+254734567890"
      ]
  return (
    <div>
         <h2 className="text-2xl font-bold  pb-2 text-center md:text-left">Contact Us</h2>
              {contacts.map((contact,i)=>
              <div className="flex gap-1  items-center">
              <MdCall color='green' className='w-15 h-15 rounded-full border bg-white '/>
              <p className="pb-1">{contact}</p>
            </div>)}
            <div className="flex gap-1 items-center">
            < FaMapMarkerAlt  />
            <p className="pb-1">Along Wembley road near Bravin barracks</p>
            </div>
           <div className="flex gap-1 items-center">
            <MdEmail />
            <p>info@gloryvine.co.ke</p>
           </div>
    </div>
  )
}

export default ContactMini