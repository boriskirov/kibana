import { z } from '@kbn/zod';
export type GetAttackDiscoveryGenerationRequestQuery = z.infer<typeof GetAttackDiscoveryGenerationRequestQuery>;
export declare const GetAttackDiscoveryGenerationRequestQuery: z.ZodObject<{
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
    enable_field_rendering?: any;
    with_replacements?: any;
}, {
    enable_field_rendering?: any;
    with_replacements?: any;
}>;
export type GetAttackDiscoveryGenerationRequestQueryInput = z.input<typeof GetAttackDiscoveryGenerationRequestQuery>;
export type GetAttackDiscoveryGenerationRequestParams = z.infer<typeof GetAttackDiscoveryGenerationRequestParams>;
export declare const GetAttackDiscoveryGenerationRequestParams: z.ZodObject<{
    /**
     * The unique identifier for the Attack discovery generation execution. This UUID is returned at the start of an Attack discovery generation.
     */
    execution_uuid: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    execution_uuid: string;
}, {
    execution_uuid: string;
}>;
export type GetAttackDiscoveryGenerationRequestParamsInput = z.input<typeof GetAttackDiscoveryGenerationRequestParams>;
export type GetAttackDiscoveryGenerationResponse = z.infer<typeof GetAttackDiscoveryGenerationResponse>;
export declare const GetAttackDiscoveryGenerationResponse: z.ZodObject<{
    /**
     * Array of Attack discoveries generated during this execution.
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
     * Optional metadata about the attack discovery generation process, metadata including execution status and statistics. This metadata may not be available for all generations.
     */
    generation: z.ZodOptional<z.ZodObject<{
        alerts_context_count: z.ZodOptional<z.ZodNumber>;
        connector_id: z.ZodString;
        connector_stats: z.ZodOptional<z.ZodObject<{
            average_successful_duration_nanoseconds: z.ZodOptional<z.ZodNumber>;
            successful_generations: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            average_successful_duration_nanoseconds?: number | undefined;
            successful_generations?: number | undefined;
        }, {
            average_successful_duration_nanoseconds?: number | undefined;
            successful_generations?: number | undefined;
        }>>;
        discoveries: z.ZodNumber;
        end: z.ZodOptional<z.ZodString>;
        execution_uuid: z.ZodString;
        loading_message: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        start: z.ZodString;
        status: z.ZodEnum<["canceled", "dismissed", "failed", "started", "succeeded"]>;
    }, "strip", z.ZodTypeAny, {
        start: string;
        status: "dismissed" | "failed" | "succeeded" | "canceled" | "started";
        connector_id: string;
        execution_uuid: string;
        discoveries: number;
        loading_message: string;
        end?: string | undefined;
        alerts_context_count?: number | undefined;
        connector_stats?: {
            average_successful_duration_nanoseconds?: number | undefined;
            successful_generations?: number | undefined;
        } | undefined;
        reason?: string | undefined;
    }, {
        start: string;
        status: "dismissed" | "failed" | "succeeded" | "canceled" | "started";
        connector_id: string;
        execution_uuid: string;
        discoveries: number;
        loading_message: string;
        end?: string | undefined;
        alerts_context_count?: number | undefined;
        connector_stats?: {
            average_successful_duration_nanoseconds?: number | undefined;
            successful_generations?: number | undefined;
        } | undefined;
        reason?: string | undefined;
    }>>;
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
    generation?: {
        start: string;
        status: "dismissed" | "failed" | "succeeded" | "canceled" | "started";
        connector_id: string;
        execution_uuid: string;
        discoveries: number;
        loading_message: string;
        end?: string | undefined;
        alerts_context_count?: number | undefined;
        connector_stats?: {
            average_successful_duration_nanoseconds?: number | undefined;
            successful_generations?: number | undefined;
        } | undefined;
        reason?: string | undefined;
    } | undefined;
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
    generation?: {
        start: string;
        status: "dismissed" | "failed" | "succeeded" | "canceled" | "started";
        connector_id: string;
        execution_uuid: string;
        discoveries: number;
        loading_message: string;
        end?: string | undefined;
        alerts_context_count?: number | undefined;
        connector_stats?: {
            average_successful_duration_nanoseconds?: number | undefined;
            successful_generations?: number | undefined;
        } | undefined;
        reason?: string | undefined;
    } | undefined;
}>;
