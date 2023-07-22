import Carousel from 'react-bootstrap/Carousel'
import CardPjt from "../Components/Card/CardPjt"
import pjtData from "../utils/pjtData"

function Project() {
    return (
        <div className="w-100 mx-3" style={{'marginTop': '10rem'}}>
            <h2 className="title">Project</h2>
            <Carousel pause={'hover'}>
                {pjtData.map(pjt => (
                    <Carousel.Item>
                        <CardPjt {...pjt}/>
                    </Carousel.Item>
                ))}

            </Carousel>
        </div>
    )
}

export default Project