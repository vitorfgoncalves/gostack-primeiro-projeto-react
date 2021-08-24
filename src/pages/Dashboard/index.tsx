import React from 'react';
import logoImg from '../../assets/github-logo.svg';
import { Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub.</Title>
    </>
  );
};

export default Dashboard;
