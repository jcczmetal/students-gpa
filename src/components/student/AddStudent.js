import React from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Text, Button, Container, Row, Col, Input } from '@gympass/yoga';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
`;

const MyButton = styled(Button)`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
`;

class AddStudent extends React.Component {
	render() {
		const StudentStore = this.props.StudentStore;
		
		return (

			<Container style={{padding:20}}>
				<Row>
					<Col xxs={12}>
						<Card ribbon={{ text: 'Fill out the requested information.' }}>
							<Card.Header style={{textAlign:'center'}}>
								<Title>Add Student</Title>
							</Card.Header>
				
							<Card.Content>
								<Container>
									<Row>
										<Col xxs={12} style={{paddingBottom:20}}>
											<Input
											label="Name"
											maxLength={20}
											ref={StudentStore.name}
											style={{width:'100%'}}
											/>
										</Col>
									</Row>
									<Row>
										<Col xxs={12} style={{paddingBottom:20}}>
											<Input
											label="Last Name"
											maxLength={20}
											ref={StudentStore.last_name}
											style={{width:'100%'}}
											/>
										</Col>
									</Row>
									<Row>
										<Col xxs={12} style={{paddingBottom:20}}>
											<Input
											label="Address"
											maxLength={20}
											ref={StudentStore.address}
											style={{width:'100%'}}
											/>
										</Col>
									</Row>
									<Row>
										<Col xxs={12} style={{paddingBottom:20}}>
											<Input
											label="Phone"
											maxLength={20}
											ref={StudentStore.phone}
											style={{width:'100%'}}
											/>
										</Col>
									</Row>
									<Row>
										<Col xxs={12} style={{paddingBottom:20}}>
											<Input
											label="Gpa"
											maxLength={20}
											ref={StudentStore.gpa}
											style={{width:'100%'}}
											/>
										</Col>
									</Row>
								</Container>
								<Container>
									<Row>
										<Col xxs={12} style={{paddingBottom:20}}>
											<MyButton style={{width:'100%'}} onClick={StudentStore.addStudent} >Add a student</MyButton>
										</Col>
									</Row>
								</Container>
							</Card.Content>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default inject('StudentStore')(observer(AddStudent));