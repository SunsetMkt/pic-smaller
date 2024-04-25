import { Locale } from "antd/es/locale";

export interface LocaleData {
  antLocale: Locale;
  logo: string;
  uploadCard: {
    title: string;
    subTitle: [string, string];
  };
  listAction: {
    batchAppend: string;
    clear: string;
    downloadAll: string;
  };
  columnTitle: {
    status: string;
    name: string;
    preview: string;
    size: string;
    dimension: string;
    decrease: string;
    action: string;
  };
  optionPannel: {
    title: string;
    unChanged: string;
    toWidth: string;
    toHeight: string;
    widthPlaceholder: string;
    heightPlaceholder: string;
    qualityTitle: string;
    resetBtn: string;
    confirmBtn: string;
  }
}