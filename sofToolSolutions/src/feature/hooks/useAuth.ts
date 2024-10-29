import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../auth/authStore';
import { v4 as uuidv4} from 'uuid'



export function useAuth() {
  const navigate = useNavigate();
  const { user, accessToken, login, logout, isAuthenticated } = useAuthStore();
  const token = uuidv4()


  const handleLogin = async (data: { username: string; password: string }) : Promise<void> => {
    // Simulamos un usuario y token
    const mockUser = {
       userId: '1', 
       username: data.username,
        role: 'admin',
        email: 'user@example.com' };
   
   await login(mockUser, token);
    navigate('/home');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getSessionData = () => ({
    user,
    accessToken,
  });

  return {
     user,
      accessToken,
       isAuthenticated,
        handleLogin,
         handleLogout,
          getSessionData };
}
