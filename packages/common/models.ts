export enum LanguageModel {
  MOONSHOT_128K = 'moonshot-v1-128k',
  MOONSHOT_32K = 'moonshot-v1-32k',
  /**
   * MoonShot
   */
  MOONSHOT_8K = 'moonshot-v1-8k',
}

export const ModelTokens: Record<LanguageModel, number> = {
  [LanguageModel.MOONSHOT_8K]: 8000,
  [LanguageModel.MOONSHOT_32K]: 30_000,
  [LanguageModel.MOONSHOT_128K]: 120_000,
};

export const defaultModel = LanguageModel.MOONSHOT_8K;
