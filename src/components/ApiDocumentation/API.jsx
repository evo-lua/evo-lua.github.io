import React from "react";

import styles from './styles.module.css';

export const Function = ({children}) => (
	<div className={styles.apiDocumentationSection}>
		{children}
	</div>
  );

class Parameter extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		let displayName = this.props.name;
		let displayType = this.props.type;

		if(this.props.varargs) {
			displayName = "...";
			displayType = <a href="https://www.lua.org/pil/5.2.html" target="_blank" alt="Programming in Lua: Variable Arguments">varargs</a>;
		}

		return (
			<tr>
				<td className={styles.tdCounter}>{this.props.index}</td>
				<td>{displayName}</td>
				<td>{displayType ? displayType : "any"}{this.props.optional ? "?" : ""}</td>
				<td>{this.props.fallback ? this.props.fallback : ""}</td>
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
			<table className={styles.functionParametersTable}>
				<tbody className={[styles.tdCounterReset, styles.functionParametersTableBody].join(" ")}>
					<tr className={styles.functionParametersFirstRow}>
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