import Hello from "@/components/Hello";
import React, {useEffect} from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import toast from "react-hot-toast";

const contactstart = () => {
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (Cookies.get("pageAllowed") === "3") {
            // alert("welcome to company page")
            console.log("welcome to contact start page")
            toast.success("Welcome to contact start page")
        } else {
            // alert("you are not allowed to access this page")
            console.log("you are not allowed to access this page")
            toast.error("You are not allowed to access this page")
            // window.location.href = "/"
            router.push("/").then(r => console.log(r))
        }
    }, [])

    return (
        <div>
            <Hello/>
        </div>
    )
}

export default contactstart