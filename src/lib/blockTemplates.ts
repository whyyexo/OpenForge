import { BlockTemplate } from '../types';

export const blockTemplates: BlockTemplate[] = [
  // INPUT BLOCKS
  {
    type: 'input',
    label: 'Text Input',
    icon: '📝',
    color: 'from-green-500 to-emerald-600',
    description: 'Receive text input from users',
    category: 'input',
    defaultConfig: {
      placeholder: 'Enter text...',
      required: true,
      multiline: false
    },
    inputs: [],
    outputs: [
      { id: 'text', name: 'Text', type: 'text', required: true, description: 'The input text' }
    ]
  },
  {
    type: 'webhook',
    label: 'Webhook',
    icon: '🔗',
    color: 'from-blue-500 to-cyan-600',
    description: 'Receive data via HTTP webhook',
    category: 'input',
    defaultConfig: {
      method: 'POST',
      contentType: 'application/json'
    },
    inputs: [],
    outputs: [
      { id: 'data', name: 'Data', type: 'object', required: true, description: 'Received data' },
      { id: 'headers', name: 'Headers', type: 'object', required: false, description: 'HTTP headers' }
    ]
  },

  // AI BLOCKS
  {
    type: 'llm',
    label: 'AI Chat',
    icon: '🤖',
    color: 'from-purple-500 to-pink-600',
    description: 'Generate responses using AI',
    category: 'ai',
    defaultConfig: {
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      maxTokens: 1000,
      systemPrompt: 'You are a helpful assistant.'
    },
    inputs: [
      { id: 'prompt', name: 'Prompt', type: 'text', required: true, description: 'The input prompt' },
      { id: 'context', name: 'Context', type: 'text', required: false, description: 'Additional context' }
    ],
    outputs: [
      { id: 'response', name: 'Response', type: 'text', required: true, description: 'AI generated response' },
      { id: 'tokens', name: 'Tokens Used', type: 'number', required: false, description: 'Number of tokens used' }
    ]
  },

  // PROCESSING BLOCKS
  {
    type: 'transform',
    label: 'Transform',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    description: 'Transform and process data',
    category: 'processing',
    defaultConfig: {
      operation: 'uppercase',
      customScript: ''
    },
    inputs: [
      { id: 'input', name: 'Input', type: 'text', required: true, description: 'Data to transform' }
    ],
    outputs: [
      { id: 'output', name: 'Output', type: 'text', required: true, description: 'Transformed data' }
    ]
  },
  {
    type: 'condition',
    label: 'Condition',
    icon: '🔀',
    color: 'from-red-500 to-rose-600',
    description: 'Conditional logic and branching',
    category: 'processing',
    defaultConfig: {
      condition: 'equals',
      value: '',
      field: ''
    },
    inputs: [
      { id: 'data', name: 'Data', type: 'text', required: true, description: 'Data to evaluate' }
    ],
    outputs: [
      { id: 'true', name: 'True', type: 'text', required: true, description: 'Output when condition is true' },
      { id: 'false', name: 'False', type: 'text', required: true, description: 'Output when condition is false' }
    ]
  },
  {
    type: 'api',
    label: 'API Call',
    icon: '🌐',
    color: 'from-indigo-500 to-blue-600',
    description: 'Make HTTP API requests',
    category: 'processing',
    defaultConfig: {
      url: '',
      method: 'GET',
      headers: {},
      body: ''
    },
    inputs: [
      { id: 'url', name: 'URL', type: 'text', required: true, description: 'API endpoint URL' },
      { id: 'data', name: 'Data', type: 'object', required: false, description: 'Request data' }
    ],
    outputs: [
      { id: 'response', name: 'Response', type: 'object', required: true, description: 'API response' },
      { id: 'status', name: 'Status', type: 'number', required: true, description: 'HTTP status code' }
    ]
  },

  // OUTPUT BLOCKS
  {
    type: 'output',
    label: 'Text Output',
    icon: '📤',
    color: 'from-teal-500 to-cyan-600',
    description: 'Display text output to users',
    category: 'output',
    defaultConfig: {
      format: 'plain',
      showTimestamp: false
    },
    inputs: [
      { id: 'text', name: 'Text', type: 'text', required: true, description: 'Text to display' }
    ],
    outputs: []
  },
  {
    type: 'email',
    label: 'Send Email',
    icon: '📧',
    color: 'from-orange-500 to-red-600',
    description: 'Send email notifications',
    category: 'output',
    defaultConfig: {
      to: '',
      subject: '',
      template: 'plain'
    },
    inputs: [
      { id: 'to', name: 'To', type: 'text', required: true, description: 'Recipient email' },
      { id: 'subject', name: 'Subject', type: 'text', required: true, description: 'Email subject' },
      { id: 'body', name: 'Body', type: 'text', required: true, description: 'Email content' }
    ],
    outputs: [
      { id: 'status', name: 'Status', type: 'text', required: true, description: 'Send status' }
    ]
  },
  {
    type: 'slack',
    label: 'Slack Message',
    icon: '💬',
    color: 'from-purple-500 to-indigo-600',
    description: 'Send messages to Slack',
    category: 'output',
    defaultConfig: {
      channel: '',
      username: 'AI Agent'
    },
    inputs: [
      { id: 'message', name: 'Message', type: 'text', required: true, description: 'Message to send' },
      { id: 'channel', name: 'Channel', type: 'text', required: false, description: 'Slack channel' }
    ],
    outputs: [
      { id: 'status', name: 'Status', type: 'text', required: true, description: 'Send status' }
    ]
  },
  {
    type: 'discord',
    label: 'Discord Message',
    icon: '🎮',
    color: 'from-indigo-500 to-purple-600',
    description: 'Send messages to Discord',
    category: 'output',
    defaultConfig: {
      channel: '',
      embed: false
    },
    inputs: [
      { id: 'message', name: 'Message', type: 'text', required: true, description: 'Message to send' },
      { id: 'channel', name: 'Channel', type: 'text', required: false, description: 'Discord channel' }
    ],
    outputs: [
      { id: 'status', name: 'Status', type: 'text', required: true, description: 'Send status' }
    ]
  },
  {
    type: 'database',
    label: 'Database',
    icon: '🗄️',
    color: 'from-green-600 to-teal-600',
    description: 'Store and retrieve data',
    category: 'output',
    defaultConfig: {
      operation: 'insert',
      table: '',
      connection: ''
    },
    inputs: [
      { id: 'data', name: 'Data', type: 'object', required: true, description: 'Data to store' },
      { id: 'query', name: 'Query', type: 'text', required: false, description: 'Database query' }
    ],
    outputs: [
      { id: 'result', name: 'Result', type: 'object', required: true, description: 'Query result' }
    ]
  }
];

export const getBlockTemplate = (type: string): BlockTemplate | undefined => {
  return blockTemplates.find(template => template.type === type);
};

export const getBlockTemplatesByCategory = (category: string): BlockTemplate[] => {
  return blockTemplates.filter(template => template.category === category);
};

export const createBlockFromTemplate = (template: BlockTemplate, position: { x: number; y: number }) => {
  return {
    id: `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type: template.type as any,
    position,
    data: {
      label: template.label,
      config: { ...template.defaultConfig },
      inputs: [...template.inputs],
      outputs: [...template.outputs]
    }
  };
};
