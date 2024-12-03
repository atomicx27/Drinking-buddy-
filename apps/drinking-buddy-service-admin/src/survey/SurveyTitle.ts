import { Survey as TSurvey } from "../api/survey/Survey";

export const SURVEY_TITLE_FIELD = "favoriteDrink";

export const SurveyTitle = (record: TSurvey): string => {
  return record.favoriteDrink?.toString() || String(record.id);
};
