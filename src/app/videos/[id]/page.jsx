"use client";
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

const SingleVideoDetails = () => {
  const [singleVideoData, setSingleVideoData] = useState({});
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

        setSingleVideoData(data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData()
  }, [id])

  return (
    <div>
      <div className="container">

      </div>
    </div>
  )
}

export default SingleVideoDetails