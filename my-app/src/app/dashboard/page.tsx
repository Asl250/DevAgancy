import { getXataClient } from "@/xata"
import FolderForm from "./FolderForm";
import * as z from 'zod';
import { revalidatePath } from "next/cache";


const schema = z.object({
    name : z.string().min(5)
})



export default async function Dashboard(){
    const xataClient = getXataClient()
    const folders = await xataClient.db.folders.getMany();
    
    async function createFolder(formData: FormData) {
        'use server'
        const parseForm = schema.parse({
            name : formData.get('name'),
        })
        const xataClient = getXataClient();
        await xataClient.db.folders.create(parseForm)
        revalidatePath('/')
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <FolderForm handlecreateFolder={createFolder}/>
            {folders.map((folder => (
                <p key={folder.id}>{folder.name}</p>
            )))}
        </div>
    )
}