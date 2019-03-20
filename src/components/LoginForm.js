import React, { Component } from 'react'
import { Button, Form, Container, Divider, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { userActions, alertActions } from '../redux/actions';
import { history } from '../helpers/'
import TopHeader from './Header'

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			submitted: false,
			isOpen: false
		};

		const { dispatch } = this.props
		history.listen((location, action) => {
			dispatch(alertActions.clear())
		})

		this.props.dispatch(userActions.logout());

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	LoginAdmin() {
		if (this.state.email === 'admin' && this.state.password === 'admin') {
			window.location = "http://localhost:3000/admin/admin";
			console.log('admin')
		}
	}
	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		console.log(this.state);
		e.preventDefault();
		this.LoginAdmin();
		this.setState({ submitted: true });
		const { email, password } = this.state;
		const { dispatch } = this.props;
		if (email && password) {
			let v = dispatch(userActions.login(email, password));
			console.log(v)
		}
	}

	componentWillReceiveProps() {
		const { alert } = this.props;
		console.log('alert', alert.message)
	}

	render() {
		const { alert, loggingIn } = this.props;
		const { email, password, submitted } = this.state;
		console.log('alert', alert.message)

		return (
			<React.Fragment>

				<TopHeader />
				<Container>
					<Divider hidden />
					<Header size='huge'>Login</Header>
					{alert.message &&
						<div className={`alert ${alert.type}`}>{alert.message}</div>
					}

					<Form onSubmit={this.handleSubmit}>
						<Form.Field>
							<label>Email</label>
							<input name="email" type="text" placeholder='Email' onChange={this.handleChange} />
							{submitted && !email &&
								<div className="help-block">Email is required</div>
							}
						</Form.Field>
						<Form.Field>
							<label>Password</label>
							<input name="password" type="password" placeholder='Password' onChange={this.handleChange} />
							{submitted && !password &&
								<div className="help-block">Password is required</div>
							}
						</Form.Field>

						<Button positive fluid type="submit">Login</Button>
						{loggingIn &&
							<img alt="loading.." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
						}

						<NavLink to='/register'>Don't have an account yet? register here.</NavLink>
					</Form>
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
					<Divider hidden />
				</Container>
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	const { loggedIn } = state.authentication;
	return {
		loggedIn,
		alert
	}
}

export default connect(mapStateToProps)(LoginForm);
