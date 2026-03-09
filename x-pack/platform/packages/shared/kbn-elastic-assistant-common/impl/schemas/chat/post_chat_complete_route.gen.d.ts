import { z } from '@kbn/zod';
/**
 * The operational context for the assistant.
 */
export type RootContext = z.infer<typeof RootContext>;
export declare const RootContext: z.ZodLiteral<"security">;
/**
 * The role associated with the message in the chat.
 */
export type ChatMessageRole = z.infer<typeof ChatMessageRole>;
export declare const ChatMessageRole: z.ZodEnum<["system", "user", "assistant"]>;
export type ChatMessageRoleEnum = typeof ChatMessageRole.enum;
export declare const ChatMessageRoleEnum: z.Values<["system", "user", "assistant"]>;
/**
 * ECS-style metadata attached to the message.
 */
export type MessageData = z.infer<typeof MessageData>;
export declare const MessageData: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
/**
 * A message exchanged within the AI chat conversation.
 */
export type ChatMessage = z.infer<typeof ChatMessage>;
export declare const ChatMessage: z.ZodObject<{
    /**
     * The textual content of the message.
     */
    content: z.ZodOptional<z.ZodString>;
    /**
     * The sender role of the message.
     */
    role: z.ZodEnum<["system", "user", "assistant"]>;
    /**
     * Metadata to attach to the context of the message.
     */
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    /**
     * List of field names within the data object that should be anonymized.
     */
    fields_to_anonymize: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    role: "user" | "system" | "assistant";
    data?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    content?: string | undefined;
    fields_to_anonymize?: string[] | undefined;
}, {
    role: "user" | "system" | "assistant";
    data?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    content?: string | undefined;
    fields_to_anonymize?: string[] | undefined;
}>;
/**
 * The request payload for creating a chat completion.
 */
export type ChatCompleteProps = z.infer<typeof ChatCompleteProps>;
export declare const ChatCompleteProps: z.ZodObject<{
    /**
     * Existing conversation ID to continue.
     */
    conversationId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * Prompt template identifier.
     */
    promptId: z.ZodOptional<z.ZodString>;
    /**
     * If true, the response will be streamed in chunks.
     */
    isStream: z.ZodOptional<z.ZodBoolean>;
    /**
     * ISO language code for the assistant's response.
     */
    responseLanguage: z.ZodOptional<z.ZodString>;
    /**
     * LangSmith project name for tracing.
     */
    langSmithProject: z.ZodOptional<z.ZodString>;
    /**
     * API key for LangSmith integration.
     */
    langSmithApiKey: z.ZodOptional<z.ZodString>;
    /**
     * Required connector identifier to route the request.
     */
    connectorId: z.ZodString;
    /**
     * Model ID or name to use for the response.
     */
    model: z.ZodOptional<z.ZodString>;
    /**
     * Whether to persist the chat and response to storage.
     */
    persist: z.ZodBoolean;
    /**
     * List of chat messages exchanged so far.
     */
    messages: z.ZodArray<z.ZodObject<{
        /**
         * The textual content of the message.
         */
        content: z.ZodOptional<z.ZodString>;
        /**
         * The sender role of the message.
         */
        role: z.ZodEnum<["system", "user", "assistant"]>;
        /**
         * Metadata to attach to the context of the message.
         */
        data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        /**
         * List of field names within the data object that should be anonymized.
         */
        fields_to_anonymize: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        role: "user" | "system" | "assistant";
        data?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        content?: string | undefined;
        fields_to_anonymize?: string[] | undefined;
    }, {
        role: "user" | "system" | "assistant";
        data?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        content?: string | undefined;
        fields_to_anonymize?: string[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    persist: boolean;
    connectorId: string;
    messages: {
        role: "user" | "system" | "assistant";
        data?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        content?: string | undefined;
        fields_to_anonymize?: string[] | undefined;
    }[];
    model?: string | undefined;
    promptId?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    conversationId?: string | undefined;
    isStream?: boolean | undefined;
    responseLanguage?: string | undefined;
}, {
    persist: boolean;
    connectorId: string;
    messages: {
        role: "user" | "system" | "assistant";
        data?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        content?: string | undefined;
        fields_to_anonymize?: string[] | undefined;
    }[];
    model?: string | undefined;
    promptId?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    conversationId?: string | undefined;
    isStream?: boolean | undefined;
    responseLanguage?: string | undefined;
}>;
export type ChatCompleteRequestQuery = z.infer<typeof ChatCompleteRequestQuery>;
export declare const ChatCompleteRequestQuery: z.ZodObject<{
    /**
     * If true, the response will not include content references.
     */
    content_references_disabled: z.ZodDefault<z.ZodOptional<{
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
    content_references_disabled?: any;
}, {
    content_references_disabled?: any;
}>;
export type ChatCompleteRequestQueryInput = z.input<typeof ChatCompleteRequestQuery>;
export type ChatCompleteRequestBody = z.infer<typeof ChatCompleteRequestBody>;
export declare const ChatCompleteRequestBody: z.ZodObject<{
    /**
     * Existing conversation ID to continue.
     */
    conversationId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * Prompt template identifier.
     */
    promptId: z.ZodOptional<z.ZodString>;
    /**
     * If true, the response will be streamed in chunks.
     */
    isStream: z.ZodOptional<z.ZodBoolean>;
    /**
     * ISO language code for the assistant's response.
     */
    responseLanguage: z.ZodOptional<z.ZodString>;
    /**
     * LangSmith project name for tracing.
     */
    langSmithProject: z.ZodOptional<z.ZodString>;
    /**
     * API key for LangSmith integration.
     */
    langSmithApiKey: z.ZodOptional<z.ZodString>;
    /**
     * Required connector identifier to route the request.
     */
    connectorId: z.ZodString;
    /**
     * Model ID or name to use for the response.
     */
    model: z.ZodOptional<z.ZodString>;
    /**
     * Whether to persist the chat and response to storage.
     */
    persist: z.ZodBoolean;
    /**
     * List of chat messages exchanged so far.
     */
    messages: z.ZodArray<z.ZodObject<{
        /**
         * The textual content of the message.
         */
        content: z.ZodOptional<z.ZodString>;
        /**
         * The sender role of the message.
         */
        role: z.ZodEnum<["system", "user", "assistant"]>;
        /**
         * Metadata to attach to the context of the message.
         */
        data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        /**
         * List of field names within the data object that should be anonymized.
         */
        fields_to_anonymize: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        role: "user" | "system" | "assistant";
        data?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        content?: string | undefined;
        fields_to_anonymize?: string[] | undefined;
    }, {
        role: "user" | "system" | "assistant";
        data?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        content?: string | undefined;
        fields_to_anonymize?: string[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    persist: boolean;
    connectorId: string;
    messages: {
        role: "user" | "system" | "assistant";
        data?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        content?: string | undefined;
        fields_to_anonymize?: string[] | undefined;
    }[];
    model?: string | undefined;
    promptId?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    conversationId?: string | undefined;
    isStream?: boolean | undefined;
    responseLanguage?: string | undefined;
}, {
    persist: boolean;
    connectorId: string;
    messages: {
        role: "user" | "system" | "assistant";
        data?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        content?: string | undefined;
        fields_to_anonymize?: string[] | undefined;
    }[];
    model?: string | undefined;
    promptId?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    conversationId?: string | undefined;
    isStream?: boolean | undefined;
    responseLanguage?: string | undefined;
}>;
export type ChatCompleteRequestBodyInput = z.input<typeof ChatCompleteRequestBody>;
