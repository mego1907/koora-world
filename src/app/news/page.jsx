"use client";
import DefaultCard from '@/components/DefaultCard'
import LoadingSpinner from '@/components/LoadingSpinner';
import React, { useEffect, useState } from 'react'

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("type", 1)

        const res = await fetch(`https://kooora-world.com/api/Home/News`, {
          method: "POST",
          body: formData
        });
        const data = await res.json();

        console.log("data.data :", data.data.items);

        setNewsData(data.data.items);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }


  return (
    <div>
      <div className="container">
        <h3 className='pb-5 text-4xl font-medium text-white pt-9'>الأخبار</h3>

        <div className='grid grid-cols-3 gap-5 py-5'>
          {
            newsData.map(({ image, title, id, type_string }) => {
              return (
                <DefaultCard image={image} title={title} id={id} key={id} type_string={type_string} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default News