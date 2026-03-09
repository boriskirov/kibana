import { z } from '@kbn/zod';
/**
 * AI assistant KnowledgeBase.
 */
export type KnowledgeBaseResponse = z.infer<typeof KnowledgeBaseResponse>;
export declare const KnowledgeBaseResponse: z.ZodObject<{
    /**
     * Identify the success of the method execution.
     */
    success: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    success?: boolean | undefined;
}, {
    success?: boolean | undefined;
}>;
export type KnowledgeBaseResponse400 = z.infer<typeof KnowledgeBaseResponse400>;
export declare const KnowledgeBaseResponse400: z.ZodObject<{
    /**
     * The HTTP status code of the error.
     */
    statusCode: z.ZodOptional<z.ZodNumber>;
    /**
     * A short description of the error.
     */
    error: z.ZodOptional<z.ZodString>;
    /**
     * A detailed error message.
     */
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    error?: string | undefined;
    message?: string | undefined;
    statusCode?: number | undefined;
}, {
    error?: string | undefined;
    message?: string | undefined;
    statusCode?: number | undefined;
}>;
export type KnowledgeBaseReadResponse200 = z.infer<typeof KnowledgeBaseReadResponse200>;
export declare const KnowledgeBaseReadResponse200: z.ZodObject<{
    /**
     * Indicates if the ELSER model exists for the KnowledgeBase.
     */
    elser_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if the setup process is available for the KnowledgeBase.
     */
    is_setup_available: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if the setup process is currently in progress.
     */
    is_setup_in_progress: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if Security Labs documentation exists in the KnowledgeBase.
     */
    security_labs_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if Defend Insights documentation exists in the KnowledgeBase.
     */
    defend_insights_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if user data exists in the KnowledgeBase.
     */
    user_data_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * The status of the product documentation in the KnowledgeBase.
     */
    product_documentation_status: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    elser_exists?: boolean | undefined;
    is_setup_available?: boolean | undefined;
    is_setup_in_progress?: boolean | undefined;
    security_labs_exists?: boolean | undefined;
    defend_insights_exists?: boolean | undefined;
    user_data_exists?: boolean | undefined;
    product_documentation_status?: string | undefined;
}, {
    elser_exists?: boolean | undefined;
    is_setup_available?: boolean | undefined;
    is_setup_in_progress?: boolean | undefined;
    security_labs_exists?: boolean | undefined;
    defend_insights_exists?: boolean | undefined;
    user_data_exists?: boolean | undefined;
    product_documentation_status?: string | undefined;
}>;
export type CreateKnowledgeBaseRequestQuery = z.infer<typeof CreateKnowledgeBaseRequestQuery>;
export declare const CreateKnowledgeBaseRequestQuery: z.ZodObject<{
    /**
     * ELSER modelId to use when setting up the Knowledge Base. If not provided, a default model will be used.
     */
    modelId: z.ZodOptional<z.ZodString>;
    /**
     * Indicates whether we should or should not install Security Labs docs when setting up the Knowledge Base. Defaults to `false`.
     */
    ignoreSecurityLabs: z.ZodDefault<z.ZodOptional<{
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
    modelId?: string | undefined;
    ignoreSecurityLabs?: any;
}, {
    modelId?: string | undefined;
    ignoreSecurityLabs?: any;
}>;
export type CreateKnowledgeBaseRequestQueryInput = z.input<typeof CreateKnowledgeBaseRequestQuery>;
export type CreateKnowledgeBaseRequestParams = z.infer<typeof CreateKnowledgeBaseRequestParams>;
export declare const CreateKnowledgeBaseRequestParams: z.ZodObject<{
    /**
     * The KnowledgeBase `resource` value.
     */
    resource: z.ZodString;
}, "strip", z.ZodTypeAny, {
    resource: string;
}, {
    resource: string;
}>;
export type CreateKnowledgeBaseRequestParamsInput = z.input<typeof CreateKnowledgeBaseRequestParams>;
export type CreateKnowledgeBaseResponse = z.infer<typeof CreateKnowledgeBaseResponse>;
export declare const CreateKnowledgeBaseResponse: z.ZodObject<{
    /**
     * Identify the success of the method execution.
     */
    success: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    success?: boolean | undefined;
}, {
    success?: boolean | undefined;
}>;
export type GetKnowledgeBaseResponse = z.infer<typeof GetKnowledgeBaseResponse>;
export declare const GetKnowledgeBaseResponse: z.ZodObject<{
    /**
     * Indicates if the ELSER model exists for the KnowledgeBase.
     */
    elser_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if the setup process is available for the KnowledgeBase.
     */
    is_setup_available: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if the setup process is currently in progress.
     */
    is_setup_in_progress: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if Security Labs documentation exists in the KnowledgeBase.
     */
    security_labs_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if Defend Insights documentation exists in the KnowledgeBase.
     */
    defend_insights_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if user data exists in the KnowledgeBase.
     */
    user_data_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * The status of the product documentation in the KnowledgeBase.
     */
    product_documentation_status: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    elser_exists?: boolean | undefined;
    is_setup_available?: boolean | undefined;
    is_setup_in_progress?: boolean | undefined;
    security_labs_exists?: boolean | undefined;
    defend_insights_exists?: boolean | undefined;
    user_data_exists?: boolean | undefined;
    product_documentation_status?: string | undefined;
}, {
    elser_exists?: boolean | undefined;
    is_setup_available?: boolean | undefined;
    is_setup_in_progress?: boolean | undefined;
    security_labs_exists?: boolean | undefined;
    defend_insights_exists?: boolean | undefined;
    user_data_exists?: boolean | undefined;
    product_documentation_status?: string | undefined;
}>;
export type PostKnowledgeBaseRequestQuery = z.infer<typeof PostKnowledgeBaseRequestQuery>;
export declare const PostKnowledgeBaseRequestQuery: z.ZodObject<{
    /**
     * ELSER modelId to use when setting up the Knowledge Base. If not provided, a default model will be used.
     */
    modelId: z.ZodOptional<z.ZodString>;
    /**
     * Indicates whether we should or should not install Security Labs docs when setting up the Knowledge Base. Defaults to `false`.
     */
    ignoreSecurityLabs: z.ZodDefault<z.ZodOptional<{
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
    modelId?: string | undefined;
    ignoreSecurityLabs?: any;
}, {
    modelId?: string | undefined;
    ignoreSecurityLabs?: any;
}>;
export type PostKnowledgeBaseRequestQueryInput = z.input<typeof PostKnowledgeBaseRequestQuery>;
export type PostKnowledgeBaseResponse = z.infer<typeof PostKnowledgeBaseResponse>;
export declare const PostKnowledgeBaseResponse: z.ZodObject<{
    /**
     * Identify the success of the method execution.
     */
    success: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    success?: boolean | undefined;
}, {
    success?: boolean | undefined;
}>;
export type ReadKnowledgeBaseRequestParams = z.infer<typeof ReadKnowledgeBaseRequestParams>;
export declare const ReadKnowledgeBaseRequestParams: z.ZodObject<{
    /**
     * The KnowledgeBase `resource` value.
     */
    resource: z.ZodString;
}, "strip", z.ZodTypeAny, {
    resource: string;
}, {
    resource: string;
}>;
export type ReadKnowledgeBaseRequestParamsInput = z.input<typeof ReadKnowledgeBaseRequestParams>;
export type ReadKnowledgeBaseResponse = z.infer<typeof ReadKnowledgeBaseResponse>;
export declare const ReadKnowledgeBaseResponse: z.ZodObject<{
    /**
     * Indicates if the ELSER model exists for the KnowledgeBase.
     */
    elser_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if the setup process is available for the KnowledgeBase.
     */
    is_setup_available: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if the setup process is currently in progress.
     */
    is_setup_in_progress: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if Security Labs documentation exists in the KnowledgeBase.
     */
    security_labs_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if Defend Insights documentation exists in the KnowledgeBase.
     */
    defend_insights_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * Indicates if user data exists in the KnowledgeBase.
     */
    user_data_exists: z.ZodOptional<z.ZodBoolean>;
    /**
     * The status of the product documentation in the KnowledgeBase.
     */
    product_documentation_status: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    elser_exists?: boolean | undefined;
    is_setup_available?: boolean | undefined;
    is_setup_in_progress?: boolean | undefined;
    security_labs_exists?: boolean | undefined;
    defend_insights_exists?: boolean | undefined;
    user_data_exists?: boolean | undefined;
    product_documentation_status?: string | undefined;
}, {
    elser_exists?: boolean | undefined;
    is_setup_available?: boolean | undefined;
    is_setup_in_progress?: boolean | undefined;
    security_labs_exists?: boolean | undefined;
    defend_insights_exists?: boolean | undefined;
    user_data_exists?: boolean | undefined;
    product_documentation_status?: string | undefined;
}>;
