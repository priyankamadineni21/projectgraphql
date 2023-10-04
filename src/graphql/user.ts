import { objectType } from "nexus";

export const UserType = objectType({
    name:"User",
    definition(t){
        t.nonNull.int("id"),
        t.nonNull.string("name"),
        t.nonNull.float("price");
        t.nonNull.string("email");
    }
})