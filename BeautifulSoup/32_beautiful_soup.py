import bs4 as bs
import urllib.request
import ssl

context = ssl._create_unverified_context()
sauce = urllib.request.urlopen('https://stackoverflow.com/', context=context).read()

soup = bs.BeautifulSoup(sauce,'lxml')

#print(soup)

for s in soup.find_all('p'):
    print(s.string)

for s in soup.find_all('p'):
    print(s.text)

for s in soup.find_all('a'):
    print(s.string)
