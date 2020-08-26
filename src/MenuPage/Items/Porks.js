import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React from 'react';
 const Porks = (props) => {
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>Twice Cooked Pork</BoxTitle>
					<BoxText>$10.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Twice Cooked Pork", 10.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>BBQ Pork Almondine</BoxTitle>
					<BoxText>$10.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "BBQ Pork Almondine", 10.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>String Bean BBQ Pork</BoxTitle>
					<BoxText>$11.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "String Bean BBQ Pork", 11.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>BBQ Pork Chow Yuk</BoxTitle>
					<BoxText>$10.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "BBQ Pork Chow Yuk", 10.75)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>BBO Pork with Snow Peas</BoxTitle>
					<BoxText>$11.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "BBO Pork with Snow Peas", 11.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Black Mushroom Pork</BoxTitle>
					<BoxText>$12.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Black Mushroom Pork", 12.25)}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Porks