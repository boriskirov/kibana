import { z } from '@kbn/zod';
export type PostAttackDiscoveryGenerateRequestBody = z.infer<typeof PostAttackDiscoveryGenerateRequestBody>;
export declare const PostAttackDiscoveryGenerateRequestBody: z.ZodObject<{
    alertsIndexPattern: z.ZodString;
    anonymizationFields: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        field: z.ZodString;
        allowed: z.ZodOptional<z.ZodBoolean>;
        anonymized: z.ZodOptional<z.ZodBoolean>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        namespace: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }, {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
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
    connectorName: z.ZodOptional<z.ZodString>;
    end: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    langSmithProject: z.ZodOptional<z.ZodString>;
    langSmithApiKey: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    size: z.ZodNumber;
    start: z.ZodOptional<z.ZodString>;
    subAction: z.ZodEnum<["invokeAI", "invokeStream"]>;
}, "strip", z.ZodTypeAny, {
    size: number;
    apiConfig: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    };
    alertsIndexPattern: string;
    anonymizationFields: {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[];
    subAction: "invokeAI" | "invokeStream";
    filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    end?: string | undefined;
    start?: string | undefined;
    model?: string | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    connectorName?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
}, {
    size: number;
    apiConfig: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    };
    alertsIndexPattern: string;
    anonymizationFields: {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[];
    subAction: "invokeAI" | "invokeStream";
    filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    end?: string | undefined;
    start?: string | undefined;
    model?: string | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    connectorName?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
}>;
export type PostAttackDiscoveryGenerateRequestBodyInput = z.input<typeof PostAttackDiscoveryGenerateRequestBody>;
export type PostAttackDiscoveryGenerateResponse = z.infer<typeof PostAttackDiscoveryGenerateResponse>;
export declare const PostAttackDiscoveryGenerateResponse: z.ZodObject<{
    /**
     * The unique identifier for the attack discovery generation process. Use this UUID to track the generation progress and retrieve results via the find endpoint.
     */
    execution_uuid: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    execution_uuid: string;
}, {
    execution_uuid: string;
}>;
