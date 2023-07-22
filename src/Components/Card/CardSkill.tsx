import { cardSkill } from "../../utils/cardType"

function CardSkill({title, imgLs}: cardSkill) {
    return (
        <div className="mt-4">
            <p className="ps-2 fs-5">{title}</p>
            <div className="container rounded bg-blue p-3">
                {imgLs && (
                    imgLs.map(imgRow => (
                        <div className="row justify-content-center">
                            {imgRow.map(imgStr => (
                                <div className={`col-${12/imgRow.length} text-center`}>
                                    <img src={imgStr} alt="logo" className="w-50 my-1"/>
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CardSkill