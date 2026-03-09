import { z } from '@kbn/zod';
/**
 * Fields available for sorting Knowledge Base Entries.
 */
export type FindKnowledgeBaseEntriesSortField = z.infer<typeof FindKnowledgeBaseEntriesSortField>;
export declare const FindKnowledgeBaseEntriesSortField: z.ZodEnum<["created_at", "is_default", "title", "updated_at"]>;
export type FindKnowledgeBaseEntriesSortFieldEnum = typeof FindKnowledgeBaseEntriesSortField.enum;
export declare const FindKnowledgeBaseEntriesSortFieldEnum: z.Values<["created_at", "is_default", "title", "updated_at"]>;
export type FindKnowledgeBaseEntriesRequestQuery = z.infer<typeof FindKnowledgeBaseEntriesRequestQuery>;
export declare const FindKnowledgeBaseEntriesRequestQuery: z.ZodObject<{
    /**
     * A list of fields to include in the response. If not provided, all fields will be included.
     */
    fields: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>>;
    /**
     * Search query to filter Knowledge Base Entries by specific criteria.
     */
    filter: z.ZodOptional<z.ZodString>;
    /**
     * Field to sort the Knowledge Base Entries by.
     */
    sort_field: z.ZodOptional<z.ZodEnum<["created_at", "is_default", "title", "updated_at"]>>;
    /**
     * Sort order for the results, either asc or desc.
     */
    sort_order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    /**
     * Page number for paginated results. Defaults to 1.
     */
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * Number of Knowledge Base Entries to return per page. Defaults to 20.
     */
    per_page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    per_page: number;
    filter?: string | undefined;
    fields?: string[] | undefined;
    sort_field?: "title" | "created_at" | "updated_at" | "is_default" | undefined;
    sort_order?: "desc" | "asc" | undefined;
}, {
    filter?: string | undefined;
    page?: number | undefined;
    fields?: unknown;
    per_page?: number | undefined;
    sort_field?: "title" | "created_at" | "updated_at" | "is_default" | undefined;
    sort_order?: "desc" | "asc" | undefined;
}>;
export type FindKnowledgeBaseEntriesRequestQueryInput = z.input<typeof FindKnowledgeBaseEntriesRequestQuery>;
export type FindKnowledgeBaseEntriesResponse = z.infer<typeof FindKnowledgeBaseEntriesResponse>;
export declare const FindKnowledgeBaseEntriesResponse: z.ZodObject<{
    /**
     * The current page number.
     */
    page: z.ZodNumber;
    /**
     * The number of Knowledge Base Entries returned per page.
     */
    perPage: z.ZodNumber;
    /**
     * The total number of Knowledge Base Entries available.
     */
    total: z.ZodNumber;
    /**
     * The list of Knowledge Base Entries for the current page.
     */
    data: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
    } & {
        namespace: z.ZodString;
        global: z.ZodBoolean;
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
    } & {
        id: z.ZodEffects<z.ZodString, string, string>;
        createdAt: z.ZodString;
        createdBy: z.ZodString;
        updatedAt: z.ZodString;
        updatedBy: z.ZodString;
    } & {
        type: z.ZodLiteral<"document">;
        kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
        source: z.ZodString;
        text: z.ZodString;
    } & {
        required: z.ZodOptional<z.ZodBoolean>;
        vector: z.ZodOptional<z.ZodObject<{
            modelId: z.ZodString;
            tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
        }, "strip", z.ZodTypeAny, {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        }, {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        }>>;
    }, "strip", z.ZodTypeAny, {
        source: string;
        text: string;
        id: string;
        name: string;
        type: "document";
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
        global: boolean;
        kbResource: "user" | "security_labs" | "defend_insights";
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
    }, {
        source: string;
        text: string;
        id: string;
        name: string;
        type: "document";
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
        global: boolean;
        kbResource: "user" | "security_labs" | "defend_insights";
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
    } & {
        namespace: z.ZodString;
        global: z.ZodBoolean;
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
    } & {
        id: z.ZodEffects<z.ZodString, string, string>;
        createdAt: z.ZodString;
        createdBy: z.ZodString;
        updatedAt: z.ZodString;
        updatedBy: z.ZodString;
    } & {
        type: z.ZodLiteral<"index">;
        index: z.ZodString;
        field: z.ZodString;
        description: z.ZodString;
        queryDescription: z.ZodString;
    } & {
        inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
            fieldName: z.ZodString;
            fieldType: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            fieldName: string;
            fieldType: string;
        }, {
            description: string;
            fieldName: string;
            fieldType: string;
        }>, "many">>;
        outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: "index";
        index: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        description: string;
        field: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
        global: boolean;
        queryDescription: string;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    }, {
        id: string;
        name: string;
        type: "index";
        index: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        description: string;
        field: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
        global: boolean;
        queryDescription: string;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    data: ({
        source: string;
        text: string;
        id: string;
        name: string;
        type: "document";
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
        global: boolean;
        kbResource: "user" | "security_labs" | "defend_insights";
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
    } | {
        id: string;
        name: string;
        type: "index";
        index: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        description: string;
        field: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
        global: boolean;
        queryDescription: string;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    })[];
    page: number;
    total: number;
    perPage: number;
}, {
    data: ({
        source: string;
        text: string;
        id: string;
        name: string;
        type: "document";
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
        global: boolean;
        kbResource: "user" | "security_labs" | "defend_insights";
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
    } | {
        id: string;
        name: string;
        type: "index";
        index: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        description: string;
        field: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        updatedBy: string;
        global: boolean;
        queryDescription: string;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    })[];
    page: number;
    total: number;
    perPage: number;
}>;
