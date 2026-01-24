import React, { use } from 'react'
import './Verify.css'
import { useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const {url} = React.useContext(StoreContext);
    const navigate = useNavigate();


    
    const verifyPayment = async () => {
        const response = await fetch(`${url}/api/order/verify`, {success,orderId})

        if(response.formData.success) {
            navigate('/myorders');
        }
        else {
            navigate('/');
        }
    }

    useEffect(() => {
        verifyPayment();
    }, []);

    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
    )
}

export default Verify



