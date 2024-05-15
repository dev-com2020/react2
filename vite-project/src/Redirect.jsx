import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import PropTypes from "prop-types"

const Redirect = ({path}) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(path)
    }, [navigate, path])
    return null
}
Redirect.propTypes = {
    path: PropTypes.string.isRequired
}

export default Redirect