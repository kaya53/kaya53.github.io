import { cardPjt } from "../../utils/cardType"

function CardPjt({title, imgLs, shortDesc, longDesc, gitLink}: cardPjt) {
    return (
        <div className="container">
            <div className="row">
                {/* <div className="offset-1 col-4"> */}
                <div className="offset-sm-1 col-sm-4">
                    <h3>{title}</h3>
                    <div 
                        style={{width: '10rem', height: '10rem'}}
                        className="border border-1 rounded"
                    >
                        {imgLs && (
                            <img src={imgLs[0][0]} alt="pjtImg" className="d-block mx-auto w-75 text-center" />
                        )}
                    </div>
                    {shortDesc.map(sDesc => (
                        <p>{sDesc}</p>
                    ))}
                </div>
                <div className="col-sm-6">
                        {longDesc.map(lDesc => (
                            <p>{lDesc}</p>
                        ))}
                    <a href={gitLink} target="__blank">github</a>
                </div>
            </div>
        </div>

    )
}

export default CardPjt