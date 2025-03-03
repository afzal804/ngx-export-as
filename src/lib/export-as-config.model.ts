export type SupportedExtensions = 'pdf' | 'png' | 'xlsx' | 'xls' | 'txt' | 'csv' | 'json' | 'xml';

export interface ExportAsConfig {
  type: SupportedExtensions;
  elementId: string;
  download?: boolean;
  fileName?: string;
  options?: any;
}
