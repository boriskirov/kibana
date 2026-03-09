import { z } from '@kbn/zod';
/**
 * Field by which to sort the prompts.
 */
export type FindPromptsSortField = z.infer<typeof FindPromptsSortField>;
export declare const FindPromptsSortField: z.ZodEnum<["created_at", "is_default", "name", "updated_at"]>;
export type FindPromptsSortFieldEnum = typeof FindPromptsSortField.enum;
export declare const FindPromptsSortFieldEnum: z.Values<["created_at", "is_default", "name", "updated_at"]>;
export type FindPromptsRequestQuery = z.infer<typeof FindPromptsRequestQuery>;
export declare const FindPromptsRequestQuery: z.ZodObject<{
    /**
     * List of specific fields to include in each returned prompt.
     */
    fields: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>>;
    /**
     * Search query string to filter prompts by matching fields.
     */
    filter: z.ZodOptional<z.ZodString>;
    /**
     * Field to sort prompts by.
     */
    sort_field: z.ZodOptional<z.ZodEnum<["created_at", "is_default", "name", "updated_at"]>>;
    /**
     * Sort order, either asc or desc.
     */
    sort_order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    /**
     * Page number for pagination.
     */
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * Number of prompts per page.
     */
    per_page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    per_page: number;
    filter?: string | undefined;
    fields?: string[] | undefined;
    sort_field?: "name" | "created_at" | "updated_at" | "is_default" | undefined;
    sort_order?: "desc" | "asc" | undefined;
}, {
    filter?: string | undefined;
    page?: number | undefined;
    fields?: unknown;
    per_page?: number | undefined;
    sort_field?: "name" | "created_at" | "updated_at" | "is_default" | undefined;
    sort_order?: "desc" | "asc" | undefined;
}>;
export type FindPromptsRequestQueryInput = z.input<typeof FindPromptsRequestQuery>;
export type FindPromptsResponse = z.infer<typeof FindPromptsResponse>;
export declare const FindPromptsResponse: z.ZodObject<{
    /**
     * Current page number.
     */
    page: z.ZodNumber;
    /**
     * Number of prompts per page.
     */
    perPage: z.ZodNumber;
    /**
     * Total number of prompts matching the query.
     */
    total: z.ZodNumber;
    /**
     * The list of prompts returned based on the search query, sorting, and pagination.
     */
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        name: z.ZodString;
        promptType: z.ZodEnum<["system", "quick"]>;
        content: z.ZodString;
        categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        color: z.ZodOptional<z.ZodString>;
        isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
        isDefault: z.ZodOptional<z.ZodBoolean>;
        consumer: z.ZodOptional<z.ZodString>;
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
        id: string;
        content: string;
        name: string;
        promptType: "system" | "quick";
        color?: string | undefined;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        categories?: string[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }, {
        id: string;
        content: string;
        name: string;
        promptType: "system" | "quick";
        color?: string | undefined;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        categories?: string[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        id: string;
        content: string;
        name: string;
        promptType: "system" | "quick";
        color?: string | undefined;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        categories?: string[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }[];
    page: number;
    total: number;
    perPage: number;
}, {
    data: {
        id: string;
        content: string;
        name: string;
        promptType: "system" | "quick";
        color?: string | undefined;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        categories?: string[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }[];
    page: number;
    total: number;
    perPage: number;
}>;
