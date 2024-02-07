import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner';
import Logos from '@/components/Logos';
import Projects from '@/components/Projects';
import Provide from '@/components/Provide';
import Experiences from '@/components/Experiences';
import { Feedback } from '@/components/Feedback';
import Subscribe from '@/components/Subscribe';
import { getXataClient } from "@/xata"
import FolderForm from "./FolderForm";
import * as z from 'zod';
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { redirect } from 'next/navigation';



const schema = z.object({
    name : z.string().min(5)
})



export default async function Dashboard(){
    const {userId} =  auth()
    const xataClient = getXataClient()
    if(!userId){
        redirect('../')
    }
    const folders = await xataClient.db.folders.filter({
        userId
    }).getMany();
    
    async function createFolder(formData: FormData) {
        'use server'
        const parseForm = schema.parse({
            name : formData.get('name'),
        })
        if(!userId){
            return;
        }


        const newRecord = {...parseForm, userId}

        const xataClient = getXataClient();
        await xataClient.db.folders.create(newRecord)
        revalidatePath('../')
    }

    return(
        <div>
             <div className='bg-[#F4ECE0]'>
                <Navbar/>
                <Banner/>
            </div>
            <div className='bg-white'>
            <Logos/>
            <Projects/>
            <Provide/>
            <Experiences/>
            <Feedback/>
            <Subscribe/>
            </div>
        </div>
    )
}