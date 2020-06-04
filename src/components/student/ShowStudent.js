import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Row, Col, Card, Tag } from '@gympass/yoga';

class ShowStudent extends React.Component {

	render() {
		const id = this.props.match.params.id;
		const Student = this.props.StudentStore.students[id];
		return (
			<Container style={{padding:20}}>
				<Row>
					<Col xxs={12}>
						<Card ribbon={{ text: 'Detaails' }}>
							<Card.Content>
								<Container>
									<Row>
										<Col xxs={4} style={{backgroundColor:'#F5F5FA'}}>

										</Col>
										<Col xxs={8}>
											<Row style={{paddingBottom:20}}>
												<Col xxs={6} style={{textAlign:'right'}}><Tag icon={false} style={{width:100}}>Name</Tag></Col>
												<Col xxs={6}>{Student.name}</Col>
											</Row>
											<Row style={{paddingBottom:20}}>
												<Col xxs={6} style={{textAlign:'right'}}><Tag icon={false} style={{width:100}}>Last Name</Tag></Col>
												<Col xxs={6}>{Student.last_name}</Col>
											</Row>
											<Row style={{paddingBottom:20}}>
												<Col xxs={6} style={{textAlign:'right'}}><Tag icon={false} style={{width:100}}>Address</Tag></Col>
												<Col xxs={6}>{Student.address}</Col>
											</Row>
											<Row style={{paddingBottom:20}}>
												<Col xxs={6} style={{textAlign:'right'}}><Tag icon={false} style={{width:100}}>Phone</Tag></Col>
												<Col xxs={6}>{Student.phone}</Col>
											</Row>
											<Row style={{paddingBottom:20}}>
												<Col xxs={6} style={{textAlign:'right'}}><Tag icon={false} style={{width:100}}>GPA</Tag></Col>
												<Col xxs={6}>{Student.gpa}</Col>
											</Row>
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

export default inject('StudentStore')(observer(ShowStudent));