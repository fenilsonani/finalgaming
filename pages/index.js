import {Inter} from 'next/font/google'
import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import About_Us from "@/components/About_Us";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import ErrorPage from "@/components/ErrorPage";
import GamePage from "@/components/GamePage";
import Truseted from "@/components/Truseted";
import Solution from "@/components/Solution";
import Our_Motto from "@/components/Our_Motto";
import Workplace from "@/components/Workplace";
import Review from "@/components/Review";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <GamePage/>
        </>
    )
}
