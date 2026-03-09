import { z } from '@kbn/zod';
/**
 * A Defend insight event
 */
export type DefendInsightEvent = z.infer<typeof DefendInsightEvent>;
export declare const DefendInsightEvent: z.ZodObject<{
    /**
     * The event's ID
     */
    id: z.ZodString;
    /**
     * The endpoint's ID
     */
    endpointId: z.ZodString;
    /**
     * The value of the event
     */
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    id: string;
    endpointId: string;
}, {
    value: string;
    id: string;
    endpointId: string;
}>;
/**
 * The insight type (ie. incompatible_antivirus)
 */
export type DefendInsightType = z.infer<typeof DefendInsightType>;
export declare const DefendInsightType: z.ZodEnum<["incompatible_antivirus", "policy_response_failure", "custom"]>;
export type DefendInsightTypeEnum = typeof DefendInsightType.enum;
export declare const DefendInsightTypeEnum: z.Values<["incompatible_antivirus", "policy_response_failure", "custom"]>;
/**
 * A Defend insight generated from endpoint events
 */
export type DefendInsight = z.infer<typeof DefendInsight>;
export declare const DefendInsight: z.ZodObject<{
    /**
     * The group category of the events (ie. Windows Defender)
     */
    group: z.ZodString;
    /**
     * An array of event objects
     */
    events: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The event's ID
         */
        id: z.ZodString;
        /**
         * The endpoint's ID
         */
        endpointId: z.ZodString;
        /**
         * The value of the event
         */
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
    /**
     * The suggested remediation for the insight
     */
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
}>;
/**
 * Array of Defend insights
 */
