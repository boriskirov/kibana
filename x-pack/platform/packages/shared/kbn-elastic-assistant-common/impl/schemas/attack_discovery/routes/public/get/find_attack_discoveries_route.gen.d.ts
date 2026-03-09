import { z } from '@kbn/zod';
/**
 * Allowed field names to sort Attack discovery results by. Clients should only pass one of the listed values.
 */
export type AttackDiscoveryFindSortField = z.infer<typeof AttackDiscoveryFindSortField>;
export declare const AttackDiscoveryFindSortField: z.ZodLiteral<"@timestamp">;
export type AttackDiscoveryFindRequestQuery = z.infer<typeof AttackDiscoveryFindRequestQuery>;
export declare const AttackDiscoveryFindRequestQuery: z.ZodObject<{
    /**
     * Filter results to Attack discoveries that include any of the provided alert IDs
     */
    alert_ids: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>>;
    /**
     * Filter results to Attack discoveries created by any of the provided human readable connector names. Note that values must match the human readable `connector_name` property of an Attack discovery, e.g. "GPT-5 Chat", which are distinct from `connector_id` values used to generate Attack discoveries.
     */
    connector_names: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>>;
    /**
     * Enables a markdown syntax used to render pivot fields, for example `{{ user.name james }}`. When disabled, the same example would be rendered as `james`. This is primarily used for Attack discovery views within Kibana. Defaults to `false`.
     */
    enable_field_rendering: z.ZodDefault<z.ZodOptional<{
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
    /**
     * End of the time range for the search. Accepts absolute timestamps (ISO 8601) or relative date math (e.g. "now", "now-24h").
     */
    end: z.ZodOptional<z.ZodString>;
    /**
     * Filter results to the Attack discoveries with the specified IDs
     */
    ids: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>>;
    /**
     * If `true`, the response will include `unique_alert_ids` and `unique_alert_ids_count` aggregated across the matched Attack discoveries
     */
    include_unique_alert_ids: z.ZodOptional<{
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
    }>;
    /**
     * Page number to return (used for pagination). Defaults to 1.
     */
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * Number of Attack discoveries to return per page (used for pagination). Defaults to 10.
     */
    per_page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * Free-text search query applied to relevant text fields of Attack discoveries (title, description, tags, etc.)
     */
    search: z.ZodOptional<z.ZodString>;
    /**
     * Whether to filter by shared visibility. If omitted, both shared and privately visible Attack discoveries are returned. Use `true` to return only shared discoveries, `false` to return only those visible to the current user.
     */
    shared: z.ZodOptional<{
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
    }>;
    /**
     * Whether to filter by scheduled or ad-hoc attack discoveries. If omitted, both types of attack discoveries are returned. Use `true` to return only scheduled discoveries or `false` to return only ad-hoc discoveries.
     */
    scheduled: z.ZodOptional<{
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
    }>;
    /**
     * Field used to sort results. See `AttackDiscoveryFindSortField` for allowed values.
     */
    sort_field: z.ZodDefault<z.ZodOptional<z.ZodLiteral<"@timestamp">>>;
    /**
     * Sort order direction `asc` for ascending or `desc` for descending. Defaults to `desc`.
     */
    sort_order: z.ZodDefault<z.ZodOptional<z.ZodEnum<["asc", "desc"]>>>;
    /**
     * Start of the time range for the search. Accepts absolute timestamps (ISO 8601) or relative date math (e.g. "now-7d").
     */
    start: z.ZodOptional<z.ZodString>;
    /**
     * Filter by alert workflow status. Provide one or more of the allowed workflow states.
     */
    status: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEnum<["acknowledged", "closed", "open"]>, "many">, ("open" | "closed" | "acknowledged")[], unknown>>;
    /**
     * When true, return the created Attack discoveries with text replacements applied to the detailsMarkdown, entitySummaryMarkdown, summaryMarkdown, and title fields. Defaults to `true`.
     */
    with_replacements: z.ZodDefault<z.ZodOptional<{
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
    sort_field: "@timestamp";
    sort_order: "desc" | "asc";
    search?: string | undefined;
    end?: string | undefined;
    start?: string | undefined;
    status?: ("open" | "closed" | "acknowledged")[] | undefined;
    ids?: string[] | undefined;
    shared?: any;
    scheduled?: any;
    connector_names?: string[] | undefined;
    alert_ids?: string[] | undefined;
    enable_field_rendering?: any;
    include_unique_alert_ids?: any;
    with_replacements?: any;
}, {
    search?: string | undefined;
    end?: string | undefined;
    start?: string | undefined;
    status?: unknown;
    page?: number | undefined;
    ids?: unknown;
    shared?: any;
    scheduled?: any;
    connector_names?: unknown;
    per_page?: number | undefined;
    alert_ids?: unknown;
    enable_field_rendering?: any;
    include_unique_alert_ids?: any;
    sort_field?: "@timestamp" | undefined;
    sort_order?: "desc" | "asc" | undefined;
    with_replacements?: any;
}>;
export type AttackDiscoveryFindRequestQueryInput = z.input<typeof AttackDiscoveryFindRequestQuery>;
export type AttackDiscoveryFindResponse = z.infer<typeof AttackDiscoveryFindResponse>;
export declare const AttackDiscoveryFindResponse: z.ZodObject<{
    /**
     * List of human readable connector names that are present in the matched Attack discoveries. Useful for building client filters or summaries.
     */
    connector_names: z.ZodArray<z.ZodString, "many">;
    /**
     * Array of matched Attack discovery objects. Each item follows the `AttackDiscoveryApiAlert` schema.
     */
    data: z.ZodArray<z.ZodObject<{
        alert_ids: z.ZodArray<z.ZodString, "many">;
        alert_rule_uuid: z.ZodOptional<z.ZodString>;
        alert_workflow_status: z.ZodOptional<z.ZodString>;
        connector_id: z.ZodString;
        connector_name: z.ZodString;
        alert_start: z.ZodOptional<z.ZodString>;
        alert_updated_at: z.ZodOptional<z.ZodString>;
        alert_updated_by_user_id: z.ZodOptional<z.ZodString>;
        alert_updated_by_user_name: z.ZodOptional<z.ZodString>;
        alert_workflow_status_updated_at: z.ZodOptional<z.ZodString>;
        details_markdown: z.ZodString;
        entity_summary_markdown: z.ZodOptional<z.ZodString>;
        generation_uuid: z.ZodString;
        id: z.ZodString;
        mitre_attack_tactics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
        risk_score: z.ZodOptional<z.ZodNumber>;
        summary_markdown: z.ZodString;
        timestamp: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodString;
        user_id: z.ZodOptional<z.ZodString>;
        user_name: z.ZodOptional<z.ZodString>;
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
        assignees: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        timestamp: string;
        alert_ids: string[];
        connector_id: string;
        connector_name: string;
        details_markdown: string;
        generation_uuid: string;
        summary_markdown: string;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        tags?: string[] | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        assignees?: string[] | undefined;
        alert_rule_uuid?: string | undefined;
        alert_workflow_status?: string | undefined;
        alert_start?: string | undefined;
        alert_updated_at?: string | undefined;
        alert_updated_by_user_id?: string | undefined;
        alert_updated_by_user_name?: string | undefined;
        alert_workflow_status_updated_at?: string | undefined;
        entity_summary_markdown?: string | undefined;
        mitre_attack_tactics?: string[] | undefined;
        risk_score?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
    }, {
        title: string;
        id: string;
        timestamp: string;
        alert_ids: string[];
        connector_id: string;
        connector_name: string;
        details_markdown: string;
        generation_uuid: string;
        summary_markdown: string;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        tags?: string[] | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        assignees?: string[] | undefined;
        alert_rule_uuid?: string | undefined;
        alert_workflow_status?: string | undefined;
        alert_start?: string | undefined;
        alert_updated_at?: string | undefined;
        alert_updated_by_user_id?: string | undefined;
        alert_updated_by_user_name?: string | undefined;
        alert_workflow_status_updated_at?: string | undefined;
        entity_summary_markdown?: string | undefined;
        mitre_attack_tactics?: string[] | undefined;
        risk_score?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
    }>, "many">;
    /**
     * Current page number of the paginated result set.
     */
    page: z.ZodNumber;
    /**
     * Number of items requested per page.
     */
    per_page: z.ZodNumber;
    /**
     * Total number of Attack discoveries matching the query (across all pages).
     */
    total: z.ZodNumber;
    /**
     * List of unique alert IDs aggregated from the matched Attack discoveries. Only present if `include_unique_alert_ids=true` in the request.
     */
    unique_alert_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Number of unique alert IDs across all matched Attack discoveries. Only present if `include_unique_alert_ids=true` in the request.
     */
    unique_alert_ids_count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: {
        title: string;
        id: string;
        timestamp: string;
        alert_ids: string[];
        connector_id: string;
        connector_name: string;
        details_markdown: string;
        generation_uuid: string;
        summary_markdown: string;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        tags?: string[] | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        assignees?: string[] | undefined;
        alert_rule_uuid?: string | undefined;
        alert_workflow_status?: string | undefined;
        alert_start?: string | undefined;
        alert_updated_at?: string | undefined;
        alert_updated_by_user_id?: string | undefined;
        alert_updated_by_user_name?: string | undefined;
        alert_workflow_status_updated_at?: string | undefined;
        entity_summary_markdown?: string | undefined;
        mitre_attack_tactics?: string[] | undefined;
        risk_score?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
    }[];
    page: number;
    total: number;
    connector_names: string[];
    per_page: number;
    unique_alert_ids_count: number;
    unique_alert_ids?: string[] | undefined;
}, {
    data: {
        title: string;
        id: string;
        timestamp: string;
        alert_ids: string[];
        connector_id: string;
        connector_name: string;
        details_markdown: string;
        generation_uuid: string;
        summary_markdown: string;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        tags?: string[] | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        assignees?: string[] | undefined;
        alert_rule_uuid?: string | undefined;
        alert_workflow_status?: string | undefined;
        alert_start?: string | undefined;
        alert_updated_at?: string | undefined;
        alert_updated_by_user_id?: string | undefined;
        alert_updated_by_user_name?: string | undefined;
        alert_workflow_status_updated_at?: string | undefined;
        entity_summary_markdown?: string | undefined;
        mitre_attack_tactics?: string[] | undefined;
        risk_score?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
    }[];
    page: number;
    total: number;
    connector_names: string[];
    per_page: number;
    unique_alert_ids_count: number;
    unique_alert_ids?: string[] | undefined;
}>;
