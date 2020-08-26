import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React, {useState} from 'react';
 import Modal from '../../Modal/Modal'
const Rices = (props) => {
	const [Fried_RiceShowState, Fried_RiceSetShowState] = useState({ show: false})
	const Fried_RiceshowHandler = () => {Fried_RiceSetShowState({show: true});}
	const Fried_RiceShowCancelHandler = () => {Fried_RiceSetShowState({show: false});}
	const [Rice_with_VegetablesShowState, Rice_with_VegetablesSetShowState] = useState({ show: false})
	const Rice_with_VegetablesshowHandler = () => {Rice_with_VegetablesSetShowState({show: true});}
	const Rice_with_VegetablesShowCancelHandler = () => {Rice_with_VegetablesSetShowState({show: false});}
	const [Chop_SueyShowState, Chop_SueySetShowState] = useState({ show: false})
	const Chop_SueyshowHandler = () => {Chop_SueySetShowState({show: true});}
	const Chop_SueyShowCancelHandler = () => {Chop_SueySetShowState({show: false});}
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>Fried Rice</BoxTitle>
					<BoxImg src={require('../../assets/Fried_Rice.jpeg')}  alt="Fried_Rice"/>
					<BoxText>Choose House, Pork, Vegetable, Chicken, Ham, or Shrimp</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Fried_RiceShowState.show} modalClosed={Fried_RiceShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>House Special Fried Rice</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","House_Special_Fried_Rice", "House Special Fried Rice", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Pork Fried Rice</BoxTitle></td>
									<td>$8.50</td>
									<td><BoxButton onClick={props.addToCart.bind("","Pork_Fried_Rice", "Pork Fried Rice", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Fried Rice</BoxTitle></td>
									<td>$9.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Fried_Rice", "Chicken Fried Rice", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Beef Fried Rice</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Beef_Fried_Rice", "Beef Fried Rice", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Fried Rice</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Fried_Rice", "Shrimp Fried Rice", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Ham Fried Rice</BoxTitle></td>
									<td>$9.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Ham_Fried_Rice", "Ham Fried Rice", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Fried_RiceshowHandler}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Steamed Rice</BoxTitle>
					<BoxImg src={require('../../assets/Steamed_Rice.jpeg')}  alt="Steamed_Rice"/>
					<BoxText>$1.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Steamed_Rice", "Steamed Rice", 1.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Rice with Vegetables</BoxTitle>
					<BoxText>Choose Chicken, Beef, or Shrimp</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Rice_with_VegetablesShowState.show} modalClosed={Rice_with_VegetablesShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>Chicken Rice with Vegetables</BoxTitle></td>
									<td>$9.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Rice_with_Vegetables", "Chicken Rice with Vegetables", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Beef Rice with Vegetables</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Beef_Rice_with_Vegetables", "Beef Rice with Vegetables", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Rice with Vegetables</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Rice_with_Vegetables", "Shrimp Rice with Vegetables", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Rice_with_VegetablesshowHandler}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Chop Suey</BoxTitle>
					<BoxText>Choose Pork, Vegetable, Chicken, Ham, Shrimp, Meatless</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Chop_SueyShowState.show} modalClosed={Chop_SueyShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>Pork Chop Suey</BoxTitle></td>
									<td>$9.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Pork_Chop_Suey", "Pork Chop Suey", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Beef Chop Suey</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Beef_Chop_Suey", "Beef Chop Suey", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Chop Suey</BoxTitle></td>
									<td>$9.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Chop_Suey", "Chicken Chop Suey", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Chop Suey</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Chop_Suey", "Shrimp Chop Suey", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Subgum Chicken Chop Suey</BoxTitle></td>
									<td>$9.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Subgum_Chicken_Chop_Suey", "Subgum Chicken Chop Suey", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Meatless Chop Suey</BoxTitle></td>
									<td>$8.50</td>
									<td><BoxButton onClick={props.addToCart.bind("","Meatless_Chop_Suey", "Meatless Chop Suey", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Chop_SueyshowHandler}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Rices