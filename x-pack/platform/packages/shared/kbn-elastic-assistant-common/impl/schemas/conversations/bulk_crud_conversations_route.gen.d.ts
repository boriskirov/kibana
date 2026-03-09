import { z } from '@kbn/zod';
/**
 * Reason for skipping a conversation during bulk action.
 */
export type ConversationsBulkActionSkipReason = z.infer<typeof ConversationsBulkActionSkipReason>;
export declare const ConversationsBulkActionSkipReason: z.ZodLiteral<"CONVERSATION_NOT_MODIFIED">;
export type ConversationsBulkActionSkipResult = z.infer<typeof ConversationsBulkActionSkipResult>;
export declare const ConversationsBulkActionSkipResult: z.ZodObject<{
    /**
     * The ID of the conversation that was skipped.
     */
    id: z.ZodString;
    /**
     * The name of the conversation that was skipped.
     */
    name: z.ZodOptional<z.ZodString>;
    /**
     * The reason the conversation was skipped.
     */
    skip_reason: z.ZodLiteral<"CONVERSATION_NOT_MODIFIED">;
}, "strip", z.ZodTypeAny, {
    id: string;
    skip_reason: "CONVERSATION_NOT_MODIFIED";
    name?: string | undefined;
}, {
    id: string;
    skip_reason: "CONVERSATION_NOT_MODIFIED";
    name?: string | undefined;
}>;
export type ConversationDetailsInError = z.infer<typeof ConversationDetailsInError>;
export declare const ConversationDetailsInError: z.ZodObject<{
    /**
     * The ID of the conversation that encountered an error.
     */
    id: z.ZodString;
    /**
     * The name of the conversation in error.
     */
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
}, {
    id: string;
    name?: string | undefined;
}>;
export type NormalizedConversationError = z.infer<typeof NormalizedConversationError>;
export declare const NormalizedConversationError: z.ZodObject<{
    /**
     * Error message.
     */
    message: z.ZodString;
    /**
     * HTTP status code for the error.
     */
    status_code: z.ZodNumber;
    /**
     * A specific error code identifying the error.
     */
    err_code: z.ZodOptional<z.ZodString>;
    /**
     * A list of conversations that caused errors.
     */
    conversations: z.ZodArray<z.ZodObject<{
        /**
         * The ID of the conversation that encountered an error.
         */
        id: z.ZodString;
        /**
         * The name of the conversation in error.
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
    conversations: {
        id: string;
        name?: string | undefined;
    }[];
    err_code?: string | undefined;
}, {
    message: string;
    status_code: number;
    conversations: {
        id: string;
        name?: string | undefined;
    }[];
    err_code?: string | undefined;
}>;
export type ConversationsBulkCrudActionResults = z.infer<typeof ConversationsBulkCrudActionResults>;
export declare const ConversationsBulkCrudActionResults: z.ZodObject<{
    /**
     * List of conversations that were successfully updated.
     */
    updated: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodString;
        category: z.ZodEnum<["assistant", "insights"]>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        updatedAt: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodString;
        replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
        createdBy: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            name?: string | undefined;
        }, {
            id?: string | undefined;
            name?: string | undefined;
        }>;
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
        messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            content: z.ZodString;
            refusal: z.ZodOptional<z.ZodString>;
            reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
            role: z.ZodEnum<["system", "user", "assistant"]>;
            user: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                name?: string | undefined;
            }, {
                id?: string | undefined;
                name?: string | undefined;
            }>>;
            timestamp: z.ZodEffects<z.ZodString, string, string>;
            isError: z.ZodOptional<z.ZodBoolean>;
            traceData: z.ZodOptional<z.ZodObject<{
                transactionId: z.ZodOptional<z.ZodString>;
                traceId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            }, {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            }>>;
            metadata: z.ZodOptional<z.ZodObject<{
                contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip">>>;
                interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SELECT_OPTION">;
                    description: z.ZodString;
                    options: z.ZodArray<z.ZodObject<{
                        label: z.ZodString;
                        value: z.ZodString;
                        buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }, {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                }, {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                }>, z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                } & {
                    type: z.ZodLiteral<"INPUT_TEXT">;
                    description: z.ZodOptional<z.ZodString>;
                    placeholder: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                }, {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                }>]>>;
                interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                    type: z.ZodLiteral<"SELECT_OPTION">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    type: "SELECT_OPTION";
                }, {
                    value: string;
                    type: "SELECT_OPTION";
                }>, z.ZodObject<{} & {
                    type: z.ZodLiteral<"INPUT_TEXT">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    type: "INPUT_TEXT";
                }, {
                    value: string;
                    type: "INPUT_TEXT";
                }>]>>;
            }, "strip", z.ZodTypeAny, {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            }, {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }, {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }>, "many">>;
        apiConfig: z.ZodOptional<z.ZodObject<{
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
        }>>;
        excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
        namespace: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        category: "assistant" | "insights";
        createdAt: string;
        createdBy: {
            id?: string | undefined;
            name?: string | undefined;
        };
        timestamp?: string | undefined;
        updatedAt?: string | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }, {
        title: string;
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        category: "assistant" | "insights";
        createdAt: string;
        createdBy: {
            id?: string | undefined;
            name?: string | undefined;
        };
        timestamp?: string | undefined;
        updatedAt?: string | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }>, "many">;
    /**
     * List of conversations that were successfully created.
     */
    created: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodString;
        category: z.ZodEnum<["assistant", "insights"]>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        updatedAt: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodString;
        replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
        createdBy: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            name?: string | undefined;
        }, {
            id?: string | undefined;
            name?: string | undefined;
        }>;
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
        messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            content: z.ZodString;
            refusal: z.ZodOptional<z.ZodString>;
            reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
            role: z.ZodEnum<["system", "user", "assistant"]>;
            user: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                name?: string | undefined;
            }, {
                id?: string | undefined;
                name?: string | undefined;
            }>>;
            timestamp: z.ZodEffects<z.ZodString, string, string>;
            isError: z.ZodOptional<z.ZodBoolean>;
            traceData: z.ZodOptional<z.ZodObject<{
                transactionId: z.ZodOptional<z.ZodString>;
                traceId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            }, {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            }>>;
            metadata: z.ZodOptional<z.ZodObject<{
                contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip">>>;
                interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SELECT_OPTION">;
                    description: z.ZodString;
                    options: z.ZodArray<z.ZodObject<{
                        label: z.ZodString;
                        value: z.ZodString;
                        buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }, {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                }, {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                }>, z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                } & {
                    type: z.ZodLiteral<"INPUT_TEXT">;
                    description: z.ZodOptional<z.ZodString>;
                    placeholder: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                }, {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                }>]>>;
                interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                    type: z.ZodLiteral<"SELECT_OPTION">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    type: "SELECT_OPTION";
                }, {
                    value: string;
                    type: "SELECT_OPTION";
                }>, z.ZodObject<{} & {
                    type: z.ZodLiteral<"INPUT_TEXT">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    type: "INPUT_TEXT";
                }, {
                    value: string;
                    type: "INPUT_TEXT";
                }>]>>;
            }, "strip", z.ZodTypeAny, {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            }, {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }, {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }>, "many">>;
        apiConfig: z.ZodOptional<z.ZodObject<{
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
        }>>;
        excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
        namespace: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        category: "assistant" | "insights";
        createdAt: string;
        createdBy: {
            id?: string | undefined;
            name?: string | undefined;
        };
        timestamp?: string | undefined;
        updatedAt?: string | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }, {
        title: string;
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        category: "assistant" | "insights";
        createdAt: string;
        createdBy: {
            id?: string | undefined;
            name?: string | undefined;
        };
        timestamp?: string | undefined;
        updatedAt?: string | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }>, "many">;
    /**
     * List of conversation IDs that were successfully deleted.
     */
    deleted: z.ZodArray<z.ZodString, "many">;
    /**
     * List of conversations that were skipped during the bulk action.
     */
    skipped: z.ZodArray<z.ZodObject<{
        /**
         * The ID of the conversation that was skipped.
         */
        id: z.ZodString;
        /**
         * The name of the conversation that was skipped.
         */
        name: z.ZodOptional<z.ZodString>;
        /**
         * The reason the conversation was skipped.
         */
        skip_reason: z.ZodLiteral<"CONVERSATION_NOT_MODIFIED">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        skip_reason: "CONVERSATION_NOT_MODIFIED";
        name?: string | undefined;
    }, {
        id: string;
        skip_reason: "CONVERSATION_NOT_MODIFIED";
        name?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    skipped: {
        id: string;
        skip_reason: "CONVERSATION_NOT_MODIFIED";
        name?: string | undefined;
    }[];
    updated: {
        title: string;
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        category: "assistant" | "insights";
        createdAt: string;
        createdBy: {
            id?: string | undefined;
            name?: string | undefined;
        };
        timestamp?: string | undefined;
        updatedAt?: string | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }[];
    created: {
        title: string;
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        category: "assistant" | "insights";
        createdAt: string;
        createdBy: {
            id?: string | undefined;
            name?: string | undefined;
        };
        timestamp?: string | undefined;
        updatedAt?: string | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }[];
    deleted: string[];
}, {
    skipped: {
        id: string;
        skip_reason: "CONVERSATION_NOT_MODIFIED";
        name?: string | undefined;
    }[];
    updated: {
        title: string;
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        category: "assistant" | "insights";
        createdAt: string;
        createdBy: {
            id?: string | undefined;
            name?: string | undefined;
        };
        timestamp?: string | undefined;
        updatedAt?: string | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }[];
    created: {
        title: string;
        id: string;
        namespace: string;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        category: "assistant" | "insights";
        createdAt: string;
        createdBy: {
            id?: string | undefined;
            name?: string | undefined;
        };
        timestamp?: string | undefined;
        updatedAt?: string | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }[];
    deleted: string[];
}>;
export type ConversationsBulkCrudActionResponse = z.infer<typeof ConversationsBulkCrudActionResponse>;
export declare const ConversationsBulkCrudActionResponse: z.ZodObject<{
    /**
     * Indicates whether the bulk action was successful.
     */
    success: z.ZodOptional<z.ZodBoolean>;
    /**
     * The HTTP status code returned for the bulk action.
     */
    status_code: z.ZodOptional<z.ZodNumber>;
    /**
     * A message providing additional details about the bulk action result.
     */
    message: z.ZodOptional<z.ZodString>;
    /**
     * The total number of conversations involved in the bulk action.
     */
    conversations_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            /**
             * List of conversations that were successfully updated.
             */
            updated: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                title: z.ZodString;
                category: z.ZodEnum<["assistant", "insights"]>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                updatedAt: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodString;
                replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
                createdBy: z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    name?: string | undefined;
                }, {
                    id?: string | undefined;
                    name?: string | undefined;
                }>;
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
                messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                    content: z.ZodString;
                    refusal: z.ZodOptional<z.ZodString>;
                    reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
                    role: z.ZodEnum<["system", "user", "assistant"]>;
                    user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                    }>>;
                    timestamp: z.ZodEffects<z.ZodString, string, string>;
                    isError: z.ZodOptional<z.ZodBoolean>;
                    traceData: z.ZodOptional<z.ZodObject<{
                        transactionId: z.ZodOptional<z.ZodString>;
                        traceId: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    }, {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    }>>;
                    metadata: z.ZodOptional<z.ZodObject<{
                        contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip">>>;
                        interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                            expired: z.ZodOptional<z.ZodBoolean>;
                            threadId: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SELECT_OPTION">;
                            description: z.ZodString;
                            options: z.ZodArray<z.ZodObject<{
                                label: z.ZodString;
                                value: z.ZodString;
                                buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                            }, "strip", z.ZodTypeAny, {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }, {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }>, "many">;
                        }, "strip", z.ZodTypeAny, {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        }, {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        }>, z.ZodObject<{
                            expired: z.ZodOptional<z.ZodBoolean>;
                            threadId: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"INPUT_TEXT">;
                            description: z.ZodOptional<z.ZodString>;
                            placeholder: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        }, {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        }>]>>;
                        interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                            type: z.ZodLiteral<"SELECT_OPTION">;
                            value: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            type: "SELECT_OPTION";
                        }, {
                            value: string;
                            type: "SELECT_OPTION";
                        }>, z.ZodObject<{} & {
                            type: z.ZodLiteral<"INPUT_TEXT">;
                            value: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            type: "INPUT_TEXT";
                        }, {
                            value: string;
                            type: "INPUT_TEXT";
                        }>]>>;
                    }, "strip", z.ZodTypeAny, {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    }, {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }, {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }>, "many">>;
                apiConfig: z.ZodOptional<z.ZodObject<{
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
                }>>;
                excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
                namespace: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }, {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }>, "many">;
            /**
             * List of conversations that were successfully created.
             */
            created: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                title: z.ZodString;
                category: z.ZodEnum<["assistant", "insights"]>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                updatedAt: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodString;
                replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
                createdBy: z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    name?: string | undefined;
                }, {
                    id?: string | undefined;
                    name?: string | undefined;
                }>;
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
                messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                    content: z.ZodString;
                    refusal: z.ZodOptional<z.ZodString>;
                    reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
                    role: z.ZodEnum<["system", "user", "assistant"]>;
                    user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                    }>>;
                    timestamp: z.ZodEffects<z.ZodString, string, string>;
                    isError: z.ZodOptional<z.ZodBoolean>;
                    traceData: z.ZodOptional<z.ZodObject<{
                        transactionId: z.ZodOptional<z.ZodString>;
                        traceId: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    }, {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    }>>;
                    metadata: z.ZodOptional<z.ZodObject<{
                        contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip">>>;
                        interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                            expired: z.ZodOptional<z.ZodBoolean>;
                            threadId: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SELECT_OPTION">;
                            description: z.ZodString;
                            options: z.ZodArray<z.ZodObject<{
                                label: z.ZodString;
                                value: z.ZodString;
                                buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                            }, "strip", z.ZodTypeAny, {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }, {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }>, "many">;
                        }, "strip", z.ZodTypeAny, {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        }, {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        }>, z.ZodObject<{
                            expired: z.ZodOptional<z.ZodBoolean>;
                            threadId: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"INPUT_TEXT">;
                            description: z.ZodOptional<z.ZodString>;
                            placeholder: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        }, {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        }>]>>;
                        interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                            type: z.ZodLiteral<"SELECT_OPTION">;
                            value: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            type: "SELECT_OPTION";
                        }, {
                            value: string;
                            type: "SELECT_OPTION";
                        }>, z.ZodObject<{} & {
                            type: z.ZodLiteral<"INPUT_TEXT">;
                            value: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            type: "INPUT_TEXT";
                        }, {
                            value: string;
                            type: "INPUT_TEXT";
                        }>]>>;
                    }, "strip", z.ZodTypeAny, {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    }, {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }, {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }>, "many">>;
                apiConfig: z.ZodOptional<z.ZodObject<{
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
                }>>;
                excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
                namespace: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }, {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }>, "many">;
            /**
             * List of conversation IDs that were successfully deleted.
             */
            deleted: z.ZodArray<z.ZodString, "many">;
            /**
             * List of conversations that were skipped during the bulk action.
             */
            skipped: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the conversation that was skipped.
                 */
                id: z.ZodString;
                /**
                 * The name of the conversation that was skipped.
                 */
                name: z.ZodOptional<z.ZodString>;
                /**
                 * The reason the conversation was skipped.
                 */
                skip_reason: z.ZodLiteral<"CONVERSATION_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }, {
                id: string;
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
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
             * Error message.
             */
            message: z.ZodString;
            /**
             * HTTP status code for the error.
             */
            status_code: z.ZodNumber;
            /**
             * A specific error code identifying the error.
             */
            err_code: z.ZodOptional<z.ZodString>;
            /**
             * A list of conversations that caused errors.
             */
            conversations: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the conversation that encountered an error.
                 */
                id: z.ZodString;
                /**
                 * The name of the conversation in error.
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
            conversations: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            status_code: number;
            conversations: {
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
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            conversations: {
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
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            conversations: {
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
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            conversations: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    conversations_count?: number | undefined;
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
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            conversations: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    conversations_count?: number | undefined;
}>;
export type PerformBulkActionRequestBody = z.infer<typeof PerformBulkActionRequestBody>;
export declare const PerformBulkActionRequestBody: z.ZodObject<{
    /**
     * Details of the bulk delete action to apply.
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
     * List of conversations to create in bulk.
     */
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        category: z.ZodOptional<z.ZodEnum<["assistant", "insights"]>>;
        messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            content: z.ZodString;
            refusal: z.ZodOptional<z.ZodString>;
            reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
            role: z.ZodEnum<["system", "user", "assistant"]>;
            user: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                name?: string | undefined;
            }, {
                id?: string | undefined;
                name?: string | undefined;
            }>>;
            timestamp: z.ZodEffects<z.ZodString, string, string>;
            isError: z.ZodOptional<z.ZodBoolean>;
            traceData: z.ZodOptional<z.ZodObject<{
                transactionId: z.ZodOptional<z.ZodString>;
                traceId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            }, {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            }>>;
            metadata: z.ZodOptional<z.ZodObject<{
                contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip">>>;
                interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SELECT_OPTION">;
                    description: z.ZodString;
                    options: z.ZodArray<z.ZodObject<{
                        label: z.ZodString;
                        value: z.ZodString;
                        buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }, {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                }, {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                }>, z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                } & {
                    type: z.ZodLiteral<"INPUT_TEXT">;
                    description: z.ZodOptional<z.ZodString>;
                    placeholder: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                }, {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                }>]>>;
                interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                    type: z.ZodLiteral<"SELECT_OPTION">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    type: "SELECT_OPTION";
                }, {
                    value: string;
                    type: "SELECT_OPTION";
                }>, z.ZodObject<{} & {
                    type: z.ZodLiteral<"INPUT_TEXT">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    type: "INPUT_TEXT";
                }, {
                    value: string;
                    type: "INPUT_TEXT";
                }>]>>;
            }, "strip", z.ZodTypeAny, {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            }, {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }, {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }>, "many">>;
        apiConfig: z.ZodOptional<z.ZodObject<{
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
        }>>;
        excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
        replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id?: string | undefined;
        category?: "assistant" | "insights" | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }, {
        title: string;
        id?: string | undefined;
        category?: "assistant" | "insights" | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }>, "many">>;
    /**
     * List of conversations to update in bulk.
     */
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodEnum<["assistant", "insights"]>>;
        messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            content: z.ZodString;
            refusal: z.ZodOptional<z.ZodString>;
            reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
            role: z.ZodEnum<["system", "user", "assistant"]>;
            user: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                name?: string | undefined;
            }, {
                id?: string | undefined;
                name?: string | undefined;
            }>>;
            timestamp: z.ZodEffects<z.ZodString, string, string>;
            isError: z.ZodOptional<z.ZodBoolean>;
            traceData: z.ZodOptional<z.ZodObject<{
                transactionId: z.ZodOptional<z.ZodString>;
                traceId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            }, {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            }>>;
            metadata: z.ZodOptional<z.ZodObject<{
                contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip">>>;
                interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SELECT_OPTION">;
                    description: z.ZodString;
                    options: z.ZodArray<z.ZodObject<{
                        label: z.ZodString;
                        value: z.ZodString;
                        buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }, {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                }, {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                }>, z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                } & {
                    type: z.ZodLiteral<"INPUT_TEXT">;
                    description: z.ZodOptional<z.ZodString>;
                    placeholder: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                }, {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                }>]>>;
                interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                    type: z.ZodLiteral<"SELECT_OPTION">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    type: "SELECT_OPTION";
                }, {
                    value: string;
                    type: "SELECT_OPTION";
                }>, z.ZodObject<{} & {
                    type: z.ZodLiteral<"INPUT_TEXT">;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    type: "INPUT_TEXT";
                }, {
                    value: string;
                    type: "INPUT_TEXT";
                }>]>>;
            }, "strip", z.ZodTypeAny, {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            }, {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }, {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }>, "many">>;
        apiConfig: z.ZodOptional<z.ZodObject<{
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
        }>>;
        excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
        replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
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
    }, "strip", z.ZodTypeAny, {
        id: string;
        title?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        category?: "assistant" | "insights" | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }, {
        id: string;
        title?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        category?: "assistant" | "insights" | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: {
        title: string;
        id?: string | undefined;
        category?: "assistant" | "insights" | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }[] | undefined;
    update?: {
        id: string;
        title?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        category?: "assistant" | "insights" | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }[] | undefined;
}, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: {
        title: string;
        id?: string | undefined;
        category?: "assistant" | "insights" | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }[] | undefined;
    update?: {
        id: string;
        title?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        category?: "assistant" | "insights" | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        messages?: {
            role: "user" | "system" | "assistant";
            content: string;
            timestamp: string;
            metadata?: {
                interruptValue?: {
                    type: "SELECT_OPTION";
                    options: {
                        value: string;
                        label: string;
                        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                    }[];
                    description: string;
                    threadId: string;
                    expired?: boolean | undefined;
                } | {
                    type: "INPUT_TEXT";
                    threadId: string;
                    placeholder?: string | undefined;
                    description?: string | undefined;
                    expired?: boolean | undefined;
                } | undefined;
                contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"KnowledgeBaseEntry">;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }, {
                    id: string;
                    type: "KnowledgeBaseEntry";
                    knowledgeBaseEntryId: string;
                    knowledgeBaseEntryName: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlert">;
                    alertId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }, {
                    id: string;
                    type: "SecurityAlert";
                    alertId: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"SecurityAlertsPage">;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "SecurityAlertsPage";
                }, {
                    id: string;
                    type: "SecurityAlertsPage";
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"ProductDocumentation">;
                    title: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }, {
                    title: string;
                    id: string;
                    type: "ProductDocumentation";
                    url: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"EsqlQuery">;
                    query: z.ZodString;
                    label: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        from: string;
                        to: string;
                    }, {
                        from: string;
                        to: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }, {
                    label: string;
                    id: string;
                    type: "EsqlQuery";
                    query: string;
                    timerange?: {
                        from: string;
                        to: string;
                    } | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                } & {
                    type: z.ZodLiteral<"Href">;
                    label: z.ZodOptional<z.ZodString>;
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }, {
                    id: string;
                    type: "Href";
                    href: string;
                    label?: string | undefined;
                }>]>, "strip"> | undefined;
                interruptResumeValue?: {
                    value: string;
                    type: "SELECT_OPTION";
                } | {
                    value: string;
                    type: "INPUT_TEXT";
                } | undefined;
            } | undefined;
            id?: string | undefined;
            user?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            refusal?: string | undefined;
            reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
            isError?: boolean | undefined;
            traceData?: {
                transactionId?: string | undefined;
                traceId?: string | undefined;
            } | undefined;
        }[] | undefined;
        apiConfig?: {
            connectorId: string;
            actionTypeId: string;
            model?: string | undefined;
            defaultSystemPromptId?: string | undefined;
            provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
        } | undefined;
        excludeFromLastConversationStorage?: boolean | undefined;
    }[] | undefined;
}>;
export type PerformBulkActionRequestBodyInput = z.input<typeof PerformBulkActionRequestBody>;
export type PerformBulkActionResponse = z.infer<typeof PerformBulkActionResponse>;
export declare const PerformBulkActionResponse: z.ZodObject<{
    /**
     * Indicates whether the bulk action was successful.
     */
    success: z.ZodOptional<z.ZodBoolean>;
    /**
     * The HTTP status code returned for the bulk action.
     */
    status_code: z.ZodOptional<z.ZodNumber>;
    /**
     * A message providing additional details about the bulk action result.
     */
    message: z.ZodOptional<z.ZodString>;
    /**
     * The total number of conversations involved in the bulk action.
     */
    conversations_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            /**
             * List of conversations that were successfully updated.
             */
            updated: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                title: z.ZodString;
                category: z.ZodEnum<["assistant", "insights"]>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                updatedAt: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodString;
                replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
                createdBy: z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    name?: string | undefined;
                }, {
                    id?: string | undefined;
                    name?: string | undefined;
                }>;
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
                messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                    content: z.ZodString;
                    refusal: z.ZodOptional<z.ZodString>;
                    reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
                    role: z.ZodEnum<["system", "user", "assistant"]>;
                    user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                    }>>;
                    timestamp: z.ZodEffects<z.ZodString, string, string>;
                    isError: z.ZodOptional<z.ZodBoolean>;
                    traceData: z.ZodOptional<z.ZodObject<{
                        transactionId: z.ZodOptional<z.ZodString>;
                        traceId: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    }, {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    }>>;
                    metadata: z.ZodOptional<z.ZodObject<{
                        contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip">>>;
                        interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                            expired: z.ZodOptional<z.ZodBoolean>;
                            threadId: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SELECT_OPTION">;
                            description: z.ZodString;
                            options: z.ZodArray<z.ZodObject<{
                                label: z.ZodString;
                                value: z.ZodString;
                                buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                            }, "strip", z.ZodTypeAny, {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }, {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }>, "many">;
                        }, "strip", z.ZodTypeAny, {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        }, {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        }>, z.ZodObject<{
                            expired: z.ZodOptional<z.ZodBoolean>;
                            threadId: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"INPUT_TEXT">;
                            description: z.ZodOptional<z.ZodString>;
                            placeholder: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        }, {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        }>]>>;
                        interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                            type: z.ZodLiteral<"SELECT_OPTION">;
                            value: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            type: "SELECT_OPTION";
                        }, {
                            value: string;
                            type: "SELECT_OPTION";
                        }>, z.ZodObject<{} & {
                            type: z.ZodLiteral<"INPUT_TEXT">;
                            value: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            type: "INPUT_TEXT";
                        }, {
                            value: string;
                            type: "INPUT_TEXT";
                        }>]>>;
                    }, "strip", z.ZodTypeAny, {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    }, {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }, {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }>, "many">>;
                apiConfig: z.ZodOptional<z.ZodObject<{
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
                }>>;
                excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
                namespace: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }, {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }>, "many">;
            /**
             * List of conversations that were successfully created.
             */
            created: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                title: z.ZodString;
                category: z.ZodEnum<["assistant", "insights"]>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                updatedAt: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodString;
                replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
                createdBy: z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    name?: string | undefined;
                }, {
                    id?: string | undefined;
                    name?: string | undefined;
                }>;
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
                messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                    content: z.ZodString;
                    refusal: z.ZodOptional<z.ZodString>;
                    reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
                    role: z.ZodEnum<["system", "user", "assistant"]>;
                    user: z.ZodOptional<z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        name: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id?: string | undefined;
                        name?: string | undefined;
                    }, {
                        id?: string | undefined;
                        name?: string | undefined;
                    }>>;
                    timestamp: z.ZodEffects<z.ZodString, string, string>;
                    isError: z.ZodOptional<z.ZodBoolean>;
                    traceData: z.ZodOptional<z.ZodObject<{
                        transactionId: z.ZodOptional<z.ZodString>;
                        traceId: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    }, {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    }>>;
                    metadata: z.ZodOptional<z.ZodObject<{
                        contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip">>>;
                        interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                            expired: z.ZodOptional<z.ZodBoolean>;
                            threadId: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SELECT_OPTION">;
                            description: z.ZodString;
                            options: z.ZodArray<z.ZodObject<{
                                label: z.ZodString;
                                value: z.ZodString;
                                buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                            }, "strip", z.ZodTypeAny, {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }, {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }>, "many">;
                        }, "strip", z.ZodTypeAny, {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        }, {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        }>, z.ZodObject<{
                            expired: z.ZodOptional<z.ZodBoolean>;
                            threadId: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"INPUT_TEXT">;
                            description: z.ZodOptional<z.ZodString>;
                            placeholder: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        }, {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        }>]>>;
                        interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                            type: z.ZodLiteral<"SELECT_OPTION">;
                            value: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            type: "SELECT_OPTION";
                        }, {
                            value: string;
                            type: "SELECT_OPTION";
                        }>, z.ZodObject<{} & {
                            type: z.ZodLiteral<"INPUT_TEXT">;
                            value: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            type: "INPUT_TEXT";
                        }, {
                            value: string;
                            type: "INPUT_TEXT";
                        }>]>>;
                    }, "strip", z.ZodTypeAny, {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    }, {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }, {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }>, "many">>;
                apiConfig: z.ZodOptional<z.ZodObject<{
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
                }>>;
                excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
                namespace: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }, {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }>, "many">;
            /**
             * List of conversation IDs that were successfully deleted.
             */
            deleted: z.ZodArray<z.ZodString, "many">;
            /**
             * List of conversations that were skipped during the bulk action.
             */
            skipped: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the conversation that was skipped.
                 */
                id: z.ZodString;
                /**
                 * The name of the conversation that was skipped.
                 */
                name: z.ZodOptional<z.ZodString>;
                /**
                 * The reason the conversation was skipped.
                 */
                skip_reason: z.ZodLiteral<"CONVERSATION_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }, {
                id: string;
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
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
             * Error message.
             */
            message: z.ZodString;
            /**
             * HTTP status code for the error.
             */
            status_code: z.ZodNumber;
            /**
             * A specific error code identifying the error.
             */
            err_code: z.ZodOptional<z.ZodString>;
            /**
             * A list of conversations that caused errors.
             */
            conversations: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the conversation that encountered an error.
                 */
                id: z.ZodString;
                /**
                 * The name of the conversation in error.
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
            conversations: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            status_code: number;
            conversations: {
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
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            conversations: {
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
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            conversations: {
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
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            conversations: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    conversations_count?: number | undefined;
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
                skip_reason: "CONVERSATION_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            created: {
                title: string;
                id: string;
                namespace: string;
                users: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[];
                category: "assistant" | "insights";
                createdAt: string;
                createdBy: {
                    id?: string | undefined;
                    name?: string | undefined;
                };
                timestamp?: string | undefined;
                updatedAt?: string | undefined;
                replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
                messages?: {
                    role: "user" | "system" | "assistant";
                    content: string;
                    timestamp: string;
                    metadata?: {
                        interruptValue?: {
                            type: "SELECT_OPTION";
                            options: {
                                value: string;
                                label: string;
                                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                            }[];
                            description: string;
                            threadId: string;
                            expired?: boolean | undefined;
                        } | {
                            type: "INPUT_TEXT";
                            threadId: string;
                            placeholder?: string | undefined;
                            description?: string | undefined;
                            expired?: boolean | undefined;
                        } | undefined;
                        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"KnowledgeBaseEntry">;
                            knowledgeBaseEntryId: z.ZodString;
                            knowledgeBaseEntryName: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }, {
                            id: string;
                            type: "KnowledgeBaseEntry";
                            knowledgeBaseEntryId: string;
                            knowledgeBaseEntryName: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlert">;
                            alertId: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }, {
                            id: string;
                            type: "SecurityAlert";
                            alertId: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"SecurityAlertsPage">;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }, {
                            id: string;
                            type: "SecurityAlertsPage";
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"ProductDocumentation">;
                            title: z.ZodString;
                            url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }, {
                            title: string;
                            id: string;
                            type: "ProductDocumentation";
                            url: string;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"EsqlQuery">;
                            query: z.ZodString;
                            label: z.ZodString;
                            timerange: z.ZodOptional<z.ZodObject<{
                                from: z.ZodString;
                                to: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                from: string;
                                to: string;
                            }, {
                                from: string;
                                to: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }, {
                            label: string;
                            id: string;
                            type: "EsqlQuery";
                            query: string;
                            timerange?: {
                                from: string;
                                to: string;
                            } | undefined;
                        }>, z.ZodObject<{
                            id: z.ZodString;
                        } & {
                            type: z.ZodLiteral<"Href">;
                            label: z.ZodOptional<z.ZodString>;
                            href: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }, {
                            id: string;
                            type: "Href";
                            href: string;
                            label?: string | undefined;
                        }>]>, "strip"> | undefined;
                        interruptResumeValue?: {
                            value: string;
                            type: "SELECT_OPTION";
                        } | {
                            value: string;
                            type: "INPUT_TEXT";
                        } | undefined;
                    } | undefined;
                    id?: string | undefined;
                    user?: {
                        id?: string | undefined;
                        name?: string | undefined;
                    } | undefined;
                    refusal?: string | undefined;
                    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
                    isError?: boolean | undefined;
                    traceData?: {
                        transactionId?: string | undefined;
                        traceId?: string | undefined;
                    } | undefined;
                }[] | undefined;
                apiConfig?: {
                    connectorId: string;
                    actionTypeId: string;
                    model?: string | undefined;
                    defaultSystemPromptId?: string | undefined;
                    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
                } | undefined;
                excludeFromLastConversationStorage?: boolean | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            conversations: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    conversations_count?: number | undefined;
}>;
