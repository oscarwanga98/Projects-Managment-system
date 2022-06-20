import {FaEnvelope,FaPhone,FaIdBadge} from 'react-icons/fa'

export default function ClientInfo({client}) {
  return (
    <>ClientInfo
        <h5 className='mt-5'>Client Information</h5>
        <ul className="list-group">
            <li className="list-group-item">
                <FaIdBadge className="m-1 icon" />{client.name}
            </li>
            <li className="list-group-item">
                <FaEnvelope className="m-1 icon" />{client.email}
            </li>
            <li className="list-group-item">
                <FaPhone className="m-1 icon" />{client.phone}
            </li>
        </ul>
    </>
  )
}
