import CardSkill from "../Components/Card/CardSkill"
import Arrow from "../Components/Arrow"
import { feList, comList, verList, lanList } from "../utils/skillData"


function SkillSet() {
    return (
        <div className="w-100 mx-3" style={{'marginTop': '10rem'}}>
            <h2 className="title text-center">Skill Set</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <CardSkill title='FRONTEND' imgLs={feList}/>
                    </div>
                    <div className="col-3">
                        <CardSkill title='COMMUNICATION' imgLs={comList}/>
                        <a href="#pjt">
                            <Arrow name={'w-25 mt-5 arrow-animation'}/>
                        </a>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <CardSkill title='VERSION CONTROL' imgLs={verList}/>
                            
                        </div>
                        <div className="row">
                            <CardSkill title='OTHER LANGUAGE' imgLs={lanList}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SkillSet