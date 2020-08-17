import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'antd';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      type="primary"
      onClick={() => router.push('/')}
      size="middle"
    >
      Back
    </Button>
  );
};

export default BackButton;
