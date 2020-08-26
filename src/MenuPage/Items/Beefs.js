import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React from 'react';
 const Beefs = (props) => {
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>Brocceli Beef</BoxTitle>
					<BoxImg src={require('../../assets/Brocceli_Beef.jpeg')}  alt="Brocceli_Beef"/>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Brocceli_Beef", "Brocceli Beef", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Szechuan Beef</BoxTitle>
					<BoxImg src={require('../../assets/Szechuan_Beef.jpeg')}  alt="Szechuan_Beef"/>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Szechuan_Beef", "Szechuan Beef", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Orange Beef</BoxTitle>
					<BoxImg src={require('../../assets/Orange_Beef.jpeg')}  alt="Orange_Beef"/>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Orange_Beef", "Orange Beef", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Honey Garlic Beef</BoxTitle>
					<BoxImg src={require('../../assets/Honey_Garlic_Beef.jpeg')}  alt="Honey_Garlic_Beef"/>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Honey_Garlic_Beef", "Honey Garlic Beef", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Ginger Beef</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Ginger Beef", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Mongolian Beef</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Mongolian Beef", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Curry Beef</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Curry Beef", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Mandarin Beef</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Mandarin Beef", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Kung Pao Beef</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Kung Pao Beef", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Spicy Sesame Beef</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Spicy Sesame Beef", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Beef with Snow Pea</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Beef with Snow Pea", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Beef with Oyster Sauce</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Beef with Oyster Sauce", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Beef with Tomatoes</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Beef with Tomatoes", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Beef with Green Pepper</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Beef with Green Pepper", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Beef Chow Yuk</BoxTitle>
					<BoxText>$11.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Beef Chow Yuk", 11.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Hunan Beef</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Hunan Beef", 11.95)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>String Bean Beef</BoxTitle>
					<BoxText>$11.95</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "String Bean Beef", 11.95)}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Beefs