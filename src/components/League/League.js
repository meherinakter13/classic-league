import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import'./League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
  
    const {idLeague,strLeague,strSport}= props.league;
    const history = useHistory();
    const showDetails= idLeague =>{
        const url=`leagueDetails/${idLeague}`;
        history.push(url);
    }
    const [leagueBadge,setLeagueBadge] = useState([])
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res=>res.json())
        .then(data=> setLeagueBadge(data.leagues[0]))
    },[idLeague])
    
    return (

        <div className="league col-sm-12 col-md-5 col-lg-3  ">
            <div className="leagueStyle  ">
            <img src={leagueBadge.strBadge} alt=""/>
            <h4>{strLeague}</h4>
            <p>{strSport}</p>
            <Button variant="primary" onClick={()=> showDetails(idLeague)}>Explore<FontAwesomeIcon className="ml-2" icon={ faArrowRight} /></Button>
            </div>
            
        </div>

        
    );
};

export default League;