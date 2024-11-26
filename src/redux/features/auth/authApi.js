import { apiSlice } from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints:builder=>({
        registration : builder.mutation({
          query:(data)=>({
            url:"/register",
            method:"POST",
            body:data
          })
        }),
        login : builder.mutation({
          query:(data)=>({
            url:"/login",
            method:"POST",
            body:data
          })
        })
    })
})

export const {useRegistrationMutation,useLoginMutation} = authApi