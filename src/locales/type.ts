import { Locale } from "antd/es/locale";

export interface LocaleData {
  antLocale: Locale;
  logo: string;
  readFileTip: string;
  error404: {
    backHome: string;
    description: string;
  };
  uploadCard: {
    title: string;
    subTitle: [string, string];
  };
  listAction: {
    batchAppend: string;
    clear: string;
    downloadAll: string;
    downloadOne: string;
    removeOne: string;
    reCompress: string;
  };
  columnTitle: {
    status: string;
    name: string;
    preview: string;
    size: string;
    newSize: string;
    dimension: string;
    newDimension: string;
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
    enableHighPng: string;
    highPngDither: string;
  };
  progress: {
    before: string;
    after: string;
    rate: string;
  };
}
