import pandas as pd
from .data_classes import building, meter
from sqlalchemy import create_engine

class generator:
    def __init__(self):
        self.meter_dict = {}
        self.building_dict = {}
        self.csv_database = create_engine('sqlite:///hourly_meter.db')
    def config_generation(self,file_name):
        reader = pd.read_csv(file_name, names=['BldId', 'MeterId', 'Description', 'Units', 'Resource', 'BuildingName','SqrFeet','BuildDate','Lat','Long','Campus','Organization','LocationType','SteamID', 'ChilledWater','HotWaterID','ActivationDate'])
        for i in range(len(reader)):
            r_rdr = reader.iloc[i]
            building_id = r_rdr.iloc[0]
            meter_id = r_rdr.iloc[1]
            if not building_id in self.building_dict:
                self.building_dict[building_id] = building(building_id,r_rdr[5],r_rdr[6],r_rdr[7],r_rdr[8],r_rdr[9],r_rdr[10],r_rdr[11],r_rdr[12],r_rdr[13],r_rdr[14],r_rdr[15])
            if not meter_id in self.meter_dict:
                self.meter_dict[meter_id] = meter(meter_id,r_rdr[2],r_rdr[3],r_rdr[4],building_id,r_rdr[16])
    def data_generation(self,file_name):
        i = 0
        chunksize = 100000
        i = 0
        j = 1
        for df in pd.read_csv(file_name, chunksize=chunksize, iterator=True,names=['MeterId','CurrentValue','ValueString','Time','BuildingName','Unit','Status','StatusCode']):
            df = df.rename(columns={c: c.replace(' ', '') for c in df.columns}) 
            df.index += j
            i+=1
            df.to_sql('table', self.csv_database, if_exists='append')
            j = df.index[-1] + 1
    def change_table(self, name):
        self.csv_database = create_engine(name)
    def building_report(self):
        return self.building_dict
    def initialize_generator(self,config, hourly_one, hourly_two, daily):
        self.config_generation(config)
        self.data_generation(hourly_one)
        self.data_generation(hourly_two)
        self.change_table('sqlite:///daily_meter.db')
        self.data_generation(daily)
