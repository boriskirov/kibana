import { z } from '@kbn/zod';
/**
 * The field by which to sort the conversations. Possible values are `created_at`, `title`, and `updated_at`.
 */
export type FindConversationsSortField = z.infer<typeof FindConversationsSortField>;
export declare const FindConversationsSortField: z.ZodEnum<["created_at", "title", "updated_at"]>;
export type FindConversationsSortFieldEnum = typeof FindConversationsSortField.enum;
export declare const FindConversationsSortFieldEnum: z.Values<["created_at", "title", "updated_at"]>;
export type FindConversationsRequestQuery = z.infer<typeof FindConversationsRequestQuery>;
export declare const FindConversationsRequestQuery: z.ZodObject<{
    /**
     * A list of fields to include in the response. If omitted, all fields are returned.
     */
    fields: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>>;
    /**
     * A search query to filter the conversations. Can match against titles, messages, or other conversation attributes.
     */
    filter: z.ZodOptional<z.ZodString>;
    /**
     * The field by which to sort the results. Valid fields are `created_at`, `title`, and `updated_at`.
     */
    sort_field: z.ZodOptional<z.ZodEnum<["created_at", "title", "updated_at"]>>;
    /**
     * The order in which to sort the results. Can be either `asc` for ascending or `desc` for descending.
     */
    sort_order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    /**
     * The page number of the results to retrieve. Default is 1.
     */
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * The number of conversations to return per page. Default is 20.
     */
    per_page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * Whether to return conversations that the current user owns. If true, only conversations owned by the user are returned.
     */
    is_owner: z.ZodDefault<z.ZodOptional<{
        readonly kbnTypeName: import("@kbn/zod-helpers/src/kbn_zod_types/kbn_zod_type").KbnZodTypes.BooleanFromString;
        _parse(input: z.ParseInput): z.ParseReturnType<any>;
        get options(): any;
        readonly _type: any;
        readonly _output: any;
        readonly _input: any;
        readonly _def: z.ZodUnionDef<any>;
        get description(): string | undefined;
        "~standard": import("zod/v3/standard-schema").StandardSchemaV1.Props<any, any>;
        _getType(input: z.ParseInput): string;
        _getOrReturnCtx(input: z.ParseInput, ctx?: z.ParseContext | undefined): z.ParseContext;
        _processInputParams(input: z.ParseInput): {
            status: z.ParseStatus;
            ctx: z.ParseContext;
        };
        _parseSync(input: z.ParseInput): z.SyncParseReturnType<any>;
        _parseAsync(input: z.ParseInput): z.AsyncParseReturnType<any>;
        parse(data: unknown, params?: z.util.InexactPartial<z.ParseParams>): any;
        safeParse(data: unknown, params?: z.util.InexactPartial<z.ParseParams>): z.SafeParseReturnType<any, any>;
        "~validate"(data: unknown): import("zod/v3/standard-schema").StandardSchemaV1.Result<any> | Promise<import("zod/v3/standard-schema").StandardSchemaV1.Result<any>>;
        parseAsync(data: unknown, params?: z.util.InexactPartial<z.ParseParams>): Promise<any>;
        safeParseAsync(data: unknown, params?: z.util.InexactPartial<z.ParseParams>): Promise<z.SafeParseReturnType<any, any>>;
        spa: (data: unknown, params?: z.util.InexactPartial<z.ParseParams>) => Promise<z.SafeParseReturnType<any, any>>;
        refine<RefinedOutput extends any>(check: (arg: any) => arg is RefinedOutput, message?: string | Partial<z.util.Omit<z.ZodCustomIssue, "code">> | ((arg: any) => z.CustomErrorParams) | undefined): z.ZodEffects</*elided*/ any, RefinedOutput, any>;
        refine(check: (arg: any) => unknown | Promise<unknown>, message?: string | Partial<z.util.Omit<z.ZodCustomIssue, "code">> | ((arg: any) => z.CustomErrorParams) | undefined): z.ZodEffects</*elided*/ any, any, any>;
        refinement<RefinedOutput extends any>(check: (arg: any) => arg is RefinedOutput, refinementData: z.IssueData | ((arg: any, ctx: z.RefinementCtx) => z.IssueData)): z.ZodEffects</*elided*/ any, RefinedOutput, any>;
        refinement(check: (arg: any) => boolean, refinementData: z.IssueData | ((arg: any, ctx: z.RefinementCtx) => z.IssueData)): z.ZodEffects</*elided*/ any, any, any>;
        _refinement(refinement: (arg: any, ctx: z.RefinementCtx) => any): z.ZodEffects</*elided*/ any, any, any>;
        superRefine<RefinedOutput extends any>(refinement: (arg: any, ctx: z.RefinementCtx) => arg is RefinedOutput): z.ZodEffects</*elided*/ any, RefinedOutput, any>;
        superRefine(refinement: (arg: any, ctx: z.RefinementCtx) => void): z.ZodEffects</*elided*/ any, any, any>;
        superRefine(refinement: (arg: any, ctx: z.RefinementCtx) => Promise<void>): z.ZodEffects</*elided*/ any, any, any>;
        optional(): z.ZodOptional</*elided*/ any>;
        nullable(): z.ZodNullable</*elided*/ any>;
        nullish(): z.ZodOptional<z.ZodNullable</*elided*/ any>>;
        array(): z.ZodArray</*elided*/ any, "many">;
        promise(): z.ZodPromise</*elided*/ any>;
        or<T extends z.ZodTypeAny>(option: T): z.ZodUnion<[/*elided*/ any, T]>;
        and<T extends z.ZodTypeAny>(incoming: T): z.ZodIntersection</*elided*/ any, T>;
        transform<NewOut>(transform: (arg: any, ctx: z.RefinementCtx) => NewOut | Promise<NewOut>): z.ZodEffects</*elided*/ any, NewOut, any>;
        default(def: any): z.ZodDefault</*elided*/ any>;
        default(def: () => any): z.ZodDefault</*elided*/ any>;
        brand<B extends string | number | symbol>(brand?: B | undefined): z.ZodBranded</*elided*/ any, B>;
        catch(def: any): z.ZodCatch</*elided*/ any>;
        catch(def: (ctx: {
            error: z.ZodError;
            input: any;
        }) => any): z.ZodCatch</*elided*/ any>;
        describe(description: string): /*elided*/ any;
        pipe<T extends z.ZodTypeAny>(target: T): z.ZodPipeline</*elided*/ any, T>;
        readonly(): z.ZodReadonly</*elided*/ any>;
        isOptional(): boolean;
        isNullable(): boolean;
    }>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    per_page: number;
    filter?: string | undefined;
    fields?: string[] | undefined;
    sort_field?: "title" | "created_at" | "updated_at" | undefined;
    sort_order?: "desc" | "asc" | undefined;
    is_owner?: any;
}, {
    filter?: string | undefined;
    page?: number | undefined;
    fields?: unknown;
    per_page?: number | undefined;
    sort_field?: "title" | "created_at" | "updated_at" | undefined;
    sort_order?: "desc" | "asc" | undefined;
    is_owner?: any;
}>;
export type FindConversationsRequestQueryInput = z.input<typeof FindConversationsRequestQuery>;
export type FindConversationsResponse = z.infer<typeof FindConversationsResponse>;
export declare const FindConversationsResponse: z.ZodObject<{
    /**
     * The current page of the results.
     */
    page: z.ZodNumber;
    /**
     * The number of results returned per page.
     */
    perPage: z.ZodNumber;
    /**
     * The total number of conversations matching the filter criteria.
     */
    total: z.ZodNumber;
    /**
     * A list of conversations.
     */
    data: z.ZodArray<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    data: {
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
    page: number;
    total: number;
    perPage: number;
}, {
    data: {
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
    page: number;
    total: number;
    perPage: number;
}>;
