import Hello from "@/components/Hello";
import React, {useEffect} from "react";
import Cookies from "js-cookie";

const contactstart = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (Cookies.get("pageAllowed") === "3") {
            // alert("welcome to company page")
            console.log("welcome to contact start page")
        } else {
            // alert("you are not allowed to access this page")
            console.log("you are not allowed to access this page")
            window.location.href = "/"
        }
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