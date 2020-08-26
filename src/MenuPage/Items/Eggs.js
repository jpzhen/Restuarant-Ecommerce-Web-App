import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React, {useState} from 'react';
 import Modal from '../../Modal/Modal'
const Eggs = (props) => {
	const [Egg_Foo_YoungShowState, Egg_Foo_YoungSetShowState] = useState({ show: false})
	const Egg_Foo_YoungshowHandler = () => {Egg_Foo_YoungSetShowState({show: true});}
	const Egg_Foo_YoungShowCancelHandler = () => {Egg_Foo_YoungSetShowState({show: false});}
	const [Special_Chow_DonShowState, Special_Chow_DonSetShowState] = useState({ show: false})
	const Special_Chow_DonshowHandler = () => {Special_Chow_DonSetShowState({show: true});}
	const Special_Chow_DonShowCancelHandler = () => {Special_Chow_DonSetShowState({show: false});}
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>Egg Foo Young</BoxTitle>
					<BoxText>Choose Pork, Vegetable, Chicken, Ham, or Shrimp</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Egg_Foo_YoungShowState.show} modalClosed={Egg_Foo_YoungShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>Pork Foo Young</BoxTitle></td>
									<td>$8.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Pork_Foo_Young", "Pork Foo Young", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Foo Young</BoxTitle></td>
									<td>$9.50</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Foo_Young", "Chicken Foo Young", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Foo Young</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Foo_Young", "Shrimp Foo Young", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Ham Foo Young</BoxTitle></td>
									<td>$9.50</td>
									<td><BoxButton onClick={props.addToCart.bind("","Ham_Foo_Young", "Ham Foo Young", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Vegetable Foo Young</BoxTitle></td>
									<td>$8.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Vegetable_Foo_Young", "Vegetable Foo Young", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Egg_Foo_YoungshowHandler}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Special Chow Don</BoxTitle>
					<BoxText>Choose House, Pork, Vegetable, Chicken, Ham, or Shrimp</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Special_Chow_DonShowState.show} modalClosed={Special_Chow_DonShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>House Special Chow Don</BoxTitle></td>
									<td>$10.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","House_Special_Chow_Don", "House Special Chow Don", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Chow Don</BoxTitle></td>
									<td>$10.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Chow_Don", "Shrimp Chow Don", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>BBQ Pork Chow Don</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","BBQ_Pork_Chow_Don", "BBQ Pork Chow Don", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Chow Don</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Chow_Don", "Chicken Chow Don", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Ham Chow Don</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Ham_Chow_Don", "Ham Chow Don", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Meatless Chow Don</BoxTitle></td>
									<td>$9.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Meatless_Chow_Don", "Meatless Chow Don", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Special_Chow_DonshowHandler}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Eggs