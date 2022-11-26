import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';

export default function Id() {
const [searchParams,setSearchParams] = useSearchParams();
const id = searchParams.get('id');
const name = searchParams.get('name')
const designation = searchParams.get('designation')
  return (
    <>
    <div className='details'>
       Employee {id} named {name} works as {designation}
      
    </div>
   
    </>
  )
}
