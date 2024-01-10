import { clearCookie } from '../../CookieUtils';


export const handleLogout = () => {
    if (getCookie('userId')) {
        clearCookie('userId');
        window.location.href = '/';
      } else {
        window.location.href = '/dashboard';
      }
    };
  