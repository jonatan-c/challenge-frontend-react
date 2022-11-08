import React, { useState } from 'react'
import charactersDB from '../api/characterDB';
import { IEpisode, IGetAllEpisodes } from '../interfaces/responseEpisode';

export const useEpisodeByName = (episodesNumbers: string[] , isOnSearching:boolean ) => {

    const [episodeNames, setEpisodeNames] = React.useState<any>([]);
    const [isLoadingEpisodeNames, setIsLoadingEpisodeNames] = useState<boolean>(true)
    
    const getEpisode= async ( ) => {
        let numbersEpisodesCustom = []
        if (episodesNumbers.length == 1) {
            numbersEpisodesCustom.push(episodesNumbers)
        } else {
            numbersEpisodesCustom = episodesNumbers
        }
        const resp = await charactersDB.get<IEpisode[]>(`/episode/${numbersEpisodesCustom}`);
        setEpisodeNames(resp.data);
        setIsLoadingEpisodeNames(false)
    }

    React.useEffect(() => {
        if(isOnSearching){
            getEpisode();
        }
    }, [ episodesNumbers ,isOnSearching])

  return {
    episodeNames,
    isLoadingEpisodeNames,
  };
}
