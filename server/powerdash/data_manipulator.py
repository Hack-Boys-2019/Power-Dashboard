from .generator import generator
import pandas as pd
class DataManipulator:
    def __init__(self):
        pass
    def avg(self, type, id, start_time, end_time, database):
        pass
    def total(self, type, id, start_time, end_time, database):
        pass
    def test_values(self,id,database):
        df = pd.read_sql_query(f'SELECT MeterId,CurrentValue,Time,Unit FROM `table` WHERE MeterId = \'{id}\' ORDER BY ROWID ;', database)
        return df

    def test_config_values(self, database):
        df = pd.read_sql_query(f'SELECT * FROM `table` ORDER BY ROWID ;', database)
        return df
#g = generator()
#daily_db = g.return_daily_db()
#hourly_db = g.return_hourly_db()
#d = DataManipulator()
#print(d.test_values('OSU_RTS.MDBUS_E3.001_E01',daily_db))