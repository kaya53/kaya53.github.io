import './CSS/App.css';
import Main from './Pages/Main'
import Footer from './Components/Footer';
import Arrow from './Components/Arrow';

function App() {
  return (
    <div className="h-100 w-100">
      <Main />
      {/* 
      - 여기에다가 컴포넌트를 다 쌓는다 
      - 스크롤을 안보이게 한다
      - 각 컴포넌트를 div로 감싸고 id값을 준다
      - 스크롤을 하거나 화살표를 클릭하면 #{컴포넌트 id 위치}로 이동한다
      */}
      {/* <div id='arrow'>
        <Arrow name='mt-5'/>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
