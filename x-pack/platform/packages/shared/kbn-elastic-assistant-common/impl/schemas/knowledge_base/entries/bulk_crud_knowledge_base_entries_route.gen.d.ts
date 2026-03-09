import { z } from '@kbn/zod';
/**
 * Reason why a Knowledge Base Entry was skipped during the bulk action.
 */
export type KnowledgeBaseEntryBulkActionSkipReason = z.infer<typeof KnowledgeBaseEntryBulkActionSkipReason>;
export declare const KnowledgeBaseEntryBulkActionSkipReason: z.ZodLiteral<"KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED">;
export type KnowledgeBaseEntryBulkActionSkipResult = z.infer<typeof KnowledgeBaseEntryBulkActionSkipResult>;
export declare const KnowledgeBaseEntryBulkActionSkipResult: z.ZodObject<{
    /**
     * ID of the skipped Knowledge Base Entry.
     */
    id: z.ZodString;
    /**
     * Name of the skipped Knowledge Base Entry.
     */
    name: z.ZodOptional<z.ZodString>;
    skip_reason: z.ZodLiteral<"KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED">;
}, "strip", z.ZodTypeAny, {
    id: string;
    skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
    name?: string | undefined;
}, {
    id: string;
    skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
    name?: string | undefined;
}>;
export type KnowledgeBaseEntryDetailsInError = z.infer<typeof KnowledgeBaseEntryDetailsInError>;
export declare const KnowledgeBaseEntryDetailsInError: z.ZodObject<{
    /**
     * ID of the Knowledge Base Entry that encountered an error.
     */
    id: z.ZodString;
    /**
     * Name of the Knowledge Base Entry that encountered an error.
     */
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
}, {
    id: string;
    name?: string | undefined;
}>;
export type NormalizedKnowledgeBaseEntryError = z.infer<typeof NormalizedKnowledgeBaseEntryError>;
export declare const NormalizedKnowledgeBaseEntryError: z.ZodObject<{
    /**
     * Error message describing the issue.
     */
    message: z.ZodString;
    /**
     * HTTP status code associated with the error.
     */
    statusCode: z.ZodNumber;
    /**
     * Specific error code for the issue.
     */
    err_code: z.ZodOptional<z.ZodString>;
    /**
     * List of Knowledge Base Entries that encountered the error.
     */
    knowledgeBaseEntries: z.ZodArray<z.ZodObject<{
        /**
         * ID of the Knowledge Base Entry that encountered an error.
         */
        id: z.ZodString;
        /**
         * Name of the Knowledge Base Entry that encountered an error.
         */
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name?: string | undefined;
    }, {
        id: string;
        name?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    statusCode: number;
    knowledgeBaseEntries: {
        id: string;
        name?: string | undefined;
    }[];
    err_code?: string | undefined;
}, {
    message: string;
    statusCode: number;
    knowledgeBaseEntries: {
        id: string;
        name?: string | undefined;
    }[];
    err_code?: string | undefined;
}>;
export type KnowledgeBaseEntryBulkCrudActionResults = z.infer<typeof KnowledgeBaseEntryBulkCrudActionResults>;
export declare const KnowledgeBaseEntryBulkCrudActionResults: z.ZodObject<{
    /**
     * List of Knowledge Base Entries that were successfully updated.
     */
    updated: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    /**
     * List of Knowledge Base Entries that were successfully created.
     */
    created: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    /**
     * List of IDs of Knowledge Base Entries that were successfully deleted.
     */
    deleted: z.ZodArray<z.ZodString, "many">;
    /**
     * List of Knowledge Base Entries that were skipped during the bulk action.
     */
    skipped: z.ZodArray<z.ZodObject<{
        /**
         * ID of the skipped Knowledge Base Entry.
         */
        id: z.ZodString;
        /**
         * Name of the skipped Knowledge Base Entry.
         */
        name: z.ZodOptional<z.ZodString>;
        skip_reason: z.ZodLiteral<"KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
        name?: string | undefined;
    }, {
        id: string;
        skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
        name?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    skipped: {
        id: string;
        skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
        name?: string | undefined;
    }[];
    updated: ({
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
    created: ({
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
    deleted: string[];
}, {
    skipped: {
        id: string;
        skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
        name?: string | undefined;
    }[];
    updated: ({
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
    created: ({
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
    deleted: string[];
}>;
export type KnowledgeBaseEntryBulkCrudActionSummary = z.infer<typeof KnowledgeBaseEntryBulkCrudActionSummary>;
export declare const KnowledgeBaseEntryBulkCrudActionSummary: z.ZodObject<{
    /**
     * Number of Knowledge Base Entries that failed during the bulk action.
     */
    failed: z.ZodNumber;
    /**
     * Number of Knowledge Base Entries that were skipped during the bulk action.
     */
    skipped: z.ZodNumber;
    /**
     * Number of Knowledge Base Entries that were successfully processed during the bulk action.
     */
    succeeded: z.ZodNumber;
    /**
     * Total number of Knowledge Base Entries involved in the bulk action.
     */
    total: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    total: number;
    failed: number;
    succeeded: number;
    skipped: number;
}, {
    total: number;
    failed: number;
    succeeded: number;
    skipped: number;
}>;
export type KnowledgeBaseEntryBulkCrudActionResponse = z.infer<typeof KnowledgeBaseEntryBulkCrudActionResponse>;
export declare const KnowledgeBaseEntryBulkCrudActionResponse: z.ZodObject<{
    /**
     * Indicates whether the bulk action was successful.
     */
    success: z.ZodOptional<z.ZodBoolean>;
    /**
     * HTTP status code of the response.
     */
    statusCode: z.ZodOptional<z.ZodNumber>;
    /**
     * Message describing the result of the bulk action.
     */
    message: z.ZodOptional<z.ZodString>;
    /**
     * Total number of Knowledge Base Entries processed.
     */
    knowledgeBaseEntriesCount: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            /**
             * List of Knowledge Base Entries that were successfully updated.
             */
            updated: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
            /**
             * List of Knowledge Base Entries that were successfully created.
             */
            created: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
            /**
             * List of IDs of Knowledge Base Entries that were successfully deleted.
             */
            deleted: z.ZodArray<z.ZodString, "many">;
            /**
             * List of Knowledge Base Entries that were skipped during the bulk action.
             */
            skipped: z.ZodArray<z.ZodObject<{
                /**
                 * ID of the skipped Knowledge Base Entry.
                 */
                id: z.ZodString;
                /**
                 * Name of the skipped Knowledge Base Entry.
                 */
                name: z.ZodOptional<z.ZodString>;
                skip_reason: z.ZodLiteral<"KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }, {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        }>;
        summary: z.ZodObject<{
            /**
             * Number of Knowledge Base Entries that failed during the bulk action.
             */
            failed: z.ZodNumber;
            /**
             * Number of Knowledge Base Entries that were skipped during the bulk action.
             */
            skipped: z.ZodNumber;
            /**
             * Number of Knowledge Base Entries that were successfully processed during the bulk action.
             */
            succeeded: z.ZodNumber;
            /**
             * Total number of Knowledge Base Entries involved in the bulk action.
             */
            total: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        }, {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        }>;
        /**
         * List of errors encountered during the bulk action.
         */
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * Error message describing the issue.
             */
            message: z.ZodString;
            /**
             * HTTP status code associated with the error.
             */
            statusCode: z.ZodNumber;
            /**
             * Specific error code for the issue.
             */
            err_code: z.ZodOptional<z.ZodString>;
            /**
             * List of Knowledge Base Entries that encountered the error.
             */
            knowledgeBaseEntries: z.ZodArray<z.ZodObject<{
                /**
                 * ID of the Knowledge Base Entry that encountered an error.
                 */
                id: z.ZodString;
                /**
                 * Name of the Knowledge Base Entry that encountered an error.
                 */
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | undefined;
            }, {
                id: string;
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    }, {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    attributes: {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    statusCode?: number | undefined;
    knowledgeBaseEntriesCount?: number | undefined;
}, {
    attributes: {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    statusCode?: number | undefined;
    knowledgeBaseEntriesCount?: number | undefined;
}>;
export type KnowledgeBaseEntryBulkActionBase = z.infer<typeof KnowledgeBaseEntryBulkActionBase>;
export declare const KnowledgeBaseEntryBulkActionBase: z.ZodObject<{
    /**
     * Query to filter Knowledge Base Entries.
     */
    query: z.ZodOptional<z.ZodString>;
    /**
     * Array of Knowledge Base Entry IDs.
     */
    ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    query?: string | undefined;
    ids?: string[] | undefined;
}, {
    query?: string | undefined;
    ids?: string[] | undefined;
}>;
export type PerformKnowledgeBaseEntryBulkActionRequestBody = z.infer<typeof PerformKnowledgeBaseEntryBulkActionRequestBody>;
export declare const PerformKnowledgeBaseEntryBulkActionRequestBody: z.ZodObject<{
    delete: z.ZodOptional<z.ZodObject<{
        /**
         * Query to filter Knowledge Base Entries.
         */
        query: z.ZodOptional<z.ZodString>;
        /**
         * Array of Knowledge Base Entry IDs.
         */
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        query?: string | undefined;
        ids?: string[] | undefined;
    }, {
        query?: string | undefined;
        ids?: string[] | undefined;
    }>>;
    /**
     * List of Knowledge Base Entries to create.
     */
    create: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        name: z.ZodString;
    } & {
        namespace: z.ZodOptional<z.ZodString>;
        global: z.ZodOptional<z.ZodBoolean>;
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
        name: string;
        type: "document";
        kbResource: "user" | "security_labs" | "defend_insights";
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
        global?: boolean | undefined;
    }, {
        source: string;
        text: string;
        name: string;
        type: "document";
        kbResource: "user" | "security_labs" | "defend_insights";
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
        global?: boolean | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
    } & {
        namespace: z.ZodOptional<z.ZodString>;
        global: z.ZodOptional<z.ZodBoolean>;
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
        name: string;
        type: "index";
        index: string;
        description: string;
        field: string;
        queryDescription: string;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        global?: boolean | undefined;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    }, {
        name: string;
        type: "index";
        index: string;
        description: string;
        field: string;
        queryDescription: string;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        global?: boolean | undefined;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    }>]>, "many">>;
    /**
     * List of Knowledge Base Entries to update.
     */
    update: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
    } & {
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        global: z.ZodOptional<z.ZodBoolean>;
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
        type: z.ZodLiteral<"document">;
        kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
        source: z.ZodString;
        text: z.ZodString;
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
        kbResource: "user" | "security_labs" | "defend_insights";
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
        global?: boolean | undefined;
    }, {
        source: string;
        text: string;
        id: string;
        name: string;
        type: "document";
        kbResource: "user" | "security_labs" | "defend_insights";
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
        global?: boolean | undefined;
    }>, z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
    } & {
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        global: z.ZodOptional<z.ZodBoolean>;
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
        type: z.ZodLiteral<"index">;
        index: z.ZodString;
        field: z.ZodString;
        description: z.ZodString;
        queryDescription: z.ZodString;
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
        description: string;
        field: string;
        queryDescription: string;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        global?: boolean | undefined;
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
        description: string;
        field: string;
        queryDescription: string;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        global?: boolean | undefined;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: ({
        source: string;
        text: string;
        name: string;
        type: "document";
        kbResource: "user" | "security_labs" | "defend_insights";
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
        global?: boolean | undefined;
    } | {
        name: string;
        type: "index";
        index: string;
        description: string;
        field: string;
        queryDescription: string;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        global?: boolean | undefined;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    })[] | undefined;
    update?: ({
        source: string;
        text: string;
        id: string;
        name: string;
        type: "document";
        kbResource: "user" | "security_labs" | "defend_insights";
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
        global?: boolean | undefined;
    } | {
        id: string;
        name: string;
        type: "index";
        index: string;
        description: string;
        field: string;
        queryDescription: string;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        global?: boolean | undefined;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    })[] | undefined;
}, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: ({
        source: string;
        text: string;
        name: string;
        type: "document";
        kbResource: "user" | "security_labs" | "defend_insights";
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
        global?: boolean | undefined;
    } | {
        name: string;
        type: "index";
        index: string;
        description: string;
        field: string;
        queryDescription: string;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        global?: boolean | undefined;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    })[] | undefined;
    update?: ({
        source: string;
        text: string;
        id: string;
        name: string;
        type: "document";
        kbResource: "user" | "security_labs" | "defend_insights";
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        vector?: {
            modelId: string;
            tokens: {} & {
                [k: string]: number;
            };
        } | undefined;
        required?: boolean | undefined;
        global?: boolean | undefined;
    } | {
        id: string;
        name: string;
        type: "index";
        index: string;
        description: string;
        field: string;
        queryDescription: string;
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        global?: boolean | undefined;
        inputSchema?: {
            description: string;
            fieldName: string;
            fieldType: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    })[] | undefined;
}>;
export type PerformKnowledgeBaseEntryBulkActionRequestBodyInput = z.input<typeof PerformKnowledgeBaseEntryBulkActionRequestBody>;
export type PerformKnowledgeBaseEntryBulkActionResponse = z.infer<typeof PerformKnowledgeBaseEntryBulkActionResponse>;
export declare const PerformKnowledgeBaseEntryBulkActionResponse: z.ZodObject<{
    /**
     * Indicates whether the bulk action was successful.
     */
    success: z.ZodOptional<z.ZodBoolean>;
    /**
     * HTTP status code of the response.
     */
    statusCode: z.ZodOptional<z.ZodNumber>;
    /**
     * Message describing the result of the bulk action.
     */
    message: z.ZodOptional<z.ZodString>;
    /**
     * Total number of Knowledge Base Entries processed.
     */
    knowledgeBaseEntriesCount: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            /**
             * List of Knowledge Base Entries that were successfully updated.
             */
            updated: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
            /**
             * List of Knowledge Base Entries that were successfully created.
             */
            created: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
            /**
             * List of IDs of Knowledge Base Entries that were successfully deleted.
             */
            deleted: z.ZodArray<z.ZodString, "many">;
            /**
             * List of Knowledge Base Entries that were skipped during the bulk action.
             */
            skipped: z.ZodArray<z.ZodObject<{
                /**
                 * ID of the skipped Knowledge Base Entry.
                 */
                id: z.ZodString;
                /**
                 * Name of the skipped Knowledge Base Entry.
                 */
                name: z.ZodOptional<z.ZodString>;
                skip_reason: z.ZodLiteral<"KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }, {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        }>;
        summary: z.ZodObject<{
            /**
             * Number of Knowledge Base Entries that failed during the bulk action.
             */
            failed: z.ZodNumber;
            /**
             * Number of Knowledge Base Entries that were skipped during the bulk action.
             */
            skipped: z.ZodNumber;
            /**
             * Number of Knowledge Base Entries that were successfully processed during the bulk action.
             */
            succeeded: z.ZodNumber;
            /**
             * Total number of Knowledge Base Entries involved in the bulk action.
             */
            total: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        }, {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        }>;
        /**
         * List of errors encountered during the bulk action.
         */
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * Error message describing the issue.
             */
            message: z.ZodString;
            /**
             * HTTP status code associated with the error.
             */
            statusCode: z.ZodNumber;
            /**
             * Specific error code for the issue.
             */
            err_code: z.ZodOptional<z.ZodString>;
            /**
             * List of Knowledge Base Entries that encountered the error.
             */
            knowledgeBaseEntries: z.ZodArray<z.ZodObject<{
                /**
                 * ID of the Knowledge Base Entry that encountered an error.
                 */
                id: z.ZodString;
                /**
                 * Name of the Knowledge Base Entry that encountered an error.
                 */
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | undefined;
            }, {
                id: string;
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    }, {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    attributes: {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    statusCode?: number | undefined;
    knowledgeBaseEntriesCount?: number | undefined;
}, {
    attributes: {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: ({
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
            created: ({
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
            deleted: string[];
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    statusCode?: number | undefined;
    knowledgeBaseEntriesCount?: number | undefined;
}>;
