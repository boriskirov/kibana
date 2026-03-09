import { z } from '@kbn/zod';
export type FindSecurityAIPromptsRequestQuery = z.infer<typeof FindSecurityAIPromptsRequestQuery>;
export declare const FindSecurityAIPromptsRequestQuery: z.ZodObject<{
    /**
     * Connector id used for prompt lookup
     */
    connector_id: z.ZodOptional<z.ZodString>;
    /**
     * The unique identifier for the prompt group
     */
    prompt_group_id: z.ZodString;
    /**
     * Comma-separated list of prompt IDs to retrieve
     */
    prompt_ids: z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>;
}, "strip", z.ZodTypeAny, {
    prompt_group_id: string;
    prompt_ids: string[];
    connector_id?: string | undefined;
}, {
    prompt_group_id: string;
    connector_id?: string | undefined;
    prompt_ids?: unknown;
}>;
export type FindSecurityAIPromptsRequestQueryInput = z.input<typeof FindSecurityAIPromptsRequestQuery>;
export type FindSecurityAIPromptsResponse = z.infer<typeof FindSecurityAIPromptsResponse>;
export declare const FindSecurityAIPromptsResponse: z.ZodObject<{
    prompts: z.ZodArray<z.ZodObject<{
        promptId: z.ZodString;
        prompt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        promptId: string;
        prompt: string;
    }, {
        promptId: string;
        prompt: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    prompts: {
        promptId: string;
        prompt: string;
    }[];
}, {
    prompts: {
        promptId: string;
        prompt: string;
    }[];
}>;
