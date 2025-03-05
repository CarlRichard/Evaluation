import { Link } from 'react-router-dom'
import './DecoGreen.css'

export const DecoGreen = () => {
    return (
        <Link to={'/connexion'}><button className='deco-green'>Deconnexion</button></Link>
    )
}