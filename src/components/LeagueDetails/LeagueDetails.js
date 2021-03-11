import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Male from '../../images/Rectangle 28.png';
import Female from '../../images/female.png';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const LeagueDetails = () => {
    const{idLeague}= useParams();
    const[leagueDetail , setLeagueDetail] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res=>res.json())
        .then(data=>setLeagueDetail(data.leagues[0]))
    },[idLeague])

    let leagueImage;
    if("Male" === leagueDetail.strGender){
        leagueImage = <img src={Male}></img>
    }
    else if("Female"  === leagueDetail.strGender){
        leagueImage = <img src={Female}></img>
    }
    const banner={
        backgroundRepeat:"noRepeat",
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundImage: `url(${leagueDetail.strBanner})`
    }
    return (
        <div className="">
            <div className="row m-0 ">
                    <div  className="col-lg-12  col-md-6 col-sm-12 text-center logo " style={banner}>
                        <img src={leagueDetail.strLogo} className=" w-25 mt-5 mb-5 " alt=""/>
                    </div>
            </div>
                <div className="leagueDetail ">
                    <div className="leagueInfo container">
                        <div className="row ">
                            <div className="col-sm-12 col-md-6">
                                <h3>{leagueDetail.strLeague}</h3>
                                <p><FontAwesomeIcon className="mr-2" icon={ faMapMarkerAlt} />Founded: {leagueDetail.intFormedYear}</p>
                                <p><FontAwesomeIcon className="mr-2" icon={ faFlag} />Country: {leagueDetail.strCountry}</p>
                                <p><FontAwesomeIcon className="mr-2" icon={ faFutbol} />Sport Type: {leagueDetail.strSport} </p>
                                <p><FontAwesomeIcon className="mr-2" icon={ faMars} />Gender: {leagueDetail.strGender}</p>
                            </div>
                            <div className="leagueImage col-sm-12 col-md-6 ">
                                <div>{leagueImage}</div> 
                            </div>
                        </div>
                    </div>
                    <div className="leagueDescription container">
                        <p>{leagueDetail.strDescriptionEN}</p>
                        {/* <p>{leagueDetail.strDescriptionFR}</p> */}
                        <div className="icons">
                        <a href={`https://${leagueDetail.strTwitter}`}target="_blank"><FontAwesomeIcon className="icons fa-3x  text-info bg-white rounded-circle p-2" icon={ faTwitter} /></a>
                        <a href={`https://${leagueDetail.strFacebook}`}target="_blank"><FontAwesomeIcon className="icons fa-3x  text-primary bg-white rounded-circle p-2" icon={ faFacebook} /></a>
                        <a href={`https://${leagueDetail.strYoutube}`}target="_blank"><FontAwesomeIcon className="icons fa-3x  text-danger bg-white rounded-circle p-2" icon={ faYoutube} /></a>
                        </div>   
                    </div>
                </div> 
        </div>
    );
};

export default LeagueDetails;