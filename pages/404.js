import { useRouter } from 'next/router';
import { useEffect } from 'react';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/solutions/motus');
  });

  return null;
}

export default NotFound;
