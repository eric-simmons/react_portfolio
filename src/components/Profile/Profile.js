import React, {useState, useEffect} from "react"
import ProfileBody from "./index"

function Profile(){
    const [userData, setUserData] = useState(null)

    //runs on mount
    useEffect(() => {
        searchGithub()
    }, [])

    const searchGithub = () => {
        fetch('https://api.github.com/users/eric-simmons')
            .then(res => res.json())
            .then(json => setUserData(json))
    }




    return(
        <ProfileBody
        userData = {userData}
        />
    )
}

export default Profile