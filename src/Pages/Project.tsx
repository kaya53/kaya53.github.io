import Carousel from 'react-bootstrap/Carousel'
import CardPjt from "../Components/Card/CardPjt"
import pjtData from "../utils/pjtData"

function Project() {
    return (
        <div className="mx-auto col-md-8" style={{'marginTop': '10rem'}}>
            <h2 className="title text-center mb-5">Project</h2>
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