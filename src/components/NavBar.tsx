import React from 'react'
import { ICharacter } from '../interfaces/responseCharacter';

interface Props {
  dataCharacterL: ICharacter,
  prevPageL: () => void,
  nextPageL: () => void,
  onClickSearch: () => void,
  dataCharacterR: ICharacter,
  prevPageR: () => void,
  nextPageR: () => void,
}

const NavBar = ({dataCharacterL,prevPageL,nextPageL,onClickSearch,dataCharacterR ,prevPageR ,nextPageR}:Props) => {
      return (
        <>
          <div className="flex flex-col lg:flex-row justify-between   w-[100%] fixed top-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-2 ">
            <div className="flex flex-row  text-center content-center items-center justify-between   lg:justify-evenly  lg:w-[50%]">
              {
                <p className="font-bold text-base text-center content-center items-center lg:text-lg w-[40%] pl-2  truncate ...">
                  {dataCharacterL?.name} # {dataCharacterL?.id}
                </p>
              }
              <div className="flex flex-row  w-[50%]  order-1 lg:order-none  justify-end  mr-5 lg:justify-start">
                <button
                  type="button"
                  onClick={prevPageL}
                  className="bg-gray-800 content-center justify-center text-center   text-white rounded-md py-2 border border-white hover:bg-slate-500 hover:text-white px-3"
                >
                  <div className="flex flex-row align-middle">
                    <svg
                      className="w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="ml-2">Prev</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={nextPageL}
                  className="bg-gray-800 text-white rounded-md py-2 border border-white hover:bg-slate-500 hover:text-white px-3"
                >
                  <div className="flex flex-row align-middle">
                    <span className="mr-2">Next</span>
                    <svg
                      className="w-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-end my-2 mr-5">
              <button
                type="button"
                onClick={onClickSearch}
                className="
                w-32 h-12
                bg-gray-800 text-white rounded-md py-2 border border-white hover:bg-slate-500 hover:text-white px-3"
              >
                {'<- Select ->'}
              </button>
            </div>

            <div className="flex flex-row  text-center content-center items-center justify-between   lg:justify-evenly  lg:w-[50%]">
              <div className="flex flex-row  w-[50%]  order-1 lg:order-none  justify-end mr-5  lg:justify-end">
                <button
                  type="button"
                  onClick={prevPageR}
                  className=" bg-gray-800 text-white rounded-md py-2 border border-white hover:bg-slate-500 hover:text-white px-3"
                >
                  <div className="flex flex-row align-middle">
                    <svg
                      className="w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="ml-2">Prev</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={nextPageR}
                  className="bg-gray-800 text-white rounded-md py-2 border border-white hover:bg-slate-500 hover:text-white px-3 "
                >
                  <div className="flex flex-row align-middle">
                    <span className="mr-2">Next</span>
                    <svg
                      className="w-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              {
                <p className="font-bold text-base text-center content-center items-center lg:text-lg w-[40%] pl-2  truncate ...">
                  {dataCharacterR?.name} # {dataCharacterR?.id}
                </p>
              }
            </div>
          </div>
        </>
      );
    }

export default NavBar