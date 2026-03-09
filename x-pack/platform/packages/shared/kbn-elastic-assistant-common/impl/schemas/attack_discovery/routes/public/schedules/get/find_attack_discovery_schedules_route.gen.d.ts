import { z } from '@kbn/zod';
export type FindAttackDiscoverySchedulesRequestQuery = z.infer<typeof FindAttackDiscoverySchedulesRequestQuery>;
export declare const FindAttackDiscoverySchedulesRequestQuery: z.ZodObject<{
    /**
     * Page number to return (used for pagination). Defaults to 1.
     */
    page: z.ZodOptional<z.ZodNumber>;
    /**
     * Number of Attack discovery schedules to return per page (used for pagination). Defaults to 10.
     */
    per_page: z.ZodOptional<z.ZodNumber>;
    /**
     * Field used to sort results. Common fields include 'name', 'created_at', 'updated_at', and 'enabled'.
     */
    sort_field: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * Sort order direction. Use 'asc' for ascending or 'desc' for descending. Defaults to 'asc'.
     */
    sort_direction: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    page?: number | undefined;
    per_page?: number | undefined;
    sort_field?: string | undefined;
    sort_direction?: "desc" | "asc" | undefined;
}, {
    page?: number | undefined;
    per_page?: number | undefined;
    sort_field?: string | undefined;
    sort_direction?: "desc" | "asc" | undefined;
}>;
export type FindAttackDiscoverySchedulesRequestQueryInput = z.input<typeof FindAttackDiscoverySchedulesRequestQuery>;
export type FindAttackDiscoverySchedulesResponse = z.infer<typeof FindAttackDiscoverySchedulesResponse>;
export declare const FindAttackDiscoverySchedulesResponse: z.ZodObject<{
    /**
     * Current page number of the paginated result set.
     */
    page: z.ZodNumber;
    /**
     * Number of items requested per page.
     */
    per_page: z.ZodNumber;
    /**
     * Total number of Attack discovery schedules matching the query (across all pages).
     */
    total: z.ZodNumber;
    /**
     * Array of matched Attack discovery schedule objects.
     */
    data: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
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
    }[];
    page: number;
    total: number;
    per_page: number;
}, {
    data: {
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
    }[];
    page: number;
    total: number;
    per_page: number;
}>;
