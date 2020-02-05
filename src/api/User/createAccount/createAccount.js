import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async(_, args) =>{
            const { email, keeplist } = args;
            const user = await prisma.createUser({ email, keeplist});
            return user;
        }
    }
}