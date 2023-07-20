interface link {
    logoSvg: string;
    linkStr: string;
}

const linkData: link[] = [
    {logoSvg: "/img/logo/GitHub_Logo.svg", linkStr: "mailto:jimin4661@gmail.com"},
    {logoSvg: "/img/logo/GitHub_Logo.svg", linkStr: "https://github.com/kaya53"},
    {logoSvg: "/img/logo/GitHub_Logo.svg", linkStr: "https://velog.io/@kaya53"},
]

function Footer() {
    return (
        <div className="fixed-bottom container mx-auto px-0 w-auto h-10">
            <div className="row justify-content-between">
                <a href="https://www.freepik.com/free-photo/colleagues-giving-fist-bump_3532664.htm#page=2&query=communication&position=23&from_view=search&track=sph" className='copyright text-decoration-none text-black pe-none col-6 mx-0 alignbottom'>Image by rawpixel.com on Freepik</a> 
                <div className="col-6 mx-0 text-end">
                    {linkData.map((data:link, idx:number) => (
                        <a href={data.linkStr} key={idx}>
                            <img src={data.logoSvg} alt="logo" className="me-4 w-60px" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer