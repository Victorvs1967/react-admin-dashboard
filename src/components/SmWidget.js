import { Link } from 'react-router-dom';
import { Visibility } from '@material-ui/icons';
import { newMemberRows } from '../dummyData';
import styled from 'styled-components';

const SmWidgetContainer = styled.div`
  flex: 1;
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;

const SmWidgetTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

const SmWidgetList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  .SmWidgetListItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
`;

const SmWidgetImg = styled.img`
  width: 40px;
  hieght: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const SmWidgetUser = styled.div`
  display: flex;
  flex-direction: column;

  .SmWidgetUsername {
    font-weight: 500;
  }

  ,SmWidgetUserTitle {
    font-weight: 300;
  }
`;

const SmWidgetButton = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;

  .SmWidgetIcon {
    font-size: 16px !important;
    margin-right: 5px;
  }
`;

const SmWidget = () => {
  return (
    <SmWidgetContainer>
      <SmWidgetTitle>New Members</SmWidgetTitle>
      <SmWidgetList>
        {newMemberRows && newMemberRows.map(member => (
          <li key={member.id} className="SmWidgetListItem">
            <SmWidgetImg src={member.avatar} alt={member.username} />
            <SmWidgetUser>
              <span className="SmWidgetUsername">{ member.username }</span>
              <span className="SmWidgetUserTitle">{ member.occupation }</span>
            </SmWidgetUser>
            <Link to={ "/user/" + member.id }>
              <SmWidgetButton>
                <Visibility className="SmWidgetIcon" />
                Display
              </SmWidgetButton>
            </Link>
          </li>
        ))}
      </SmWidgetList>
    </SmWidgetContainer>
  );
};

export default SmWidget;