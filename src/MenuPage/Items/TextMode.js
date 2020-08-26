import React, {useState} from 'react';
import { TextTable, TextBox, TextBoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';
import Modal from '../../Modal/Modal';

const TextMode = (props) => {
    const [showState, setShowState] = useState({ show: false })
	const showHandler = (iPicture, iName, iPrice) => {
        let textImg = "";
        try {
            textImg = (<TextBoxImg src={require('../../assets/' + iPicture +'.jpeg')}  alt={iName}/>)
        }
        catch (err) {
            textImg = (<TextBoxImg src={require('../../assets/placeholder.jpeg')} alt="placeholder"/>)
        }
        setModalItemState({
            picture: iPicture,
            name:iName,
            price:iPrice,
            img: textImg
        })
        setShowState({show: true});
    }
    const ShowCancelHandler = () => {setShowState({show: false});}
    const [ModalItemState, setModalItemState] = useState({
        picture: "",
        name: "",
        price: 0
    })

	return(
		<div>
            <Modal sty={"OrderBackdrop"} cssName={"TextModal"} show={showState.show} modalClosed={ShowCancelHandler}> 
            <TextBox> 
                <BoxTitle> {ModalItemState.name} </BoxTitle>
                {ModalItemState.img}
                <BoxText>$ {ModalItemState.price}</BoxText>
                <BoxButton onClick={props.addToCart.bind("",ModalItemState.picture, ModalItemState.name, ModalItemState.price)}> add </BoxButton>
            </TextBox>
            </Modal>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Appetizers"className="tdRight"> <h2 className="SubtitleText">Appetizers</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Appetizers_Plate", "Appetizers Plate",10.25)}>Appetizers Plate </span></td>
						<td className="dots"><span> $10.25 </span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"BBQ_Pork", "BBQ Pork",8.25)}>BBQ Pork </span></td>
						<td className="dots"><span> $8.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Spring_Roll", "Spring Roll (4)",6.75)}>Spring Roll (4) </span></td>
						<td className="dots"><span> $6.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pork_Egg_Roll", "Pork Egg Roll (3)",7.50)}>Pork Egg Roll (3) </span></td>
						<td className="dots"><span> $7.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Crispy_Fried_Wonton", "Crispy Fried Wonton (Mealess 16)",6.25)}>Crispy Fried Wonton (Mealess 16) </span></td>
						<td className="dots"><span> $6.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pot_Sticker", "Pot Sticker (6)",7.25)}>Pot Sticker (6) </span></td>
						<td className="dots"><span> $7.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Crispy_Fried_Chicken_Wing", "Crispy Fried Chicken Wing",7.25)}>Crispy Fried Chicken Wing </span></td>
						<td className="dots"><span> $7.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Crab_Puffs", "Crab Puffs (12)",7.50)}>Crab Puffs (12) </span></td>
						<td className="dots"><span> $7.50 </span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Fried_Shrimp", "Fried Shrimp (16)",10.75)}>Fried Shrimp (16) </span></td>
						<td className="dots"><span> $10.75 </span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Egg_Flower_Soup", "Egg Flower Soup",1.75)}>Egg Flower Soup </span></td>
						<td className="dots"><span> $1.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Hot_&_Sour_Soup", "Hot & Sour Soup",1.75)}>Hot & Sour Soup </span></td>
						<td className="dots"><span> $1.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chinese_Green_Soup", "Chinese Green Soup (Meatless)",5.50)}>Chinese Green Soup (Meatless) </span></td>
						<td className="dots"><span> $5.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"House_Special_Soup", "House Special Soup",8.50)}>House Special Soup </span></td>
						<td className="dots"><span> $8.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Wonton_Soup", "Wonton Soup",8.50)}>Wonton Soup </span></td>
						<td className="dots"><span> $8.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"War_Wonton_Noodle_Soup", "War Wonton Noodle Soup",9.50)}>War Wonton Noodle Soup </span></td>
						<td className="dots"><span> $9.50</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Rices"className="tdRight"> <h2 className="SubtitleText">Rices</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"House_Special_Fried_Rice", "House Special Fried Rice",9.95)}>House Special Fried Rice </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pork_Fried_Rice", "Pork Fried Rice",8.50)}>Pork Fried Rice </span></td>
						<td className="dots"><span> $8.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Fried_Rice", "Chicken Fried Rice",9.25)}>Chicken Fried Rice </span></td>
						<td className="dots"><span> $9.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Fried_Rice", "Beef Fried Rice",9.95)}>Beef Fried Rice </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Fried_Rice", "Shrimp Fried Rice",9.95)}>Shrimp Fried Rice </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Ham_Fried_Rice", "Ham Fried Rice",9.25)}>Ham Fried Rice </span></td>
						<td className="dots"><span> $9.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Steamed_Rice", "Steamed Rice",1.95)}>Steamed Rice </span></td>
						<td className="dots"><span> $1.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Rice_with_Vegetables", "Chicken Rice with Vegetables",9.75)}>Chicken Rice with Vegetables </span></td>
						<td className="dots"><span> $9.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Rice_with_Vegetables", "Beef Rice with Vegetables",9.95)}>Beef Rice with Vegetables </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Rice_with_Vegetables", "Shrimp Rice with Vegetables",9.95)}>Shrimp Rice with Vegetables </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Chop Suey"className="tdRight"> <h2 className="SubtitleText">Chop Suey</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pork_Chop_Suey", "Pork Chop Suey",9.25)}>Pork Chop Suey </span></td>
						<td className="dots"><span> $9.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Chop_Suey", "Beef Chop Suey",9.95)}>Beef Chop Suey </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Chop_Suey", "Chicken Chop Suey",9.25)}>Chicken Chop Suey </span></td>
						<td className="dots"><span> $9.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Chop_Suey", "Shrimp Chop Suey",9.95)}>Shrimp Chop Suey </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Subgum_Chicken_Chop_Suey", "Subgum Chicken Chop Suey",9.25)}>Subgum Chicken Chop Suey </span></td>
						<td className="dots"><span> $9.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Meatless_Chop_Suey", "Meatless Chop Suey",8.50)}>Meatless Chop Suey </span></td>
						<td className="dots"><span> $8.50</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Vegetables"className="tdRight"> <h2 className="SubtitleText">Vegetables</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Vegetable_Deluxe", "Vegetable Deluxe",10.25)}>Vegetable Deluxe </span></td>
						<td className="dots"><span> $10.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Green_Jade_Vegetable", "Green Jade Vegetable",10.25)}>Green Jade Vegetable </span></td>
						<td className="dots"><span> $10.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Bean_Curd_Family_Style", "Bean Curd Family Style",10.25)}>Bean Curd Family Style </span></td>
						<td className="dots"><span> $10.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Bean_Curd_Szechuan_Style", "Bean Curd Szechuan Style",10.25)}>Bean Curd Szechuan Style </span></td>
						<td className="dots"><span> $10.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Sauteed_String_Bean", "Sauteed String Bean",10.25)}>Sauteed String Bean </span></td>
						<td className="dots"><span> $10.25</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Sweet & Sour"className="tdRight"> <h2 className="SubtitleText">Sweet & Sour</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Sweet_&_Sour_Shrimp", "Sweet & Sour Shrimp",11.75)}>Sweet & Sour Shrimp </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Sweet_&_Sour_Pork", "Sweet & Sour Pork",10.25)}>Sweet & Sour Pork </span></td>
						<td className="dots"><span> $10.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Sweet_&_Sour_Chicken", "Sweet & Sour Chicken",10.25)}>Sweet & Sour Chicken </span></td>
						<td className="dots"><span> $10.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Sweet_&_Sour_Spareribs", "Sweet & Sour Spareribs",10.95)}>Sweet & Sour Spareribs </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Chickens"className="tdRight"> <h2 className="SubtitleText">Chickens</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"General_Tso_Chicken", "General Tso Chicken",11.50)}>General Tso Chicken </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Moo_Goo_Gai_Pan", "Moo Goo Gai Pan",10.95)}>Moo Goo Gai Pan </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_with_Hot_Garlic_Sauce", "Chicken with Hot Garlic Sauce",10.95)}>Chicken with Hot Garlic Sauce </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Cashew_Nut_Chicken", "Cashew Nut Chicken",10.95)}>Cashew Nut Chicken </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Curry_Chicken", "Curry Chicken",10.95)}>Curry Chicken </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Mandarin_Chicken", "Mandarin Chicken",10.95)}>Mandarin Chicken </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Orange_Chicken", "Orange Chicken",11.50)}>Orange Chicken </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Lemon_Chicken", "Lemon Chicken",10.95)}>Lemon Chicken </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Almond_Fried_Chicken", "Almond Fried Chicken",10.95)}>Almond Fried Chicken </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"String_Bean_Chicken", "String Bean Chicken",11.50)}>String Bean Chicken </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_&_Chicken_Combination", "Shrimp & Chicken Combination",11.75)}>Shrimp & Chicken Combination </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Black_Mushroom_Chicken", "Black Mushroom Chicken",12.25)}>Black Mushroom Chicken </span></td>
						<td className="dots"><span> $12.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Hunan_Chicken", "Hunan Chicken",11.50)}>Hunan Chicken </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Kung_Pao_Chicken", "Kung Pao Chicken",10.95)}>Kung Pao Chicken </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Szechuan_Chicken", "Szechuan Chicken",11.50)}>Szechuan Chicken </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Spicy_Sesame_Chicken", "Spicy Sesame Chicken",11.50)}>Spicy Sesame Chicken </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Mar_Far_Chicken", "Mar Far Chicken",10.95)}>Mar Far Chicken </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Honey_Garlic_Chicken", "Honey Garlic Chicken",11.50)}>Honey Garlic Chicken </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_With_Snow_Peas", "Chicken With Snow Peas",11.75)}>Chicken With Snow Peas </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Chow_Yuk", "Chicken Chow Yuk",10.95)}>Chicken Chow Yuk </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Broccoli", "Chicken Broccoli",10.95)}>Chicken Broccoli </span></td>
						<td className="dots"><span> $10.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Three_Styles", "Chicken Three Styles",14.50)}>Chicken Three Styles </span></td>
						<td className="dots"><span> $14.50</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Seafoods"className="tdRight"> <h2 className="SubtitleText">Seafoods</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Kung_Pao_Shrimp", "Kung Pao Shrimp",11.95)}>Kung Pao Shrimp </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Cashew_Nut_Shrimp", "Cashew Nut Shrimp",11.95)}>Cashew Nut Shrimp </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Chew_Yuk", "Shrimp Chew Yuk",11.95)}>Shrimp Chew Yuk </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Curry_Shrimp", "Curry Shrimp",11.95)}>Curry Shrimp </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_with_Snow_Peas", "Shrimp with Snow Peas",12.25)}>Shrimp with Snow Peas </span></td>
						<td className="dots"><span> $12.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Seafood_Delight", "Seafood Delight",12.95)}>Seafood Delight </span></td>
						<td className="dots"><span> $12.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pepper_Salted_Shrimp", "Pepper Salted Shrimp",14.95)}>Pepper Salted Shrimp </span></td>
						<td className="dots"><span> $14.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"House_Special_Sizzling_Platter", "House Special Sizzling Platter",13.75)}>House Special Sizzling Platter </span></td>
						<td className="dots"><span> $13.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Happy_Family", "Happy Family",11.95)}>Happy Family </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Szechuan_Shrimp", "Szechuan Shrimp",11.95)}>Szechuan Shrimp </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_with_Hot_Garlic_Sauce", "Shrimp with Hot Garlic Sauce",11.95)}>Shrimp with Hot Garlic Sauce </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"General_Tso_Shrimp", "General Tso Shrimp",12.95)}>General Tso Shrimp </span></td>
						<td className="dots"><span> $12.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_with_Lobster_Sauce", "Shrimp with Lobster Sauce",12.75)}>Shrimp with Lobster Sauce </span></td>
						<td className="dots"><span> $12.75</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Beefs"className="tdRight"> <h2 className="SubtitleText">Beefs</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Ginger_Beef", "Ginger Beef",11.95)}>Ginger Beef </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Broccoli_Beef", "Broccoli Beef",11.50)}>Broccoli Beef </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Mongolian_Beef", "Mongolian Beef",11.95)}>Mongolian Beef </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Curry_Beef", "Curry Beef",11.50)}>Curry Beef  </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Mandarin_Beef", "Mandarin Beef",11.50)}>Mandarin Beef </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Kung_Pao_Beef", "Kung Pao Beef",11.50)}>Kung Pao Beef </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Szechuan_Beef", "Szechuan Beef",11.95)}>Szechuan Beef </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Spicy_Sesame_Beef", "Spicy Sesame Beef",11.95)}>Spicy Sesame Beef </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Orange_Beef", "Orange Beef",11.95)}>Orange Beef </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_with_Snow_Pea", "Beef with Snow Pea",11.95)}>Beef with Snow Pea </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_with_Oyster_Sauce", "Beef with Oyster Sauce",11.50)}>Beef with Oyster Sauce </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_with_Tomatoes", "Beef with Tomatoes",11.50)}>Beef with Tomatoes </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_with_Green_Pepper", "Beef with Green Pepper",11.50)}>Beef with Green Pepper </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Chow_Yuk", "Beef Chow Yuk",11.50)}>Beef Chow Yuk </span></td>
						<td className="dots"><span> $11.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Hunan_Beef", "Hunan Beef",11.95)}>Hunan Beef </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Honey_Garlic_Beef", "Honey Garlic Beef",11.95)}>Honey Garlic Beef </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"String_Bean_Beef", "String Bean Beef",11.95)}>String Bean Beef </span></td>
						<td className="dots"><span> $11.95</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Porks"className="tdRight"> <h2 className="SubtitleText">Porks</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Twice_Cooked_Pork", "Twice Cooked Pork",10.50)}>Twice Cooked Pork </span></td>
						<td className="dots"><span> $10.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"BBQ_Pork_Almondine", "BBQ Pork Almondine",10.50)}>BBQ Pork Almondine </span></td>
						<td className="dots"><span> $10.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"String_Bean_BBQ_Pork", "String Bean BBQ Pork",11.25)}>String Bean BBQ Pork</span></td>
						<td className="dots"><span> $11.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"BBQ_Pork_Chow_Yuk", "BBQ Pork Chow Yuk",10.75)}>BBQ Pork Chow Yuk </span></td>
						<td className="dots"><span> $10.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"BBO_Pork_with_Snow_Peas", "BBO Pork with Snow Peas",11.25)}>BBO Pork with Snow Peas </span></td>
						<td className="dots"><span> $11.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Black_Mushroom_Pork", "Black Mushroom Pork",12.25)}>Black Mushroom Pork </span></td>
						<td className="dots"><span> $12.25</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Special chow mein"className="tdRight"> <h2 className="SubtitleText">Special chow mein</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"House_Special_Chow_Mein", "House Special Chow Mein",11.75)}>House Special Chow Mein </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Special_Chow_Mein", "Shrimp Special Chow Mein",11.75)}>Shrimp Special Chow Mein </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Special_Chow_Mein", "Chicken Special Chow Mein",10.75)}>Chicken Special Chow Mein </span></td>
						<td className="dots"><span> $10.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"BBQ_Pork_Special_Chow_Mein", "BBQ Pork Special Chow Mein",10.75)}>BBQ Pork Special Chow Mein </span></td>
						<td className="dots"><span> $10.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Special_Chow_Mein", "Beef Special Chow Mein",11.75)}>Beef Special Chow Mein </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Vegetable_Special_Chow_Mein", "Vegetable Special Chow Mein",9.95)}>Vegetable Special Chow Mein </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Special lo mein"className="tdRight"> <h2 className="SubtitleText">Special lo mein</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"House_Special_Lo_Mein", "House Special Lo Mein",11.75)}>House Special Lo Mein </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Lo_Mein", "Shrimp Lo Mein",11.75)}>Shrimp Lo Mein </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Lo_Mein", "Chicken Lo Mein",10.75)}>Chicken Lo Mein </span></td>
						<td className="dots"><span> $10.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"BBQ_Pork_Lo_Mein", "BBQ Pork Lo Mein",10.75)}>BBQ Pork Lo Mein </span></td>
						<td className="dots"><span> $10.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Lo_Mein", "Beef Lo Mein",11.75)}>Beef Lo Mein </span></td>
						<td className="dots"><span> $11.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Vegetable_Lo_Mein", "Vegetable Lo Mein",9.95)}>Vegetable Lo Mein </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Special noodles"className="tdRight"> <h2 className="SubtitleText">Special noodles</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"House_Special_Noodles", "House Special Noodles",9.95)}>House Special Noodles </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pork_Noodles", "Pork Noodles",8.25)}>Pork Noodles </span></td>
						<td className="dots"><span> $8.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Noodles", "Chicken Noodles",8.25)}>Chicken Noodles </span></td>
						<td className="dots"><span> $8.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Noodle_with_Vegetable", "Beef Noodle with Vegetable",9.95)}>Beef Noodle with Vegetable </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Tomato_Curry_Noodles", "Beef Tomato Curry Noodles",10.50)}>Beef Tomato Curry Noodles </span></td>
						<td className="dots"><span> $10.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Noodle_with_Vegetable", "Chicken Noodle with Vegetable",9.95)}>Chicken Noodle with Vegetable </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Noodle_with_Vegetables", "Shrimp Noodle with Vegetables",10.75)}>Shrimp Noodle with Vegetables </span></td>
						<td className="dots"><span> $10.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pan_Fried_Noodles", "Pan Fried Noodles",4.50)}>Pan Fried Noodles </span></td>
						<td className="dots"><span> $4.50</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Chow mein"className="tdRight"> <h2 className="SubtitleText">Chow mein</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pork_Chow_Mein", "Pork Chow Mein",9.25)}>Pork Chow Mein </span></td>
						<td className="dots"><span> $9.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Beef_Chow_Mein", "Beef Chow Mein",9.95)}>Beef Chow Mein </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Chow_Mein", "Chicken Chow Mein",9.25)}>Chicken Chow Mein </span></td>
						<td className="dots"><span> $9.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Chow_Mein", "Shrimp Chow Mein",9.95)}>Shrimp Chow Mein </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Subgum_Chicken_Chow_Mein", "Subgum Chicken Chow Mein",9.25)}>Subgum Chicken Chow Mein </span></td>
						<td className="dots"><span> $9.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Meatless_Chow_Mein", "Meatless Chow Mein",8.50)}>Meatless Chow Mein </span></td>
						<td className="dots"><span> $8.50</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Egg Foo Young"className="tdRight"> <h2 className="SubtitleText">Egg Foo Young</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Pork_Foo_Young", "Pork Foo Young",8.25)}>Pork Foo Young </span></td>
						<td className="dots"><span> $8.25</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Foo_Young", "Chicken Foo Young",9.50)}>Chicken Foo Young </span></td>
						<td className="dots"><span> $9.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Foo_Young", "Shrimp Foo Young",9.95)}>Shrimp Foo Young </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Ham_Foo_Young", "Ham Foo Young",9.50)}>Ham Foo Young </span></td>
						<td className="dots"><span> $9.50</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Vegetable_Foo_Young", "Vegetable Foo Young",8.25)}>Vegetable Foo Young </span></td>
						<td className="dots"><span> $8.25</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
			<div className="FoodBlockText">
				<TextTable>
				<tbody>
					<tr>
						<td id="Chow Don"className="tdRight"> <h2 className="SubtitleText">Chow Don</h2></td> 
						<td> <hr className="CategoryBar"/> </td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"House_Special_Chow_Don", "House Special Chow Don",10.75)}>House Special Chow Don </span></td>
						<td className="dots"><span> $10.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Shrimp_Chow_Don", "Shrimp Chow Don",10.75)}>Shrimp Chow Don </span></td>
						<td className="dots"><span> $10.75</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"BBQ_Pork_Chow_Don", "BBQ Pork Chow Don",9.95)}>BBQ Pork Chow Don </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Chicken_Chow_Don", "Chicken Chow Don",9.95)}>Chicken Chow Don </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Ham_Chow_Don", "Ham Chow Don",9.95)}>Ham Chow Don </span></td>
						<td className="dots"><span> $9.95</span></td>
					</tr>
					<tr>
						<td className="dots"><span style={{cursor:"pointer"}} onClick={showHandler.bind(this,"Meatless_Chow_Don", "Meatless Chow Don",9.75)}>Meatless Chow Don </span></td>
						<td className="dots"><span> $9.75</span></td>
					</tr>
					</tbody>
				</TextTable>
			</div>
		</div>
	)
};
export default TextMode
