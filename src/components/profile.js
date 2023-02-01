function Profile({userData}) {
    return (
        <>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={userData.avatar_url} className="img-fluid rounded-start" alt="{userData.login}" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{userData.name}</h5>
                        <p className="card-text">{userData.bio}</p>
                        <p className="card-text"><small className="text-muted">{userData.created_at}</small></p>
                        <p>Github Repos {userData.public_repos}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile