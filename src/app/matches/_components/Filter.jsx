import { Modal } from '@/components'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react';
import * as filterApi from "../../../APIs/5-matches-Api"
import { LiaSpinnerSolid } from 'react-icons/lia';

const Filter = ({ 
  openFilter, 
  setOpenFilter, 
  setSelectedTeam, 
  selectedTeam, 
  setSelectedLeague, 
  selectedLeague,
  refetch
}) => {
  // const [selectedLeague, setSelectedLeague] = useState(undefined);
  // const [selectedTeam, setSelectedTeam] = useState(undefined);

  const { data: leagueData } = useQuery({
    queryKey: ["fetchLeagueData"],
    queryFn: filterApi.fetchLeagueData
  })

  const mutation = useMutation({
    mutationKey: ["fetchTeamsData"],
    mutationFn: filterApi.fetchTeamsData
  })


  const handleClose = () => {
    setOpenFilter(false);
  }

  const handleSearch = () => {
    refetch();
    setOpenFilter(false);
  }



  return (
    <Modal 
      open={openFilter} 
      setOpen={setOpenFilter} 
      onClose={handleClose} 
      width='md:w-8/12' 
      overflow={true} 
    >
      <h3 className="text-2xl text-center">فلاتر البحث</h3>

      <div className="flex flex-col h-full">

        <div className="flex flex-col">
          <h3 className='mb-2 text-base font-semibold py-3'>اختار البطولة</h3>

          <div className="flex flex-wrap gap-3">
            {
              leagueData?.data?.map((league) => (
                <button
                  key={league.id}
                  type="button"
                  onClick={() => {
                    setSelectedLeague(league.id);
                    mutation.mutate(league.id)
                  }}
                  className={`p-2 px-4 text-white border border-white rounded-full 
                    ${selectedLeague === league.id ? "bg-teal-500" : ""}
                  `}
                >
                  {league?.name}
                </button>
              ))
            }
          </div>
        </div>

        {
          selectedLeague && (
            <div className="flex flex-col">
              <h3 className='mb-2 text-base font-semibold py-5'>اختار  الفريق</h3>

              <div className="flex flex-wrap h-full gap-3">
                {
                  mutation?.data?.data?.map((team) => (
                    <button
                      key={team?.id}
                      onClick={() => {
                        setSelectedTeam(team.id);
                      }}
                      type="button"
                      className={`p-1 px-2 text-sm
                        ${selectedTeam === team.id ? "bg-teal-500" : ""}
                        text-white border border-white rounded-full
                      `}
                    >
                      {team?.name}
                    </button>
                  ))
                }
              </div>
            </div>
          )
        }

        <div className="flex justify-center gap-2 mt-8 sticky bottom-3">
          <button
            type="submit"
            className='flex items-center justify-center gap-2 px-10 py-2 font-medium bg-green-500 border border-green-500 rounded-md'
            onClick={handleSearch}
          >
            بحث
            {/* {mutation?.isPending && <LiaSpinnerSolid className='animate-spin' />} */}
          </button>
        </div>

      </div>

    </Modal>
  )
}

export default Filter