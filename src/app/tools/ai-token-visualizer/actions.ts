'use server';

import { encode as gptEncode, decode as gptDecode } from 'gpt-tokenizer';

let anthropicTokenizer: any = null;
let geminiTokenizer: any = null;

export async function tokenizeText(text: string, model: 'chatgpt' | 'claude' | 'gemini') {
  if (!text) return { tokens: [], tokenStrings: [] };

  try {
    if (model === 'chatgpt') {
      const tokens = gptEncode(text);
      const tokenStrings = tokens.map(t => gptDecode([t]));
      return { tokens, tokenStrings };
    } 
    
    if (model === 'claude') {
      if (!anthropicTokenizer) {
        const { getTokenizer } = await import('@anthropic-ai/tokenizer');
        anthropicTokenizer = getTokenizer();
      }
      const tokensArray = anthropicTokenizer.encode(text);
      const tokens = Array.from(tokensArray);
      
      const decoder = new TextDecoder('utf-8');
      const tokenStrings = tokens.map((t: any) => {
        try {
          const bytes = anthropicTokenizer.decode(new Uint32Array([t]));
          return decoder.decode(bytes);
        } catch(e) {
          return '';
        }
      });
      return { tokens, tokenStrings };
    } 
    
    if (model === 'gemini') {
      if (!geminiTokenizer) {
        const { fromPreTrained } = await import('@lenml/tokenizer-gemini');
        geminiTokenizer = fromPreTrained();
      }
      const tokens = geminiTokenizer.encode(text);
      const tokenStrings = tokens.map((t: number) => {
        try {
          return geminiTokenizer.decode([t]);
        } catch(e) {
          return '';
        }
      });
      return { tokens, tokenStrings };
    }
  } catch (err) {
    console.error("Tokenization error:", err);
    return { tokens: [], tokenStrings: [] };
  }
  
  return { tokens: [], tokenStrings: [] };
}
