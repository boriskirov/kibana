import { z } from '@kbn/zod';
export type DefendInsightGetRequestParams = z.infer<typeof DefendInsightGetRequestParams>;
export declare const DefendInsightGetRequestParams: z.ZodObject<{
    /**
     * The Defend insight id
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DefendInsightGetRequestParamsInput = z.input<typeof DefendInsightGetRequestParams>;
export type DefendInsightGetResponse = z.infer<typeof DefendInsightGetResponse>;
export declare const DefendInsightGetResponse: z.ZodObject<{
    data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        updatedAt: z.ZodString;
        lastViewedAt: z.ZodString;
        eventsContextCount: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodString;
        replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
        users: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            name?: string | undefined;
        }, {
            id?: string | undefined;
            name?: string | undefined;
        }>, "many">;
        status: z.ZodEnum<["running", "succeeded", "failed", "canceled"]>;
        endpointIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        insightType: z.ZodEnum<["incompatible_antivirus", "policy_response_failure", "custom"]>;
        insights: z.ZodArray<z.ZodObject<{
            group: z.ZodString;
            events: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                endpointId: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id: string;
                endpointId: string;
            }, {
                value: string;
                id: string;
                endpointId: string;
            }>, "many">>;
            remediation: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        }, "strip", z.ZodTypeAny, {
            group: string;
            events?: {
                value: string;
                id: string;
                endpointId: string;
            }[] | undefined;
            remediation?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        }, {
            group: string;
            events?: {
                value: string;
                id: string;
                endpointId: string;
            }[] | undefined;
            remediation?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        }>, "many">;
        apiConfig: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }, {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }>;
        namespace: z.ZodString;
        backingIndex: z.ZodString;
        generationIntervals: z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            durationMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            date: string;
            durationMs: number;
        }, {
            date: string;
            durationMs: number;
        }>, "many">;
        averageIntervalMs: z.ZodNumber;
        failureReason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        status: "running" | "failed" | "succeeded" | "canceled";
        createdAt: string;
        updatedAt: string;
        insights: {
            group: string;
            events?: {
                value: string;
                id: string;
                endpointId: string;
            }[] | undefined;
            remediation?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        }[];
        apiConfig: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        lastViewedAt: string;
        backingIndex: string;
        generationIntervals: {
            date: string;
            durationMs: number;
        }[];
        averageIntervalMs: number;
        endpointIds: string[];
        insightType: "custom" | "incompatible_antivirus" | "policy_response_failure";
        timestamp?: string | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        failureReason?: string | undefined;
        eventsContextCount?: number | undefined;
    }, {
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        status: "running" | "failed" | "succeeded" | "canceled";
        createdAt: string;
        updatedAt: string;
        insights: {
            group: string;
            events?: {
                value: string;
                id: string;
                endpointId: string;
            }[] | undefined;
            remediation?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        }[];
        apiConfig: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        lastViewedAt: string;
        backingIndex: string;
        generationIntervals: {
            date: string;
            durationMs: number;
        }[];
        averageIntervalMs: number;
        endpointIds: string[];
        insightType: "custom" | "incompatible_antivirus" | "policy_response_failure";
        timestamp?: string | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        failureReason?: string | undefined;
        eventsContextCount?: number | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    data?: {
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        status: "running" | "failed" | "succeeded" | "canceled";
        createdAt: string;
        updatedAt: string;
        insights: {
            group: string;
            events?: {
                value: string;
                id: string;
                endpointId: string;
            }[] | undefined;
            remediation?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        }[];
        apiConfig: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        lastViewedAt: string;
        backingIndex: string;
        generationIntervals: {
            date: string;
            durationMs: number;
        }[];
        averageIntervalMs: number;
        endpointIds: string[];
        insightType: "custom" | "incompatible_antivirus" | "policy_response_failure";
        timestamp?: string | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        failureReason?: string | undefined;
        eventsContextCount?: number | undefined;
    } | null | undefined;
}, {
    data?: {
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        status: "running" | "failed" | "succeeded" | "canceled";
        createdAt: string;
        updatedAt: string;
        insights: {
            group: string;
            events?: {
                value: string;
                id: string;
                endpointId: string;
            }[] | undefined;
            remediation?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        }[];
        apiConfig: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        lastViewedAt: string;
        backingIndex: string;
        generationIntervals: {
            date: string;
            durationMs: number;
        }[];
        averageIntervalMs: number;
        endpointIds: string[];
        insightType: "custom" | "incompatible_antivirus" | "policy_response_failure";
        timestamp?: string | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        failureReason?: string | undefined;
        eventsContextCount?: number | undefined;
    } | null | undefined;
}>;
