import {prisma} from "../lib/prisma.js"


export async function getAllCategories() {
    const categories = await prisma.category.findMany({
        orderBy: {
            name: "asc",
        }
    });
    return categories
}