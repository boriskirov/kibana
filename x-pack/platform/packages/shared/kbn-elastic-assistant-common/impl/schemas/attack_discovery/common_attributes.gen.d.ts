import { z } from '@kbn/zod';
/**
 * An attack discovery generated from one or more alerts
 */
export type AttackDiscovery = z.infer<typeof AttackDiscovery>;
export declare const AttackDiscovery: z.ZodObject<{
    /**
     * The alert IDs that the attack discovery is based on
     */
    alertIds: z.ZodArray<z.ZodString, "many">;
    /**
     * UUID of attack discovery
     */
    id: z.ZodOptional<z.ZodString>;
    /**
     * Details of the attack with bulleted markdown that always uses special syntax for field names and values from the source data.
     */
    detailsMarkdown: z.ZodString;
    /**
     * A short (no more than a sentence) summary of the attack discovery featuring only the host.name and user.name fields (when they are applicable), using the same syntax
     */
    entitySummaryMarkdown: z.ZodOptional<z.ZodString>;
    /**
     * An array of MITRE ATT&CK tactic for the attack discovery
     */
    mitreAttackTactics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * A markdown summary of attack discovery, using the same syntax
     */
    summaryMarkdown: z.ZodString;
    /**
     * A title for the attack discovery, in plain text
     */
    title: z.ZodString;
    /**
     * The time the attack discovery was generated
     */
    timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    alertIds: string[];
    detailsMarkdown: string;
    summaryMarkdown: string;
    id?: string | undefined;
    timestamp?: string | undefined;
    entitySummaryMarkdown?: string | undefined;
    mitreAttackTactics?: string[] | undefined;
}, {
    title: string;
    alertIds: string[];
    detailsMarkdown: string;
    summaryMarkdown: string;
    id?: string | undefined;
    timestamp?: string | undefined;
    entitySummaryMarkdown?: string | undefined;
    mitreAttackTactics?: string[] | undefined;
}>;
/**
 * Array of attack discoveries
 */
export type AttackDiscoveries = z.infer<typeof AttackDiscoveries>;
export declare const AttackDiscoveries: z.ZodArray<z.ZodObject<{
    /**
     * The alert IDs that the attack discovery is based on
     */
    alertIds: z.ZodArray<z.ZodString, "many">;
    /**
     * UUID of attack discovery
     */
    id: z.ZodOptional<z.ZodString>;
    /**
     * Details of the attack with bulleted markdown that always uses special syntax for field names and values from the source data.
     */
    detailsMarkdown: z.ZodString;
    /**
     * A short (no more than a sentence) summary of the attack discovery featuring only the host.name and user.name fields (when they are applicable), using the same syntax
     */
    entitySummaryMarkdown: z.ZodOptional<z.ZodString>;
    /**
     * An array of MITRE ATT&CK tactic for the attack discovery
     */
    mitreAttackTactics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * A markdown summary of attack discovery, using the same syntax
     */
    summaryMarkdown: z.ZodString;
    /**
     * A title for the attack discovery, in plain text
     */
    title: z.ZodString;
    /**
     * The time the attack discovery was generated
     */
    timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    alertIds: string[];
    detailsMarkdown: string;
    summaryMarkdown: string;
    id?: string | undefined;
    timestamp?: string | undefined;
    entitySummaryMarkdown?: string | undefined;
    mitreAttackTactics?: string[] | undefined;
}, {
    title: string;
    alertIds: string[];
    detailsMarkdown: string;
    summaryMarkdown: string;
    id?: string | undefined;
    timestamp?: string | undefined;
    entitySummaryMarkdown?: string | undefined;
    mitreAttackTactics?: string[] | undefined;
}>, "many">;
/**
 * The status of the attack discovery.
 */
export type AttackDiscoveryStatus = z.infer<typeof AttackDiscoveryStatus>;
export declare const AttackDiscoveryStatus: z.ZodEnum<["running", "succeeded", "failed", "canceled"]>;
export type AttackDiscoveryStatusEnum = typeof AttackDiscoveryStatus.enum;
export declare const AttackDiscoveryStatusEnum: z.Values<["running", "succeeded", "failed", "canceled"]>;
/**
 * Run durations for the attack discovery
 */
