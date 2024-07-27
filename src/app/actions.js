"use server"

import { redirect } from "next/navigation"
import { prisma } from "../../prisma/client"
import { revalidatePath } from "next/cache"

export async function handleSubmitAction(formData) {

    const title = formData.get("title")
    const code = formData.get("code")

    if (!title || !code) {
        return {
            message: "Title and Code are required"
        }
    }
    const savedcodeBin = await prisma.codeBin.create({
        data: {
            title: title,
            code: code
        }
    })
    console.log(savedcodeBin)



    revalidatePath('/')


}


export async function deleteBinAction(id) {
    try {
        await prisma.codeBin.delete({
            where: {
                id: parseInt(id)
            }
        })
    } catch (err) {
        console.log(err)
        throw new Error('Something went wrong while deleting bin')
    } finally {
        revalidatePath('/')
    }




}