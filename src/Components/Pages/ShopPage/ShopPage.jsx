import React from 'react'
import Navbar from './Navbar/Navbar'
import Section_inf from './Section_inf/Section_inf'
import UploadForm from './DataComponent/DataComponent'
export default function ShopPage() {
  return (
    <div>
        <Navbar/>
        <Section_inf/>
        <UploadForm/>
    </div>
  )
}