export type GenerationInterval = z.infer<typeof GenerationInterval>;
export declare const GenerationInterval: z.ZodObject<{
    /**
     * The time the attack discovery was generated
     */
    date: z.ZodString;
    /**
     * The duration of the attack discovery generation
     */
    durationMs: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    date: string;
    durationMs: number;
}, {
    date: string;
    durationMs: number;
}>;
/**
 * Attack discovery stats
 */
export type AttackDiscoveryStat = z.infer<typeof AttackDiscoveryStat>;
export declare const AttackDiscoveryStat: z.ZodObject<{
    /**
     * Whether the user has viewed the results of the attack discovery run
     */
    hasViewed: z.ZodBoolean;
    /**
     * The number of attack discoveries for the connector
     */
    count: z.ZodNumber;
    /**
     * The connector ID for the attack discovery
     */
    connectorId: z.ZodString;
    /**
     * The status of the attack discovery.
     */
    status: z.ZodEnum<["running", "succeeded", "failed", "canceled"]>;
}, "strip", z.ZodTypeAny, {
    status: "running" | "failed" | "succeeded" | "canceled";
    count: number;
    connectorId: string;
    hasViewed: boolean;
}, {
    status: "running" | "failed" | "succeeded" | "canceled";
    count: number;
    connectorId: string;
    hasViewed: boolean;
}>;
/**
 * Stats on existing attack discovery documents
 */
