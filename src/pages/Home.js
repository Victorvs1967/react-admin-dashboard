import styled from 'styled-components';
import Featured from '../components/Featured';
import Chart from '../components/Chart';
import SmWidget from '../components/SmWidget';
import LgWidget from '../components/LgWidget';
import { userData } from '../dummyData';

const HomeContainer = styled.div`
  flex: 4;
`;

const HomeWidget = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Featured />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <HomeWidget>
        <SmWidget />
        <LgWidget />
      </HomeWidget>
    </HomeContainer>
  );
};

export default Home;