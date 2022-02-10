import { useParams } from "react-router-dom";
export const UserDetails = ()=>{
    const {userid } = useParams();

    return <div>
        user details: {userid}
    </div>


}