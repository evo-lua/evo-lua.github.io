import React from "react";

import styles from './styles.module.css';

export const Function = ({name, children}) => (
	<p>
		{children}
	</p>
  );

class Parameter extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<tr>
				<td className={styles.tdCounter}>{this.props.index}</td>
				<td>{this.props.name}</td>
				<td>{this.props.type ? this.props.type : "any"}{this.props.optional ? "?" : ""}</td>
				<td>{this.props.fallback ? this.props.fallback : "---"}</td>
			</tr>
		)
	}
}

class Parameters extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			lastRenderedChildIndex: 0
		}
	}
	render(){

		return(
			<table className={styles.tdCounterReset}>
				Arguments:
			<thead>
				<tr>
				</tr>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Type</th>
					<th>Fallback</th>
				</tr>
			</thead>
			<tbody>
				{
					this.props.children
				}
			</tbody>
		</table>
			)
		}
}

  export const Parameters2 = ({children}) => (
	<table>
		<thead>
			<tr>
				<th colspan="4">
					Arguments
				</th>
			</tr>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Type</th>
				<th>Fallback</th>
			</tr>
		</thead>
		<tbody>
			{
				children
			}
		</tbody>
	</table>
  );

export { Parameters, Parameter};