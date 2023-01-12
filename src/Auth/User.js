import { Navigate} from "react-router-dom";


const User = ({children}) => {
    
    
    const user = JSON.parse(localStorage.getItem("user"));
  if(user){
    return <>{children}</>;
  }
  else{
  return <Navigate to='/student/signin'/>;
  }
};

export default User;