import Hello from "@/components/Hello";
import React, {useEffect} from "react";
import Cookies from "js-cookie";

const contactstart = () => {

    useEffect(() => {
        // if (Cookies.get("pageAllowed") === 2 && localStorage.getItem("pageAllowed") === 2) {
        //     alert("welcome to company page")
        // } else {
        //     window.location.href = "/"
        // }
        const cook = Cookies.get("pageAllowed")
        const local = localStorage.getItem("pageAllowed")
        console.log(cook)
        console.log(local)
        if (cook === "3" && local === "3") {
            console.log("welcome to contact start page")
        } else {
            window.location.href = "/"
        }
    }, [])

    return (
        <div>
            <Hello/>
        </div>
    )
}

export default contactstart