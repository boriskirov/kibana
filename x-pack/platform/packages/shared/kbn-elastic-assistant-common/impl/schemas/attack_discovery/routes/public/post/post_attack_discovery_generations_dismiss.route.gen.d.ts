import { z } from '@kbn/zod';
export type PostAttackDiscoveryGenerationsDismissRequestParams = z.infer<typeof PostAttackDiscoveryGenerationsDismissRequestParams>;
export declare const PostAttackDiscoveryGenerationsDismissRequestParams: z.ZodObject<{
    /**
     * The unique identifier for the Attack discovery generation execution. This UUID is returned when an attack discovery generation is created and can be found in generation responses.
     */
    execution_uuid: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    execution_uuid: string;
}, {
    execution_uuid: string;
}>;
export type PostAttackDiscoveryGenerationsDismissRequestParamsInput = z.input<typeof PostAttackDiscoveryGenerationsDismissRequestParams>;
export type PostAttackDiscoveryGenerationsDismissResponse = z.infer<typeof PostAttackDiscoveryGenerationsDismissResponse>;
export declare const PostAttackDiscoveryGenerationsDismissResponse: z.ZodObject<{
    /**
     * The number of alerts that were sent as context to the LLM for this generation.
     */
    alerts_context_count: z.ZodOptional<z.ZodNumber>;
    /**
     * The unique identifier of the connector used to generate the attack discoveries.
     */
    connector_id: z.ZodString;
    /**
     * Statistical information about the connector's performance for this user, providing insights into usage patterns and success rates.
     */
    connector_stats: z.ZodOptional<z.ZodObject<{
        /**
         * The average duration in nanoseconds for successful generations using this connector by the current user.
         */
        average_successful_duration_nanoseconds: z.ZodOptional<z.ZodNumber>;
        /**
         * The total number of Attack discoveries successfully created for this generation
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
     * The number of attack discoveries that were generated during this execution.
     */
    discoveries: z.ZodNumber;
    /**
     * The timestamp when the generation process completed, in ISO 8601 format. This field may be absent for generations that haven't finished.
     */
    end: z.ZodOptional<z.ZodString>;
    /**
     * The unique identifier for this attack discovery generation execution. This UUID can be used to reference this specific generation in other API calls.
     */
    execution_uuid: z.ZodString;
    /**
     * A human-readable message describing the current state or progress of the generation process. Provides context about what the AI is analyzing.
     */
    loading_message: z.ZodString;
    /**
     * Additional context or reasoning provided when a generation fails or encounters issues. This field helps diagnose problems with the generation process.
     */
    reason: z.ZodOptional<z.ZodString>;
    /**
     * The timestamp when the generation process began, in ISO 8601 format. This marks the beginning of the AI analysis.
     */
    start: z.ZodString;
    /**
     * The current status of the attack discovery generation. After dismissing, this will be set to "dismissed".
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