export type AttackDiscoveryStats = z.infer<typeof AttackDiscoveryStats>;
export declare const AttackDiscoveryStats: z.ZodObject<{
    /**
     * The number of attack discoveries that have not yet been viewed
     */
    newDiscoveriesCount: z.ZodNumber;
    /**
     * The number of connectors with new results that have not yet been viewed
     */
    newConnectorResultsCount: z.ZodNumber;
    /**
     * Attack discovery stats per connector
     */
    statsPerConnector: z.ZodArray<z.ZodObject<{
        /**
         * Whether the user has viewed the results of the attack discovery run
         */
        hasViewed: z.ZodBoolean;
        /**
         * The number of attack discoveries for the connector
         */
        count: z.ZodNumber;
        /**
         * The connector ID for the attack discovery
         */
        connectorId: z.ZodString;
        /**
         * The status of the attack discovery.
         */
        status: z.ZodEnum<["running", "succeeded", "failed", "canceled"]>;
    }, "strip", z.ZodTypeAny, {
        status: "running" | "failed" | "succeeded" | "canceled";
        count: number;
        connectorId: string;
        hasViewed: boolean;
    }, {
        status: "running" | "failed" | "succeeded" | "canceled";
        count: number;
        connectorId: string;
        hasViewed: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    newDiscoveriesCount: number;
    newConnectorResultsCount: number;
    statsPerConnector: {
        status: "running" | "failed" | "succeeded" | "canceled";
        count: number;
        connectorId: string;
        hasViewed: boolean;
    }[];
}, {
    newDiscoveriesCount: number;
    newConnectorResultsCount: number;
    statsPerConnector: {
        status: "running" | "failed" | "succeeded" | "canceled";
        count: number;
        connectorId: string;
        hasViewed: boolean;
    }[];
}>;
export type AttackDiscoveryResponse = z.infer<typeof AttackDiscoveryResponse>;
export declare const AttackDiscoveryResponse: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * The last time attack discovery was updated.
     */
    updatedAt: z.ZodString;
    /**
     * The last time attack discovery was viewed in the browser.
     */
    lastViewedAt: z.ZodString;
    /**
     * The number of alerts in the context.
     */
    alertsContextCount: z.ZodOptional<z.ZodNumber>;
    /**
     * The time attack discovery was created.
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
     * The status of the attack discovery.
     */
    status: z.ZodEnum<["running", "succeeded", "failed", "canceled"]>;
    /**
     * The attack discoveries.
     */
    attackDiscoveries: z.ZodArray<z.ZodObject<{
        /**
         * The alert IDs that the attack discovery is based on
         */
        alertIds: z.ZodArray<z.ZodString, "many">;
        /**
         * UUID of attack discovery
         */
        id: z.ZodOptional<z.ZodString>;
        /**
         * Details of the attack with bulleted markdown that always uses special syntax for field names and values from the source data.
         */
        detailsMarkdown: z.ZodString;
        /**
         * A short (no more than a sentence) summary of the attack discovery featuring only the host.name and user.name fields (when they are applicable), using the same syntax
         */
        entitySummaryMarkdown: z.ZodOptional<z.ZodString>;
        /**
         * An array of MITRE ATT&CK tactic for the attack discovery
         */
        mitreAttackTactics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        /**
         * A markdown summary of attack discovery, using the same syntax
         */
        summaryMarkdown: z.ZodString;
        /**
         * A title for the attack discovery, in plain text
         */
        title: z.ZodString;
        /**
         * The time the attack discovery was generated
         */
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        alertIds: string[];
        detailsMarkdown: string;
        summaryMarkdown: string;
        id?: string | undefined;
        timestamp?: string | undefined;
        entitySummaryMarkdown?: string | undefined;
        mitreAttackTactics?: string[] | undefined;
    }, {
        title: string;
        alertIds: string[];
        detailsMarkdown: string;
        summaryMarkdown: string;
        id?: string | undefined;
        timestamp?: string | undefined;
        entitySummaryMarkdown?: string | undefined;
        mitreAttackTactics?: string[] | undefined;
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
         * The time the attack discovery was generated
         */
        date: z.ZodString;
        /**
         * The duration of the attack discovery generation
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
    apiConfig: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    };
    lastViewedAt: string;
    attackDiscoveries: {
        title: string;
        alertIds: string[];
        detailsMarkdown: string;
        summaryMarkdown: string;
        id?: string | undefined;
        timestamp?: string | undefined;
        entitySummaryMarkdown?: string | undefined;
        mitreAttackTactics?: string[] | undefined;
    }[];
    backingIndex: string;
    generationIntervals: {
        date: string;
        durationMs: number;
    }[];
    averageIntervalMs: number;
    timestamp?: string | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    alertsContextCount?: number | undefined;
    failureReason?: string | undefined;
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
    apiConfig: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    };
    lastViewedAt: string;
    attackDiscoveries: {
        title: string;
        alertIds: string[];
        detailsMarkdown: string;
        summaryMarkdown: string;
        id?: string | undefined;
        timestamp?: string | undefined;
        entitySummaryMarkdown?: string | undefined;
        mitreAttackTactics?: string[] | undefined;
    }[];
    backingIndex: string;
    generationIntervals: {
        date: string;
        durationMs: number;
    }[];
    averageIntervalMs: number;
    timestamp?: string | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    alertsContextCount?: number | undefined;
    failureReason?: string | undefined;
}>;
export type CreateAttackDiscoveryAlertsParams = z.infer<typeof CreateAttackDiscoveryAlertsParams>;
export declare const CreateAttackDiscoveryAlertsParams: z.ZodObject<{
    /**
     * The number of alerts provided as context to the LLM
     */
    alertsContextCount: z.ZodNumber;
    /**
     * The anonymized alerts that were used to generate the attack discovery
     */
    anonymizedAlerts: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        metadata: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        pageContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        metadata: {};
        pageContent: string;
        id?: string | undefined;
    }, {
        metadata: {};
        pageContent: string;
        id?: string | undefined;
    }>, "many">;
    /**
     * LLM API configuration
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
     * The generated Attack discoveries
     */
    attackDiscoveries: z.ZodArray<z.ZodObject<{
        /**
         * The alert IDs that the attack discovery is based on
         */
        alertIds: z.ZodArray<z.ZodString, "many">;
        /**
         * UUID of attack discovery
         */
        id: z.ZodOptional<z.ZodString>;
        /**
         * Details of the attack with bulleted markdown that always uses special syntax for field names and values from the source data.
         */
        detailsMarkdown: z.ZodString;
        /**
         * A short (no more than a sentence) summary of the attack discovery featuring only the host.name and user.name fields (when they are applicable), using the same syntax
         */
        entitySummaryMarkdown: z.ZodOptional<z.ZodString>;
        /**
         * An array of MITRE ATT&CK tactic for the attack discovery
         */
        mitreAttackTactics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        /**
         * A markdown summary of attack discovery, using the same syntax
         */
        summaryMarkdown: z.ZodString;
        /**
         * A title for the attack discovery, in plain text
         */
        title: z.ZodString;
        /**
         * The time the attack discovery was generated
         */
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        alertIds: string[];
        detailsMarkdown: string;
        summaryMarkdown: string;
        id?: string | undefined;
        timestamp?: string | undefined;
        entitySummaryMarkdown?: string | undefined;
        mitreAttackTactics?: string[] | undefined;
    }, {
        title: string;
        alertIds: string[];
        detailsMarkdown: string;
        summaryMarkdown: string;
        id?: string | undefined;
        timestamp?: string | undefined;
        entitySummaryMarkdown?: string | undefined;
        mitreAttackTactics?: string[] | undefined;
    }>, "many">;
    /**
     * The name of the connector that generated the attack discovery
     */
    connectorName: z.ZodString;
    /**
     * Enables a markdown syntax used to render pivot fields, for example `{{ user.name james }}`. When disabled, the same example would be rendered as `james`. This is primarily used for Attack discovery views within Kibana. Defaults to `false`.
     */
    enableFieldRendering: z.ZodBoolean;
    /**
     * The generation ID of the run that created the attack discovery
     */
    generationUuid: z.ZodString;
    /**
     * Replacements enable anonymization of data sent to the LLM. When Attack discoveries are added to an assistant conversation, replacements must be provided at the same time.
     */
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    /**
     * When true, return the created Attack discoveries with text replacements applied to the detailsMarkdown, entitySummaryMarkdown, summaryMarkdown, and title fields.
     */
    withReplacements: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    apiConfig: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    };
    connectorName: string;
    generationUuid: string;
    alertsContextCount: number;
    attackDiscoveries: {
        title: string;
        alertIds: string[];
        detailsMarkdown: string;
        summaryMarkdown: string;
        id?: string | undefined;
        timestamp?: string | undefined;
        entitySummaryMarkdown?: string | undefined;
        mitreAttackTactics?: string[] | undefined;
    }[];
    anonymizedAlerts: {
        metadata: {};
        pageContent: string;
        id?: string | undefined;
    }[];
    enableFieldRendering: boolean;
    withReplacements: boolean;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
}, {
    apiConfig: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    };
    connectorName: string;
    generationUuid: string;
    alertsContextCount: number;
    attackDiscoveries: {
        title: string;
        alertIds: string[];
        detailsMarkdown: string;
        summaryMarkdown: string;
        id?: string | undefined;
        timestamp?: string | undefined;
        entitySummaryMarkdown?: string | undefined;
        mitreAttackTactics?: string[] | undefined;
    }[];
    anonymizedAlerts: {
        metadata: {};
        pageContent: string;
        id?: string | undefined;
    }[];
    enableFieldRendering: boolean;
    withReplacements: boolean;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
}>;
export type FindAttackDiscoveryAlertsParams = z.infer<typeof FindAttackDiscoveryAlertsParams>;
export declare const FindAttackDiscoveryAlertsParams: z.ZodObject<{
    /**
     * filter by alert IDs within Attack discovery
     */
    alertIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * filter by connector names
     */
    connectorNames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Enables a markdown syntax used to render pivot fields, for example `{{ user.name james }}`. When disabled, the same example would be rendered as `james`. This is primarily used for Attack discovery views within Kibana. Defaults to `false`.
     */
    enableFieldRendering: z.ZodBoolean;
    /**
     * filter by end date (relative or absolute)
     */
    end: z.ZodOptional<z.ZodString>;
    /**
     * filter by execution UUID
     */
    executionUuid: z.ZodOptional<z.ZodString>;
    /**
     * whether to include attack alert IDs in the response
     */
    includeUniqueAlertIds: z.ZodOptional<z.ZodBoolean>;
    /**
     * filter by Attack discovery IDs
     */
    ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    perPage: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * filter by search query
     */
    search: z.ZodOptional<z.ZodString>;
    /**
     * `undefined`: show both shared, and only visible to me Attack discoveries. `true`: show only shared Attack discoveries. `false`: show only visible to me Attack discoveries.
     */
    shared: z.ZodOptional<z.ZodBoolean>;
    /**
     * Whether to return scheduled or ad-hoc attack discoveries. If omitted, both types of attack discoveries are returned. Use `true` to return only scheduled discoveries or `false` to return only ad-hoc discoveries.
     */
    scheduled: z.ZodOptional<z.ZodBoolean>;
    sortField: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    sortOrder: z.ZodOptional<z.ZodString>;
    /**
     * filter by start date (relative or absolute)
     */
    start: z.ZodOptional<z.ZodString>;
    /**
     * filter by kibana.alert.workflow.status
     */
    status: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * When true, return the created Attack discoveries with text replacements applied to the detailsMarkdown, entitySummaryMarkdown, summaryMarkdown, and title fields.
     */
    withReplacements: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    page: number;
    perPage: number;
    enableFieldRendering: boolean;
    withReplacements: boolean;
    sortField: string;
    search?: string | undefined;
    end?: string | undefined;
    start?: string | undefined;
    status?: string[] | undefined;
    ids?: string[] | undefined;
    alertIds?: string[] | undefined;
    connectorNames?: string[] | undefined;
    executionUuid?: string | undefined;
    includeUniqueAlertIds?: boolean | undefined;
    shared?: boolean | undefined;
    scheduled?: boolean | undefined;
    sortOrder?: string | undefined;
}, {
    enableFieldRendering: boolean;
    withReplacements: boolean;
    search?: string | undefined;
    end?: string | undefined;
    start?: string | undefined;
    status?: string[] | undefined;
    page?: number | undefined;
    ids?: string[] | undefined;
    perPage?: number | undefined;
    alertIds?: string[] | undefined;
    connectorNames?: string[] | undefined;
    executionUuid?: string | undefined;
    includeUniqueAlertIds?: boolean | undefined;
    shared?: boolean | undefined;
    scheduled?: boolean | undefined;
    sortField?: string | undefined;
    sortOrder?: string | undefined;
}>;
export type AttackDiscoveryGenerationConfig = z.infer<typeof AttackDiscoveryGenerationConfig>;
export declare const AttackDiscoveryGenerationConfig: z.ZodObject<{
    /**
        * The (space specific) index pattern that contains the alerts to use as
  context for the attack discovery.
  Example: .alerts-security.alerts-default
  
        */
    alertsIndexPattern: z.ZodString;
    /**
     * The list of fields, and whether or not they are anonymized, allowed to be sent to LLMs. Consider using the output of the `/api/security_ai_assistant/anonymization_fields/_find` API (for a specific Kibana space) to provide this value.
     */
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
    connectorName: z.ZodOptional<z.ZodString>;
    end: z.ZodOptional<z.ZodString>;
    /**
        * An Elasticsearch-style query DSL object used to filter alerts. For example:
  ```json {
    "filter": {
      "bool": {
        "must": [],
        "filter": [
          {
            "bool": {
              "should": [
                {
                  "term": {
                    "user.name": { "value": "james" }
                  }
                }
              ],
              "minimum_should_match": 1
            }
          }
        ],
        "should": [],
        "must_not": []
      }
    }
  } ```
        */
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
