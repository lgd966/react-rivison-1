function Profile(){
    const user = {
        name : "amazon",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLFByHyQugaRKTQgDwOHePsB8TpRMazAj0A&s",
        imgStyle : 500
    }

    return(
        <>
        <h1>{user.name}</h1>
        <img src={user.imgUrl} style={{width : user.imgStyle }} alt="" />
        </>
    )
}

export default  Profile