import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { List, Text, Container, Row, Col, Card } from '@gympass/yoga';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
`;

const TitleRow = styled.h4`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
`;

const TextRow = styled.text`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
`;

class ListStudent extends React.Component {
	render() {
		const StudentStore = this.props.StudentStore;
		return (
		<Container style={{padding:20}}>
			<Row>
				<Col xxs={12}>
					<Card ribbon={{ text: 'All registered students' }}>
					<Card.Header style={{textAlign:'center'}}>
						<Title>Student List</Title>
					</Card.Header>
					<Card.Content>
						<List>
							<List.Item>
								<Row>
									<Col xxs={2}><TitleRow style={{textAlign:'left'}}>Name</TitleRow></Col>
									<Col xxs={2}><TitleRow style={{textAlign:'left'}}>Last Name</TitleRow></Col>
									<Col xxs={2}><TitleRow style={{textAlign:'left'}}>Address</TitleRow></Col>
									<Col xxs={2}><TitleRow style={{textAlign:'left'}}>Phone</TitleRow></Col>
									<Col xxs={2}><TitleRow style={{textAlign:'left'}}>Gpa</TitleRow></Col>
									<Col xxs={2}><TitleRow style={{textAlign:'left'}}>Details</TitleRow></Col>
								</Row>  
							</List.Item>
							{StudentStore.students.map((student, index) =>
							<List.Item key={index}>
								<Row>
									<Col xxs={2}><TextRow style={{textAlign:'left'}}>{student.name}</TextRow></Col>
									<Col xxs={2}><TextRow style={{textAlign:'left'}}>{student.last_name}</TextRow></Col>
									<Col xxs={2}><TextRow style={{textAlign:'left'}}>{student.address}</TextRow></Col>
									<Col xxs={2}><TextRow style={{textAlign:'left'}}>{student.phone}</TextRow></Col>
									<Col xxs={2}><TextRow style={{textAlign:'left'}}>{student.gpa}</TextRow></Col>
									<Col xxs={2}><TextRow style={{textAlign:'left'}}><Link to={'/student/show/' + index} className="nav-link">Show</Link></TextRow></Col>
								</Row>
							</List.Item>
							)}
						</List>
					</Card.Content>
					</Card>
				</Col>
			</Row>
		</Container>		
		);
	}
}

export default inject('StudentStore')(observer(ListStudent));


