import pandas as pd
class meter:
    def __init__(self, meter_id):
        self.meter_id = meter_id
class building:
    def __init__(self, bld_id, bld_name, sqr_feet, bld_date, lat, longt, campus, org, loc_type, stm_src, cwtr_src, hwtr_src):
        self.bld_id = bld_id
        self.bld_name = bld_name
        self.sqr_feet = sqr_feet
        self.bld_date = bld_date
        self.lat = lat
        self.long = longt
        self.campus = campus
        self.org = org
        self.loc_type = loc_type
        self.stm_src = stm_src
        self.cwtr_src = cwtr_src
        self.hwtr_src = hwtr_src