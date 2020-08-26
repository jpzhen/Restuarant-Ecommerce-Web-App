import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React, {useState} from 'react';
 import Modal from '../../Modal/Modal'
const SweetandSours = (props) => {
	const [Sweet_and_SourShowState, Sweet_and_SourSetShowState] = useState({ show: false})
	const Sweet_and_SourshowHandler = () => {Sweet_and_SourSetShowState({show: true});}
	const Sweet_and_SourShowCancelHandler = () => {Sweet_and_SourSetShowState({show: false});}
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>Sweet and Sour</BoxTitle>
					<BoxImg src={require('../../assets/Sweet_and_Sour.jpeg')}  alt="Sweet_and_Sour"/>
					<BoxText>Choose Shrimp, Pork, Chicken, or Spareribs</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Sweet_and_SourShowState.show} modalClosed={Sweet_and_SourShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>Sweet and Sour Shrimp</BoxTitle></td>
									<td>$11.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Sweet_and_Sour_Shrimp", "Sweet and Sour Shrimp", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Sweet and Sour Pork</BoxTitle></td>
									<td>$10.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Sweet_and_Sour_Pork", "Sweet and Sour Pork", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Sweet and Sour Chicken</BoxTitle></td>
									<td>$10.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Sweet_and_Sour_Chicken", "Sweet and Sour Chicken", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Sweet and Sour Spareribs</BoxTitle></td>
									<td>$10.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Sweet_and_Sour_Spareribs", "Sweet and Sour Spareribs", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Sweet_and_SourshowHandler}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default SweetandSours