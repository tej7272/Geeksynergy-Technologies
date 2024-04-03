import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const Card = (props) => {

    const { title, poster, director, genre, stars, pageViews, totalVoted, releasedDate, runTime, language } = props;

    const date = new Date(releasedDate * 1000);

    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const starsCombined = stars.join("");
    const movieStars = starsCombined.length < 20 ? stars.join(", ") : `${starsCombined.slice(0, 20)} ...`;

    const time = runTime ? runTime : 123;





    return (
        <div className='movie-card'>
            <div className='votes'>
                <div>
                    <BiSolidUpArrow />
                </div>
                <div>
                    <p>{totalVoted}</p>
                </div>
                <div>
                    <BiSolidDownArrow />
                </div>
                <div>Votes</div>
            </div>
            <div className='img'>
                <img src={poster} alt='movie' />
            </div>
            <div className='details'>
                <h2>{title}</h2>
                <p> <span>Genre</span> : {genre}</p>
                <p><span>Director</span> : {director}</p>
                <p><span>Starring</span> : {movieStars}</p>
                <p>{time} mins | {language} | {formattedDate}</p>
                <p className='detail-vote'>{pageViews} views | Voted by {totalVoted} people</p>
            </div>
        </div>
    )
}

export default Card