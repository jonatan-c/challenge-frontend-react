import React, { useState } from 'react'
import { useCharacterById } from '../hooks/useCharacterById';
import CardCharacter from './CardCharacter';
import CardEpisode from './CardEpisode';
import NavBar from './NavBar';

const ListCharacters = () => {
  
  const [activeSearch, setActiveSearch] = useState(false)

  const { dataCharacterL , characterByNameL, arrayEpisodeL, prevPageL, nextPageL, dataCharacterR, characterByNameR, arrayEpisodeR, prevPageR, nextPageR,listEpisodesShared } = useCharacterById(activeSearch);

  const onClickSearch = () => {
    setActiveSearch(!activeSearch)
  }

  return (
     <>
          <div className="w-full h-full bg-[#26282d] text-white">
        <div className="w-full h-full  flex flex-col scroll ">
          <NavBar
            dataCharacterL={dataCharacterL}
            prevPageL={prevPageL}
            nextPageL={nextPageL}
            onClickSearch={onClickSearch}
            dataCharacterR={dataCharacterR}
            prevPageR={prevPageR}
            nextPageR={nextPageR}
          />
          <div className="w-[100%] h-[100%] flex-wrap flex flex-row  pt-44 lg:pt-20 overflow-x-scroll lg:overflow-hidden scroll">
            <div className="lg:flex flex flex-nowrap  flex-row lg:flex-row lg:flex-wrap justify-start content-start w-[100%] lg:w-[50%]  pt-3  overflow-x-scroll   lg:overflow-x-hidden scroll lg:pl-10">
              {
                characterByNameL.map((character: any) => (
                  <CardCharacter key={character.id} character={character} />
                ))
              }
            </div>

            <div className="lg:flex flex flex-nowrap  flex-row lg:flex-row lg:flex-wrap justify-start lg:justify-end content-start w-[100%] lg:w-[50%]  pt-3  overflow-x-scroll   lg:overflow-x-hidden scroll lg:pr-10 ">
              {characterByNameR.map((character: any) => (
                <CardCharacter key={character.id} character={character} />
              ))}
            </div>
          </div>
        </div>

        <div className="  lg:w-[100%] flex-wrap   flex lg:flex-row justify-between   ">
          <div className="overflow-x-scroll  lg:w-[33%] w-full lg:inline-block rounded-md  border-2   lg:overflow-x-hidden">
            <h2 className="pl-2 py-4 text-xs md:text-base truncate ... lg:overflow-x-hidden">
              {dataCharacterL?.name} - Only Episodes{" "}
            </h2>

            <div className=" lg:w-[100%] w-[100%] flex flex-nowrap flex-row  lg:inline-block   overflow-x-scroll lg:overflow-x-hidden  ">
              <CardEpisode
                arrayEpisodeL={arrayEpisodeL}
                activeSearch={activeSearch}
              />
            </div>
          </div>
          <div className="overflow-x-scroll lg:w-[33%] w-full lg:inline-block rounded-md  border-2 lg:overflow-x-hidden ">
            <h2 className="pl-2 py-4 text-xs md:text-base truncate ...  lg:overflow-x-hidden">
              {dataCharacterL?.name} & {dataCharacterR?.name} - Shared Episodes{" "}
            </h2>
            <div className="lg:w-[100%] w-[100%] flex flex-nowrap flex-row  lg:inline-block   overflow-x-scroll lg:overflow-x-hidden  ">
              <CardEpisode
                arrayEpisodeL={listEpisodesShared}
                activeSearch={activeSearch}
              />
            </div>
          </div>
          <div className="overflow-x-scroll lg:w-[33%] w-full lg:inline-block rounded-md  border-2 lg:overflow-x-hidden  ">
            <h2 className="pl-2 py-4 text-xs md:text-base truncate ... lg:overflow-x-hidden">
              {dataCharacterL?.name} - Only Episodes{" "}
            </h2>
            <div className="lg:w-[100%] w-[100%] flex flex-nowrap flex-row  lg:inline-block   overflow-x-scroll lg:overflow-x-hidden  ">
              <CardEpisode
                arrayEpisodeL={arrayEpisodeR}
                activeSearch={activeSearch}
              />
            </div>
          </div>
        </div>
      </div>
     </>
  )
}

export default ListCharacters