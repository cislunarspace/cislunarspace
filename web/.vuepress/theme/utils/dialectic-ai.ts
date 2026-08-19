/**
 * AI integration for the Dialectic surface.
 *
 * Uses ChatTransport (the shared network seam) instead of direct fetch().
 * Endpoint and model come from the same /ai-chat-config.json that powers AI Chat.
 */
import { loadChatConfig } from '../chat/chat-config';
import type { ChatTransport } from '../chat/chat-engine-seams';
import type { StepInput } from './dialectic-prompts';
import {
  GLOBAL_SYSTEM_PROMPT,
  REPORT_SYSTEM_PROMPT,
  STEP_PROMPTS,
  steps,
} from './dialectic-prompts';

export interface DialecticAIResult {
  content: string;
  reasoning: string;
}

export interface DialecticAIDeps {
  transport?: ChatTransport;
}

/** Build the system prompt for the current step's AI assist. */
export function buildStepSystemPrompt(stepIndex: number): string {
  return `${GLOBAL_SYSTEM_PROMPT}\n\n${STEP_PROMPTS[stepIndex]}`;
}

/** Build the user message context from all previous steps. */
export function buildStepContext(stepIndex: number, inputs: StepInput[]): string {
  let context = `【九步探究流程当前进度：第${stepIndex + 1}步 / 共9步】\n\n`;
  for (let i = 0; i < stepIndex; i++) {
    const step = steps[i];
    const input = inputs[i];
    context += `【第${i + 1}步：${step.title}】\n`;
    if (step.inputType === 'select') {
      context += `级别：${input.level || '未选择'}；说明：${input.note || '无'}\n`;
    } else if (step.inputType === 'dual-textarea') {
      const v1 = input.view1 || '未填写';
      const v2 = input.view2 || '未填写';
      context += `视角一：${v1.substring(0, 200)}${v1.length > 200 ? '...' : ''}\n`;
      context += `视角二：${v2.substring(0, 200)}${v2.length > 200 ? '...' : ''}\n`;
    } else {
      const v = input.value || '未填写';
      context += `${v.substring(0, 300)}${v.length > 300 ? '...' : ''}\n`;
    }
    context += '\n';
  }
  context += `【当前步骤：第${stepIndex + 1}步：${steps[stepIndex].title}】`;
  return context;
}

/** Build the user content string for the current step's input. */
export function buildStepUserContent(stepIndex: number, input: StepInput): string {
  const step = steps[stepIndex];
  if (step.inputType === 'select') {
    return `证据级别：${input.level || '未选择'}\n说明：${input.note || '未填写'}`;
  }
  if (step.inputType === 'dual-textarea') {
    return `视角一：${input.view1 || '未填写'}\n\n视角二：${input.view2 || '未填写'}`;
  }
  return input.value || '（用户尚未输入内容）';
}

/**
 * Call the AI for step assist via ChatTransport.
 * Returns content + reasoning, or an error message string in content.
 */
export async function callDialecticAI(
  stepIndex: number,
  inputs: StepInput[],
  deps: DialecticAIDeps = {},
): Promise<DialecticAIResult> {
  const transport =
    deps.transport ?? (await import('../chat/chat-engine-seams')).createFetchTransport();
  const config = await loadChatConfig();

  const input = inputs[stepIndex];
  const userContent = buildStepUserContent(stepIndex, input);
  const context = buildStepContext(stepIndex, inputs);

  const payload = {
    model: config.model,
    messages: [
      { role: 'system', content: buildStepSystemPrompt(stepIndex) },
      { role: 'user', content: context + '\n---用户当前步骤输入---\n' + userContent },
    ],
    temperature: 0.7,
    max_tokens: 2048,
  };

  try {
    const data = (await transport.completeJson(
      config.apiEndpoint,
      payload,
      new AbortController().signal,
    )) as {
      choices?: Array<{ message?: { content?: string; reasoning_content?: string } }>;
    };
    if (data?.choices?.[0]?.message) {
      return {
        content: data.choices[0].message.content || '',
        reasoning: data.choices[0].message.reasoning_content || '',
      };
    }
    return { content: '', reasoning: '' };
  } catch {
    return { content: 'AI 请求失败，请检查网络或 API 配置。', reasoning: '' };
  }
}

/** Build the user prompt for full report generation. */
export function buildReportPrompt(inputs: StepInput[]): string {
  let userPrompt = '【九步探究流程完整输入】\n\n';
  inputs.forEach((input, i) => {
    const step = steps[i];
    userPrompt += `【第${i + 1}步：${step.title}】\n`;
    if (step.inputType === 'select') {
      userPrompt += `级别：${input.level || '未选择'}\n说明：${input.note || '无'}\n`;
    } else if (step.inputType === 'dual-textarea') {
      userPrompt += `视角一：${input.view1 || '未填写'}\n视角二：${input.view2 || '未填写'}\n`;
    } else {
      userPrompt += `${input.value || '未填写'}\n`;
    }
    userPrompt += '\n';
  });
  userPrompt +=
    '请基于以上全部输入，撰写一份完整的思辨总结报告。要求：逻辑连贯、结构完整、语言学术化、不使用 Markdown 格式符号、列表转化为连贯段落、使用中文全角标点。报告应自然整合以下维度：问题回顾、史料与证据评估、理论竞争与反常检验、核心概念的历史语境校准、整合性断言及其时空有效范围、可证伪条件。';
  return userPrompt;
}

/**
 * Call the AI for full report generation via ChatTransport.
 * Returns the report content string, or null on failure.
 */
export async function generateDialecticReport(
  inputs: StepInput[],
  deps: DialecticAIDeps = {},
): Promise<string | null> {
  const transport =
    deps.transport ?? (await import('../chat/chat-engine-seams')).createFetchTransport();
  const config = await loadChatConfig();

  const payload = {
    model: config.model,
    messages: [
      { role: 'system', content: REPORT_SYSTEM_PROMPT },
      { role: 'user', content: buildReportPrompt(inputs) },
    ],
    temperature: 0.7,
    max_tokens: 4096,
  };

  try {
    const data = (await transport.completeJson(
      config.apiEndpoint,
      payload,
      new AbortController().signal,
    )) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    return data?.choices?.[0]?.message?.content || null;
  } catch {
    return null;
  }
}
