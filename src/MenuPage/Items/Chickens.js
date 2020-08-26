import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React from 'react';
 const Chickens = (props) => {
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>General Tso Chicken</BoxTitle>
					<BoxImg src={require('../../assets/General_Tso_Chicken.jpeg')}  alt="General_Tso_Chicken"/>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","General_Tso_Chicken", "General Tso Chicken", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Moo Goo Gai Pan</BoxTitle>
					<BoxImg src={require('../../assets/Moo_Goo_Gai_Pan.jpeg')}  alt="Moo_Goo_Gai_Pan"/>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Moo_Goo_Gai_Pan", "Moo Goo Gai Pan", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Cashew Nut Chicken</BoxTitle>
					<BoxImg src={require('../../assets/Cashew_Nut_Chicken.jpeg')}  alt="Cashew_Nut_Chicken"/>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Cashew_Nut_Chicken", "Cashew Nut Chicken", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Orange Chicken</BoxTitle>
					<BoxImg src={require('../../assets/Orange_Chicken.jpeg')}  alt="Orange_Chicken"/>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Orange_Chicken", "Orange Chicken", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Black Mushroom Chicken</BoxTitle>
					<BoxImg src={require('../../assets/Black_Mushroom_Chicken.jpeg')}  alt="Black_Mushroom_Chicken"/>
					<BoxText>$12.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Black_Mushroom_Chicken", "Black Mushroom Chicken", 12.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Honey Garlic Chicken</BoxTitle>
					<BoxImg src={require('../../assets/Honey_Garlic_Chicken.jpeg')}  alt="Honey_Garlic_Chicken"/>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Honey_Garlic_Chicken", "Honey Garlic Chicken", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Chicken Broccoli</BoxTitle>
					<BoxImg src={require('../../assets/Chicken_Broccoli.jpeg')}  alt="Chicken_Broccoli"/>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Chicken_Broccoli", "Chicken Broccoli", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Chicken with Hot Garlic Sauce</BoxTitle>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Chicken with Hot Garlic Sauce", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Curry Chicken</BoxTitle>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Curry Chicken", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Mandarin Chicken</BoxTitle>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Mandarin Chicken", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Lemon Chicken</BoxTitle>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Lemon Chicken", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Almond Fried Chicken</BoxTitle>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Almond Fried Chicken", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>String Bean Chicken</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "String Bean Chicken", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Shrimp and Chicken Combination</BoxTitle>
					<BoxText>$11.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Shrimp and Chicken Combination", 11.75)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Hunan Chicken</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Hunan Chicken", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Kung Pao Chicken</BoxTitle>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Kung Pao Chicken", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Szechuan Chicken</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Szechuan Chicken", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Spicy Sesame Chicken</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Spicy Sesame Chicken", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Mar Far Chicken</BoxTitle>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Mar Far Chicken", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Chicken With Snow Peas</BoxTitle>
					<BoxText>$11.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Chicken With Snow Peas", 11.75)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Chicken Chow Yuk</BoxTitle>
					<BoxText>$10.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Chicken Chow Yuk", 10.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Chicken Three Styles</BoxTitle>
					<BoxText>$14.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Chicken Three Styles", 14.50)}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Chickens