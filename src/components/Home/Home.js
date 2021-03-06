import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';

const Home = () => {
    const[leagues,setLeagues]= useState([]);
    useEffect(()=>{
         fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res=>res.json())
        .then(data =>setLeagues(data.leagues))
    },[])
    const allLeagues = leagues.slice(0,15);

    return (
       
        <div style={{backgroundColor:'rgb(3, 3, 61)'}}className="fluid-container">
            <Header></Header>
            <div className="row m-0">
                {
                    allLeagues.map(league=> <div className="col-lg-4  col-md-6 col-sm-12"><League league={league}></League></div>)
                }
            </div>
            {/* {
                allLeagues.map(league =><League league={league}></League>)
            } */}

        </div>
    );
};

export default Home;