import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTokenFromUrl, setAccessToken } from '/utils/spotify';

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const accessToken = hash.access_token;

    if (accessToken) {
      setAccessToken(accessToken);
    }

    router.push('/'); // Redirecionar para a página principal após autenticação
  }, []);

  return null;
};

export default CallbackPage;
