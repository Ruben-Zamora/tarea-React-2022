import React, { useEffect, useState } from 'react';
import GetItem from './GetItem';
import axios from 'axios';

function About() {

    const [itemList, setItemList] = useState([]);
    useEffect(() =>{
      async function fetchItem(){
        try {
          const requestURL = 'https://pokeapi.co/api/v2/item?limit=25';
          const response = await fetch(requestURL);
          const responsejson = await response.json();
          const results=responsejson.results;
          
          for(let i=0; i<results.length; i++) {
            await axios.get(results[i].url)
              .then(item=>{
                console.log(item.data.id);
                setItemList(prevArray=>[...prevArray, item.data]);
              });
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchItem();
    },[]);

    return (
        <div>
            <h1>This is the Item page</h1>
            <GetItem itemList={itemList} />
        </div>
    )
}

export default About