import { StyledHome, StyledText, StyledExplore } from './Home.styles';

const Home = () => {
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
        <button className='explore-btn'>EXPLORE</button>
      </StyledExplore>
    </StyledHome>
  );
};

export default Home;
