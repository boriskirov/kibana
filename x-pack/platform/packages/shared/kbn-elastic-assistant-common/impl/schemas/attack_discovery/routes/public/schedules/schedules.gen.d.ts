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
export type AttackDiscoveryScheduleParams = z.infer<typeof AttackDiscoveryScheduleParams>;
export declare const AttackDiscoveryScheduleParams: z.ZodObject<{
    /**
     * The index pattern to get alerts from
     */
    alertsIndexPattern: z.ZodString;
    /**
     * LLM API configuration.
     */
    apiConfig: z.ZodObject<{
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
    combinedFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    size: z.ZodNumber;
    start: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    size: number;
    apiConfig: {
        name: string;
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    };
    alertsIndexPattern: string;
    query?: {
        query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
        language: string;
    } | undefined;
    end?: string | undefined;
    start?: string | undefined;
    filters?: unknown[] | undefined;
    combinedFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
}, {
    size: number;
    apiConfig: {
        name: string;
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    };
    alertsIndexPattern: string;
    query?: {
        query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
        language: string;
    } | undefined;
    end?: string | undefined;
    start?: string | undefined;
    filters?: unknown[] | undefined;
    combinedFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
}>;
export type IntervalSchedule = z.infer<typeof IntervalSchedule>;
export declare const IntervalSchedule: z.ZodObject<{
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
export type AttackDiscoveryScheduleActionGroup = z.infer<typeof AttackDiscoveryScheduleActionGroup>;
export declare const AttackDiscoveryScheduleActionGroup: z.ZodString;
/**
 * The connector ID.
 */
export type AttackDiscoveryScheduleActionId = z.infer<typeof AttackDiscoveryScheduleActionId>;
export declare const AttackDiscoveryScheduleActionId: z.ZodString;
/**
 * Object containing the allowed connector fields, which varies according to the connector type.
 */
export type AttackDiscoveryScheduleActionParams = z.infer<typeof AttackDiscoveryScheduleActionParams>;
export declare const AttackDiscoveryScheduleActionParams: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
export type AttackDiscoveryScheduleActionAlertsFilter = z.infer<typeof AttackDiscoveryScheduleActionAlertsFilter>;
export declare const AttackDiscoveryScheduleActionAlertsFilter: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
/**
 * The condition for throttling the notification: `onActionGroupChange`, `onActiveAlert`,  or `onThrottleInterval`
 */
export type AttackDiscoveryScheduleActionNotifyWhen = z.infer<typeof AttackDiscoveryScheduleActionNotifyWhen>;
export declare const AttackDiscoveryScheduleActionNotifyWhen: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
export type AttackDiscoveryScheduleActionNotifyWhenEnum = typeof AttackDiscoveryScheduleActionNotifyWhen.enum;
export declare const AttackDiscoveryScheduleActionNotifyWhenEnum: z.Values<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
/**
 * Defines how often schedule actions are taken. Time interval in seconds, minutes, hours, or days.
 */
export type AttackDiscoveryScheduleActionThrottle = z.infer<typeof AttackDiscoveryScheduleActionThrottle>;
export declare const AttackDiscoveryScheduleActionThrottle: z.ZodString;
/**
 * The action frequency defines when the action runs (for example, only on schedule execution or at specific time intervals).
 */
export type AttackDiscoveryScheduleActionFrequency = z.infer<typeof AttackDiscoveryScheduleActionFrequency>;
export declare const AttackDiscoveryScheduleActionFrequency: z.ZodObject<{
    /**
     * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
     */
    summary: z.ZodBoolean;
    notifyWhen: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
    throttle: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    summary: boolean;
    throttle: string | null;
    notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
}, {
    summary: boolean;
    throttle: string | null;
    notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
}>;
export type AttackDiscoveryScheduleGeneralAction = z.infer<typeof AttackDiscoveryScheduleGeneralAction>;
export declare const AttackDiscoveryScheduleGeneralAction: z.ZodObject<{
    /**
     * The action type used for sending notifications.
     */
    actionTypeId: z.ZodString;
    group: z.ZodString;
    id: z.ZodString;
    params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
    uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    alertsFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    frequency: z.ZodOptional<z.ZodObject<{
        /**
         * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
         */
        summary: z.ZodBoolean;
        notifyWhen: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
        throttle: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        summary: boolean;
        throttle: string | null;
        notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
    }, {
        summary: boolean;
        throttle: string | null;
        notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    group: string;
    params: {} & {
        [k: string]: unknown;
    };
    actionTypeId: string;
    uuid?: string | undefined;
    frequency?: {
        summary: boolean;
        throttle: string | null;
        notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
    } | undefined;
    alertsFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
}, {
    id: string;
    group: string;
    params: {} & {
        [k: string]: unknown;
    };
    actionTypeId: string;
    uuid?: string | undefined;
    frequency?: {
        summary: boolean;
        throttle: string | null;
        notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
    } | undefined;
    alertsFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
}>;
export type AttackDiscoveryScheduleSystemAction = z.infer<typeof AttackDiscoveryScheduleSystemAction>;
export declare const AttackDiscoveryScheduleSystemAction: z.ZodObject<{
    /**
     * The action type used for sending notifications.
     */
    actionTypeId: z.ZodString;
    id: z.ZodString;
    params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
    uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    params: {} & {
        [k: string]: unknown;
    };
    actionTypeId: string;
    uuid?: string | undefined;
}, {
    id: string;
    params: {} & {
        [k: string]: unknown;
    };
    actionTypeId: string;
    uuid?: string | undefined;
}>;
export type AttackDiscoveryScheduleAction = z.infer<typeof AttackDiscoveryScheduleAction>;
export declare const AttackDiscoveryScheduleAction: z.ZodUnion<[z.ZodObject<{
    /**
     * The action type used for sending notifications.
     */
    actionTypeId: z.ZodString;
    group: z.ZodString;
    id: z.ZodString;
    params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
    uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    alertsFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    frequency: z.ZodOptional<z.ZodObject<{
        /**
         * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
         */
        summary: z.ZodBoolean;
        notifyWhen: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
        throttle: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        summary: boolean;
        throttle: string | null;
        notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
    }, {
        summary: boolean;
        throttle: string | null;
        notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    group: string;
    params: {} & {
        [k: string]: unknown;
    };
    actionTypeId: string;
    uuid?: string | undefined;
    frequency?: {
        summary: boolean;
        throttle: string | null;
        notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
    } | undefined;
    alertsFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
}, {
    id: string;
    group: string;
    params: {} & {
        [k: string]: unknown;
    };
    actionTypeId: string;
    uuid?: string | undefined;
    frequency?: {
        summary: boolean;
        throttle: string | null;
        notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
    } | undefined;
    alertsFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
}>, z.ZodObject<{
    /**
     * The action type used for sending notifications.
     */
    actionTypeId: z.ZodString;
    id: z.ZodString;
    params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
    uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    params: {} & {
        [k: string]: unknown;
    };
    actionTypeId: string;
    uuid?: string | undefined;
}, {
    id: string;
    params: {} & {
        [k: string]: unknown;
    };
    actionTypeId: string;
    uuid?: string | undefined;
}>]>;
/**
 * An attack discovery schedule execution status
 */
export type AttackDiscoveryScheduleExecutionStatus = z.infer<typeof AttackDiscoveryScheduleExecutionStatus>;
export declare const AttackDiscoveryScheduleExecutionStatus: z.ZodEnum<["ok", "active", "error", "unknown", "warning"]>;
export type AttackDiscoveryScheduleExecutionStatusEnum = typeof AttackDiscoveryScheduleExecutionStatus.enum;
export declare const AttackDiscoveryScheduleExecutionStatusEnum: z.Values<["ok", "active", "error", "unknown", "warning"]>;
/**
 * An attack discovery schedule execution information
 */
export type AttackDiscoveryScheduleExecution = z.infer<typeof AttackDiscoveryScheduleExecution>;
export declare const AttackDiscoveryScheduleExecution: z.ZodObject<{
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
export type AttackDiscoverySchedule = z.infer<typeof AttackDiscoverySchedule>;
export declare const AttackDiscoverySchedule: z.ZodObject<{
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
    createdBy: z.ZodString;
    /**
     * The name of the user that updated the schedule
     */
    updatedBy: z.ZodString;
    /**
     * The date the schedule was created
     */
    createdAt: z.ZodString;
    /**
     * The date the schedule was updated
     */
    updatedAt: z.ZodString;
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
        alertsIndexPattern: z.ZodString;
        /**
         * LLM API configuration.
         */
        apiConfig: z.ZodObject<{
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
        combinedFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
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
        actionTypeId: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alertsFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            /**
             * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
             */
            summary: z.ZodBoolean;
            notifyWhen: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
            throttle: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        }, {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }>, z.ZodObject<{
        /**
         * The action type used for sending notifications.
         */
        actionTypeId: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    }, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    }>]>, "many">;
    /**
     * The attack discovery schedule last execution summary
     */
    lastExecution: z.ZodOptional<z.ZodObject<{
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
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    })[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    schedule: {
        interval: string;
    };
    lastExecution?: {
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
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    })[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    schedule: {
        interval: string;
    };
    lastExecution?: {
        status: "error" | "warning" | "unknown" | "active" | "ok";
        date: string;
        message?: string | undefined;
        duration?: number | undefined;
    } | undefined;
}>;
/**
 * An attack discovery schedule create properties
 */
export type AttackDiscoveryScheduleCreateProps = z.infer<typeof AttackDiscoveryScheduleCreateProps>;
export declare const AttackDiscoveryScheduleCreateProps: z.ZodObject<{
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
        alertsIndexPattern: z.ZodString;
        /**
         * LLM API configuration.
         */
        apiConfig: z.ZodObject<{
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
        combinedFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
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
        actionTypeId: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alertsFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            /**
             * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
             */
            summary: z.ZodBoolean;
            notifyWhen: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
            throttle: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        }, {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }>, z.ZodObject<{
        /**
         * The action type used for sending notifications.
         */
        actionTypeId: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    }, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    params: {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
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
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    })[] | undefined;
}, {
    name: string;
    params: {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
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
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    })[] | undefined;
}>;
/**
 * An attack discovery schedule update properties
 */
export type AttackDiscoveryScheduleUpdateProps = z.infer<typeof AttackDiscoveryScheduleUpdateProps>;
export declare const AttackDiscoveryScheduleUpdateProps: z.ZodObject<{
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
        alertsIndexPattern: z.ZodString;
        /**
         * LLM API configuration.
         */
        apiConfig: z.ZodObject<{
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
        combinedFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        size: z.ZodNumber;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
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
        actionTypeId: z.ZodString;
        group: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        alertsFilter: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        frequency: z.ZodOptional<z.ZodObject<{
            /**
             * Action summary indicates whether we will send a summary notification about all the generate alerts or notification per individual alert
             */
            summary: z.ZodBoolean;
            notifyWhen: z.ZodEnum<["onActiveAlert", "onThrottleInterval", "onActionGroupChange"]>;
            throttle: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        }, {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }, {
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }>, z.ZodObject<{
        /**
         * The action type used for sending notifications.
         */
        actionTypeId: z.ZodString;
        id: z.ZodString;
        params: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
        uuid: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    }, {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    params: {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectOutputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    })[];
    schedule: {
        interval: string;
    };
}, {
    name: string;
    params: {
        size: number;
        apiConfig: {
            name: string;
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        };
        alertsIndexPattern: string;
        query?: {
            query: string | z.objectInputType<{}, z.ZodUnknown, "strip">;
            language: string;
        } | undefined;
        end?: string | undefined;
        start?: string | undefined;
        filters?: unknown[] | undefined;
        combinedFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    };
    actions: ({
        id: string;
        group: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
        frequency?: {
            summary: boolean;
            throttle: string | null;
            notifyWhen: "onActiveAlert" | "onThrottleInterval" | "onActionGroupChange";
        } | undefined;
        alertsFilter?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    } | {
        id: string;
        params: {} & {
            [k: string]: unknown;
        };
        actionTypeId: string;
        uuid?: string | undefined;
    })[];
    schedule: {
        interval: string;
    };
}>;
