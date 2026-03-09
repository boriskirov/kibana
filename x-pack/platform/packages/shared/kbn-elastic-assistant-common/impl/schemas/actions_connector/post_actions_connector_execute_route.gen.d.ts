import { z } from '@kbn/zod';
export type ExecuteConnectorRequestQuery = z.infer<typeof ExecuteConnectorRequestQuery>;
export declare const ExecuteConnectorRequestQuery: z.ZodObject<{
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
export type ExecuteConnectorRequestQueryInput = z.input<typeof ExecuteConnectorRequestQuery>;
export type ExecuteConnectorRequestParams = z.infer<typeof ExecuteConnectorRequestParams>;
export declare const ExecuteConnectorRequestParams: z.ZodObject<{
    /**
     * The connector's `id` value.
     */
    connectorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    connectorId: string;
}, {
    connectorId: string;
}>;
export type ExecuteConnectorRequestParamsInput = z.input<typeof ExecuteConnectorRequestParams>;
export type ExecuteConnectorRequestBody = z.infer<typeof ExecuteConnectorRequestBody>;
export declare const ExecuteConnectorRequestBody: z.ZodObject<{
    conversationId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    message: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    subAction: z.ZodEnum<["invokeAI", "invokeStream"]>;
    actionTypeId: z.ZodString;
    alertsIndexPattern: z.ZodOptional<z.ZodString>;
    allow: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    allowReplacement: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
    size: z.ZodOptional<z.ZodNumber>;
    langSmithProject: z.ZodOptional<z.ZodString>;
    langSmithApiKey: z.ZodOptional<z.ZodString>;
    screenContext: z.ZodOptional<z.ZodObject<{
        timeZone: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timeZone?: string | undefined;
    }, {
        timeZone?: string | undefined;
    }>>;
    /**
     * System prompt, will be appended to default system prompt. Different from conversation system prompt, which is retrieved on the server
     */
    promptIds: z.ZodOptional<z.ZodObject<{
        promptId: z.ZodString;
        promptGroupId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        promptId: string;
        promptGroupId: string;
    }, {
        promptId: string;
        promptGroupId: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    actionTypeId: string;
    replacements: {} & {
        [k: string]: string;
    };
    subAction: "invokeAI" | "invokeStream";
    size?: number | undefined;
    allow?: string[] | undefined;
    model?: string | undefined;
    message?: string | undefined;
    alertsIndexPattern?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    conversationId?: string | undefined;
    screenContext?: {
        timeZone?: string | undefined;
    } | undefined;
    allowReplacement?: string[] | undefined;
    promptIds?: {
        promptId: string;
        promptGroupId: string;
    } | undefined;
}, {
    actionTypeId: string;
    replacements: {} & {
        [k: string]: string;
    };
    subAction: "invokeAI" | "invokeStream";
    size?: number | undefined;
    allow?: string[] | undefined;
    model?: string | undefined;
    message?: string | undefined;
    alertsIndexPattern?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    conversationId?: string | undefined;
    screenContext?: {
        timeZone?: string | undefined;
    } | undefined;
    allowReplacement?: string[] | undefined;
    promptIds?: {
        promptId: string;
        promptGroupId: string;
    } | undefined;
}>;
export type ExecuteConnectorRequestBodyInput = z.input<typeof ExecuteConnectorRequestBody>;
export type ExecuteConnectorResponse = z.infer<typeof ExecuteConnectorResponse>;
export declare const ExecuteConnectorResponse: z.ZodObject<{
    data: z.ZodString;
    connector_id: z.ZodString;
    status: z.ZodString;
    /**
     * Trace Data
     */
    trace_data: z.ZodOptional<z.ZodObject<{
        /**
         * Could be any string, not necessarily a UUID
         */
        transactionId: z.ZodOptional<z.ZodString>;
        /**
         * Could be any string, not necessarily a UUID
         */
        traceId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        transactionId?: string | undefined;
        traceId?: string | undefined;
    }, {
        transactionId?: string | undefined;
        traceId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    data: string;
    status: string;
    connector_id: string;
    trace_data?: {
        transactionId?: string | undefined;
        traceId?: string | undefined;
    } | undefined;
}, {
    data: string;
    status: string;
    connector_id: string;
    trace_data?: {
        transactionId?: string | undefined;
        traceId?: string | undefined;
    } | undefined;
}>;
