import {ApplicationConstants} from '../../util/application-constants';
import {FilterInputModel} from './filter-input-model';

export class FilterInputModelGenerator {
  public static getListOfInputModels(filter): FilterInputModel[] {
    if (filter === 'topic') {
      return [
        {
          display: ApplicationConstants.FOCUS_AREA_TOPIC_ENVIRONMENT_DISPLAY_STRING,
          code: ApplicationConstants.FOCUS_AREA_TOPIC_ENVIRONMENT_DISPLAY_STRING,
          filter_type: ApplicationConstants.FOCUS_AREA_TOPIC
        },
        {
          display: ApplicationConstants.FOCUS_AREA_TOPIC_POLITICS_DISPLAY_STRING,
          code: ApplicationConstants.FOCUS_AREA_TOPIC_POLITICS_DISPLAY_STRING,
          filter_type: ApplicationConstants.FOCUS_AREA_TOPIC
        },
        {
          display: ApplicationConstants.FOCUS_AREA_TOPIC_CRIME_DISPLAY_STRING,
          code: ApplicationConstants.FOCUS_AREA_TOPIC_CRIME_DISPLAY_STRING,
          filter_type: ApplicationConstants.FOCUS_AREA_TOPIC
        },
        {
          display: ApplicationConstants.FOCUS_AREA_TOPIC_SOCIAL_UNREST_DISPLAY_STRING,
          code: ApplicationConstants.FOCUS_AREA_TOPIC_SOCIAL_UNREST_DISPLAY_STRING,
          filter_type: ApplicationConstants.FOCUS_AREA_TOPIC
        },
        {
          display: ApplicationConstants.FOCUS_AREA_TOPIC_INFRASTRUCTURE_DISPLAY_STRING,
          code: ApplicationConstants.FOCUS_AREA_TOPIC_INFRASTRUCTURE_DISPLAY_STRING,
          filter_type: ApplicationConstants.FOCUS_AREA_TOPIC
        }
      ];
    }
    if (filter === 'language') {
      return [
        {
          filter_type: ApplicationConstants.FOCUS_AREA_LANGUAGE,
          code: ApplicationConstants.FOCUS_AREA_LANGUAGE_EN_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_LANGUAGE_EN_DISPLAY_STRING
        },
        {
          filter_type: ApplicationConstants.FOCUS_AREA_LANGUAGE,
          code: ApplicationConstants.FOCUS_AREA_LANGUAGE_HI_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_LANGUAGE_HI_DISPLAY_STRING
        },
        {
          filter_type: ApplicationConstants.FOCUS_AREA_LANGUAGE,
          code: ApplicationConstants.FOCUS_AREA_LANGUAGE_FR_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_LANGUAGE_FR_DISPLAY_STRING
        },
        {
          filter_type: ApplicationConstants.FOCUS_AREA_LANGUAGE,
          code: ApplicationConstants.FOCUS_AREA_LANGUAGE_TH_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_LANGUAGE_TH_DISPLAY_STRING
        },
        {
          filter_type: ApplicationConstants.FOCUS_AREA_LANGUAGE,
          code: ApplicationConstants.FOCUS_AREA_LANGUAGE_ES_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_LANGUAGE_ES_DISPLAY_STRING
        }
      ];
    }
    if (filter === 'city') {
      return [
        {
          filter_type: ApplicationConstants.FOCUS_AREA_CITY,
          code: ApplicationConstants.FOCUS_AREA_CITY_NYC_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_CITY_NYC_DISPLAY_STRING
        },
        {
          filter_type: ApplicationConstants.FOCUS_AREA_CITY,
          code: ApplicationConstants.FOCUS_AREA_CITY_DELHI_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_CITY_DELHI_DISPLAY_STRING
        },
        {
          filter_type: ApplicationConstants.FOCUS_AREA_CITY,
          code: ApplicationConstants.FOCUS_AREA_CITY_PARIS_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_CITY_PARIS_DISPLAY_STRING
        },
        {
          filter_type: ApplicationConstants.FOCUS_AREA_CITY,
          code: ApplicationConstants.FOCUS_AREA_CITY_BANGKOK_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_CITY_BANGKOK_DISPLAY_STRING
        },
        {
          filter_type: ApplicationConstants.FOCUS_AREA_CITY,
          code: ApplicationConstants.FOCUS_AREA_CITY_MEXICO_CITY_CODE_STRING,
          display: ApplicationConstants.FOCUS_AREA_CITY_MEXICO_CITY_DISPLAY_STRING
        }
      ];
    }
  }
}
