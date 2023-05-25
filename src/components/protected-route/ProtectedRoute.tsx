import { ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { selectAuth } from 'store/slices/authSlice';
import { AuthState } from 'store/slices/authSlice';


// Define the type for the component props
interface ProtectedRouteProps {
  children: ReactNode;
}

// This is a route guard component
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authState: AuthState = useAppSelector(selectAuth);
  const { isLoggedin } = authState;
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedin) {
      navigate('/login', { state: { from: location } });
    }
  }, [isLoggedin, navigate, location]);

  return isLoggedin ? <>{children}</> : null;
}

export default ProtectedRoute;