import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
       (async()=>{
        const res = await fetch("/public/Alldata/category.json");
        const data = await res.json();
        setCategories(data);
       })() 
    },[])
    return (
        <div className='px-10'>
            <div className="text-center space-x-2 mt-32 mb-10">
                <h1 className="text-5xl font-bold">Job Category List</h1>
                <p className="text-xl mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 m-2">
                {
                    categories.map((category)=>{
                        return <div key={category.id} className="card w-96 shadow-xl space-y-4 text-center flex flex-col items-center p-8 bg-cyan-100">
                            <img className='w-7 bg-sky-100 shadow-2xl' src={category.icon} alt="" />
                            <h1 className='font-bold text-2xl'>{category.title}</h1>
                            <p className="font-semibold">{category.description}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Category;