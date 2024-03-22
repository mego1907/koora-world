'use client';
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const SingleNew = () => {
  const [singleNewData, setSingleNewData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("news_id", id)

        setLoading(true);
        const res = await fetch(`https://kooora-world.com/api/Home/NewsDetails`, {
          method: "POST",
          body: formData
        });
        const data = await res.json();

        console.log("data.data :", data.data);

        setSingleNewData(data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData()
  }, [id])

  return (
    <div className='my-5'>
      <div className="container">
        <img src={singleNewData.image} alt={singleNewData.title} className='object-cover w-full' />
        <h3 className='my-5 text-3xl font-bold text-white'>{singleNewData.title}</h3>
        <p className="text-base leading-relaxed tracking-wide text-gray-300" dangerouslySetInnerHTML={{ __html: singleNewData.description }}></p>
      </div>
    </div>
  )
}

export default SingleNew