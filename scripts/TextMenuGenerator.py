import os
menu = open('noMenu.txt', 'r')
jsFile = open('../restprojv1/src/MenuPage/Items/TextMode.js', 'w')
slaceN = "\n"
pictures = os.listdir('../restprojv1/src/assets/')

jsFile.write("import React from 'react';" + slaceN)
jsFile.write("import {TextTable} from '../../utils/HomeStyle';" + slaceN)
jsFile.write(" const TextMode = (props) => {" + slaceN)
jsFile.write("	return(" + slaceN)
jsFile.write("		<div>" + slaceN)

for line in menu:
    newLine = line.strip().split("-")
    if newLine[0] != '' and len(newLine) == 1:
        jsFile.write("\t\t\t<div className=\"FoodBlockText\">" + slaceN)
        jsFile.write("\t\t\t\t<TextTable>" + slaceN)
        jsFile.write("\t\t\t\t<tbody>" + slaceN)
        jsFile.write("\t\t\t\t\t<tr>" + slaceN)
        jsFile.write("\t\t\t\t\t\t<td id=\""+ newLine[0] +"\"className=\"tdRight\"> <h2 className=\"SubtitleText\">" + newLine[0] + "</h2></td> " + slaceN)
        jsFile.write("\t\t\t\t\t\t<td> <hr className=\"CategoryBar\"/> </td>" + slaceN)
        jsFile.write("\t\t\t\t\t</tr>" + slaceN)

    elif newLine[0] == '':
        jsFile.write("\t\t\t\t\t</tbody>" + slaceN)
        jsFile.write("\t\t\t\t</TextTable>" + slaceN)
        jsFile.write("\t\t\t</div>" + slaceN)
    else:
        jsFile.write("\t\t\t\t\t<tr>" + slaceN)
        picName = ""
        if "(" or ")" in newLine[1]:
            picName = "_".join(newLine[0].split("(")[0].split())
        else:
            picName = "_".newLine[0].split()
        jsFile.write("\t\t\t\t\t\t<td className=\"dots\"><span style={{cursor:\"pointer\"}} onClick={showHandler.bind(this,\"" + picName + "\", \"" + newLine[0].strip() + "\"," + newLine[1].strip(" ").strip("$") + ")}>" + newLine[0] + "</span></td>" + slaceN)
        jsFile.write("\t\t\t\t\t\t<td className=\"dots\"><span>" + newLine[1] + "</span></td>" + slaceN)
        jsFile.write("\t\t\t\t\t</tr>" + slaceN)
        # jsFile.write("\t\t\t\t\t<Modal sty={\"OrderBackdrop\"} cssName={\"TextModal\"} show={showState.show} modalClosed={ShowCancelHandler}> " + slaceN)
        # jsFile.write("\t\t\t\t\t\t<TextBox>" + slaceN)
        # jsFile.write("\t\t\t\t\t\t\t<BoxTitle>" + newLine[0] + "</BoxTitle>" + slaceN)
        # if picName + '.jpeg' in pictures:
        #     jsFile.write("\t\t\t\t\t\t\t<TextBoxImg src={require('../../assets/" + picName + ".jpeg')}  alt=\""+ picName + "\"/>" + slaceN)
        # else:
        #     jsFile.write("\t\t\t\t\t\t\t<TextBoxImg src={require('../../assets/placeholder.jpeg')} alt={\"placeholder\"}/>" + slaceN)
        # jsFile.write("\t\t\t\t\t\t\t<BoxText>" + newLine[1] + "</BoxText>" + slaceN)
        # jsFile.write("\t\t\t\t\t\t\t<BoxButton onClick={props.addToCart.bind(this,\"" + picName + "\", \"" + newLine[0] + "\","+ newLine[1].strip(" ").strip("$") + ")}>" + "add </BoxButton>" + slaceN)
        # jsFile.write("\t\t\t\t\t\t</TextBox>" + slaceN)
        # jsFile.write("\t\t\t\t\t</Modal>" + slaceN)
jsFile.write("\t\t\t\t\t</tbody>" + slaceN)
jsFile.write("\t\t\t\t</TextTable>" + slaceN)
jsFile.write("\t\t\t</div>" + slaceN)
jsFile.write("		</div>" + slaceN)			
jsFile.write("\t)" + slaceN)
jsFile.write("};" + slaceN)
jsFile.write("export default TextMode\n")