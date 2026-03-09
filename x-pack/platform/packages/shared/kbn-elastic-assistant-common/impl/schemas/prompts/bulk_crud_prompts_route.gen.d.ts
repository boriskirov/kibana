import { z } from '@kbn/zod';
/**
 * Reason why a prompt was skipped during the bulk action.
 */
export type PromptsBulkActionSkipReason = z.infer<typeof PromptsBulkActionSkipReason>;
export declare const PromptsBulkActionSkipReason: z.ZodLiteral<"PROMPT_FIELD_NOT_MODIFIED">;
export type PromptsBulkActionSkipResult = z.infer<typeof PromptsBulkActionSkipResult>;
export declare const PromptsBulkActionSkipResult: z.ZodObject<{
    /**
     * The ID of the prompt that was skipped.
     */
    id: z.ZodString;
    /**
     * The name of the prompt that was skipped.
     */
    name: z.ZodOptional<z.ZodString>;
    /**
     * The reason for skipping the prompt.
     */
    skip_reason: z.ZodLiteral<"PROMPT_FIELD_NOT_MODIFIED">;
}, "strip", z.ZodTypeAny, {
    id: string;
    skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
    name?: string | undefined;
}, {
    id: string;
    skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
    name?: string | undefined;
}>;
export type PromptDetailsInError = z.infer<typeof PromptDetailsInError>;
export declare const PromptDetailsInError: z.ZodObject<{
    /**
     * The ID of the prompt that encountered an error.
     */
    id: z.ZodString;
    /**
     * The name of the prompt that encountered an error.
     */
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
}, {
    id: string;
    name?: string | undefined;
}>;
/**
 * Type of the prompt (either system or quick).
 */
