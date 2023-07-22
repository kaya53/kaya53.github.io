import { cardPjt } from "../../utils/cardType"

function CardPjt({title, imgLs, shortDesc, longDesc, gitLink}: cardPjt) {
    return (
        <div className="container">
            <div className="row">
                <div className="offset-1 col-4">
                    <h3>{title}</h3>
                    <div 
                        style={{width: '10rem', height: '10rem'}}
                        className="border border-1 rounded"
                    >
                        {imgLs && (
                            <img src={imgLs[0][0]} alt="pjtImg" className="d-block mx-auto w-75 text-center" />
                        )}
                    </div>
                    <p>{shortDesc}</p>
                </div>
                <div className="col-6">
                    <p>{longDesc}</p>
                    <a href={gitLink} target="__blank">github</a>
                </div>
            </div>
        </div>

    )
}

export default CardPjt