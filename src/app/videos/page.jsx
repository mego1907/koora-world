"use client";
import DefaultCard from '@/components/DefaultCard'
import LoadingSpinner from '@/components/LoadingSpinner';
import { useState, useEffect } from 'react'

const Videos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagesData, setImagesData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("type", 3)

        setLoading(true);
        const res = await fetch(`https://kooora-world.com/api/Home/News`, {
          method: "POST",
          body: formData
        });
        const data = await res.json();

        console.log("data.data :", data.data.items);

        setImagesData(data.data.items);
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
        <h3 className='pb-5 text-4xl font-medium text-white pt-9'>الفيديوهات</h3>

        <div className='grid grid-cols-3 gap-5 py-5'>
          {
            imagesData.map((item) => (
              <DefaultCard {...item} key={item.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Videos