import React, {useEffect} from 'react'
import Cookies from "js-cookie";
import axios from "axios";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";

function Hello() {

    const [data, setData] = React.useState([{questions: []}]);
    const [userAnswers, setUserAnswers] = React.useState({});

    useEffect(() => {
        setdialogContent("first")
        axios.get("https://chimera-admin.vercel.app/admin/AllquestionSet")
            .then((res) => {
                console.log("res", res.data);
                setData(res.data);
                // Set currentQuestion here after data has been fetched and set
                setCurrentQuestion(res.data[1].questions[currentQuestionIndex]);
                console.log("currentQuestion", currentQuestion)
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, []);

    const checkAnswers = async () => {
        console.log("CheckAnswers", userAnswers);
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let notAnswered = 0;
        data[1].questions.forEach((question, index) => {
            if (userAnswers[question._id] === undefined) {
                notAnswered++;
            } else if (question.type === "shortAnswer") {
                if (question.answer.answer === userAnswers[question._id]) {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            } else {
                // convert string to number
                let answerIndex = parseInt(userAnswers[question._id]);
                if (answerIndex === userAnswers[question._id]) {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            }
        });
        //     set the if the 80% answers are correct then only then set the Cookie and localstorage page allowed = 2
        let correctPercentage = (correctAnswers / correctAnswers + wrongAnswers + notAnswered) * 100;
        console.log("correctPercentage", correctPercentage);
        if (correctPercentage >= 90) {
            await Cookies.set('pageAllowed', "4");
            await localStorage.setItem('pageAllowed', "4");
            alert("You have answered 90% questions correctly. You can move to the next page.")
            window.location.href = "/contactsecond";
        } else {
            alert("You have not answered 90% questions correctly. Please try again.");
        }
    };
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [currentQuestion, setCurrentQuestion] = React.useState({});
    const [dialogContent, setdialogContent] = React.useState("first");
    // Render the current question using the UI you provided
    const renderCurrentQuestion = () => (
            <div className='bg-white flex flex-col md:flex-row items-center justify-evenly'>
                <div className='w-full py-4 flex justify-between md:hidden'>
                    <div className='text-4xl flex items-end font-bold'>
                        <span>{currentQuestionIndex + 1}</span>
                        <span
                            className='text-xl'>/</span>
                        <span className='text-base'>{
                            data[0].questions.length
                        }</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p>
                            <span className={"font-bold"}>
                            {
                                currentQuestionIndex + 1
                            }</span> - Answered</p>
                        <p>
                            <span className={"font-bold"}>{
                                currentQuestionIndex + 1
                            }</span> - Questions
                        </p>
                    </div>
                </div>
                <div className={'w-[68%] py-4'}>
                    <h3>
                        {currentQuestion && currentQuestionIndex + 1}.{" "}
                        {currentQuestion && currentQuestion.text}
                    </h3>
                    {
                        currentQuestion.type === "shortAnswer" ?
                            <input
                                id={`option-${0}`}
                                type="text"
                                value={userAnswers[currentQuestion._id] || ""}
                                onChange={(e) => setUserAnswers({
                                    ...userAnswers,
                                    [currentQuestion._id]: e.target.value
                                })}
                                name="questionOption"
                                className={"outline-0 w-full border-2 p-2 rounded mt-2"}
                            />
                            :
                            <ul className="w-full text-sm font-medium mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {
                                    currentQuestion.options.map((option, index) => (
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                                            key={index}>
                                            <div className="flex items-center pl-3">
                                                <input
                                                    id={`option-${index}`}
                                                    type="radio"
                                                    value={index}
                                                    checked={userAnswers[currentQuestion._id] === index}
                                                    onChange={() => {
                                                        console.log("Selected Option Index:", index);
                                                        setUserAnswers({
                                                            ...userAnswers,
                                                            [currentQuestion._id]: index
                                                        });
                                                    }}
                                                    name="questionOption"
                                                />
                                                <label htmlFor={`option-${index}`}
                                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    {option.text}
                                                </label>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                    }
                    <div className={'flex justify-between py-3'}>
                        {
                            currentQuestionIndex > 0 &&
                            <button type="button"
                                    className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800"
                                    onClick={() => {
                                        setCurrentQuestionIndex(prev => prev - 1)
                                        setCurrentQuestion(data[1].questions[currentQuestionIndex - 1]);
                                    }}>Prev
                            </button>
                        }
                        {
                            currentQuestionIndex < data[1].questions.length - 1 &&
                            <button type="button"
                                    className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800"
                                    onClick={() => {
                                        setCurrentQuestionIndex(prev => prev + 1);
                                        setCurrentQuestion(data[1].questions[currentQuestionIndex + 1]);
                                    }}
                            >
                                Next
                            </button>
                        }
                    </div>
                    <div className={"flex md:hidden flex-col justify-center items-center"}>
                        <button type="button"
                                onClick={checkAnswers}
                                className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Submit
                        </button>
                    </div>
                </div>
                <div className='w-[25%] border-l-2 hidden md:flex flex-col justify-between py-4'>
                    <div className='text-center'>
                        <h3 className='text-4xl font-bold'>{currentQuestionIndex + 1} <span
                            className='text-xl'>/</span><span className='text-[20px]'>{
                            data[0].questions.length
                        }</span></h3>
                        {/* You can modify these counts based on your logic */}
                        <p>{
                            currentQuestionIndex + 1
                        } answered</p>
                        <p>{
                            currentQuestionIndex + 1
                        }
                            Questions
                        </p>
                    </div>
                    <div className='text-center'>
                        <button type="button"
                                onClick={checkAnswers}
                                className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    ;

    // const renderCurrentQuestion = () => (
    //     <div className='bg-white flex flex-col md:flex-row items-center justify-evenly'>
    //         <div className='w-[3%] py-4 hidden md:block'>
    //             <p>{currentQuestionIndex + 1}.</p>
    //         </div>
    //         <div className='w-full py-4 flex justify-between md:hidden'>
    //             <div className='text-4xl flex items-end font-bold'>
    //                 <span>{currentQuestionIndex + 1}</span>
    //                 <span
    //                     className='text-xl'>/</span>
    //                 <span className='text-base'>{
    //                     data[0].questions.length
    //                 }</span>
    //             </div>
    //             <div className='flex flex-col items-center'>
    //                 <p>
    //                         <span className={"font-bold"}>
    //                         {
    //                             currentQuestionIndex + 1
    //                         }</span> - Answered</p>
    //                 <p>
    //                         <span className={"font-bold"}>{
    //                             currentQuestionIndex + 1
    //                         }</span> - Questions
    //                 </p>
    //             </div>
    //         </div>
    //         <div className={'md:w-[68%] w-full py-4'}>
    //             <h3>{currentQuestion && currentQuestion.text}</h3>
    //             {
    //                 currentQuestion.type === "shortAnswer" ?
    //                     <input
    //                         id={`option-${0}`}
    //                         type="text"
    //                         value={userAnswers[currentQuestion._id] || ""}
    //                         onChange={(e) => setUserAnswers({
    //                             ...userAnswers,
    //                             [currentQuestion._id]: e.target.value
    //                         })}
    //                         name="questionOption"
    //                         className={"outline-0 w-full border-2 p-2 rounded mt-2"}
    //                     />
    //                     :
    //                     <ul className="w-full text-sm font-medium mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    //                         {
    //                             currentQuestion.options.map((option, index) => (
    //                                 <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
    //                                     key={index}>
    //                                     <div className="flex items-center pl-3">
    //                                         <input
    //                                             id={`option-${index}`}
    //                                             type="radio"
    //                                             value={index}
    //                                             checked={userAnswers[currentQuestion._id] === index}
    //                                             onChange={() => {
    //                                                 console.log("Selected Option Index:", index);
    //                                                 setUserAnswers({
    //                                                     ...userAnswers,
    //                                                     [currentQuestion._id]: index
    //                                                 });
    //                                             }}
    //                                             name="questionOption"
    //                                         />
    //                                         <label htmlFor={`option-${index}`}
    //                                                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    //                                             {option.text}
    //                                         </label>
    //                                     </div>
    //                                 </li>
    //                             ))
    //                         }
    //                     </ul>
    //             }
    //             <div className={'flex justify-between py-3'}>
    //                 {
    //                     currentQuestionIndex > 0 &&
    //                     <button type="button"
    //                             className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800"
    //                             onClick={() => {
    //                                 setCurrentQuestionIndex(prev => prev - 1)
    //                                 setCurrentQuestion(data[0].questions[currentQuestionIndex - 1]);
    //                             }}>Prev
    //                     </button>
    //                 }
    //                 {
    //                     currentQuestionIndex < data[0].questions.length - 1 &&
    //                     <button type="button"
    //                             className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800"
    //                             onClick={() => {
    //                                 setCurrentQuestionIndex(prev => prev + 1);
    //                                 setCurrentQuestion(data[0].questions[currentQuestionIndex + 1]);
    //                             }}
    //                     >
    //                         Next
    //                     </button>
    //                 }
    //             </div>
    //             <div className={"flex md:hidden flex-col justify-center items-center"}>
    //                 <button type="button"
    //                         onClick={checkAnswers}
    //                         className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Submit
    //                 </button>
    //             </div>
    //         </div>
    //         <div className='w-[25%] border-l-2 hidden md:flex flex-col justify-between py-4'>
    //             <div className='text-center'>
    //                 <h3 className='text-4xl font-bold'>{currentQuestionIndex + 1} <span
    //                     className='text-xl'>/</span><span className='text-[20px]'>{
    //                     data[0].questions.length
    //                 }</span></h3>
    //                 {/* You can modify these counts based on your logic */}
    //                 <p>{
    //                     currentQuestionIndex + 1
    //                 } answered</p>
    //                 <p>{
    //                     currentQuestionIndex + 1
    //                 }
    //                     Questions
    //                 </p>
    //             </div>
    //             <div className='text-center'>
    //                 <button type="button"
    //                         onClick={checkAnswers}
    //                         className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Submit
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // )


    if (!data[1]) {
        return <div>Loading...</div>; // or some loading spinner
    }
    const first = () => {
        return (
            <>
                <div className={"div flex flex-col justify-between"}>
                    <h1>
                        Please attend the quiz to move on to the next page.
                    </h1>
                    <img src={"/da.png"} className={"self-center"}/>
                    <div className={"flex justify-between px-10"}>
                        <button className={"border-2 bg-white px-4 py-2 rounded-lg"}>
                            Cancel
                        </button>
                        <button className={"border-white bg-black text-white px-4 py-2 rounded-lg"}
                                onClick={() => {
                                    setdialogContent("second")
                                }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className='w-screen h-screen bg-hello'>
            <div className='opactiy-bg'>
                <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">
                    <h3 className='text-white text-center text-4xl font-bold'>Hello, there</h3>
                    <p className='text-white font-thin py-5'>Please answer the question to move forward</p>
                    <Dialog>
                        <DialogTrigger>
                            <button type="button"
                                    className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-white  focus:outline-none text-[#414141] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Start Now
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            {
                                dialogContent === "first" ? first() : renderCurrentQuestion()
                            }
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default Hello
