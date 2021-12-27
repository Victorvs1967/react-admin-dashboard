import styled from 'styled-components';
import { lastTransctionRows } from '../dummyData';

const LgWidgetContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const LgWidgetTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
`;

const LgWidgetButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${ props => props.bgColor || "#ebf1fe" };
  color: ${ props => props.fdColor || "#2a7afe" };
`;

const LgWidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const LgWidgetTh = styled.th`
  text-align: left;
`;

const LgWidgetUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const LgWidgetImg = styled.img`
  width: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const LightTd = styled.td`
  font-weight: 300;
`;

const LgWidget = () => {
  return (
    <LgWidgetContainer>
      <LgWidgetTitle>Latest transactions</LgWidgetTitle>
      <LgWidgetTable>
        <tbody>
          <tr>
            <LgWidgetTh>Customer</LgWidgetTh>
            <LgWidgetTh>Date</LgWidgetTh>
            <LgWidgetTh>Amount</LgWidgetTh>
            <LgWidgetTh>Status</LgWidgetTh>
          </tr>
          {lastTransctionRows && lastTransctionRows.map(item => (
            <tr key={item.id}>
              <LgWidgetUser>
                <LgWidgetImg src={ item.avatar } alt={ item.username } />
                <span>{ item.username }</span>
              </LgWidgetUser>
              <LightTd>{ item.date }</LightTd>
              <LightTd>{ item.transaction }</LightTd>
              <td><LgWidgetButton bgColor={ item.bgColor } fdColor={ item.fdColor }>{ item.type }</LgWidgetButton></td>
            </tr>
          ))}
        </tbody>
      </LgWidgetTable>
    </LgWidgetContainer>
  );
};

export default LgWidget;