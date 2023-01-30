function Projects(props) {
    return (
        
        <>
    
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.userData.avatar_url} className="img-fluid rounded-start" alt="{props.userData.login}" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Project{props.userData.name}</h5>
                        <p className="card-text">{props.userData.bio}</p>
                        <p className="card-text"><small className="text-muted">{props.userData.created_at}</small></p>
                        <p>Github Repos {props.userData.public_repos}</p>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects