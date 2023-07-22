import './CSS/App.css';
import Main from './Pages/Main'
import SkillSet from './Pages/SkillSet';
import Project from './Pages/Project';
import Other from './Pages/Other';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="h-100 w-100">
      <Main />
      <div id="skillSet" className='pb-5'>
        <SkillSet />
      </div>
      <div id="pjt" className='pb-5'>
        <Project />
      </div>
      <div id="other" className='pb-5'>
        <Other />
      </div>
      {/* 
      - 여기에다가 컴포넌트를 다 쌓는다 
      - 스크롤을 안보이게 한다
      - 각 컴포넌트를 div로 감싸고 id값을 준다
      - 스크롤을 하거나 화살표를 클릭하면 #{컴포넌트 id 위치}로 이동한다
      */}
      {/* <div id='arrow'>
        <Arrow name='mt-5'/>
      </div> */}
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
