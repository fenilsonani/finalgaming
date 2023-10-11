import React, {useEffect} from 'react'
import Shooters from './Shooters'
import Upadategame from './Upadategame'
import Season from './Season'
import Know from './Know'
import FooterGam from './FooterGam'
import Hello from './Hello'
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";

function GamePage() {

    const data = [
        {
            "_id": "65263affc25ba663bf5a964e",
            "name": "Question Set ",
            "questions": [
                {
                    "_id": "65263affc25ba663bf5a9652",
                    "text": "Que2",
                    "type": "shortAnswer",
                    "options": [],
                    "answer": {
                        "answer": "ans2",
                        "_id": "65263affc25ba663bf5a9653"
                    },
                    "__v": 0
                }, {
                    "_id": "65263e6c9e9ddf6962928a18",
                    "text": "Que1 Que1",
                    "type": "multipleChoice",
                    "options": [
                        {
                            "text": "opt1.1",
                            "isCorrect": true,
                            "_id": "6526574c2864861ea1c2b761"
                        },
                        {
                            "text": "opt2",
                            "isCorrect": false,
                            "_id": "6526574c2864861ea1c2b762"
                        },
                        {
                            "text": "op3",
                            "isCorrect": false,
                            "_id": "6526574c2864861ea1c2b763"
                        },
                        {
                            "text": "op4",
                            "isCorrect": false,
                            "_id": "6526574c2864861ea1c2b764"
                        }
                    ],
                    "answer": {
                        "answer": "1",
                    },
                    "__v": 2
                }
            ],
            "totalQuestions": 1,
            "createdAt": "11-10-2023"
        }
    ]

    const [userAnswers, setUserAnswers] = React.useState({});


    const checkAnswers = () => {
        console.log("CheckAnswers", userAnswers);
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let notAnswered = 0;
        data[0].questions.forEach((question, index) => {
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
        alert(`Correct Answers: ${correctAnswers}\nWrong Answers: ${wrongAnswers}\nNot Answered: ${notAnswered}`)
    };

    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    // const currentQuestion = data.questions[currentQuestionIndex];
    // const currentQuestion = data[0].questions[currentQuestionIndex];
    const [currentQuestion, setCurrentQuestion] = React.useState(data[0].questions[currentQuestionIndex]);
    const [dialogContent, setdialogContent] = React.useState("first");

    // Render the current question using the UI you provided
    const renderCurrentQuestion = () => (
            <div className='bg-white flex justify-evenly'>
                <div className='w-[3%] py-4'>
                    <p>{currentQuestionIndex + 1}.</p>
                </div>
                {/*            <div className='w-[68%] py-4'>*/}
                {/*                <h3>{currentQuestion.text}</h3>*/}
                {/*                    <input*/}
                {/*                        id={`option-${0}`}*/}
                {/*                        type="text"*/}
                {/*                        value={userAnswers[currentQuestion._id] || ""}*/}
                {/*                        onChange={(e) => setUserAnswers({...userAnswers, [currentQuestion._id]: e.target.value})}*/}
                {/*                        name="questionOption"*/}
                {/*                        className={"outline-0 w-full border-2 p-2 rounded mt-2"}*/}
                {/*                    />*/}

                {/*                    <ul className="w-full text-sm font-medium mt-2 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">*/}
                {/*                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"*/}
                {/*                    key={index}>*/}
                {/*                <div className="flex items-center pl-3">*/}
                {/*                    <input*/}
                {/*                        id={`option-${index}`}*/}
                {/*                        type="radio"*/}
                {/*                        value={index}*/}
                {/*                        checked={userAnswers[currentQuestion._id] === index}*/}
                {/*                        onChange={() => {*/}
                {/*                            console.log("Selected Option Index:", index);*/}
                {/*                            setUserAnswers({...userAnswers, [currentQuestion._id]: index});*/}
                {/*                        }}*/}
                {/*                        name="questionOption"*/}
                {/*                    />*/}
                {/*                    <label htmlFor={`option-${index}`}*/}
                {/*                           className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">*/}
                {/*                        {option.text}*/}
                {/*                    </label>*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*            */}
                {/*        </ul>*/}

                {/*    <div className='flex justify-between py-3'>*/}
                {/*        {currentQuestionIndex > 0 && <button type="button"*/}
                {/*                                             className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800"*/}
                {/*                                             onClick={() => setCurrentQuestionIndex(prev => prev - 1)}>Prev</button>}*/}
                {/*        {currentQuestionIndex < data.length - 1 && <button type="button"*/}
                {/*                                                           className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800"*/}
                {/*                                                           onClick={() => {*/}
                {/*                                                               setCurrentQuestionIndex(prev => prev + 1);*/}
                {/*                                                           }}*/}

                {/*        >Next</button>}*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={'w-[68%] py-4'}>
                    <h3>{currentQuestion.text}</h3>
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
                                        setCurrentQuestion(data[0].questions[currentQuestionIndex - 1]);
                                    }}>Prev
                            </button>
                        }
                        {
                            currentQuestionIndex < data[0].questions.length - 1 &&
                            <button type="button"
                                    className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800"
                                    onClick={() => {
                                        setCurrentQuestionIndex(prev => prev + 1);
                                        setCurrentQuestion(data[0].questions[currentQuestionIndex + 1]);
                                    }}
                            >
                                Next
                            </button>
                        }
                    </div>
                </div>
                <div className='w-[25%] border-l-2 flex flex-col justify-between py-4'>
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

    useEffect(() => {
        setdialogContent("first")
    }, []);

    return (
        <>
            <div className='w-full bg-image'>
                <div className="container mx-auto ">
                    <div className='flex py-5 justify-between'>
                        <div className='flex gap-3'>
                            <img src="img/logo512.png" className="h-8 mr-3" alt="Flowbite Logo"/>
                            <h3 className="self-center tracking-[0.5rem]  text-sm font-semibold whitespace-nowrap text-white">CHIMERA</h3>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img src="img/global.png" alt="global"/>
                            <h3 className='text-white text-sm'>ENGLISH (ASIA)</h3>
                            <img src="img/drop-down.png" alt="dropdown"/>
                        </div>
                    </div>
                    <div className='h-[500px] flex flex-col justify-between items-center py-5'>
                        <img src="img/lets-be.png" alt="text-banner" className='mx-auto max-w-[100%]'/>
                        <Dialog>
                            <DialogTrigger>
                                <button
                                    className='text-white mx-auto text-xl  font-["Orbitron",sans-serif] bg-[#64646436] py-3 px-6 border-2 border-[#f2f2f2]'>Know
                                    More
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
            <Shooters/>
            <Upadategame/>
            <Know/>
            <Season/>
            <FooterGam/>
            <Hello/>
            <div className='w-full bg-hello'>
                <div className='opactiy-bg'>
                    <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">
                        <div className='bgtarnpant py-5 px-8'>
                            <h3 className='text-white text-center text-4xl font-bold'>Hello, there</h3>
                            <p className='text-white font-thin py-2'>Select one pill to reach destination point</p>
                            <div className='flex'>
                                <button type="button"
                                        className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#FF0000] text-white focus:outline-none  rounded-lg   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Start
                                    Now
                                </button>

                                <button type="button"
                                        className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#000AFF] text-white focus:outline-none  rounded-lg  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Start
                                    Now
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            {/*<div className='w-full bg-hello'>*/}
            {/*    <div className='opactiy-bg'>*/}
            {/*        <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">*/}

            {/*            <div className='bg-white flex justify-evenly'>*/}
            {/*                <div className='w-[3%] py-4'>*/}
            {/*                    <p>3.</p>*/}
            {/*                </div>*/}
            {/*                <div className='w-[68%] py-4'>*/}
            {/*                    <h3>Who invented the first electronic computer, and in what year was it invented?</h3>*/}
            {/*                    /!* Chack radio *!/*/}

            {/*                    <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">*/}
            {/*                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">*/}
            {/*                            <div className="flex items-center pl-3">*/}
            {/*                                <input id="list-radio-license" type="radio" value="" name="list-radio"/>*/}
            {/*                                <label htmlFor="list-radio-license"*/}
            {/*                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Johnson*/}
            {/*                                    Huges at 1923-32 </label>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}
            {/*                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">*/}
            {/*                            <div className="flex items-center pl-3">*/}
            {/*                                <input id="list-radio-id" type="radio" value="" name="list-radio"/>*/}
            {/*                                <label htmlFor="list-radio-id"*/}
            {/*                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">John*/}
            {/*                                    Vincent Atanasoff at 1937–42.</label>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}
            {/*                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">*/}
            {/*                            <div className="flex items-center pl-3">*/}
            {/*                                <input id="list-radio-millitary" type="radio" value="" name="list-radio"/>*/}
            {/*                                <label htmlFor="list-radio-millitary"*/}
            {/*                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Robert*/}
            {/*                                    Brown at 1954-34</label>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}
            {/*                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">*/}
            {/*                            <div className="flex items-center pl-3">*/}
            {/*                                <input id="list-radio-passport" type="radio" value="" name="list-radio"/>*/}
            {/*                                <label htmlFor="list-radio-passport"*/}
            {/*                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Charles*/}
            {/*                                    Babbage at 1932 - 23</label>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}

            {/*                    /!* end *!/*/}
            {/*                    <div className='flex justify-between py-3'>*/}

            {/*                        <button type="button"*/}
            {/*                                className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Prev*/}
            {/*                        </button>*/}
            {/*                        <button type="button"*/}
            {/*                                className="text-[#171717] bg-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 md:px-8 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Next*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className='w-[25%] border-l-2   flex flex-col justify-between py-4'>*/}
            {/*                    <div className='text-center'>*/}
            {/*                        <h3 className='text-4xl font-bold'>3 <span className='text-xl'>/</span><span*/}
            {/*                            className='text-[20px]'>5</span></h3>*/}
            {/*                        <p>3 answerd</p>*/}
            {/*                        <p>5 not answerd</p>*/}
            {/*                    </div>*/}
            {/*                    <div className='text-center'>*/}
            {/*                        <button type="button"*/}
            {/*                                className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800">Submit*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default GamePage
