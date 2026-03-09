import { z } from '@kbn/zod';
/**
 * An query condition to filter alerts
 */
export type Query = z.infer<typeof Query>;
export declare const Query: z.ZodObject<{
    query: z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>]>;
    language: z.ZodString;
}, "strip", z.ZodTypeAny, {
    query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
    language: string;
}, {
    query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
    language: string;
}>;
/**
 * The filter array used to define the conditions for when alerts are selected as an attack discovery context. Defaults to an empty array.
 */
export type Filters = z.infer<typeof Filters>;
export declare const Filters: z.ZodArray<z.ZodUnknown, "many">;
/**
 * An attack discovery schedule params
 */
export type AttackDiscoveryApiScheduleParams = z.infer<typeof AttackDiscoveryApiScheduleParams>;
export declare const AttackDiscoveryApiScheduleParams: z.ZodObject<{
    /**
     * The index pattern to get alerts from
     */
    alerts_index_pattern: z.ZodString;
    /**
     * LLM API configuration.
     */
    api_config: z.ZodObject<{
        connectorId: z.ZodString;
        actionTypeId: z.ZodString;
        defaultSystemPromptId: z.ZodOptional<z.ZodString>;
        provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
        model: z.ZodOptional<z.ZodString>;
    } & {
        /**
         * The name of the connector
         */
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
export type IntervalApiSchedule = z.infer<typeof IntervalApiSchedule>;
export declare const IntervalApiSchedule: z.ZodObject<{
    /**
     * The schedule interval
     */
    interval: z.ZodString;
}, "strip", z.ZodTypeAny, {
    interval: string;
}, {
    interval: string;
}>;
/**
 * Groups actions by use cases. Use `default` for alert notifications.
 */
export type AttackDiscoveryApiScheduleActionGroup = z.infer<typeof AttackDiscoveryApiScheduleActionGroup>;
export declare const AttackDiscoveryApiScheduleActionGroup: z.ZodString;
/**
 * The connector ID.
 */
export type AttackDiscoveryApiScheduleActionId = z.infer<typeof AttackDiscoveryApiScheduleActionId>;
export declare const AttackDiscoveryApiScheduleActionId: z.ZodString;
/**
 * Object containing the allowed connector fields, which varies according to the connector type.
 */
export type AttackDiscoveryApiScheduleActionParams = z.infer<typeof AttackDiscoveryApiScheduleActionParams>;
export declare const AttackDiscoveryApiScheduleActionParams: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
export type AttackDiscoveryApiScheduleActionAlertsFilter = z.infer<typeof AttackDiscoveryApiScheduleActionAlertsFilter>;
export declare const AttackDiscoveryApiScheduleActionAlertsFilter: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
/**
 * The condition for throttling the notification: `onActionGroupChange`, `onActiveAlert`,  or `onThrottleInterval`
 */
export type AttackDiscoveryApiScheduleActionNotifyWhen = z.infer<typeof AttackDiscoveryApiScheduleActionNotifyWhen>;
export declare const AttackDiscoveryApiScheduleActionNotifyWhen: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
export type AttackDiscoveryApiScheduleActionNotifyWhenEnum = typeof AttackDiscoveryApiScheduleActionNotifyWhen.enum;
export declare const AttackDiscoveryApiScheduleActionNotifyWhenEnum: z.Values<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
/**
 * Defines how often schedule actions are taken. Time interval in seconds, minutes, hours, or days.
 */
export type AttackDiscoveryApiScheduleActionThrottle = z.infer<typeof AttackDiscoveryApiScheduleActionThrottle>;
export declare const AttackDiscoveryApiScheduleActionThrottle: z.ZodString;
/**
 * The action frequency defines when the action runs (for example, only on schedule execution or at specific time intervals).
 */
export type AttackDiscoveryApiScheduleActionFrequency = z.infer<typeof AttackDiscoveryApiScheduleActionFrequency>;
export declare const AttackDiscoveryApiScheduleActionFrequency: z.ZodObject<{
    /**
     * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
     */
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
}>;
export type AttackDiscoveryApiScheduleGeneralAction = z.infer<typeof AttackDiscoveryApiScheduleGeneralAction>;
export declare const AttackDiscoveryApiScheduleGeneralAction: z.ZodObject<{
    /**
     * The action type used for sending notifications.
     */
    action_type_id: z.ZodString;
    group: z.ZodString;
    id: z.ZodString;
    params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
    uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    frequency: z.ZodOptional<z.ZodObject<{
        /**
         * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
         */
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
}>;
export type AttackDiscoveryApiScheduleSystemAction = z.infer<typeof AttackDiscoveryApiScheduleSystemAction>;
export declare const AttackDiscoveryApiScheduleSystemAction: z.ZodObject<{
    /**
     * The action type used for sending notifications.
     */
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
}>;
export type AttackDiscoveryApiScheduleAction = z.infer<typeof AttackDiscoveryApiScheduleAction>;
export declare const AttackDiscoveryApiScheduleAction: z.ZodUnion<[z.ZodObject<{
    /**
     * The action type used for sending notifications.
     */
    action_type_id: z.ZodString;
    group: z.ZodString;
    id: z.ZodString;
    params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
    uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    frequency: z.ZodOptional<z.ZodObject<{
        /**
         * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
         */
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
    /**
     * The action type used for sending notifications.
     */
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
}>]>;
/**
 * An attack discovery schedule execution status
 */
export type AttackDiscoveryApiScheduleExecutionStatus = z.infer<typeof AttackDiscoveryApiScheduleExecutionStatus>;
export declare const AttackDiscoveryApiScheduleExecutionStatus: z.ZodEnum<["ok", "active", "error", "unknown", "warning"]>;
export type AttackDiscoveryApiScheduleExecutionStatusEnum = typeof AttackDiscoveryApiScheduleExecutionStatus.enum;
export declare const AttackDiscoveryApiScheduleExecutionStatusEnum: z.Values<["ok", "active", "error", "unknown", "warning"]>;
/**
 * An attack discovery schedule execution information
 */
export type AttackDiscoveryApiScheduleExecution = z.infer<typeof AttackDiscoveryApiScheduleExecution>;
export declare const AttackDiscoveryApiScheduleExecution: z.ZodObject<{
    /**
     * Date of the execution
     */
    date: z.ZodString;
    /**
     * Duration of the execution
     */
    duration: z.ZodOptional<z.ZodNumber>;
    /**
     * Status of the execution
     */
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
}>;
/**
 * An attack discovery schedule
 */
export type AttackDiscoveryApiSchedule = z.infer<typeof AttackDiscoveryApiSchedule>;
export declare const AttackDiscoveryApiSchedule: z.ZodObject<{
    /**
     * UUID of attack discovery schedule
     */
    id: z.ZodString;
    /**
     * The name of the schedule
     */
    name: z.ZodString;
    /**
     * The name of the user that created the schedule
     */
    created_by: z.ZodString;
    /**
     * The name of the user that updated the schedule
     */
    updated_by: z.ZodString;
    /**
     * The date the schedule was created
     */
    created_at: z.ZodString;
    /**
     * The date the schedule was updated
     */
    updated_at: z.ZodString;
    /**
     * Indicates whether the schedule is enabled
     */
    enabled: z.ZodBoolean;
    /**
     * The attack discovery schedule configuration parameters
     */
    params: z.ZodObject<{
        /**
         * The index pattern to get alerts from
         */
        alerts_index_pattern: z.ZodString;
        /**
         * LLM API configuration.
         */
        api_config: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        } & {
            /**
             * The name of the connector
             */
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
    /**
     * The attack discovery schedule interval
     */
    schedule: z.ZodObject<{
        /**
         * The schedule interval
         */
        interval: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        interval: string;
    }, {
        interval: string;
    }>;
    /**
     * The attack discovery schedule actions
     */
    actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        /**
         * The action type used for sending notifications.
         */
        action_type_id: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            /**
             * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
             */
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
        /**
         * The action type used for sending notifications.
         */
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
    /**
     * The attack discovery schedule last execution summary
     */
    last_execution: z.ZodOptional<z.ZodObject<{
        /**
         * Date of the execution
         */
        date: z.ZodString;
        /**
         * Duration of the execution
         */
        duration: z.ZodOptional<z.ZodNumber>;
        /**
         * Status of the execution
         */
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
/**
 * An attack discovery schedule create properties
 */
export type AttackDiscoveryApiScheduleCreateProps = z.infer<typeof AttackDiscoveryApiScheduleCreateProps>;
export declare const AttackDiscoveryApiScheduleCreateProps: z.ZodObject<{
    /**
     * The name of the schedule
     */
    name: z.ZodString;
    /**
     * Indicates whether the schedule is enabled
     */
    enabled: z.ZodOptional<z.ZodBoolean>;
    /**
     * The attack discovery schedule configuration parameters
     */
    params: z.ZodObject<{
        /**
         * The index pattern to get alerts from
         */
        alerts_index_pattern: z.ZodString;
        /**
         * LLM API configuration.
         */
        api_config: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        } & {
            /**
             * The name of the connector
             */
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
    /**
     * The attack discovery schedule interval
     */
    schedule: z.ZodObject<{
        /**
         * The schedule interval
         */
        interval: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        interval: string;
    }, {
        interval: string;
    }>;
    /**
     * The attack discovery schedule actions
     */
    actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        /**
         * The action type used for sending notifications.
         */
        action_type_id: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            /**
             * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
             */
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
        /**
         * The action type used for sending notifications.
         */
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
/**
 * An attack discovery schedule update properties
 */
export type AttackDiscoveryApiScheduleUpdateProps = z.infer<typeof AttackDiscoveryApiScheduleUpdateProps>;
export declare const AttackDiscoveryApiScheduleUpdateProps: z.ZodObject<{
    /**
     * The name of the schedule
     */
    name: z.ZodString;
    /**
     * The attack discovery schedule configuration parameters
     */
    params: z.ZodObject<{
        /**
         * The index pattern to get alerts from
         */
        alerts_index_pattern: z.ZodString;
        /**
         * LLM API configuration.
         */
        api_config: z.ZodObject<{
            connectorId: z.ZodString;
            actionTypeId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
            model: z.ZodOptional<z.ZodString>;
        } & {
            /**
             * The name of the connector
             */
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
    /**
     * The attack discovery schedule interval
     */
    schedule: z.ZodObject<{
        /**
         * The schedule interval
         */
        interval: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        interval: string;
    }, {
        interval: string;
    }>;
    /**
     * The attack discovery schedule actions
     */
    actions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        /**
         * The action type used for sending notifications.
         */
        action_type_id: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alerts_filter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            /**
             * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
             */
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
        /**
         * The action type used for sending notifications.
         */
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
