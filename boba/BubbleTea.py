import pandas as pd
import geocoder
import googlemaps
from shapely.geometry import Point
from geopandas import GeoDataFrame
from geojsonio import display


class BubbleTea(object):
    # authentication initialized
    gmaps = googlemaps.Client(key='AIzaSyDl8-6ZranPbqEUgqWbr59MZB7BXZll33Q')

    # filename: file with list of bubble tea places and addresses
    def __init__(self, filename):
        # initalizes csv with list of bubble tea places to dataframe
        self.boba = pd.read_csv(filename)

    def calc_coords(self):
        self.boba['Lat'] = self.boba['Address'].apply(geocoder.google).apply(lambda x: x.lat)
        self.boba['Longitude'] = self.boba['Address'].apply(geocoder.google).apply(lambda x: x.lng)
        self.boba['Coordinates'] = [Point(xy) for xy in zip(self.boba.Longitude, self.boba.Lat)]

    def get_geo(self):
        return list(self.boba['Coordinates'])

    def get_names(self):
        return self.boba['Name']

    def get_gdf(self):
        crs = {'init': 'epsg:4326'}
        return GeoDataFrame(self.get_names(), crs=crs, geometry=self.get_geo())

    def visualize(self):
        self.boba['Coordinates'] = [Point(xy) for xy in zip(self.boba.Longitude, self.boba.Lat)]
        updated = self.get_gdf()
        display(updated.to_json())

boba = BubbleTea("./boba_liz.csv")

boba.calc_coords()
boba.visualize()

# Barrington, RI 02806
# 41.741063, -71.320667