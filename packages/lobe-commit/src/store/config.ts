import Conf from 'conf';

import { Config, ConfigSchema } from '@/types/config';

import { ModelTokens, defaultModel } from '../../../common/models';

export const schema: ConfigSchema = {
  apiBaseUrl: {
    default: '',
    type: 'string',
  },
  diffChunkSize: {
    default: ModelTokens[defaultModel] - 512,
    type: 'number',
  },
  emoji: {
    default: 'emoji',
    type: 'string',
  },
  githubToken: {
    default: '',
    type: 'string',
  },
  locale: {
    default: '',
    type: 'string',
  },
  maxLength: {
    default: 100,
    type: 'number',
  },
  modelName: {
    default: defaultModel,
    type: 'string',
  },
  openaiToken: {
    default: '',
    type: 'string',
  },
  prompt: {
    default: '',
    type: 'string',
  },
};

// 🟣 命令名识别，用于隔离配置路径
const binName = process.argv[1]?.split('/').pop() ?? '';
const projectName = binName === 'lobe2' ? 'lobe2' : 'lobe-commit';

// ✅ 用你自己的 Config 类型做泛型
export const config = new Conf<Config>({
  projectName,
  schema,
});
