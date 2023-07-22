import Arrow from "../Components/Arrow"

function Main() {
    return (
        <div>
            <div className="h-100 App-bg">
                {/*<img src={'img/fist-bump-bg.jpg'} className="App-bg" alt="background_img" id="id" />*/}
                <div className="intro-text text-center px-auto">
                    <h1 className="title mt-5 ">임지민</h1>
                    <h1 className="title mt-4">프론트엔드 개발자</h1>
                    <p className="mt-5 fs-4">
                    안녕하세요! <br />
                    협업을 사랑하는 개발자 임지민입니다! <br />
                    협업에서 발생하는 시너지를 통해 발전하고, 매일매일 더 나은 개발자가 <br />
                    되기 위해 노력합니다.
                    </p>
                </div>
            </div>
            <a href="#skillSet">
                <Arrow name={'w-8 mt-5 arrow-animation'}/>
            </a>
            <p className="text-center mt-3 fs-5">더 알아보기</p>
        </div>
    )
}

export default Main