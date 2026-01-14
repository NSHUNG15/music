import React,{ useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';


const SongItem = ({ image, name, desc, id }) => {

    const { playWithId } = useContext(PlayerContext);

    return (
         <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded hover:bg-[#ffffff26] cursor-pointer' key={id}>
            <img src={image} className=' rounded' />
            <h3 className='font-bold mt-2 mb-1'>{name}</h3>
            <p className='text-sm text-slate-200'>{desc}</p>
        </div>
    );
}

export default SongItem;
