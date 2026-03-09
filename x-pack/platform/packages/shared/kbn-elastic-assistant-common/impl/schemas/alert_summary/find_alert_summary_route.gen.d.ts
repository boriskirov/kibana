import { z } from '@kbn/zod';
export type FindAlertSummarySortField = z.infer<typeof FindAlertSummarySortField>;
export declare const FindAlertSummarySortField: z.ZodEnum<["created_at", "updated_at"]>;
export type FindAlertSummarySortFieldEnum = typeof FindAlertSummarySortField.enum;
export declare const FindAlertSummarySortFieldEnum: z.Values<["created_at", "updated_at"]>;
export type FindAlertSummaryRequestQuery = z.infer<typeof FindAlertSummaryRequestQuery>;
export declare const FindAlertSummaryRequestQuery: z.ZodObject<{
    fields: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>>;
    /**
     * Search query
     */
    filter: z.ZodOptional<z.ZodString>;
    /**
     * Connector id used for prompt lookup
     */
    connector_id: z.ZodString;
    /**
     * Field to sort by
     */
    sort_field: z.ZodOptional<z.ZodEnum<["created_at", "updated_at"]>>;
    /**
     * Sort order
     */
    sort_order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    /**
     * Page number
     */
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * Alert Summary per page
     */
    per_page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    per_page: number;
    connector_id: string;
    filter?: string | undefined;
    fields?: string[] | undefined;
    sort_field?: "created_at" | "updated_at" | undefined;
    sort_order?: "desc" | "asc" | undefined;
}, {
    connector_id: string;
    filter?: string | undefined;
    page?: number | undefined;
    fields?: unknown;
    per_page?: number | undefined;
    sort_field?: "created_at" | "updated_at" | undefined;
    sort_order?: "desc" | "asc" | undefined;
}>;
export type FindAlertSummaryRequestQueryInput = z.input<typeof FindAlertSummaryRequestQuery>;
export type FindAlertSummaryResponse = z.infer<typeof FindAlertSummaryResponse>;
export declare const FindAlertSummaryResponse: z.ZodObject<{
    /**
     * Prompt to use to generate new alert summary
     */
    prompt: z.ZodString;
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        alertId: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        summary: z.ZodString;
        recommendedActions: z.ZodOptional<z.ZodString>;
        replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
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
        namespace: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }, {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }[];
    page: number;
    total: number;
    perPage: number;
    prompt: string;
}, {
    data: {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }[];
    page: number;
    total: number;
    perPage: number;
    prompt: string;
}>;
