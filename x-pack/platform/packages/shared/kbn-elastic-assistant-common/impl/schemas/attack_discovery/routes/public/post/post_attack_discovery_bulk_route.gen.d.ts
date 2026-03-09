import { z } from '@kbn/zod';
export type PostAttackDiscoveryBulkRequestBody = z.infer<typeof PostAttackDiscoveryBulkRequestBody>;
export declare const PostAttackDiscoveryBulkRequestBody: z.ZodObject<{
    /**
     * Configuration object containing all parameters for the bulk update operation
     */
    update: z.ZodObject<{
        /**
         * Array of Attack discovery IDs to update
         */
        ids: z.ZodArray<z.ZodString, "many">;
        /**
         * When provided, update the kibana.alert.workflow_status of the attack discovery alerts
         */
        kibana_alert_workflow_status: z.ZodOptional<z.ZodEnum<["open", "acknowledged", "closed"]>>;
        /**
         * When provided, update the visibility of the alert, as determined by the kibana.alert.attack_discovery.users field
         */
        visibility: z.ZodOptional<z.ZodEnum<["not_shared", "shared"]>>;
        /**
         * When true, returns the updated Attack discoveries with text replacements applied to the detailsMarkdown, entitySummaryMarkdown, summaryMarkdown, and title fields. This substitutes anonymized values with human-readable equivalents. Defaults to `true`.
         */
        with_replacements: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        /**
         * Enables a markdown syntax used to render pivot fields, for example `{{ user.name james }}`. When disabled, the same example would be rendered as `james`. This is primarily used for Attack discovery views within Kibana. Defaults to `false`.
         */
        enable_field_rendering: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        ids: string[];
        enable_field_rendering: boolean;
        with_replacements: boolean;
        visibility?: "shared" | "not_shared" | undefined;
        kibana_alert_workflow_status?: "open" | "closed" | "acknowledged" | undefined;
    }, {
        ids: string[];
        visibility?: "shared" | "not_shared" | undefined;
        enable_field_rendering?: boolean | undefined;
        with_replacements?: boolean | undefined;
        kibana_alert_workflow_status?: "open" | "closed" | "acknowledged" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    update: {
        ids: string[];
        enable_field_rendering: boolean;
        with_replacements: boolean;
        visibility?: "shared" | "not_shared" | undefined;
        kibana_alert_workflow_status?: "open" | "closed" | "acknowledged" | undefined;
    };
}, {
    update: {
        ids: string[];
        visibility?: "shared" | "not_shared" | undefined;
        enable_field_rendering?: boolean | undefined;
        with_replacements?: boolean | undefined;
        kibana_alert_workflow_status?: "open" | "closed" | "acknowledged" | undefined;
    };
}>;
export type PostAttackDiscoveryBulkRequestBodyInput = z.input<typeof PostAttackDiscoveryBulkRequestBody>;
export type PostAttackDiscoveryBulkResponse = z.infer<typeof PostAttackDiscoveryBulkResponse>;
export declare const PostAttackDiscoveryBulkResponse: z.ZodObject<{
    /**
     * Array of updated Attack discovery alert objects. Each item includes the applied modifications from the bulk update request.
     */
    data: z.ZodArray<z.ZodObject<{
        alert_ids: z.ZodArray<z.ZodString, "many">;
        alert_rule_uuid: z.ZodOptional<z.ZodString>;
        alert_workflow_status: z.ZodOptional<z.ZodString>;
        connector_id: z.ZodString;
        connector_name: z.ZodString;
        alert_start: z.ZodOptional<z.ZodString>;
        alert_updated_at: z.ZodOptional<z.ZodString>;
        alert_updated_by_user_id: z.ZodOptional<z.ZodString>;
        alert_updated_by_user_name: z.ZodOptional<z.ZodString>;
        alert_workflow_status_updated_at: z.ZodOptional<z.ZodString>;
        details_markdown: z.ZodString;
        entity_summary_markdown: z.ZodOptional<z.ZodString>;
        generation_uuid: z.ZodString;
        id: z.ZodString;
        mitre_attack_tactics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        summary_markdown: z.ZodString;
        timestamp: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodString;
        user_id: z.ZodOptional<z.ZodString>;
        user_name: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            name?: string | undefined;
        }, {
            id?: string | undefined;
            name?: string | undefined;
        }>, "many">>;
        assignees: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        timestamp: string;
        alert_ids: string[];
        connector_id: string;
        connector_name: string;
        details_markdown: string;
        generation_uuid: string;
        summary_markdown: string;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        tags?: string[] | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        assignees?: string[] | undefined;
        alert_rule_uuid?: string | undefined;
        alert_workflow_status?: string | undefined;
        alert_start?: string | undefined;
        alert_updated_at?: string | undefined;
        alert_updated_by_user_id?: string | undefined;
        alert_updated_by_user_name?: string | undefined;
        alert_workflow_status_updated_at?: string | undefined;
        entity_summary_markdown?: string | undefined;
        mitre_attack_tactics?: string[] | undefined;
        risk_score?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
    }, {
        title: string;
        id: string;
        timestamp: string;
        alert_ids: string[];
        connector_id: string;
        connector_name: string;
        details_markdown: string;
        generation_uuid: string;
        summary_markdown: string;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        tags?: string[] | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        assignees?: string[] | undefined;
        alert_rule_uuid?: string | undefined;
        alert_workflow_status?: string | undefined;
        alert_start?: string | undefined;
        alert_updated_at?: string | undefined;
        alert_updated_by_user_id?: string | undefined;
        alert_updated_by_user_name?: string | undefined;
        alert_workflow_status_updated_at?: string | undefined;
        entity_summary_markdown?: string | undefined;
        mitre_attack_tactics?: string[] | undefined;
        risk_score?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        title: string;
        id: string;
        timestamp: string;
        alert_ids: string[];
        connector_id: string;
        connector_name: string;
        details_markdown: string;
        generation_uuid: string;
        summary_markdown: string;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        tags?: string[] | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        assignees?: string[] | undefined;
        alert_rule_uuid?: string | undefined;
        alert_workflow_status?: string | undefined;
        alert_start?: string | undefined;
        alert_updated_at?: string | undefined;
        alert_updated_by_user_id?: string | undefined;
        alert_updated_by_user_name?: string | undefined;
        alert_workflow_status_updated_at?: string | undefined;
        entity_summary_markdown?: string | undefined;
        mitre_attack_tactics?: string[] | undefined;
        risk_score?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
    }[];
}, {
    data: {
        title: string;
        id: string;
        timestamp: string;
        alert_ids: string[];
        connector_id: string;
        connector_name: string;
        details_markdown: string;
        generation_uuid: string;
        summary_markdown: string;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        tags?: string[] | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        assignees?: string[] | undefined;
        alert_rule_uuid?: string | undefined;
        alert_workflow_status?: string | undefined;
        alert_start?: string | undefined;
        alert_updated_at?: string | undefined;
        alert_updated_by_user_id?: string | undefined;
        alert_updated_by_user_name?: string | undefined;
        alert_workflow_status_updated_at?: string | undefined;
        entity_summary_markdown?: string | undefined;
        mitre_attack_tactics?: string[] | undefined;
        risk_score?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
    }[];
}>;
