interface propClass {
    name: string;
}


function Arrow({ name }: propClass) {
    return (
        <div className="text-center">
            <img src={'https://cdn-icons-png.flaticon.com/512/2985/2985150.png'} 
                className={name}
                alt="down arrow" />
        </div>
    )
}

export default Arrow