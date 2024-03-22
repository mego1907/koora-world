import React from 'react'

const MatchComposition = () => {
  
  const substitutes = [
    {
      in: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      },
      out: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      }
    },
    {
      in: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      },
      out: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      }
    },
    {
      in: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      },
      out: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      }
    },
    {
      in: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      },
      out: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      }
    },
    {
      in: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      },
      out: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      }
    },
    {
      in: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      },
      out: {
        name: "اسلام بركة",
        centre: "وسط",
        time: 12
      }
    }
  ]

  return (
    <div className="flex gap-5">
      <div className="w-1/2">
        <div className="w-full bg-[#BBD9F4] p-2 text-center pb-2 mb-3">
          <p>التشكيل الاساسي</p>
        </div>

        {/*  */}
        <div className=''>
          <img src="/assets/ground.png" alt="ground" />
        </div>
      </div>

      <div className="w-1/2">
        <div className="w-full bg-[#BBD9F4] p-2 text-center pb-2">
          <p>البدلاء</p>
        </div>

        {/*  */}
        <table className='w-full'>
          <tbody>
            {
              substitutes.map((substitute, i) => (
                <tr className={`flex py-4 ${i % 2 !== 0 ? "bg-[#E3C149]" : ""}`} key={i}>
                  <td className="relative flex flex-row items-center justify-between w-1/2 px-3 text-white after:w-px after:h-5 after:absolute after:bg-white after:left-0 after:top-1/2 after:-translate-y-1/2">
                    <div className='flex flex-col items-center px-1'>
                      <h4>{substitute.in.name}</h4>
                      <p>{substitute.in.centre}</p>
                    </div>

                    <p>{substitute.in.time}</p>
                  </td>
                  <td className="flex flex-row items-center justify-between w-1/2 px-3 text-white">
                    <p>{substitute.out.time}</p>

                    <div className='flex flex-col items-center'>
                      <h4>{substitute.out.name}</h4>
                      <p>{substitute.out.centre}</p>
                    </div>

                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>  
  )
}

export default MatchComposition