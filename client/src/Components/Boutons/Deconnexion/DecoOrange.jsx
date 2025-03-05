import { Link } from 'react-router-dom'
import './DecoOrange.css'

export const DecoOrange = () => {
    return (
        <Link to={'/connexion'}><button className="deco-white" type="submit" >Deconnexion</button></Link>
    )
}