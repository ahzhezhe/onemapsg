import { OneMap } from '../OneMap';
import { ApiRes } from '../types';
import { Service } from '.';

export interface PopulationReq {
  year: number;
  planningArea: string;
  gender?: 'male' | 'female';
}
export interface PopulationReqWithGender extends PopulationReq {
  gender?: 'male' | 'female';
}
export interface GetEconomicStatusRes extends ApiRes {
  planning_area: string;
  employed: number;
  unemployed: number;
  inactive: number;
  year: number;
  gender: string;
}
export interface GetEducationAttendingRes extends ApiRes {
  planning_area: string;
  pre_primary: number;
  primary: number;
  secondary: number;
  post_secondary: number;
  polytechnic: number;
  prof_qualification_diploma: number;
  university: number;
  year: number;
}
export interface GetEthnicGroupRes extends ApiRes {
  planning_area: string;
  chinese: number;
  malays: number;
  indian: number;
  others: number;
  year: number;
  gender: string;
}
export interface GetHouseholdMonthlyIncomeWorkRes extends ApiRes {
  planning_area: string;
  total: number;
  no_working_person: number;
  below_sgd_1000: number;
  sgd_1000_to_1999: number;
  sgd_2000_to_2999: number;
  sgd_3000_to_3999: number;
  sgd_4000_to_4999: number;
  sgd_5000_to_5999: number;
  sgd_6000_to_6999: number;
  sgd_7000_to_7999: number;
  sgd_8000_to_8999: number;
  sgd_9000_to_9999: number;
  sgd_10000_over: number;
  year: number;
}
export interface GetHouseholdSizeRes extends ApiRes {
  planning_area: string;
  person1: number;
  person2: number;
  person3: number;
  person4: number;
  person5: number;
  person6: number;
  person7: number;
  person_more_8: number;
  year: number;
}
export interface GetHouseholdStructureRes extends ApiRes {
  planning_area: string;
  no_family_nucleus: number;
  ofn_1_gen: number;
  ofn_2_gen: number;
  ofn_3_more_gen: number;
  tfn_1to2_gen: number;
  tfn_3_more_gen: number;
  three_more_fam_nucleus: number;
  year: number;
}
export interface GetIncomeFromWorkRes extends ApiRes {
  planning_area: string;
  below_sgd_1000: number;
  sgd_1000_to_1499: number;
  sgd_1500_to_1999: number;
  sgd_2000_to_2499: number;
  sgd_2500_to_2999: number;
  sgd_3000_to_3999: number;
  sgd_4000_to_4999: number;
  sgd_5000_to_5999: number;
  sgd_6000_to_6999: number;
  sgd_7000_to_7999: number;
  sgd_8000_over: number;
  year: number;
}
export interface GetIndustryRes extends ApiRes {
  planning_area: string;
  manufacturing: number;
  construction: number;
  wholesale_retail_trade: number;
  transportation_storage: number;
  accommodation_food_services: number;
  information_communications: number;
  financial_insurance_services: number;
  real_estate_services: number;
  professional_services: number;
  admin_support_services: number;
  public_admin_education: number;
  health_social_services: number;
  arts_entertainment_recreation: number;
  other_comm_social_personal: number;
  others: number;
  hotels_restaurants: number;
  transport_communications: number;
  business_services: number;
  other_services_industries: number;
  year: number;
}
export interface GetLanguageLiterateRes extends ApiRes {
  planning_area: string;
  no_literate: number;
  l1_chi: number;
  l1_eng: number;
  l1_mal: number;
  l1_tam: number;
  l1_non_off: number;
  l2_eng_chi: number;
  l2_eng_mal: number;
  l2_eng_tam: number;
  l2_other_two: number;
  l3_eng_chi_mal: number;
  l3_eng_mal_tam: number;
  l3_other_three: number;
  year: number;
  l2_eng_non_off: number;
}
export interface GetMaritalStatusRes extends ApiRes {
  planning_area: string;
  single: number;
  married: number;
  widowed: number;
  divorced: number;
  year: number;
  gender: string;
}
export interface GetModeOfTransportSchoolRes extends ApiRes {
  planning_area: string;
  bus: number;
  mrt: number;
  mrt_bus: number;
  mrt_car: number;
  mrt_other: number;
  taxi: number;
  car: number;
  pvt_chartered_bus: number;
  lorry_pickup: number;
  motorcycle_scooter: number;
  others: number;
  no_transport_required: number;
  year: number;
}
export interface GetModeOfTransportWorkRes extends ApiRes {
  planning_area: string;
  bus: number;
  mrt: number;
  mrt_bus: number;
  mrt_car: number;
  mrt_other: number;
  taxi: number;
  car: number;
  pvt_chartered_bus: number;
  lorry_pickup: number;
  motorcycle_scooter: number;
  others: number;
  no_transport_required: number;
  year: number;
}
export interface GetOccupationRes extends ApiRes {
  planning_area: string;
  senior_officials_managers: number;
  professionals: number;
  associate_professionals_tech: number;
  clerical: number;
  service_sales: number;
  agricultural_fishery: number;
  production_craftsmen: number;
  plant_machine_operators: number;
  cleaners_labourers: number;
  workers_not_classified: number;
  year: number;
}
export interface GetPopulationAgeGroupRes extends ApiRes {
  planning_area: string;
  age_0_4: number;
  age_5_9: number;
  age_10_14: number;
  age_15_19: number;
  age_20_24: number;
  age_25_29: number;
  age_30_34: number;
  age_35_39: number;
  age_40_44: number;
  age_45_49: number;
  age_50_54: number;
  age_55_59: number;
  age_60_64: number;
  age_65_69: number;
  age_70_74: number;
  age_75_79: number;
  age_80_84: number;
  age_85_over: number;
  total: number;
  gender: string;
  year: number;
}
export interface GetReligionRes extends ApiRes {
  planning_area: string;
  no_religion: number;
  buddhism: number;
  taoism: number;
  islam: number;
  hinduism: number;
  sikhism: number;
  catholic_christian: number;
  other_christians: number;
  other_religions: number;
  year: number;
}
export interface GetSpokenAtHomeRes extends ApiRes {
  planning_area: string;
  english: number;
  mandarin: number;
  chinese_dialects: number;
  malay: number;
  tamil: number;
  other_indian_languages: number;
  others: number;
  year: number;
}
export interface GetTenancyRes extends ApiRes {
  planning_area: string;
  owner: number;
  tenant: number;
  others: number;
  year: number;
}
export interface GetTypeOfDwellingHouseholdRes extends ApiRes {
  planning_area: string;
  hdb_1_2_room_flats: number;
  hdb_3_room_flats: number;
  hdb_4_room_flats: number;
  hdb_5_room_executive_flats: number;
  condominiums: number;
  landed_properties: number;
  others: number;
  year: number;
  total_hdb: number;
}
export interface GetTypeOfDwellingPopRes extends ApiRes {
  id: string;
  planning_area: string;
  year: number;
  hdb_1_2_room_flats: number;
  hdb_3_room_flats: number;
  hdb_4_room_flats: number;
  hdb_5_room_executive_flats: number;
  condominiums: number;
  landed_properties: number;
  others: number;
  total_hdb: number;
  total: number;
}

