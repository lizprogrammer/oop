# import libraries
import urllib
from bs4 import BeautifulSoup
import csv
from datetime import datetime
import os

# specify the url
quote_page = ['http://www.bloomberg.com/quote/SPX:IND', 'http://www.bloomberg.com/quote/CCMP:IND']

print(quote_page)

# for loop
data = []
for pg in quote_page:
    # query the website and return the html to the variable ‘page’
    page = urllib.request.urlopen(pg)
    # parse the html using beautiful soup and store in variable `soup`
    soup = BeautifulSoup(page, 'html.parser')

    # Take out the <div> of name and get its value
    name_box = soup.find('h1', attrs={'class': 'name'})
    name = name_box.text.strip()  # strip() is used to remove starting and trailing
    # get the index price
    price_box = soup.find('div', attrs={'class': 'price'})
    price = price_box.text
    # save the data in tuple
    data.append((name, price))

# check if file exists
file_exists = os.path.isfile('index.csv')
print(file_exists)

# open a csv file with append, so old data will not be erased
with open('index.csv', 'a') as csv_file:
    writer = csv.writer(csv_file)

    headers = ['Name', 'Index','Price','Date']
    if not file_exists:
        writer.writerow(headers)  # file doesn't exist yet, write a header

    # The for loop
    for name, price in data:
        writer.writerow([name, price, datetime.now()])
