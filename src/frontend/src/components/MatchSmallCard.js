import {React} from 'react';
import {Link} from 'react-router-dom';
export const MatchSmallCard = ({match,teamName}) =>{
  const otherTeamName = teamName === match.team1 ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeamName}`;
  return (
    <div className="MatchSmallCard">
      <h3>vs <Link to={otherTeamRoute}>{otherTeamName}</Link> </h3>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result} </p>
    </div>
  );
}