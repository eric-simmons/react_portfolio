function Projects({ repoName, repoUrl, repoDescription }) {

    return (
        <div className="container">
            <a href={repoUrl}>
               <h3>{repoName}</h3> 
            </a>
            <div>{repoDescription}</div>
            <br></br>
        </div>
    )
}

export default Projects