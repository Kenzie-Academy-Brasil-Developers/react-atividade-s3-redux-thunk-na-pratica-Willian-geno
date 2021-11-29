import { ADD_COMMENT } from "./actionType";

export const addComment = (updatedUser) => ({
    type: ADD_COMMENT,
    updatedUser,
})