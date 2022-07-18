import axios from 'axios'
import { toast } from 'react-toastify'
import icon from '../../Assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/resquest'
import "./styles.css"

type Props ={
  saleId: number
}

function handleClick(id : number){
axios(`${BASE_URL}/sales/${id}/notification`).then(response =>{
  toast.info("Sms enviado")
})
}
function NotificationButton({saleId} :Props) {
    
  return (
        
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
          <img src={icon} alt="Notificar" />
        </div>
    )
  }
  
  export default NotificationButton
  