import QRCode from 'qrcode.react'
import { Link } from 'react-router-dom'

const QRRoute = ({route}) => {
    return (
        <div>
            <h3> Scan Or Click Me </h3>
            <Link to="/happy">
                <QRCode value={window.location.origin + route}/>        
            </Link>
        </div>
    )
}

export default function SecretInput({phrase, secretPhrase, onChange}) {
    return (
        <div>
            <input type="text" placeholder="What is the secret phrase?" onChange={onChange}/>
        </div>
    )
}
