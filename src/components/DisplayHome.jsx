import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/assets';
import SongItem from './SongItem';

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <h1 className='my-5 text-2xl font-bold'>Welcome to Music 156</h1>
            <div className='mb-4'>
                <h1 className='my-5 text-2xl font-bold'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item,index)=>(<AlbumItem key={index} id={item.id} image={item.image} name={item.name} desc={item.desc} />))}
                </div>
            </div>
             <div className='mb-4'>
                <h1 className='my-5 text-2xl font-bold'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item,index)=>(<SongItem key={index} id={item.id} image={item.image} name={item.name} desc={item.desc} />))}
                </div>
            </div>
        </>
    );
}

export default DisplayHome;
