import { z } from '@kbn/zod';
export type AttackDiscoveryGeneration = z.infer<typeof AttackDiscoveryGeneration>;
export declare const AttackDiscoveryGeneration: z.ZodObject<{
    /**
     * The number of alerts sent as context (max kibana.alert.rule.execution.metrics.alert_counts.active) to the LLM for the generation
     */
    alerts_context_count: z.ZodOptional<z.ZodNumber>;
    /**
     * The connector id (event.dataset) for this generation
     */
    connector_id: z.ZodString;
    /**
     * Stats applicable to the connector for this generation
     */
    connector_stats: z.ZodOptional<z.ZodObject<{
        /**
         * The average duration (avg event.duration) in nanoseconds of successful generations for the same connector id, for the current user
         */
        average_successful_duration_nanoseconds: z.ZodOptional<z.ZodNumber>;
        /**
         * The number of successful generations for the same connector id, for the current user
         */
        successful_generations: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        average_successful_duration_nanoseconds?: number | undefined;
        successful_generations?: number | undefined;
    }, {
        average_successful_duration_nanoseconds?: number | undefined;
        successful_generations?: number | undefined;
    }>>;
    /**
     * The number of new Attack discovery alerts (max kibana.alert.rule.execution.metrics.alert_counts.new) for this generation
     */
    discoveries: z.ZodNumber;
    /**
     * When generation ended (max event.end)
     */
    end: z.ZodOptional<z.ZodString>;
    /**
     * The unique identifier (kibana.alert.rule.execution.uuid) for the generation
     */
    execution_uuid: z.ZodString;
    /**
     * Generation loading message (kibana.alert.rule.execution.status)
     */
    loading_message: z.ZodString;
    /**
     * Reason for failed generations (event.reason)
     */
    reason: z.ZodOptional<z.ZodString>;
    /**
     * When generation started (min event.start)
     */
    start: z.ZodString;
    /**
     * The status of the attack discovery generation
     */
    status: z.ZodEnum<["canceled", "dismissed", "failed", "started", "succeeded"]>;
}, "strip", z.ZodTypeAny, {
    start: string;
    status: "dismissed" | "failed" | "succeeded" | "canceled" | "started";
    connector_id: string;
    execution_uuid: string;
    discoveries: number;
    loading_message: string;
    end?: string | undefined;
    alerts_context_count?: number | undefined;
    connector_stats?: {
        average_successful_duration_nanoseconds?: number | undefined;
        successful_generations?: number | undefined;
    } | undefined;
    reason?: string | undefined;
}, {
    start: string;
    status: "dismissed" | "failed" | "succeeded" | "canceled" | "started";
    connector_id: string;
    execution_uuid: string;
    discoveries: number;
    loading_message: string;
    end?: string | undefined;
    alerts_context_count?: number | undefined;
    connector_stats?: {
        average_successful_duration_nanoseconds?: number | undefined;
        successful_generations?: number | undefined;
    } | undefined;
    reason?: string | undefined;
}>;
