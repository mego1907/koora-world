"use client";
import LoadingSpinner from '@/components/LoadingSpinner';
import { useParams } from 'next/navigation';
import * as apiClient from "../../../api-client";
import { useQuery } from "@tanstack/react-query"; 

const SingleImage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({ queryKey: ['fetchSingleImageData'], queryFn: () => apiClient.fetchSingleImageData(id) })

  if(isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className='my-5'>
      <div className="container">
        <h3 className='my-5 text-3xl font-bold text-white'>{data.title}</h3>
        
        <img src={data?.data?.image} alt={data?.data?.title} className='object-cover w-full min-h-10' />
        <div>
          {
            data?.data?.more_image?.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.id} className='min-h-10' />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SingleImage