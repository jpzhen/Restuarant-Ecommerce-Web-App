import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React from 'react';
 const Vegetables = (props) => {
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>Green Jade Vegetable</BoxTitle>
					<BoxImg src={require('../../assets/Green_Jade_Vegetable.jpeg')}  alt="Green_Jade_Vegetable"/>
					<BoxText>$10.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Green_Jade_Vegetable", "Green Jade Vegetable", 10.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Vegetable Deluxe</BoxTitle>
					<BoxText>$10.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Vegetable Deluxe", 10.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Bean Curd Family Style</BoxTitle>
					<BoxText>$10.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Bean Curd Family Style", 10.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Bean Curd Szechuan Style</BoxTitle>
					<BoxText>$10.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Bean Curd Szechuan Style", 10.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Sauteed String Bean</BoxTitle>
					<BoxText>$10.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Sauteed String Bean", 10.25)}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Vegetables