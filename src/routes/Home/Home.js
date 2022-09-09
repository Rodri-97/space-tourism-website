import { StyledHome, StyledText, StyledExplore } from './Home.styles';
import { Link } from 'react-router-dom';
import { links } from '../../helpers/links';

const Home = () => {
  const allPathsExceptHome = links
    .map((link) => link.path)
    .filter((path) => path !== '');
  const randomIndex = Math.floor(Math.random() * allPathsExceptHome.length);
  const randomPath = allPathsExceptHome[randomIndex];

  return (
    <StyledHome>
      <StyledText>
        <div className='titles-container'>
          <h5 className='subtitle'>SO, YOU WANT TO TRAVEL TO</h5>
          <span className='title'>SPACE</span>
        </div>
        <div className='text-container'>
          Let's face it: if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </div>
      </StyledText>
      <StyledExplore>
        <Link to={randomPath}>
          <button className='explore-btn'>EXPLORE</button>
        </Link>
      </StyledExplore>
    </StyledHome>
  );
};

export default Home;
