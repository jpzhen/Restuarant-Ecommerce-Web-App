import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React from 'react';
 const Seafoods = (props) => {
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>Shrimp with Snow Peas</BoxTitle>
					<BoxImg src={require('../../assets/Shrimp_with_Snow_Peas.jpeg')}  alt="Shrimp_with_Snow_Peas"/>
					<BoxText>$12.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Shrimp_with_Snow_Peas", "Shrimp with Snow Peas", 12.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Pepper Salted Shrimp</BoxTitle>
					<BoxImg src={require('../../assets/Pepper_Salted_Shrimp.jpeg')}  alt="Pepper_Salted_Shrimp"/>
					<BoxText>$14.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Pepper_Salted_Shrimp", "Pepper Salted Shrimp", 14.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Happy Family</BoxTitle>
					<BoxImg src={require('../../assets/Happy_Family.jpeg')}  alt="Happy_Family"/>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Happy_Family", "Happy Family", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Kung Pao Shrimp</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Kung Pao Shrimp", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Cashew Nut Shrimp</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Cashew Nut Shrimp", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Shrimp Chew Yuk</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Shrimp Chew Yuk", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Curry Shrimp</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Curry Shrimp", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Seafood Delight</BoxTitle>
					<BoxText>$12.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Seafood Delight", 12.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>House Special Sizzling Platter</BoxTitle>
					<BoxText>$13.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "House Special Sizzling Platter", 13.75)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Szechuan Shrimp</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Szechuan Shrimp", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Shrimp with Hot Garlic Sauce</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Shrimp with Hot Garlic Sauce", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>General Tso Shrimp</BoxTitle>
					<BoxText>$12.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "General Tso Shrimp", 12.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Shrimp with Lobster Sauce</BoxTitle>
					<BoxText>$12.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Shrimp with Lobster Sauce", 12.75)}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Seafoods