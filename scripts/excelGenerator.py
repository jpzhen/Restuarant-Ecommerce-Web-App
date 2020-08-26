import xlwt
from xlwt import Workbook

menu = open('menu.txt', 'r')
wb = Workbook()
sheet = wb.add_sheet('menu')

count = 0 

for line in menu:
    newline = line.strip('\n')
    if "-" in line:
        item = newline.split("-")
        name = item[0].replace("&", "and")
        price = item[1].strip()
        if "    " in name:
            notrail = name.strip()
            sheet.write(count, 1, notrail)    
        else:
            notabs = name.strip()
            sheet.write(count, 0, notabs)
        sheet.write(count, 2, price)

        if "(" or ")" in name:
            picName = "_".join(name.split("(")[0].split())
            sheet.write(count, 3, picName)
        else:
            picName = "_".name.split()
            sheet.write(count, 3, picName)
    else:
        sheet.write(count, 0, newline)
    count += 1    
sheet.write(count+1, 0, "\n")
menu.close()
wb.save('menu.xls')
