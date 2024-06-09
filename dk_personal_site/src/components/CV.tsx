import { useNavigate } from 'react-router-dom'
import cv from '../assets/DK_CV_DI.pdf'

const CV = () => {
    const navigate = useNavigate()
    
    return(
        <>
            <iframe src={cv} width="100%" height="500px"></iframe>
            <button id="cv_button" onClick={() => navigate('/')}>Back</button>
        </>
    )
}

export default CV