import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await fetch("/public/Alldata/jobs.json");
      const data = await res.json();
      setJobs(data);
    })();
  }, []);

  const displayJobs = showAllJobs ? jobs : jobs.slice(0, 4);

  return (
    <div>
      <div className="text-center space-x-2 mt-32 mb-10">
        <h1 className="text-5xl font-bold">Featured Jobs</h1>
        <p className="text-xl mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 m-2">
        {displayJobs.map((job) => {
          return (
            <div
              key={job.id}
              className="card shadow-xl space-y-4 text-center flex flex-col items-center p-8 border"
            >
              <img
                className="w-28"
                src={job.logo}
                alt=""
              />
              <h1 className="font-bold text-2xl">{job.position}</h1>
              <p className="font-semibold">{job.companyName}</p>
              <div className="flex space-x-3">
                <a className="btn border-2 border-sky-500">Remote</a>
                <a className="btn border-2 border-sky-500">Full Time</a>
              </div>
              <div className="flex space-x-3">
                <div className="flex items-center">
                <IoLocationOutline />
                <p>{job.location}</p>
                </div>
                <div className="flex items-center">
                <FaDollarSign />
                <p>Salary: {job.salary}</p>
                </div>
              </div>
              <a className="btn bg-custom-color">View Details</a>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-8">
      <a onClick={() => setShowAllJobs(!showAllJobs)} className="btn bg-custom-color w-36 text-center">Show More</a>
      </div>
    </div>
  );
};

export default Jobs;
