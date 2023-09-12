import style from '../../css/worker_card.module.css';
import img from '../../img/avatar.svg'
import { useNavigate } from 'react-router-dom'
const Worker = ({ data }) => {
    const navigate = useNavigate();

    const goProfile = () =>{
        navigate(`/users/profile/${data._id}`)
    }
    return (
        <div className={style.container} onClick={goProfile}>
            <div className={style.profile}>
                <img src={data.imageUrl} />
                <div className={style.ratings}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
            <div className={style.details}>
                <div className={style.name}>
                    <h2>{data.name}</h2>
                    <p>{data.occupation}</p>
                </div>
                <div className={style.services}>
                    <ul className={style.services_list}>
                        {
                            data.serviceList.map((item, index) => {
                                return <li className={style.list_item} key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Worker