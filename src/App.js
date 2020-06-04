import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { ThemeProvider, Button, Container, Col, Row, Text } from '@gympass/yoga';
import AddStudent from './components/student/AddStudent';
import ListStudent from './components/student/ListStudent';
import ShowStudent from './components/student/ShowStudent';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
`;

const Subtitle = styled.text`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
`;

const MyButton = styled(Button)`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
`;
export default class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme="Wellness">
				<Router>
					<Container style={{paddig:0, margin:0}}>
						<Row style={{backgroundColor:'#F5F5FA'}}>
							<Col xxs={12}>
								<Container style={{padding:20}}>
									<Row>
										<Col xxs={6} style={{textAlign:'center'}}>
											<Subtitle>Tech Mahindra Test</Subtitle>
											<Title>Students GPA</Title>
											<Subtitle>By @jcczmetal</Subtitle>
										</Col>
										<Col xxs={6} style={{textAlign:'center'}}>
											<img src='./../student.svg' style={{maxWidth:'30%'}}/>
										</Col>
									</Row>
								</Container>
							</Col>
						</Row>
						<Row>
							<Col xxs={12}>
								<Container style={{padding:20}}>
									<Row>
										<Col xxs={6} style={{textAlign:'center'}}><Link to={'/student/add'} className="nav-link"><MyButton style={{width:'80%'}}>Add a student</MyButton></Link></Col>
										<Col xxs={6} style={{textAlign:'center'}}><Link to={'/student/list'} className="nav-link"><MyButton style={{width:'80%'}}>List all students</MyButton></Link></Col>
									</Row>
								</Container>
							</Col>
						</Row>
					</Container>
					<Switch>
						<Route path='/student/add' component={AddStudent} />
						<Route path='/student/list' component={ListStudent} />
						<Route path='/student/show/:id' component={ShowStudent} />
					</Switch>
				</Router>
			</ThemeProvider>
		);
	}
}
