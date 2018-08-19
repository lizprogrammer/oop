import pandas as pd
import googlemaps
import geocoder

df = pd.read_csv("./boba.csv").head()
# print(df)


gmaps = googlemaps.Client(key='AIzaSyDl8-6ZranPbqEUgqWbr59MZB7BXZll33Q')

gg = geocoder.google("2920 Broadway, New York, NY 10027")
print(gg)


gg1 = geocoder.google("2920 Broadway, New York, NY 10027").lat
gg2 = geocoder.google("2920 Broadway, New York, NY 10027").lng

print(gg1, ' ', gg2)