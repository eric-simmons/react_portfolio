function Projects({ repoName, repoUrl }) {

    return (
        <div className="container">
            <a href={repoUrl}>
                {repoName}
            </a>
        </div>
    )
}

export default Projects