import { Modal } from '@/components'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react';
import * as filterApi from "../../../APIs/5-matches-Api"

const Filter = ({ openFilter, setOpenFilter }) => {
  const [selectedLeague, setSelectedLeague] = useState(undefined);
  const [selectedTeam, setSelectedTeam] = useState(undefined);
  const [selectedPlayer, setSelectedPlayer] = useState(undefined);

  const { data: leagueData } = useQuery({
    queryKey: ["fetchLeagueData"],
    queryFn: filterApi.fetchLeagueData
  })

  const mutation = useMutation({
    mutationKey: ["fetchTeamsData"],
    mutationFn: filterApi.fetchTeamsData
  })

  const playerMutation = useMutation({
    mutationKey: ["fetchTeamsData"],
    mutationFn: filterApi.fetchTeamsData
  })


  const handleClose = () => {
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
          <h3 className='mb-2 text-base font-semibold'>اختار البطولة</h3>

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
              <h3 className='mb-2 text-base font-semibold'>اختار  الفريق</h3>

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

        {
          selectedTeam && (
            <div className="flex flex-col">
              <h3 className='mb-2 text-base font-semibold'>اختار  اللاعب</h3>

              <div className="flex flex-wrap h-full gap-3">
                {
                  mutation?.data?.data?.map((player) => (
                    <button
                      key={player?.id}
                      onClick={() => {
                        setSelectedPlayer(player.id);
                      }}
                      type="button"
                      className={`p-1 px-2 text-sm
                        ${selectedPlayer === player.id ? "bg-teal-500" : ""}
                        text-white border border-white rounded-full
                      `}
                    >
                      {player?.name}
                    </button>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>

    </Modal>
  )
}

export default Filter