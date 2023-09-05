import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const create = () => {

    const log = (error) => toast.error(<span className="error-message">{error}</span>);
    const log_message = (message) => toast.success(message);   

    const catch_error = (error , inspect)=>{
            try{
            log(error.message)
            }catch{
            console.log(`${inspect} :: function ` , error)
            }
    }
   
   
    return {
        catch_error , log , log_message
    };

};

const error = create();


export default error;