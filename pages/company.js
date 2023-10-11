import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Truseted from "@/components/Truseted";
import About_Us from "@/components/About_Us";
import Solution from "@/components/Solution";
import Our_Motto from "@/components/Our_Motto";
import Workplace from "@/components/Workplace";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
import {useEffect} from "react";
import Cookies from "js-cookie";

const company = () => {


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
        if (cook === "2" && local === "2") {
            console.log("welcome to company page")
        } else {
            window.location.href = "/"
        }
    }, [])

    return (
        <div>
            <Banner/>
            <div className="mx-10">
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