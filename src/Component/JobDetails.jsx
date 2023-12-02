import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDollarSign } from "react-icons/fa";
import { LuBoomBox } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const JobDetails = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className='h-60 bg-sky-50 flex items-center justify-center'>
            <h1 className="text-2xl font-bold">Job Details page</h1>
            </div>
            <div className="w-full md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 my-10">
                <div className='w-full md:w-9/12 space-y-4'>
                    <p className="font-normal"><span className='font-bold'>Job Description :</span>{data.jobDescription}</p>
                    <p className="font-normal"><span className='font-bold'>Job Responsibility :</span>{data.jobResponsibility}</p>
                    <p className="font-normal"><span className='font-bold'>Educational Requirements :</span>{data.educationalRequirements}</p>
                    <p className="font-normal"><span className='font-bold'>Experiences :</span>{data.experiences}</p>
                </div>
                <div className="card shadow-xl space-y-4 flex flex-col p-8 border bg-sky-50 w-full md:w-5/12">
                    <h3 className="font-bold text-2xl">Job Details</h3>
                    <div className='flex items-center space-x-2'>
                    <FaDollarSign className='text-custom-color text-lg'/>
                        <p><span className='font-bold'>Salary :</span>{data.salary}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                    <LuBoomBox className='text-custom-color text-lg'/>
                        <p><span className='font-bold'>Job Title :</span>{data.jobTitle}</p>
                    </div>
                    <h3>Contact Information</h3>
                    <div className='flex items-center space-x-2'>
                    <FaPhone className='text-custom-color text-lg'/>
                        <p><span className='font-bold'>Phone :</span>{data.contactInformation.phone}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                    <MdOutlineMail className='text-custom-color text-lg'/>
                        <p><span className='font-bold'>Email :</span>{data.contactInformation.email}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                    <IoLocationOutline className='text-custom-color text-lg'/>
                        <p><span className='font-bold'>Location :</span>{data.location}</p>
                    </div>
                    <button className="btn bg-custom-color">Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;