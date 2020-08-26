import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import React from 'react';
const Appetizers = (props) => {
	return(
		<div>
			<Container>
				<Box>
					<BoxTitle>BBQ Pork</BoxTitle>
					<BoxImg src={require('../../assets/BBQ_Pork.jpeg')}  alt="BBQ_Pork"/>
					<BoxText>$8.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","BBQ_Pork", "BBQ Pork", 8.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Spring Roll (4)</BoxTitle>
					<BoxImg src={require('../../assets/Spring_Roll.jpeg')}  alt="Spring_Roll"/>
					<BoxText>$6.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Spring_Roll", "Spring Roll (4)", 6.75)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Pork Egg Roll (3)</BoxTitle>
					<BoxImg src={require('../../assets/Pork_Egg_Roll.jpeg')}  alt="Pork_Egg_Roll"/>
					<BoxText>$7.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Pork_Egg_Roll", "Pork Egg Roll (3)", 7.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Pot Sticker (6)</BoxTitle>
					<BoxImg src={require('../../assets/Pot_Sticker.jpeg')}  alt="Pot_Sticker"/>
					<BoxText>$7.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Pot_Sticker", "Pot Sticker (6)", 7.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Crab Puffs (12)</BoxTitle>
					<BoxImg src={require('../../assets/Crab_Puffs.jpeg')}  alt="Crab_Puffs"/>
					<BoxText>$7.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Crab_Puffs", "Crab Puffs (12)", 7.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Fried Shrimp (16)</BoxTitle>
					<BoxImg src={require('../../assets/Fried_Shrimp.jpeg')}  alt="Fried_Shrimp"/>
					<BoxText>$10.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Fried_Shrimp", "Fried Shrimp (16)", 10.75)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Egg Flower Soup</BoxTitle>
					<BoxImg src={require('../../assets/Egg_Flower_Soup.jpeg')}  alt="Egg_Flower_Soup"/>
					<BoxText>$1.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Egg_Flower_Soup", "Egg Flower Soup", 1.75)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Hot and Sour Soup</BoxTitle>
					<BoxImg src={require('../../assets/Hot_and_Sour_Soup.jpeg')}  alt="Hot_and_Sour_Soup"/>
					<BoxText>$1.75</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Hot_and_Sour_Soup", "Hot and Sour Soup", 1.75)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Wonton Soup</BoxTitle>
					<BoxImg src={require('../../assets/Wonton_Soup.jpeg')}  alt="Wonton_Soup"/>
					<BoxText>$8.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","Wonton_Soup", "Wonton Soup", 8.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Appetizers Plate</BoxTitle>
					<BoxText>$10.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Appetizers Plate", 10.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Crispy Fried Wonton (Mealess 16)</BoxTitle>
					<BoxText>$6.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Crispy Fried Wonton (Mealess 16)", 6.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Crispy Fried Chicken Wing</BoxTitle>
					<BoxText>$7.25</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Crispy Fried Chicken Wing", 7.25)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>Chinese Green Soup (Meatless)</BoxTitle>
					<BoxText>$5.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "Chinese Green Soup (Meatless)", 5.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>House Special Soup</BoxTitle>
					<BoxText>$8.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "House Special Soup", 8.50)}> add </BoxButton>
				</Box>
				<Box>
					<BoxTitle>War Wonton Noodle Soup</BoxTitle>
					<BoxText>$9.50</BoxText>
					<BoxButton onClick={props.addToCart.bind("","placeholder", "War Wonton Noodle Soup", 9.50)}> add </BoxButton>
				</Box>
			</Container>
		</div>
	)
};
export default Appetizers