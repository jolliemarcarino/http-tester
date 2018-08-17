import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import request from 'request';		// NPM: https://www.npmjs.com/package/request

class Tester extends React.Component {
	state = {
		url: 'http://rest-tester.ap-northeast-1.elasticbeanstalk.com/api/v1/todo'
	}

	handleResponse = (error, response, body) => {
		// Print the error if one occurred
		console.log('error:', error); 

		// Print the response status code if a response was received
		console.log('statusCode:', response && response.statusCode); 

		// Print the response body
		console.log('body:', body); 
	}

	/**
	 * Method: GET
	 * 
	 * Response: [{ ... }, ... , { ... }] - An array of todo objects.
	 */
	getTodos = () => {
		const { url } = this.state;
		console.log(`getTodos`);

		request(url, this.handleResponse);
	}

	/**
	 * Method: GET
	 * 
	 * id			- The todo ID.
	 * 
	 * Response: { ... } - The todo object.
	 */
	getTodo = (id) => {
		const { url } = this.state;
		console.log(`>> getTodo/?id=${id}`);

		request(url.concat(`?id=${id}`), this.handleResponse);
	}

	/**
	 * Method: POST
	 * 
	 * description	- Required. The todo description.
	 * assignee		- Required. The todo assignee.
	 * 
	 * Response: { ... } - The todo object.
	 */
	addTodo(description, assignee) {
		const { url } = this.state;
		console.log(`>> addTodo`);
		
		const body = { description, assignee };
		request.post(url, { form: body }, this.handleResponse);
	}

	/**
	 * Method: PATCH
	 * 
	 * id			- Required. The todo ID.
	 * description	- Optional. The todo description.
	 * assignee		- Optional. The todo assignee.
	 * status		- Optional. Valid values are 'completed' or 'onhold'
	 * 
	 * Response: { updated : true } - If successfully deleted.
	 */
	updateTodo(id) {
		// update the status to 'completed'
		const { url } = this.state;
		console.log(`>> updateTodo`);

		const body = { id, description: 'yoga was here', status: 'completed' };
		request.patch(url, { form: body }, this.handleResponse);
	}

	/**
	 * This method only does a soft delete. It updates the status to deleted, so you can see in getTodos()
	 * Method: DELETE
	 * 
	 * id			- Required. The todo ID.
	 * 
	 * Response: { deleted : true } - If successfully deleted.
	 */
	deleteTodo(id) {
		const { url } = this.state;
		console.log(`>> deleteTodo`);

		request.del(url.concat(`?id=${id}`), this.handleResponse);
	}

	render() {
		// Get all posts
		this.getTodos();

		// Get post by ID
		this.getTodo('5b72756cc370c209c9e4635f');

		// Create todo. You can change the values.
		this.addTodo("Lontong", "Kuda");

		// Update todo. You can change the ID.
		this.updateTodo('5b72756cc370c209c9e4635f');

		// Delete todo. You can change the ID.
		this.deleteTodo('5b72756cc370c209c9e4635f');

	  return (
		<div></div>
	  );
	}
}
  
ReactDOM.render(
	<Tester />,
	document.getElementById('root')
);
  
