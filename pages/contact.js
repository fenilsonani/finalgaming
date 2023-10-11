import ContactUs from "@/components/ContactUs";
import {useEffect, useState} from "react";
import ErrorPage from "@/components/ErrorPage";
import Cookies from "js-cookie";

const contact = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
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
        if (cook === "5" && local === "5") {
            console.log("welcome to company page")
        } else if (cook === "error" && local === "error") {
            setError(true)
        } else {
            window.location.href = "/"
        }
    }, [])


    const [error, setError] = useState(false);

    if (error) {
        return <ErrorPage/>
    }

    return (
        <div>
            <ContactUs/>
        </div>
    )
}

export default contact