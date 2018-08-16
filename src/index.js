import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Request from 'request';		// NPM: https://www.npmjs.com/package/request

class Tester extends React.Component {

	constructor(props) {
		super(props);

		this.state = { url	: '' };
	}

	/**
	 * Method: GET
	 * 
	 * Response: [{ ... }, ... , { ... }] - An array of todo objects.
	 */
	getTodos() {
		
	}

	/**
	 * Method: GET
	 * 
	 * id			- The todo ID.
	 * 
	 * Response: { ... } - The todo object.
	 */
	getTodo(id) {
		
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
		
	}

	render() {
		// Get all posts
		this.getTodos();

		// Get post by ID
		this.getTodo('5b72756cc370c209c9e4635f');

		// Create todo. You can change the values.
		this.addTodo("Added todo", "Test User");

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
  
