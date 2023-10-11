import React from 'react'
import BannerTop from './BannerTop'
import axios from "axios";

function ContactUs() {

    const [name, setName] = React.useState('')
    const [qualification, setQualification] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [last_name, setLast_name] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone_no, setPhone_no] = React.useState('')

    const handleSubmit = async () => {
        try {

            const formData = new URLSearchParams();
            formData.append('firstName', name);
            formData.append('qualification', qualification);
            formData.append('location', location);
            formData.append('lastName', last_name);
            formData.append('email', email);
            formData.append('phone', phone_no);

            const response = await axios.post('https://chimera-admin.vercel.app/candidate/add', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            console.log('Response:', response.data);
            alert("Form Submitted Successfully")

        } catch (e) {
            alert("Alert Occur While Submitting Form")
            console.error(e)
        }
    }

    return (
        <>
            <BannerTop/>
            <div className='w-full py-10 bg-["img/contact_us_from.png"] bg-no-repeat bg-right-bottom bg-contain'>
                <div className="container mx-auto px-2">
                    {/*<All_From />*/}
                    <h1 className='text-3xl font-base text-center mb-10'>Please Fill out the details</h1>
                    <p className={"text-center text-sm font-thin mb-10"}>Lorem ipsum dolor sit amet, consectetur</p>
                    <div className='grid grid-cols-1 px-10 md:grid-cols-2 gap-5 md:gap-10 z-50'>
                        <div className={``}>
                            <label htmlFor="name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="name" id="name"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Robart" required/>
                        </div>

                        <div className={``}>
                            <label htmlFor="qualification"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Highest Qualification
                            </label>
                            <input type="qualification" id="qualification"
                                   value={qualification}
                                   onChange={(e) => setQualification(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Bachlors" required/>
                        </div>
                        <div className={``}>
                            <label htmlFor="location"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <input type="location" id="location"
                                   value={location}
                                   onChange={(e) => setLocation(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Robart" required/>
                        </div>
                        <div className={``}>
                            <label htmlFor="last_name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                Name</label>
                            <input type="last_name" id="last_name"
                                   value={last_name}
                                   onChange={(e) => setLast_name(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Bosch" required/>
                        </div>
                        <div className={``}>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.example@gmail.com" required/>
                        </div>
                        <div className={``}>
                            <label htmlFor="phone_no"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                                No</label>
                            <input type="phone_no" id="phone_no"
                                   value={phone_no}
                                   onChange={(e) => setPhone_no(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Eg.Robart" required/>
                        </div>
                    </div>
                    <button type="button"
                            className={"border-black border-2 mx-10 py-2 px-10 rounded mt-5"}
                            onClick={() => {
                                handleSubmit()
                            }}
                    >Submit
                    </button>
                </div>
            </div>
            {/*<div className={"fixed bottom-0 right-0"}>*/}
            {/*          /!*set transparent and set behind them*!/*/}
            {/*          <img src="img/contact_us_from.png" alt="3D Image" className='shadow-xl bg-transparent -z-40'/>*/}
            {/*</div>*/}
        </>
    )
}

export default ContactUs
