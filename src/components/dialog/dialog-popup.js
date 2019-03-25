import React, { Component } from 'react'
import Dialog, {DialogTitle, SlideAnimation } from 'react-native-popup-dialog';
import PropTypes from 'prop-types'

export default class DialogPopup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	show = () => {
		this.setState({ visible: true })
	}
	hide = () => {
		this.setState({ visible: false })
	}


	render() {
		let { children } = this.props;
		return (
			<Dialog
				visible={this.state.visible}
				onTouchOutside={() => {
					this.setState({ visible: false });
				}}
				dialogAnimation={new SlideAnimation({
					slideFrom: 'bottom'
				})}
				rounded={false}
				width={0.95}
				height={this.props.height}
				//dialogTitle={
				// 	<DialogTitle
				// 	title={this.props.title}
				// 	align="left"
				//   />}
			>
				{children}
			</Dialog>
		)
	}
}

DialogPopup.PropTypes = {
	children: PropTypes.node.isRequired
}