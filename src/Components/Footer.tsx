interface link {
    logoSvg: string;
    linkStr: string;
}

const linkData: link[] = [
    {logoSvg: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg", linkStr: "mailto:jimin4661@gmail.com"},
    {logoSvg: "/img/logo/GitHub_Logo.svg", linkStr: "https://github.com/kaya53"},
    {logoSvg: "https://velog.velcdn.com/images/velog/profile/9aa07f66-5fcd-41f4-84f2-91d73afcec28/green%20favicon.png", linkStr: "https://velog.io/@kaya53"},
]

function Footer() {
    return (
        <div className="fixed-bottom mx-5 px-0 h-10">
            <div className="row justify-content-between">
                <p className="fs-8 col-6 mx-0">
                    <a 
                    href="https://www.freepik.com/free-photo/colleagues-giving-fist-bump_3532664.htm#page=2&query=communication&position=23&from_view=search&track=sph"
                    className='text-decoration-none text-black'
                    target="__blank"
                    >Image by rawpixel.com </a> on Freepik
                </p>
                <div className="d-flex col-6 justify-content-end mx-0 text-end">
                    {linkData.map((data:link, idx:number) => (
                        <a href={data.linkStr} key={idx} target="__blank">
                            <img src={data.logoSvg} alt="logo" className="me-4 w-60px" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer