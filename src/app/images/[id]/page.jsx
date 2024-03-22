"use client";
import LoadingSpinner from '@/components/LoadingSpinner';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react'

const SingleImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [singleImageData, setsingleImageData] = useState({})

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

        setsingleImageData(data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData()
  }, []);

  if(loading) {
    return <LoadingSpinner />
  }

  return (
    <div className='my-5'>
      <div className="container">
        <h3 className='my-5 text-3xl font-bold text-white'>{singleImageData.title}</h3>
        
        <img src={singleImageData.image} alt={singleImageData.title} className='object-cover w-full' />
        <div>
          {
            singleImageData.more_image?.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.title} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SingleImage