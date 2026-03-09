import { z } from '@kbn/zod';
export type AppendConversationMessageRequestParams = z.infer<typeof AppendConversationMessageRequestParams>;
export declare const AppendConversationMessageRequestParams: z.ZodObject<{
    /**
     * The unique identifier (`id`) of the conversation to which the message will be appended.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type AppendConversationMessageRequestParamsInput = z.input<typeof AppendConversationMessageRequestParams>;
export type AppendConversationMessageRequestBody = z.infer<typeof AppendConversationMessageRequestBody>;
export declare const AppendConversationMessageRequestBody: z.ZodObject<{
    messages: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    messages: {
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
    }[];
}, {
    messages: {
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
    }[];
}>;
export type AppendConversationMessageRequestBodyInput = z.input<typeof AppendConversationMessageRequestBody>;
export type AppendConversationMessageResponse = z.infer<typeof AppendConversationMessageResponse>;
export declare const AppendConversationMessageResponse: z.ZodObject<{
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
}>;
