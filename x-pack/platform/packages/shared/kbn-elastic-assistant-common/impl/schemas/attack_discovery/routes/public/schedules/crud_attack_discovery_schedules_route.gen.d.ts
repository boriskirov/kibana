import { z } from '@kbn/zod';
/**
 * Object containing Attack Discovery schedule.
 */
export type AttackDiscoveryGenericResponse = z.infer<typeof AttackDiscoveryGenericResponse>;
export declare const AttackDiscoveryGenericResponse: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
/**
 * Generic error response for Attack discovery schedule operations
 */
export type AttackDiscoveryGenericError = z.infer<typeof AttackDiscoveryGenericError>;
export declare const AttackDiscoveryGenericError: z.ZodObject<{
    /**
     * HTTP status code
     */
    status_code: z.ZodOptional<z.ZodNumber>;
    /**
     * Error type
     */
    error: z.ZodOptional<z.ZodString>;
    /**
     * Human-readable error message describing what went wrong
     */
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    error?: string | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
}, {
    error?: string | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
}>;
export type CreateAttackDiscoverySchedulesRequestBody = z.infer<typeof CreateAttackDiscoverySchedulesRequestBody>;
export declare const CreateAttackDiscoverySchedulesRequestBody: z.ZodObject<{
    name: z.ZodString;
    enabled: z.ZodOptional<z.ZodBoolean>;
    params: z.ZodObject<{
        alerts_index_pattern: z.ZodString;
        api_config: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        } & {
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }>;
        end: z.ZodOptional<z.ZodString>;
        query: z.ZodOptional<z.ZodObject<{
            query: z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>]>;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }, {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }>>;
        filters: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        combined_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        interval: string;
    }, {
        interval: string;
    }>;
    actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        action_type_id: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            summary: z.ZodBoolean;
            notify_when: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
            throttle: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }>, z.ZodObject<{
        action_type_id: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    schedule: {
        interval: string;
    };
    enabled?: boolean | undefined;
    actions?: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[] | undefined;
}, {
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    schedule: {
        interval: string;
    };
    enabled?: boolean | undefined;
    actions?: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[] | undefined;
}>;
export type CreateAttackDiscoverySchedulesRequestBodyInput = z.input<typeof CreateAttackDiscoverySchedulesRequestBody>;
export type CreateAttackDiscoverySchedulesResponse = z.infer<typeof CreateAttackDiscoverySchedulesResponse>;
export declare const CreateAttackDiscoverySchedulesResponse: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_by: z.ZodString;
    updated_by: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    enabled: z.ZodBoolean;
    params: z.ZodObject<{
        alerts_index_pattern: z.ZodString;
        api_config: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        } & {
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }>;
        end: z.ZodOptional<z.ZodString>;
        query: z.ZodOptional<z.ZodObject<{
            query: z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>]>;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }, {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }>>;
        filters: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        combined_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        interval: string;
    }, {
        interval: string;
    }>;
    actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        action_type_id: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            summary: z.ZodBoolean;
            notify_when: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
            throttle: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }>, z.ZodObject<{
        action_type_id: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }>]>, "many">;
    last_execution: z.ZodOptional<z.ZodObject<{
        date: z.ZodString;
        duration: z.ZodOptional<z.ZodNumber>;
        status: z.ZodEnum<["ok", "active", "error", "unknown", "warning"]>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    }, {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    id: string;
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[];
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    schedule: {
        interval: string;
    };
    last_execution?: {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    } | undefined;
}, {
    enabled: boolean;
    id: string;
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[];
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    schedule: {
        interval: string;
    };
    last_execution?: {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    } | undefined;
}>;
export type DeleteAttackDiscoverySchedulesRequestParams = z.infer<typeof DeleteAttackDiscoverySchedulesRequestParams>;
export declare const DeleteAttackDiscoverySchedulesRequestParams: z.ZodObject<{
    /**
     * The unique identifier (UUID) of the Attack Discovery schedule to delete. This ID is returned when creating a schedule and can be found in schedule listings.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DeleteAttackDiscoverySchedulesRequestParamsInput = z.input<typeof DeleteAttackDiscoverySchedulesRequestParams>;
export type DeleteAttackDiscoverySchedulesResponse = z.infer<typeof DeleteAttackDiscoverySchedulesResponse>;
export declare const DeleteAttackDiscoverySchedulesResponse: z.ZodObject<{
    /**
     * The unique identifier of the deleted Attack Discovery schedule
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DisableAttackDiscoverySchedulesRequestParams = z.infer<typeof DisableAttackDiscoverySchedulesRequestParams>;
export declare const DisableAttackDiscoverySchedulesRequestParams: z.ZodObject<{
    /**
     * The unique identifier (UUID) of the Attack Discovery schedule to disable. This ID is returned when creating a schedule and can be found in schedule listings.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DisableAttackDiscoverySchedulesRequestParamsInput = z.input<typeof DisableAttackDiscoverySchedulesRequestParams>;
export type DisableAttackDiscoverySchedulesResponse = z.infer<typeof DisableAttackDiscoverySchedulesResponse>;
export declare const DisableAttackDiscoverySchedulesResponse: z.ZodObject<{
    /**
     * The unique identifier of the disabled Attack Discovery schedule
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type EnableAttackDiscoverySchedulesRequestParams = z.infer<typeof EnableAttackDiscoverySchedulesRequestParams>;
export declare const EnableAttackDiscoverySchedulesRequestParams: z.ZodObject<{
    /**
     * The unique identifier (UUID) of the Attack Discovery schedule to enable. This ID is returned when creating a schedule and can be found in schedule listings.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type EnableAttackDiscoverySchedulesRequestParamsInput = z.input<typeof EnableAttackDiscoverySchedulesRequestParams>;
export type EnableAttackDiscoverySchedulesResponse = z.infer<typeof EnableAttackDiscoverySchedulesResponse>;
export declare const EnableAttackDiscoverySchedulesResponse: z.ZodObject<{
    /**
     * The unique identifier of the enabled Attack Discovery schedule
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type GetAttackDiscoverySchedulesRequestParams = z.infer<typeof GetAttackDiscoverySchedulesRequestParams>;
export declare const GetAttackDiscoverySchedulesRequestParams: z.ZodObject<{
    /**
     * The unique identifier (UUID) of the Attack Discovery schedule to retrieve. This ID is returned when creating a schedule and can be found in schedule listings.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type GetAttackDiscoverySchedulesRequestParamsInput = z.input<typeof GetAttackDiscoverySchedulesRequestParams>;
export type GetAttackDiscoverySchedulesResponse = z.infer<typeof GetAttackDiscoverySchedulesResponse>;
export declare const GetAttackDiscoverySchedulesResponse: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_by: z.ZodString;
    updated_by: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    enabled: z.ZodBoolean;
    params: z.ZodObject<{
        alerts_index_pattern: z.ZodString;
        api_config: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        } & {
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }>;
        end: z.ZodOptional<z.ZodString>;
        query: z.ZodOptional<z.ZodObject<{
            query: z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>]>;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }, {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }>>;
        filters: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        combined_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        interval: string;
    }, {
        interval: string;
    }>;
    actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        action_type_id: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            summary: z.ZodBoolean;
            notify_when: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
            throttle: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }>, z.ZodObject<{
        action_type_id: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }>]>, "many">;
    last_execution: z.ZodOptional<z.ZodObject<{
        date: z.ZodString;
        duration: z.ZodOptional<z.ZodNumber>;
        status: z.ZodEnum<["ok", "active", "error", "unknown", "warning"]>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    }, {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    id: string;
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[];
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    schedule: {
        interval: string;
    };
    last_execution?: {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    } | undefined;
}, {
    enabled: boolean;
    id: string;
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[];
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    schedule: {
        interval: string;
    };
    last_execution?: {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    } | undefined;
}>;
export type UpdateAttackDiscoverySchedulesRequestParams = z.infer<typeof UpdateAttackDiscoverySchedulesRequestParams>;
export declare const UpdateAttackDiscoverySchedulesRequestParams: z.ZodObject<{
    /**
     * The unique identifier (UUID) of the Attack Discovery schedule to update. This ID is returned when creating a schedule and can be found in schedule listings.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type UpdateAttackDiscoverySchedulesRequestParamsInput = z.input<typeof UpdateAttackDiscoverySchedulesRequestParams>;
export type UpdateAttackDiscoverySchedulesRequestBody = z.infer<typeof UpdateAttackDiscoverySchedulesRequestBody>;
export declare const UpdateAttackDiscoverySchedulesRequestBody: z.ZodObject<{
    name: z.ZodString;
    params: z.ZodObject<{
        alerts_index_pattern: z.ZodString;
        api_config: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        } & {
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }>;
        end: z.ZodOptional<z.ZodString>;
        query: z.ZodOptional<z.ZodObject<{
            query: z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>]>;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }, {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }>>;
        filters: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        combined_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        interval: string;
    }, {
        interval: string;
    }>;
    actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        action_type_id: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            summary: z.ZodBoolean;
            notify_when: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
            throttle: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }>, z.ZodObject<{
        action_type_id: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[];
    schedule: {
        interval: string;
    };
}, {
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[];
    schedule: {
        interval: string;
    };
}>;
export type UpdateAttackDiscoverySchedulesRequestBodyInput = z.input<typeof UpdateAttackDiscoverySchedulesRequestBody>;
export type UpdateAttackDiscoverySchedulesResponse = z.infer<typeof UpdateAttackDiscoverySchedulesResponse>;
export declare const UpdateAttackDiscoverySchedulesResponse: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_by: z.ZodString;
    updated_by: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    enabled: z.ZodBoolean;
    params: z.ZodObject<{
        alerts_index_pattern: z.ZodString;
        api_config: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        } & {
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }, {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        }>;
        end: z.ZodOptional<z.ZodString>;
        query: z.ZodOptional<z.ZodObject<{
            query: z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>]>;
            language: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }, {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        }>>;
        filters: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
        combined_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }>;
    schedule: z.ZodObject<{
        interval: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        interval: string;
    }, {
        interval: string;
    }>;
    actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        action_type_id: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            summary: z.ZodBoolean;
            notify_when: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
            throttle: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }, {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    }>, z.ZodObject<{
        action_type_id: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    }>]>, "many">;
    last_execution: z.ZodOptional<z.ZodObject<{
        date: z.ZodString;
        duration: z.ZodOptional<z.ZodNumber>;
        status: z.ZodEnum<["ok", "active", "error", "unknown", "warning"]>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    }, {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    id: string;
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[];
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    schedule: {
        interval: string;
    };
    last_execution?: {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    } | undefined;
}, {
    enabled: boolean;
    id: string;
    name: string;
    params: {
        size: number;
        alerts_index_pattern: string;
        api_config: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combined_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
        alerts_filter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        frequency?: {
            summary: boolean;
            notify_when: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
            throttle: string | null;
        } | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        action_type_id: string;
        uuid?: string | undefined;
    })[];
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    schedule: {
        interval: string;
    };
    last_execution?: {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    } | undefined;
}>;
