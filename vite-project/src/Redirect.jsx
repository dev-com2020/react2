import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Redirect = ({path}) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(path)
    }, [navigate, path])
}

export default Redirect