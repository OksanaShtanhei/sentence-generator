import React from 'react';
import words from './words';

export const WordsData = (props) => {

    let arr = []
    for( let i = props.count; i > 0; i--){
        arr.push(i)
        } 
    console.log(arr); 
    return (
        <div>
            {arr.map(() => <p>{words.map((data, i) => data[Math.floor(Math.random() * 8)] + ' ')}.</p>)}   
        </div>
    )
}