import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Truseted from "@/components/Truseted";
import About_Us from "@/components/About_Us";
import Solution from "@/components/Solution";
import Our_Motto from "@/components/Our_Motto";
import Workplace from "@/components/Workplace";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
import React from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import toast from "react-hot-toast";

const company = () => {
    const router = useRouter()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        if (Cookies.get("pageAllowed") === "2") {
            // alert("welcome to company page")
            console.log("welcome to company page")
            toast.success("Welcome to company page")

        } else {
            // window.location.href = "/"
            router.push("/")
            toast.error("You are not allowed to access this page")
            // alert("you are not allowed to access this page")
            console.log("you are not allowed to access this page")
        }
    }, [])

    return (
        <div>
            <Banner/>
            <div className="mx-0 md:mx-10">
                <Counter/>
                <Truseted/>
                <About_Us/>
                <Solution/>
                <Our_Motto/>
                <Workplace/>
                <Review/>
            </div>
            <Footer/>
        </div>
    )
}

export default company