import React, { useEffect, useState } from 'react';
import PlayerItem from './PlayerItem/PlayerItem';
import {} from './Player.css'

export default function Player(){
    const [audios,setAudios] = useState([]);

    useEffect(()=> {
        fetch('audio.json')
        .then(res=>res.json())
        .then(data => setAudios(data))
    },[audios])

    return(
        <section className="section">
            <h2 className='section-title'>বিষয়ভিত্তিক রুকইয়াহ</h2>
            <div className='audios-container'>
            {
                audios.map(audio => <PlayerItem
                key={audio._id}
                audio={audio}
                ></PlayerItem>)
            }
        </div>
        </section>
    )
}