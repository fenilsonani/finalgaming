import ContactUs from "@/components/ContactUs";
import {useEffect, useState} from "react";
import ErrorPage from "@/components/ErrorPage";
import Cookies from "js-cookie";

const contact = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     const cook = Cookies.get("pageAllowed")
    //     const local = localStorage.getItem("pageAllowed")
    //     console.log(cook)
    //     console.log(local)
    //     if (cook === "5" && local === "5") {
    //         console.log("welcome to company page")
    //     } else if (cook === "error" && local === "error") {
    //         setError(true)
    //     } else {
    //         window.location.href = "/"
    //     }
    // }, [])


    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSuccess = () => {
        setSuccess(true)
    }

    if (success) {
        return <div className={"flex flex-col items-center justify-center h-screen"}>
            <img
                src={"/success.svg"}
            />
            <h1 className={"text-4xl font-bold mt-5"}>Thank you for contacting us</h1>
        </div>
    }

    if (error) {
        return <ErrorPage/>
    }

    return (
        <div>
            <ContactUs
                onSuccess={handleSuccess}
            />
        </div>
    )
}

export default contact