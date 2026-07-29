import { FaLeaf } from "react-icons/fa";

function DashboardCard({title,value}){

    return(

        <div className="dashboard-card">

            <FaLeaf size={35}/>

            <h3>{title}</h3>

            <h1>{value}</h1>

        </div>

    )

}

export default DashboardCard