export class Population extends Service {

  constructor(onemap: OneMap) {
    super(onemap, 'popapi');
  }

  async getEconomicStatus(req: PopulationReqWithGender): Promise<GetEconomicStatusRes[]> {
    return this.privateapi('getEconomicStatus', req);
  }

  async getEducationAttending(req: PopulationReq): Promise<GetEducationAttendingRes[]> {
    return this.privateapi('getEducationAttending', req);
  }

  async getEthnicGroup(req: PopulationReqWithGender): Promise<GetEthnicGroupRes[]> {
    return this.privateapi('getEthnicGroup', req);
  }

  async getHouseholdMonthlyIncomeWork(req: PopulationReq): Promise<GetHouseholdMonthlyIncomeWorkRes[]> {
    return this.privateapi('getHouseholdMonthlyIncomeWork', req);
  }

  async getHouseholdSize(req: PopulationReq): Promise<GetHouseholdSizeRes[]> {
    return this.privateapi('getHouseholdSize', req);
  }

  async getHouseholdStructure(req: PopulationReq): Promise<GetHouseholdStructureRes[]> {
    return this.privateapi('getHouseholdStructure', req);
  }

  async getIncomeFromWork(req: PopulationReq): Promise<GetIncomeFromWorkRes[]> {
    return this.privateapi('getIncomeFromWork', req);
  }

  async getIndustry(req: PopulationReq): Promise<GetIndustryRes[]> {
    return this.privateapi('getIndustry', req);
  }

  async getLanguageLiterate(req: PopulationReq): Promise<GetLanguageLiterateRes[]> {
    return this.privateapi('getLanguageLiterate', req);
  }

  async getMaritalStatus(req: PopulationReqWithGender): Promise<GetMaritalStatusRes[]> {
    return this.privateapi('getMaritalStatus', req);
  }

  async getModeOfTransportSchool(req: PopulationReq): Promise<GetModeOfTransportSchoolRes[]> {
    return this.privateapi('getModeOfTransportSchool', req);
  }

  async getModeOfTransportWork(req: PopulationReq): Promise<GetModeOfTransportWorkRes[]> {
    return this.privateapi('getModeOfTransportWork', req);
  }

  async getOccupation(req: PopulationReq): Promise<GetOccupationRes[]> {
    return this.privateapi('getOccupation', req);
  }

  async getPopulationAgeGroup(req: PopulationReq): Promise<GetPopulationAgeGroupRes[]> {
    return this.privateapi('getPopulationAgeGroup', req);
  }

  async getReligion(req: PopulationReq): Promise<GetReligionRes[]> {
    return this.privateapi('getReligion', req);
  }

  async getSpokenAtHome(req: PopulationReq): Promise<GetSpokenAtHomeRes[]> {
    return this.privateapi('getSpokenAtHome', req);
  }

  async getTenancy(req: PopulationReq): Promise<GetTenancyRes[]> {
    return this.privateapi('getTenancy', req);
  }

  async getTypeOfDwellingHousehold(req: PopulationReq): Promise<GetTypeOfDwellingHouseholdRes[]> {
    return this.privateapi('getTypeOfDwellingHousehold', req);
  }

  async getTypeOfDwellingPop(req: PopulationReq): Promise<GetTypeOfDwellingPopRes[]> {
    return this.privateapi('getTypeOfDwellingPop', req);
  }

}
