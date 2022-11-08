import React,  { useState } from 'react';
import charactersDB from '../api/characterDB';
import { ICharacter } from '../interfaces/responseCharacter';

 export const useCharacterById = (activeSearch: boolean) => {

   // *************** LEFT ***************
   interface IStateData {
      isLoading: boolean;
      characterInfo: any;
      listCharacterByName: Array<object>;
      listEpisodesWithNumbers: Array<String>;
   }

   const [stateCharacterLeft, setStateCharacterLeft] = useState<IStateData>({
     isLoading: true,
     characterInfo: {},
     listCharacterByName: [],
     listEpisodesWithNumbers: [],
   });
   const [pageLeft, setPageLeft] = useState<number>(1);

   const nextPageL = () => {
     if(!activeSearch) {
       setPageLeft(pageLeft + 1);
     }
   };

   const prevPageL = () => {
      if(!activeSearch) {
        if (pageLeft > 1) {
          setPageLeft(pageLeft - 1);
        } else {
          setPageLeft(1);
        }
      }
   };

   const getDataFromApiL = async (pageLeft: number) => {
     const respDetailsPromise = await charactersDB.get<any>(
       `/character/${pageLeft}`
     );
     let parse = respDetailsPromise.data.name
       .split(" ", 1)
       .toString()
       .toLocaleLowerCase();
     const dataByNamePromise = await charactersDB.get<any>(
       `/character/?name=${parse}`
     );

     let arrayWithNumbers = [];
        for (let i = 0; i < respDetailsPromise.data.episode.length; i++) {
            let item2 = respDetailsPromise.data.episode[i].split("/").slice(-1).pop();
             arrayWithNumbers.push(item2);
        }
 
         
     const [characterDetailsResp, listCharacterByNameResp] =
       await Promise.all([respDetailsPromise, dataByNamePromise]);

     setStateCharacterLeft({
       isLoading: false,
       characterInfo: characterDetailsResp.data,
       listCharacterByName: listCharacterByNameResp.data.results,
       listEpisodesWithNumbers: arrayWithNumbers,
     });
   };

 

   React.useEffect(() => {
     getDataFromApiL(pageLeft);
   }, [pageLeft]);
 

   // *************** RIGHT ***************

   const [stateCharacterRight, setStateCharacterRight] = useState<IStateData>({
     isLoading: true,
     characterInfo: {},
     listCharacterByName: [],
     listEpisodesWithNumbers: [],
   });
   const [pageR, setPageR] = useState(1);

   const nextPageR = () => {
    if(!activeSearch) {
      setPageR(pageR + 1);
    }
   };

   const prevPageR = () => {
    if(!activeSearch) {
      if (pageR > 1) {
        setPageR(pageR - 1);
      } else {
        setPageR(1);
      }
    }
   };

   const getDataFromApiR = async (pageR: number) => {
     const respDetailsPromise = await charactersDB.get<any>(
       `/character/${pageR}`
     );
     let parse = respDetailsPromise.data.name
       .split(" ", 1)
       .toString()
       .toLocaleLowerCase();
     const dataByNamePromise = await charactersDB.get<any>(
       `/character/?name=${parse}`
     );
     let arrayWithNumbers = [];
     for (let i = 0; i < respDetailsPromise.data.episode.length; i++) {
         let item2 = respDetailsPromise.data.episode[i].split("/").slice(-1).pop();
         arrayWithNumbers.push(item2);
 
     }

 
     const [characterDetailsResp, listCharacterByNameResp] =
       await Promise.all([
         respDetailsPromise,
         dataByNamePromise,
       ]);

     setStateCharacterRight({
       isLoading: false,
       characterInfo: characterDetailsResp.data,
       listCharacterByName: listCharacterByNameResp.data.results,
       listEpisodesWithNumbers: arrayWithNumbers,
     });
   };

   React.useEffect(() => {
     getDataFromApiR(pageR);
   }, [pageR]);

 

   let listEpisodesShared = [];
   for (let i = 0; i < stateCharacterLeft.listEpisodesWithNumbers.length; i++) {
     for (let j = 0; j < stateCharacterRight.listEpisodesWithNumbers.length; j++) {
       if (stateCharacterLeft.listEpisodesWithNumbers[i] === stateCharacterRight.listEpisodesWithNumbers[j]) {
        listEpisodesShared.push(stateCharacterLeft.listEpisodesWithNumbers[i]);
       }
     }
   }    
 
   

   return {
     dataCharacterL: stateCharacterLeft.characterInfo,
     prevPageL,
     nextPageL,

     dataCharacterR: stateCharacterRight.characterInfo,
     prevPageR,
     nextPageR,

     characterByNameL: stateCharacterLeft.listCharacterByName,
     characterByNameR: stateCharacterRight.listCharacterByName,
     arrayEpisodeL: stateCharacterLeft.listEpisodesWithNumbers,
     arrayEpisodeR: stateCharacterRight.listEpisodesWithNumbers,
     
     listEpisodesShared
   };
 }