import { z } from '@kbn/zod';
export type GetCapabilitiesResponse = z.infer<typeof GetCapabilitiesResponse>;
export declare const GetCapabilitiesResponse: z.ZodObject<{
    assistantModelEvaluation: z.ZodBoolean;
    defendInsightsPolicyResponseFailure: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    assistantModelEvaluation: boolean;
    defendInsightsPolicyResponseFailure: boolean;
}, {
    assistantModelEvaluation: boolean;
    defendInsightsPolicyResponseFailure: boolean;
}>;
