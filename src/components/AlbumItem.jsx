import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
    
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded hover:bg-[#ffffff26] cursor-pointer' key={id}>
            <img src={image} className=' rounded' />
            <h3 className='font-bold mt-2 mb-1'>{name}</h3>
            <p className='text-sm text-slate-200'>{desc}</p>
        </div>
    );
}

export default AlbumItem;
