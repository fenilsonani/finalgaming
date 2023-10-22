import ContactUs from "@/components/ContactUs";
import {useEffect, useState} from "react";
import ErrorPage from "@/components/ErrorPage";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import {useRouter} from "next/router";

const contact = () => {
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const cook = Cookies.get("pageAllowed")
        console.log(cook)
        if (cook === "5") {
            console.log("welcome to company page")
            toast.success("Welcome to contact page")
        } else if (cook === "error") {
            toast.error("Error Occurred")
            setError(true)
        } else {
            toast.error("You are not allowed to access this page")
            // window.location.href = "/"
            router.push("/")
        }
    }, [])


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