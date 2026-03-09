import { z } from '@kbn/zod';
export type GetAttackDiscoveryGenerationsRequestQuery = z.infer<typeof GetAttackDiscoveryGenerationsRequestQuery>;
export declare const GetAttackDiscoveryGenerationsRequestQuery: z.ZodObject<{
    /**
     * End of the time range for filtering generations. Accepts absolute timestamps (ISO 8601) or relative date math (e.g. "now", "now-24h").
     */
    end: z.ZodOptional<z.ZodString>;
    /**
     * The maximum number of generations to retrieve
     */
    size: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * Start of the time range for filtering generations. Accepts absolute timestamps (ISO 8601) or relative date math (e.g. "now-7d").
     */
    start: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    size: number;
    end?: string | undefined;
    start?: string | undefined;
}, {
    size?: number | undefined;
    end?: string | undefined;
    start?: string | undefined;
}>;
export type GetAttackDiscoveryGenerationsRequestQueryInput = z.input<typeof GetAttackDiscoveryGenerationsRequestQuery>;
export type GetAttackDiscoveryGenerationsResponse = z.infer<typeof GetAttackDiscoveryGenerationsResponse>;
export declare const GetAttackDiscoveryGenerationsResponse: z.ZodObject<{
    /**
     * List of attack discovery generations
     */
    generations: z.ZodArray<z.ZodObject<{
        alerts_context_count: z.ZodOptional<z.ZodNumber>;
        connector_id: z.ZodString;
        connector_stats: z.ZodOptional<z.ZodObject<{
            average_successful_duration_nanoseconds: z.ZodOptional<z.ZodNumber>;
            successful_generations: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            average_successful_duration_nanoseconds?: number | undefined;
            successful_generations?: number | undefined;
        }, {
            average_successful_duration_nanoseconds?: number | undefined;
            successful_generations?: number | undefined;
        }>>;
        discoveries: z.ZodNumber;
        end: z.ZodOptional<z.ZodString>;
        execution_uuid: z.ZodString;
        loading_message: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        start: z.ZodString;
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    generations: {
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
    }[];
}, {
    generations: {
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
    }[];
}>;
