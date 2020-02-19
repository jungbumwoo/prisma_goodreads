import prisma from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createBook: async(_, args) => {
            const { title, author } = args;
            const book = await prisma.createBook({ title, author });
            return book;

        }
    }
}