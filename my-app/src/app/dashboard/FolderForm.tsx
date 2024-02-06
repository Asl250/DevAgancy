'use client'
import { getXataClient } from '@/xata';
import { revalidatePath } from 'next/cache';
import React, { useRef } from 'react'


export default function FolderForm({handlecreateFolder} : {handlecreateFolder : 
(formData : FormData) => void }) {


    const ref = useRef<HTMLFormElement>(null)

  return (
    <>
        <form action={(formData) =>{
            handlecreateFolder(formData)
            ref.current?.reset();
            }} ref={ref}>
            <div className='drop-shadow-2xl items-center flex justify-center mt-5'>
                <label htmlFor="name" aria-label='New folder'/>
                <input type="text" name='name' id='name' placeholder='      Enter your email address' className='w-[250px] h-[50px] text-[#8A7F7B] rounded-md' />
                <button className='px-[20px] py-[11px] bg-[#FF733B] rounded-md text-white text-xl'>Subscribe</button>
            </div>
        </form>
  
    </>
  
  )
}