export type DefendInsights = z.infer<typeof DefendInsights>;
export declare const DefendInsights: z.ZodArray<z.ZodObject<{
    /**
     * The group category of the events (ie. Windows Defender)
     */
    group: z.ZodString;
    /**
     * An array of event objects
     */
    events: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The event's ID
         */
        id: z.ZodString;
        /**
         * The endpoint's ID
         */
        endpointId: z.ZodString;
        /**
         * The value of the event
         */
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
    /**
     * The suggested remediation for the insight
     */
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
/**
 * The status of the Defend insight.
 */
export type DefendInsightStatus = z.infer<typeof DefendInsightStatus>;
export declare const DefendInsightStatus: z.ZodEnum<["running", "succeeded", "failed", "canceled"]>;
export type DefendInsightStatusEnum = typeof DefendInsightStatus.enum;
export declare const DefendInsightStatusEnum: z.Values<["running", "succeeded", "failed", "canceled"]>;
/**
 * Run durations for the Defend insight
 */
export type DefendInsightGenerationInterval = z.infer<typeof DefendInsightGenerationInterval>;
export declare const DefendInsightGenerationInterval: z.ZodObject<{
    /**
     * The time the Defend insight was generated
     */
    date: z.ZodString;
    /**
     * The duration of the Defend insight generation
     */
    durationMs: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    date: string;
    durationMs: number;
}, {
    date: string;
    durationMs: number;
}>;
export type DefendInsightsResponse = z.infer<typeof DefendInsightsResponse>;
export declare const DefendInsightsResponse: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * The last time the Defend insight was updated.
     */
    updatedAt: z.ZodString;
    /**
     * The last time the Defend insight was viewed in the browser.
     */
    lastViewedAt: z.ZodString;
    /**
     * The number of events in the context.
     */
    eventsContextCount: z.ZodOptional<z.ZodNumber>;
    /**
     * The time the Defend insight was created.
     */
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
    /**
     * The status of the Defend insight.
     */
    status: z.ZodEnum<["running", "succeeded", "failed", "canceled"]>;
    endpointIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    insightType: z.ZodEnum<["incompatible_antivirus", "policy_response_failure", "custom"]>;
    /**
     * The Defend insights.
     */
    insights: z.ZodArray<z.ZodObject<{
        /**
         * The group category of the events (ie. Windows Defender)
         */
        group: z.ZodString;
        /**
         * An array of event objects
         */
        events: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * The event's ID
             */
            id: z.ZodString;
            /**
             * The endpoint's ID
             */
            endpointId: z.ZodString;
            /**
             * The value of the event
             */
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
        /**
         * The suggested remediation for the insight
         */
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
    /**
     * LLM API configuration.
     */
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
    /**
     * Kibana space
     */
    namespace: z.ZodString;
    /**
     * The backing index required for update requests.
     */
    backingIndex: z.ZodString;
    /**
     * The most 5 recent generation intervals
     */
    generationIntervals: z.ZodArray<z.ZodObject<{
        /**
         * The time the Defend insight was generated
         */
        date: z.ZodString;
        /**
         * The duration of the Defend insight generation
         */
        durationMs: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        durationMs: number;
    }, {
        date: string;
        durationMs: number;
    }>, "many">;
    /**
     * The average generation interval in milliseconds
     */
    averageIntervalMs: z.ZodNumber;
    /**
     * The reason for a status of failed.
     */
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
}>;
export type DefendInsightUpdateProps = z.infer<typeof DefendInsightUpdateProps>;
export declare const DefendInsightUpdateProps: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * LLM API configuration.
     */
    apiConfig: z.ZodOptional<z.ZodObject<{
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
    }>>;
    /**
     * The number of events in the context.
     */
    eventsContextCount: z.ZodOptional<z.ZodNumber>;
    /**
     * The Defend insights.
     */
    insights: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The group category of the events (ie. Windows Defender)
         */
        group: z.ZodString;
        /**
         * An array of event objects
         */
        events: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * The event's ID
             */
            id: z.ZodString;
            /**
             * The endpoint's ID
             */
            endpointId: z.ZodString;
            /**
             * The value of the event
             */
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
        /**
         * The suggested remediation for the insight
         */
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
    }>, "many">>;
    /**
     * The status of the Defend insight.
     */
    status: z.ZodOptional<z.ZodEnum<["running", "succeeded", "failed", "canceled"]>>;
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    /**
     * The most 5 recent generation intervals
     */
    generationIntervals: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The time the Defend insight was generated
         */
        date: z.ZodString;
        /**
         * The duration of the Defend insight generation
         */
        durationMs: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        durationMs: number;
    }, {
        date: string;
        durationMs: number;
    }>, "many">>;
    /**
     * The backing index required for update requests.
     */
    backingIndex: z.ZodString;
    /**
     * The reason for a status of failed.
     */
    failureReason: z.ZodOptional<z.ZodString>;
    /**
     * The last time the Defend insight was viewed in the browser.
     */
    lastViewedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    backingIndex: string;
    status?: "running" | "failed" | "succeeded" | "canceled" | undefined;
    insights?: {
        group: string;
        events?: {
            value: string;
            id: string;
            endpointId: string;
        }[] | undefined;
        remediation?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }[] | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    lastViewedAt?: string | undefined;
    generationIntervals?: {
        date: string;
        durationMs: number;
    }[] | undefined;
    failureReason?: string | undefined;
    eventsContextCount?: number | undefined;
}, {
    id: string;
    backingIndex: string;
    status?: "running" | "failed" | "succeeded" | "canceled" | undefined;
    insights?: {
        group: string;
        events?: {
            value: string;
            id: string;
            endpointId: string;
        }[] | undefined;
        remediation?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }[] | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    lastViewedAt?: string | undefined;
    generationIntervals?: {
        date: string;
        durationMs: number;
    }[] | undefined;
    failureReason?: string | undefined;
    eventsContextCount?: number | undefined;
}>;
export type DefendInsightsUpdateProps = z.infer<typeof DefendInsightsUpdateProps>;
export declare const DefendInsightsUpdateProps: z.ZodArray<z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * LLM API configuration.
     */
    apiConfig: z.ZodOptional<z.ZodObject<{
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
    }>>;
    /**
     * The number of events in the context.
     */
    eventsContextCount: z.ZodOptional<z.ZodNumber>;
    /**
     * The Defend insights.
     */
    insights: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The group category of the events (ie. Windows Defender)
         */
        group: z.ZodString;
        /**
         * An array of event objects
         */
        events: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * The event's ID
             */
            id: z.ZodString;
            /**
             * The endpoint's ID
             */
            endpointId: z.ZodString;
            /**
             * The value of the event
             */
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
        /**
         * The suggested remediation for the insight
         */
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
    }>, "many">>;
    /**
     * The status of the Defend insight.
     */
    status: z.ZodOptional<z.ZodEnum<["running", "succeeded", "failed", "canceled"]>>;
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    /**
     * The most 5 recent generation intervals
     */
    generationIntervals: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The time the Defend insight was generated
         */
        date: z.ZodString;
        /**
         * The duration of the Defend insight generation
         */
        durationMs: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        durationMs: number;
    }, {
        date: string;
        durationMs: number;
    }>, "many">>;
    /**
     * The backing index required for update requests.
     */
    backingIndex: z.ZodString;
    /**
     * The reason for a status of failed.
     */
    failureReason: z.ZodOptional<z.ZodString>;
    /**
     * The last time the Defend insight was viewed in the browser.
     */
    lastViewedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    backingIndex: string;
    status?: "running" | "failed" | "succeeded" | "canceled" | undefined;
    insights?: {
        group: string;
        events?: {
            value: string;
            id: string;
            endpointId: string;
        }[] | undefined;
        remediation?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    }[] | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    lastViewedAt?: string | undefined;
    generationIntervals?: {
        date: string;
        durationMs: number;
    }[] | undefined;
    failureReason?: string | undefined;
    eventsContextCount?: number | undefined;
}, {
    id: string;
    backingIndex: string;
    status?: "running" | "failed" | "succeeded" | "canceled" | undefined;
    insights?: {
        group: string;
        events?: {
            value: string;
            id: string;
            endpointId: string;
        }[] | undefined;
        remediation?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    }[] | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    lastViewedAt?: string | undefined;
    generationIntervals?: {
        date: string;
        durationMs: number;
    }[] | undefined;
    failureReason?: string | undefined;
    eventsContextCount?: number | undefined;
}>, "many">;
export type DefendInsightCreateProps = z.infer<typeof DefendInsightCreateProps>;
export declare const DefendInsightCreateProps: z.ZodObject<{
    /**
     * The Defend insight id.
     */
    id: z.ZodOptional<z.ZodString>;
    /**
     * The status of the Defend insight.
     */
    status: z.ZodEnum<["running", "succeeded", "failed", "canceled"]>;
    /**
     * The number of events in the context.
     */
    eventsContextCount: z.ZodOptional<z.ZodNumber>;
    endpointIds: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    insightType: z.ZodEnum<["incompatible_antivirus", "policy_response_failure", "custom"]>;
    /**
     * The Defend insights.
     */
    insights: z.ZodArray<z.ZodObject<{
        /**
         * The group category of the events (ie. Windows Defender)
         */
        group: z.ZodString;
        /**
         * An array of event objects
         */
        events: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * The event's ID
             */
            id: z.ZodString;
            /**
             * The endpoint's ID
             */
            endpointId: z.ZodString;
            /**
             * The value of the event
             */
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
        /**
         * The suggested remediation for the insight
         */
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
    /**
     * LLM API configuration.
     */
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
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
}, "strip", z.ZodTypeAny, {
    status: "running" | "failed" | "succeeded" | "canceled";
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
    endpointIds: string[];
    insightType: "custom" | "incompatible_antivirus" | "policy_response_failure";
    id?: string | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    eventsContextCount?: number | undefined;
}, {
    status: "running" | "failed" | "succeeded" | "canceled";
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
    endpointIds: string[];
    insightType: "custom" | "incompatible_antivirus" | "policy_response_failure";
    id?: string | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    eventsContextCount?: number | undefined;
}>;