export type PromptType = z.infer<typeof PromptType>;
export declare const PromptType: z.ZodEnum<["system", "quick"]>;
export type PromptTypeEnum = typeof PromptType.enum;
export declare const PromptTypeEnum: z.Values<["system", "quick"]>;
export type NormalizedPromptError = z.infer<typeof NormalizedPromptError>;
export declare const NormalizedPromptError: z.ZodObject<{
    /**
     * A message describing the error encountered.
     */
    message: z.ZodString;
    /**
     * The HTTP status code associated with the error.
     */
    status_code: z.ZodNumber;
    /**
     * A code representing the error type.
     */
    err_code: z.ZodOptional<z.ZodString>;
    /**
     * List of prompts that encountered errors.
     */
    prompts: z.ZodArray<z.ZodObject<{
        /**
         * The ID of the prompt that encountered an error.
         */
        id: z.ZodString;
        /**
         * The name of the prompt that encountered an error.
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
    status_code: number;
    prompts: {
        id: string;
        name?: string | undefined;
    }[];
    err_code?: string | undefined;
}, {
    message: string;
    status_code: number;
    prompts: {
        id: string;
        name?: string | undefined;
    }[];
    err_code?: string | undefined;
}>;
export type PromptResponse = z.infer<typeof PromptResponse>;
export declare const PromptResponse: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * The name of the prompt.
     */
    name: z.ZodString;
    /**
     * The type of the prompt.
     */
    promptType: z.ZodEnum<["system", "quick"]>;
    /**
     * The content of the prompt.
     */
    content: z.ZodString;
    /**
     * Categories associated with the prompt.
     */
    categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * The color associated with the prompt.
     */
    color: z.ZodOptional<z.ZodString>;
    /**
     * Whether this prompt is the default for new conversations.
     */
    isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
    /**
     * Whether this prompt is the default.
     */
    isDefault: z.ZodOptional<z.ZodBoolean>;
    /**
     * The consumer that the prompt is associated with.
     */
    consumer: z.ZodOptional<z.ZodString>;
    /**
     * The timestamp of when the prompt was last updated.
     */
    updatedAt: z.ZodOptional<z.ZodString>;
    /**
     * The user who last updated the prompt.
     */
    updatedBy: z.ZodOptional<z.ZodString>;
    /**
     * The timestamp of when the prompt was created.
     */
    createdAt: z.ZodOptional<z.ZodString>;
    /**
     * The user who created the prompt.
     */
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * List of users associated with the prompt.
     */
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
    /**
     * Kibana space where the prompt is located.
     */
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
}>;
export type PromptsBulkCrudActionResults = z.infer<typeof PromptsBulkCrudActionResults>;
export declare const PromptsBulkCrudActionResults: z.ZodObject<{
    /**
     * List of prompts that were updated.
     */
    updated: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        /**
         * The name of the prompt.
         */
        name: z.ZodString;
        /**
         * The type of the prompt.
         */
        promptType: z.ZodEnum<["system", "quick"]>;
        /**
         * The content of the prompt.
         */
        content: z.ZodString;
        /**
         * Categories associated with the prompt.
         */
        categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        /**
         * The color associated with the prompt.
         */
        color: z.ZodOptional<z.ZodString>;
        /**
         * Whether this prompt is the default for new conversations.
         */
        isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
        /**
         * Whether this prompt is the default.
         */
        isDefault: z.ZodOptional<z.ZodBoolean>;
        /**
         * The consumer that the prompt is associated with.
         */
        consumer: z.ZodOptional<z.ZodString>;
        /**
         * The timestamp of when the prompt was last updated.
         */
        updatedAt: z.ZodOptional<z.ZodString>;
        /**
         * The user who last updated the prompt.
         */
        updatedBy: z.ZodOptional<z.ZodString>;
        /**
         * The timestamp of when the prompt was created.
         */
        createdAt: z.ZodOptional<z.ZodString>;
        /**
         * The user who created the prompt.
         */
        createdBy: z.ZodOptional<z.ZodString>;
        /**
         * List of users associated with the prompt.
         */
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
        /**
         * Kibana space where the prompt is located.
         */
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
    /**
     * List of prompts that were created.
     */
    created: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        /**
         * The name of the prompt.
         */
        name: z.ZodString;
        /**
         * The type of the prompt.
         */
        promptType: z.ZodEnum<["system", "quick"]>;
        /**
         * The content of the prompt.
         */
        content: z.ZodString;
        /**
         * Categories associated with the prompt.
         */
        categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        /**
         * The color associated with the prompt.
         */
        color: z.ZodOptional<z.ZodString>;
        /**
         * Whether this prompt is the default for new conversations.
         */
        isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
        /**
         * Whether this prompt is the default.
         */
        isDefault: z.ZodOptional<z.ZodBoolean>;
        /**
         * The consumer that the prompt is associated with.
         */
        consumer: z.ZodOptional<z.ZodString>;
        /**
         * The timestamp of when the prompt was last updated.
         */
        updatedAt: z.ZodOptional<z.ZodString>;
        /**
         * The user who last updated the prompt.
         */
        updatedBy: z.ZodOptional<z.ZodString>;
        /**
         * The timestamp of when the prompt was created.
         */
        createdAt: z.ZodOptional<z.ZodString>;
        /**
         * The user who created the prompt.
         */
        createdBy: z.ZodOptional<z.ZodString>;
        /**
         * List of users associated with the prompt.
         */
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
        /**
         * Kibana space where the prompt is located.
         */
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
    /**
     * List of IDs of prompts that were deleted.
     */
    deleted: z.ZodArray<z.ZodString, "many">;
    /**
     * List of prompts that were skipped.
     */
    skipped: z.ZodArray<z.ZodObject<{
        /**
         * The ID of the prompt that was skipped.
         */
        id: z.ZodString;
        /**
         * The name of the prompt that was skipped.
         */
        name: z.ZodOptional<z.ZodString>;
        /**
         * The reason for skipping the prompt.
         */
        skip_reason: z.ZodLiteral<"PROMPT_FIELD_NOT_MODIFIED">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
        name?: string | undefined;
    }, {
        id: string;
        skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
        name?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    skipped: {
        id: string;
        skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
        name?: string | undefined;
    }[];
    updated: {
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
    created: {
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
    deleted: string[];
}, {
    skipped: {
        id: string;
        skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
        name?: string | undefined;
    }[];
    updated: {
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
    created: {
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
    deleted: string[];
}>;
export type PromptsBulkCrudActionResponse = z.infer<typeof PromptsBulkCrudActionResponse>;
export declare const PromptsBulkCrudActionResponse: z.ZodObject<{
    /**
     * Indicates if the bulk action was successful.
     */
    success: z.ZodOptional<z.ZodBoolean>;
    /**
     * The HTTP status code of the response.
     */
    status_code: z.ZodOptional<z.ZodNumber>;
    /**
     * A message describing the result of the bulk action.
     */
    message: z.ZodOptional<z.ZodString>;
    /**
     * The number of prompts processed in the bulk action.
     */
    prompts_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            /**
             * List of prompts that were updated.
             */
            updated: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                /**
                 * The name of the prompt.
                 */
                name: z.ZodString;
                /**
                 * The type of the prompt.
                 */
                promptType: z.ZodEnum<["system", "quick"]>;
                /**
                 * The content of the prompt.
                 */
                content: z.ZodString;
                /**
                 * Categories associated with the prompt.
                 */
                categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                /**
                 * The color associated with the prompt.
                 */
                color: z.ZodOptional<z.ZodString>;
                /**
                 * Whether this prompt is the default for new conversations.
                 */
                isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Whether this prompt is the default.
                 */
                isDefault: z.ZodOptional<z.ZodBoolean>;
                /**
                 * The consumer that the prompt is associated with.
                 */
                consumer: z.ZodOptional<z.ZodString>;
                /**
                 * The timestamp of when the prompt was last updated.
                 */
                updatedAt: z.ZodOptional<z.ZodString>;
                /**
                 * The user who last updated the prompt.
                 */
                updatedBy: z.ZodOptional<z.ZodString>;
                /**
                 * The timestamp of when the prompt was created.
                 */
                createdAt: z.ZodOptional<z.ZodString>;
                /**
                 * The user who created the prompt.
                 */
                createdBy: z.ZodOptional<z.ZodString>;
                /**
                 * List of users associated with the prompt.
                 */
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
                /**
                 * Kibana space where the prompt is located.
                 */
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
            /**
             * List of prompts that were created.
             */
            created: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                /**
                 * The name of the prompt.
                 */
                name: z.ZodString;
                /**
                 * The type of the prompt.
                 */
                promptType: z.ZodEnum<["system", "quick"]>;
                /**
                 * The content of the prompt.
                 */
                content: z.ZodString;
                /**
                 * Categories associated with the prompt.
                 */
                categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                /**
                 * The color associated with the prompt.
                 */
                color: z.ZodOptional<z.ZodString>;
                /**
                 * Whether this prompt is the default for new conversations.
                 */
                isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Whether this prompt is the default.
                 */
                isDefault: z.ZodOptional<z.ZodBoolean>;
                /**
                 * The consumer that the prompt is associated with.
                 */
                consumer: z.ZodOptional<z.ZodString>;
                /**
                 * The timestamp of when the prompt was last updated.
                 */
                updatedAt: z.ZodOptional<z.ZodString>;
                /**
                 * The user who last updated the prompt.
                 */
                updatedBy: z.ZodOptional<z.ZodString>;
                /**
                 * The timestamp of when the prompt was created.
                 */
                createdAt: z.ZodOptional<z.ZodString>;
                /**
                 * The user who created the prompt.
                 */
                createdBy: z.ZodOptional<z.ZodString>;
                /**
                 * List of users associated with the prompt.
                 */
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
                /**
                 * Kibana space where the prompt is located.
                 */
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
            /**
             * List of IDs of prompts that were deleted.
             */
            deleted: z.ZodArray<z.ZodString, "many">;
            /**
             * List of prompts that were skipped.
             */
            skipped: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the prompt that was skipped.
                 */
                id: z.ZodString;
                /**
                 * The name of the prompt that was skipped.
                 */
                name: z.ZodOptional<z.ZodString>;
                /**
                 * The reason for skipping the prompt.
                 */
                skip_reason: z.ZodLiteral<"PROMPT_FIELD_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }, {
                id: string;
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        }>;
        summary: z.ZodObject<{
            failed: z.ZodNumber;
            skipped: z.ZodNumber;
            succeeded: z.ZodNumber;
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
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * A message describing the error encountered.
             */
            message: z.ZodString;
            /**
             * The HTTP status code associated with the error.
             */
            status_code: z.ZodNumber;
            /**
             * A code representing the error type.
             */
            err_code: z.ZodOptional<z.ZodString>;
            /**
             * List of prompts that encountered errors.
             */
            prompts: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the prompt that encountered an error.
                 */
                id: z.ZodString;
                /**
                 * The name of the prompt that encountered an error.
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
            status_code: number;
            prompts: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            status_code: number;
            prompts: {
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
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            prompts: {
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
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            prompts: {
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
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            prompts: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    prompts_count?: number | undefined;
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
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            prompts: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    prompts_count?: number | undefined;
}>;
export type PromptCreateProps = z.infer<typeof PromptCreateProps>;
export declare const PromptCreateProps: z.ZodObject<{
    /**
     * The name of the prompt.
     */
    name: z.ZodString;
    /**
     * The type of the prompt.
     */
    promptType: z.ZodEnum<["system", "quick"]>;
    /**
     * The content of the prompt.
     */
    content: z.ZodString;
    /**
     * The color associated with the prompt.
     */
    color: z.ZodOptional<z.ZodString>;
    /**
     * List of categories for the prompt.
     */
    categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Whether this prompt should be the default for new conversations.
     */
    isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
    /**
     * Whether this prompt should be the default.
     */
    isDefault: z.ZodOptional<z.ZodBoolean>;
    /**
     * The consumer associated with the prompt.
     */
    consumer: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    content: string;
    name: string;
    promptType: "system" | "quick";
    color?: string | undefined;
    categories?: string[] | undefined;
    isNewConversationDefault?: boolean | undefined;
    isDefault?: boolean | undefined;
    consumer?: string | undefined;
}, {
    content: string;
    name: string;
    promptType: "system" | "quick";
    color?: string | undefined;
    categories?: string[] | undefined;
    isNewConversationDefault?: boolean | undefined;
    isDefault?: boolean | undefined;
    consumer?: string | undefined;
}>;
export type PromptUpdateProps = z.infer<typeof PromptUpdateProps>;
export declare const PromptUpdateProps: z.ZodObject<{
    /**
     * The ID of the prompt to update.
     */
    id: z.ZodString;
    /**
     * The updated content for the prompt.
     */
    content: z.ZodOptional<z.ZodString>;
    /**
     * The updated color associated with the prompt.
     */
    color: z.ZodOptional<z.ZodString>;
    /**
     * The updated categories for the prompt.
     */
    categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Whether the prompt should be the default for new conversations.
     */
    isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
    /**
     * Whether this prompt should be the default.
     */
    isDefault: z.ZodOptional<z.ZodBoolean>;
    /**
     * The updated consumer for the prompt.
     */
    consumer: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    color?: string | undefined;
    content?: string | undefined;
    categories?: string[] | undefined;
    isNewConversationDefault?: boolean | undefined;
    isDefault?: boolean | undefined;
    consumer?: string | undefined;
}, {
    id: string;
    color?: string | undefined;
    content?: string | undefined;
    categories?: string[] | undefined;
    isNewConversationDefault?: boolean | undefined;
    isDefault?: boolean | undefined;
    consumer?: string | undefined;
}>;
export type PerformPromptsBulkActionRequestBody = z.infer<typeof PerformPromptsBulkActionRequestBody>;
export declare const PerformPromptsBulkActionRequestBody: z.ZodObject<{
    /**
     * Criteria for deleting prompts in bulk.
     */
    delete: z.ZodOptional<z.ZodObject<{
        query: z.ZodOptional<z.ZodString>;
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        query?: string | undefined;
        ids?: string[] | undefined;
    }, {
        query?: string | undefined;
        ids?: string[] | undefined;
    }>>;
    /**
     * List of prompts to be created.
     */
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The name of the prompt.
         */
        name: z.ZodString;
        /**
         * The type of the prompt.
         */
        promptType: z.ZodEnum<["system", "quick"]>;
        /**
         * The content of the prompt.
         */
        content: z.ZodString;
        /**
         * The color associated with the prompt.
         */
        color: z.ZodOptional<z.ZodString>;
        /**
         * List of categories for the prompt.
         */
        categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        /**
         * Whether this prompt should be the default for new conversations.
         */
        isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
        /**
         * Whether this prompt should be the default.
         */
        isDefault: z.ZodOptional<z.ZodBoolean>;
        /**
         * The consumer associated with the prompt.
         */
        consumer: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        content: string;
        name: string;
        promptType: "system" | "quick";
        color?: string | undefined;
        categories?: string[] | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }, {
        content: string;
        name: string;
        promptType: "system" | "quick";
        color?: string | undefined;
        categories?: string[] | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }>, "many">>;
    /**
     * List of prompts to be updated.
     */
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The ID of the prompt to update.
         */
        id: z.ZodString;
        /**
         * The updated content for the prompt.
         */
        content: z.ZodOptional<z.ZodString>;
        /**
         * The updated color associated with the prompt.
         */
        color: z.ZodOptional<z.ZodString>;
        /**
         * The updated categories for the prompt.
         */
        categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        /**
         * Whether the prompt should be the default for new conversations.
         */
        isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
        /**
         * Whether this prompt should be the default.
         */
        isDefault: z.ZodOptional<z.ZodBoolean>;
        /**
         * The updated consumer for the prompt.
         */
        consumer: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        color?: string | undefined;
        content?: string | undefined;
        categories?: string[] | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }, {
        id: string;
        color?: string | undefined;
        content?: string | undefined;
        categories?: string[] | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: {
        content: string;
        name: string;
        promptType: "system" | "quick";
        color?: string | undefined;
        categories?: string[] | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }[] | undefined;
    update?: {
        id: string;
        color?: string | undefined;
        content?: string | undefined;
        categories?: string[] | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }[] | undefined;
}, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: {
        content: string;
        name: string;
        promptType: "system" | "quick";
        color?: string | undefined;
        categories?: string[] | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }[] | undefined;
    update?: {
        id: string;
        color?: string | undefined;
        content?: string | undefined;
        categories?: string[] | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
    }[] | undefined;
}>;
export type PerformPromptsBulkActionRequestBodyInput = z.input<typeof PerformPromptsBulkActionRequestBody>;
export type PerformPromptsBulkActionResponse = z.infer<typeof PerformPromptsBulkActionResponse>;
export declare const PerformPromptsBulkActionResponse: z.ZodObject<{
    /**
     * Indicates if the bulk action was successful.
     */
    success: z.ZodOptional<z.ZodBoolean>;
    /**
     * The HTTP status code of the response.
     */
    status_code: z.ZodOptional<z.ZodNumber>;
    /**
     * A message describing the result of the bulk action.
     */
    message: z.ZodOptional<z.ZodString>;
    /**
     * The number of prompts processed in the bulk action.
     */
    prompts_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            /**
             * List of prompts that were updated.
             */
            updated: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                /**
                 * The name of the prompt.
                 */
                name: z.ZodString;
                /**
                 * The type of the prompt.
                 */
                promptType: z.ZodEnum<["system", "quick"]>;
                /**
                 * The content of the prompt.
                 */
                content: z.ZodString;
                /**
                 * Categories associated with the prompt.
                 */
                categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                /**
                 * The color associated with the prompt.
                 */
                color: z.ZodOptional<z.ZodString>;
                /**
                 * Whether this prompt is the default for new conversations.
                 */
                isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Whether this prompt is the default.
                 */
                isDefault: z.ZodOptional<z.ZodBoolean>;
                /**
                 * The consumer that the prompt is associated with.
                 */
                consumer: z.ZodOptional<z.ZodString>;
                /**
                 * The timestamp of when the prompt was last updated.
                 */
                updatedAt: z.ZodOptional<z.ZodString>;
                /**
                 * The user who last updated the prompt.
                 */
                updatedBy: z.ZodOptional<z.ZodString>;
                /**
                 * The timestamp of when the prompt was created.
                 */
                createdAt: z.ZodOptional<z.ZodString>;
                /**
                 * The user who created the prompt.
                 */
                createdBy: z.ZodOptional<z.ZodString>;
                /**
                 * List of users associated with the prompt.
                 */
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
                /**
                 * Kibana space where the prompt is located.
                 */
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
            /**
             * List of prompts that were created.
             */
            created: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                /**
                 * The name of the prompt.
                 */
                name: z.ZodString;
                /**
                 * The type of the prompt.
                 */
                promptType: z.ZodEnum<["system", "quick"]>;
                /**
                 * The content of the prompt.
                 */
                content: z.ZodString;
                /**
                 * Categories associated with the prompt.
                 */
                categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                /**
                 * The color associated with the prompt.
                 */
                color: z.ZodOptional<z.ZodString>;
                /**
                 * Whether this prompt is the default for new conversations.
                 */
                isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Whether this prompt is the default.
                 */
                isDefault: z.ZodOptional<z.ZodBoolean>;
                /**
                 * The consumer that the prompt is associated with.
                 */
                consumer: z.ZodOptional<z.ZodString>;
                /**
                 * The timestamp of when the prompt was last updated.
                 */
                updatedAt: z.ZodOptional<z.ZodString>;
                /**
                 * The user who last updated the prompt.
                 */
                updatedBy: z.ZodOptional<z.ZodString>;
                /**
                 * The timestamp of when the prompt was created.
                 */
                createdAt: z.ZodOptional<z.ZodString>;
                /**
                 * The user who created the prompt.
                 */
                createdBy: z.ZodOptional<z.ZodString>;
                /**
                 * List of users associated with the prompt.
                 */
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
                /**
                 * Kibana space where the prompt is located.
                 */
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
            /**
             * List of IDs of prompts that were deleted.
             */
            deleted: z.ZodArray<z.ZodString, "many">;
            /**
             * List of prompts that were skipped.
             */
            skipped: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the prompt that was skipped.
                 */
                id: z.ZodString;
                /**
                 * The name of the prompt that was skipped.
                 */
                name: z.ZodOptional<z.ZodString>;
                /**
                 * The reason for skipping the prompt.
                 */
                skip_reason: z.ZodLiteral<"PROMPT_FIELD_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }, {
                id: string;
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        }>;
        summary: z.ZodObject<{
            failed: z.ZodNumber;
            skipped: z.ZodNumber;
            succeeded: z.ZodNumber;
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
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * A message describing the error encountered.
             */
            message: z.ZodString;
            /**
             * The HTTP status code associated with the error.
             */
            status_code: z.ZodNumber;
            /**
             * A code representing the error type.
             */
            err_code: z.ZodOptional<z.ZodString>;
            /**
             * List of prompts that encountered errors.
             */
            prompts: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the prompt that encountered an error.
                 */
                id: z.ZodString;
                /**
                 * The name of the prompt that encountered an error.
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
            status_code: number;
            prompts: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            status_code: number;
            prompts: {
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
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            prompts: {
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
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            prompts: {
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
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            prompts: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    prompts_count?: number | undefined;
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
                skip_reason: "PROMPT_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            prompts: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    prompts_count?: number | undefined;
}>;
