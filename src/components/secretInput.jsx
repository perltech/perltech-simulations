import QRCode from 'qrcode.react'
import { Link } from 'react-router-dom'

const QRRoute = ({route}) => {
    return (
        <div>
            <Link to="/happy">
                <QRCode value={window.location.origin + route}/>        
            </Link>
        </div>
    )
}

export default function secretInput({phrase, secretPhrase, onChange}) {
    return (
        <div>
            <input type="text" placeholder="What is the secret phrase?" onChange={onChange}/>
            <br />
            <br />
            {phrase === secretPhrase ? <QRRoute route={'/happy'}/> : ""}
            <br />
            <br />
        </div>
    )
}