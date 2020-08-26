import xlrd
import os
wb = xlrd.open_workbook("./menu.xls")
pictures = os.listdir('../restprojv1/src/assets/')
sheet = wb.sheet_by_index(0)
rowNum = sheet.nrows

foodType = ""
imports = ""
body = ""
newline = "\n"
ContainerArr = []
statehandlers = ""
printState = False

def genCode():
    global printState
    global imports
    global statehandlers
    menu = open('../restprojv1/src/MenuPage/Items/'+header+'.js', 'w')
    menu.write("import { Container, Box, BoxImg, BoxButton, BoxTitle, BoxText } from '../../utils/HomeStyle';\n")
    if printState:
        imports += "import Modal from '../../Modal/Modal'" + newline
        menu.write("import React, {useState} from 'react';\n")
    else:
        menu.write("import React from 'react';\n")
        statehandlers = ""
    menu.write(imports)
    menu.write("const "+ header + " = (props) => {\n")
    menu.write(statehandlers)
    menu.write("\treturn(\n")
    menu.write("\t\t<div>\n")
    menu.write("\t\t\t<Container>\n")
    for container in ContainerArr:
        if len(container) > 5:
            for box in container:
                menu.write(box)
    for container in ContainerArr:
        if len(container) < 6:
            for box in container:
                menu.write(box)
    menu.write("\t\t\t</Container>\n")
    menu.write("\t\t</div>\n")
    menu.write("\t)\n")
    menu.write("};\n")
    menu.write("export default "+ header)
    printState = False
    statehandlers = ""
    menu.close()
# j = 0
# while (j < rowNum):
#     row = sheet.row_values(j)
#     print(j, row[0], row[1])
#     j+= 1

i = 0
while (i < rowNum):
    colPerRowNum = len(sheet.row_values(i))
    row = sheet.row_values(i)
    # seperate the food category
    # print("start", i, row[0])
    # print(i, row)
    if row[0] and not row[1] and not row[2]:
        # print(row)
        # print("category", row[0])
        header = row[0]
    # once a new category is detected, generate a js file
    elif not row[0]:
        genCode()
        body = " "
        imports = " "
        ContainerArr = []
    else:
        # generate the code for normal dishes
        if row[0] and "$" in row[2]:
            # print("normal dish", row[0])
            BoxArr = []
            BoxArr.append("\t\t\t\t<Box>" + newline)
            BoxArr.append("\t\t\t\t\t<BoxTitle>" + row[0] + "</BoxTitle>" + newline)
            if row[3]+'.jpeg' in pictures:
                BoxArr.append("\t\t\t\t\t<BoxImg src={require('../../assets/" + row[3] + ".jpeg')}  alt=\"" + row[3] + "\"/>" + newline)
                BoxArr.append("\t\t\t\t\t<BoxText>" + row[2] + "</BoxText>"+ newline)
                BoxArr.append("\t\t\t\t\t<BoxButton onClick={props.addToCart.bind(\"\",\"" + row[3] + "\", \"" + row[0] + "\", " + row[2].strip('$') + ")}> add </BoxButton>" + newline)
            else:
                # BoxArr.append("\t\t\t\t\t<BoxImg src={require('../../assets/placeholder.jpeg')} alt={\"placeholder\"}/>" + newline)
                BoxArr.append("\t\t\t\t\t<BoxText>" + row[2] + "</BoxText>"+ newline)
                BoxArr.append("\t\t\t\t\t<BoxButton onClick={props.addToCart.bind(\"\",\"" + "placeholder" + "\", \"" + row[0] + "\", " + row[2].strip('$') + ")}> add </BoxButton>" + newline)
            BoxArr.append("\t\t\t\t</Box>\n")
            ContainerArr.append(BoxArr)
        # generate the code for grouped dishes
        elif row[0] and "$" not in row[2]:
            # main display
            if row[0]:
                # print("main display", row[0])
                printState = True
                BoxArr = []
                BoxArr.append("\t\t\t\t<Box>" + newline)
                BoxArr.append("\t\t\t\t\t<BoxTitle>" + row[0] + "</BoxTitle>" + newline)
                if row[3]+'.jpeg' in pictures:
                    BoxArr.append("\t\t\t\t\t<BoxImg src={require('../../assets/" + row[3] + ".jpeg')}  alt=\"" + row[3] + "\"/>" + newline)
                # else:
                #     BoxArr.append("\t\t\t\t\t<BoxImg src={require('../../assets/placeholder.jpeg')} alt={\"placeholder\"}/>" + newline)
                BoxArr.append("\t\t\t\t\t<BoxText>" + row[2] + "</BoxText>"+ newline)
                BoxArr.append("\t\t\t\t\t<Modal sty={\"OrderBackdrop\"} cssName={\"orderModal\"}show={" + row[3] + "ShowState.show} modalClosed={" + row[3] + "ShowCancelHandler}>" + newline)
                statehandlers += "\tconst [" + row[3] + "ShowState, " + row[3] + "SetShowState] = useState({ show: false})\n\tconst " + row[3] + "showHandler = () => {" + row[3] + "SetShowState({show: true});}\n\tconst " + row[3] + "ShowCancelHandler = () => {" + row[3] + "SetShowState({show: false});}\n"
                showhandler = "\t\t\t\t\t<BoxButton onClick={" + row[3] + "showHandler}> add </BoxButton>" + newline
                i+= 1
                row = sheet.row_values(i)
                # modal display
                BoxArr.append("\t\t\t\t\t\t<table>" + newline)
                BoxArr.append("\t\t\t\t\t\t\t<tbody>" + newline)
                while "$" in row[2] and row[1]:
                    # print("modal display", row[1], row[2])
                    BoxArr.append("\t\t\t\t\t\t\t\t<tr>" + newline)
                    BoxArr.append("\t\t\t\t\t\t\t\t\t<td><BoxTitle>" + row[1] + "</BoxTitle></td>" + newline)
                    BoxArr.append("\t\t\t\t\t\t\t\t\t<td>" + row[2] + "</td>" + newline)
                    BoxArr.append("\t\t\t\t\t\t\t\t\t<td><BoxButton onClick={props.addToCart.bind(\"\",\"" + row[3] + "\", \"" + row[1] + "\", 9.95)}> add </BoxButton> </td>" + newline)
                    BoxArr.append("\t\t\t\t\t\t\t\t</tr>" + newline)
                    i+= 1
                    row = sheet.row_values(i)
                BoxArr.append("\t\t\t\t\t\t\t</tbody>" + newline)
                BoxArr.append("\t\t\t\t\t\t</table>" + newline)
                BoxArr.append("\t\t\t\t\t</Modal>" + newline)
                BoxArr.append(showhandler)
                BoxArr.append("\t\t\t\t</Box>\n")
                ContainerArr.append(BoxArr)
                continue
        else:
            pass
    i+= 1
    # print("end", i, row[0])