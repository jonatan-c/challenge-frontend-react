import { ICharacter } from '../interfaces/responseCharacter';

interface Props {
  character: ICharacter
}

const CardCharacter = ({character}:Props) => {    
     
  let bgColor ;
  if(character.status === 'Alive'){
    bgColor = 'bg-green-400'
  }else if(character.status === 'Dead'){
    bgColor = 'bg-red-400'
  }else{
    bgColor = "bg-gray-400";
  }
        
  return (
    <>
      <article className="  w-[300px]   flex flex-row m-2 rounded-lg border bg-[#3c3e43] ">
        <img className=" w-[100px] rounded " src={character.image} alt="" />
        <div className="  flex  flex-col w-[200px] truncate  pl-2   justify-center  ">
          <p className="font-bold text-xs lg:text-lg truncate ... ">#{character.id} {character.name}</p>
          <div className="flex lg:flex-row flex-col lg:content-center lg:items-center  w-[200px]  ">
            <div className="flex flex-row content-center items-center">
              <p
                className={` w-3 h-3  ${bgColor}      rounded-full pl-3       `}
              ></p>
              <p className=" pl-2 text-xs lg:text-lg ">{character.status}</p>
            </div>
            <p className=" lg:block hidden pl-2">-</p>
            <div className="lg:flex-none flex-col">
              <p className=" ml-1 truncate text-xs lg:text-lg ... ">{character.species}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default CardCharacter