import { useRouter } from 'next/router';
import { useEffect } from 'react';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
}

export default NotFound;
