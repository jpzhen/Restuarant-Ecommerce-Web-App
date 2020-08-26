import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React, {useState} from 'react';
 import Modal from '../../Modal/Modal'
const Noodles = (props) => {
	const [Special_Chow_MeinShowState, Special_Chow_MeinSetShowState] = useState({ show: false})
	const Special_Chow_MeinshowHandler = () => {Special_Chow_MeinSetShowState({show: true});}
	const Special_Chow_MeinShowCancelHandler = () => {Special_Chow_MeinSetShowState({show: false});}
	const [Special_Lo_MeinShowState, Special_Lo_MeinSetShowState] = useState({ show: false})
	const Special_Lo_MeinshowHandler = () => {Special_Lo_MeinSetShowState({show: true});}
	const Special_Lo_MeinShowCancelHandler = () => {Special_Lo_MeinSetShowState({show: false});}
	const [Special_NoodlesShowState, Special_NoodlesSetShowState] = useState({ show: false})
	const Special_NoodlesshowHandler = () => {Special_NoodlesSetShowState({show: true});}
	const Special_NoodlesShowCancelHandler = () => {Special_NoodlesSetShowState({show: false});}
	const [Chow_MeinShowState, Chow_MeinSetShowState] = useState({ show: false})
	const Chow_MeinshowHandler = () => {Chow_MeinSetShowState({show: true});}
	const Chow_MeinShowCancelHandler = () => {Chow_MeinSetShowState({show: false});}
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>Special Chow Mein</BoxTitle>
					<BoxImg src={require('../../assets/Special_Chow_Mein.jpeg')}  alt="Special_Chow_Mein"/>
					<BoxText>Choose House, Pork, Vegetable, Chicken, Ham, or Shrimp</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Special_Chow_MeinShowState.show} modalClosed={Special_Chow_MeinShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>House Special Chow Mein</BoxTitle></td>
									<td>$11.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","House_Special_Chow_Mein", "House Special Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Special Chow Mein</BoxTitle></td>
									<td>$11.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Special_Chow_Mein", "Shrimp Special Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Special Chow Mein</BoxTitle></td>
									<td>$10.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Special_Chow_Mein", "Chicken Special Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>BBQ Pork Special Chow Mein</BoxTitle></td>
									<td>$10.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","BBQ_Pork_Special_Chow_Mein", "BBQ Pork Special Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Beef Special Chow Mein</BoxTitle></td>
									<td>$11.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Beef_Special_Chow_Mein", "Beef Special Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Vegetable Special Chow Mein</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Vegetable_Special_Chow_Mein", "Vegetable Special Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Special_Chow_MeinshowHandler}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Special Lo Mein</BoxTitle>
					<BoxText>Choose House, Pork, Vegetable, Chicken, Ham, or Shrimp</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Special_Lo_MeinShowState.show} modalClosed={Special_Lo_MeinShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>House Special Lo Mein</BoxTitle></td>
									<td>$11.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","House_Special_Lo_Mein", "House Special Lo Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Lo Mein</BoxTitle></td>
									<td>$11.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Lo_Mein", "Shrimp Lo Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Lo Mein</BoxTitle></td>
									<td>$10.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Lo_Mein", "Chicken Lo Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>BBQ Pork Lo Mein</BoxTitle></td>
									<td>$10.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","BBQ_Pork_Lo_Mein", "BBQ Pork Lo Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Beef Lo Mein</BoxTitle></td>
									<td>$11.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Beef_Lo_Mein", "Beef Lo Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Vegetable Lo Mein</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Vegetable_Lo_Mein", "Vegetable Lo Mein", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Special_Lo_MeinshowHandler}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Special Noodles</BoxTitle>
					<BoxText>Choose House, Pork, Vegetable, Chicken, Ham, or Shrimp</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Special_NoodlesShowState.show} modalClosed={Special_NoodlesShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>House Special Noodles</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","House_Special_Noodles", "House Special Noodles", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Pork Noodles</BoxTitle></td>
									<td>$8.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Pork_Noodles", "Pork Noodles", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Noodles</BoxTitle></td>
									<td>$8.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Noodles", "Chicken Noodles", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Noodle w/Vegetable</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Noodle_w/Vegetable", "Chicken Noodle w/Vegetable", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Noodle w/Vegetables</BoxTitle></td>
									<td>$10.75</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Noodle_w/Vegetables", "Shrimp Noodle w/Vegetables", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Beef Noodle with Vegetable</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Beef_Noodle_with_Vegetable", "Beef Noodle with Vegetable", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Beef Tomato Curry Noodles</BoxTitle></td>
									<td>$10.50</td>
									<td><BoxButton onClick={props.addToCart.bind("","Beef_Tomato_Curry_Noodles", "Beef Tomato Curry Noodles", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Special_NoodlesshowHandler}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Chow Mein</BoxTitle>
					<BoxText>Choose Pork, Vegetable, Chicken, Ham, Shrimp, Meatless</BoxText>
					<Modal sty={"OrderBackdrop"} cssName={"orderModal"}show={Chow_MeinShowState.show} modalClosed={Chow_MeinShowCancelHandler}>
						<table>
							<tbody>
								<tr>
									<td><BoxTitle>Pork Chow Mein</BoxTitle></td>
									<td>$9.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Pork_Chow_Mein", "Pork Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Beef Chow Mein</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Beef_Chow_Mein", "Beef Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Chicken Chow Mein</BoxTitle></td>
									<td>$9.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Chicken_Chow_Mein", "Chicken Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Shrimp Chow Mein</BoxTitle></td>
									<td>$9.95</td>
									<td><BoxButton onClick={props.addToCart.bind("","Shrimp_Chow_Mein", "Shrimp Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Subgum Chicken Chow Mein</BoxTitle></td>
									<td>$9.25</td>
									<td><BoxButton onClick={props.addToCart.bind("","Subgum_Chicken_Chow_Mein", "Subgum Chicken Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
								<tr>
									<td><BoxTitle>Meatless Chow Mein</BoxTitle></td>
									<td>$8.50</td>
									<td><BoxButton onClick={props.addToCart.bind("","Meatless_Chow_Mein", "Meatless Chow Mein", 9.95)}> add </BoxButton> </td>
								</tr>
							</tbody>
						</table>
					</Modal>
					<BoxButton onClick={Chow_MeinshowHandler}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Pan Fried Noodles</BoxTitle>
					<BoxText>$4.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Pan Fried Noodles", 4.50)}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Noodles