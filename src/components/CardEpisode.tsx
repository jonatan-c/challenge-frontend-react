import React, { useEffect } from 'react'
import { useEpisodeByName } from '../hooks/useEpisodeByName';

const CardEpisode = ({ arrayEpisodeL ,activeSearch }: any) => {
  const { episodeNames  } =  useEpisodeByName(arrayEpisodeL,activeSearch);

  return (
    <>
 
      {activeSearch &&
        (episodeNames?.length > 1 ? (
          episodeNames?.map((episode: any) => (
            <div
              key={episode.id}
              className="pl-3 text-white   bg-[#26282d] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-2"
            >
              <div className="flex flex-row justify-start content-center items-center">
                <p className="px-1 text-xs truncate ...">{episode.name}</p>
                {"-"}
                <p className="px-1 text-xs truncate">{episode.episode}</p>
                {"-"}
                <p className="px-1 text-xs truncate">{episode.air_date}</p>
              </div>
            </div>
          ))
        ) : ( 

          <div className="pl-3 text-white   bg-[#26282d] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-2">
            <div className="flex flex-row justify-start content-center items-center">
              <p className="px-1 text-xs">{episodeNames.name}</p>
              
              <p className="px-1 text-xs truncate">{episodeNames.episode}</p>
            
              <p className="px-1 text-xs truncate">{episodeNames.air_date}</p>
            </div>
          </div>
            )
          
        )
        
        }
    </>
  );
};

export default CardEpisode;