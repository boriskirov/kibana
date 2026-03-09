import { z } from '@kbn/zod';
export type FindAnonymizationFieldsSortField = z.infer<typeof FindAnonymizationFieldsSortField>;
export declare const FindAnonymizationFieldsSortField: z.ZodEnum<["created_at", "anonymized", "allowed", "field", "updated_at"]>;
export type FindAnonymizationFieldsSortFieldEnum = typeof FindAnonymizationFieldsSortField.enum;
export declare const FindAnonymizationFieldsSortFieldEnum: z.Values<["created_at", "anonymized", "allowed", "field", "updated_at"]>;
export type FindAnonymizationFieldsRequestQuery = z.infer<typeof FindAnonymizationFieldsRequestQuery>;
export declare const FindAnonymizationFieldsRequestQuery: z.ZodObject<{
    /**
     * Fields to return
     */
    fields: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], unknown>>;
    /**
     * Search query
     */
    filter: z.ZodOptional<z.ZodString>;
    /**
     * Field to sort by
     */
    sort_field: z.ZodOptional<z.ZodEnum<["created_at", "anonymized", "allowed", "field", "updated_at"]>>;
    /**
     * Sort order
     */
    sort_order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    /**
     * Page number
     */
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * AnonymizationFields per page
     */
    per_page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * If true, additionally fetch all anonymization fields, otherwise fetch only the provided page
     */
    all_data: z.ZodOptional<{
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
}, "strip", z.ZodTypeAny, {
    page: number;
    per_page: number;
    filter?: string | undefined;
    fields?: string[] | undefined;
    sort_field?: "field" | "created_at" | "updated_at" | "allowed" | "anonymized" | undefined;
    sort_order?: "desc" | "asc" | undefined;
    all_data?: any;
}, {
    filter?: string | undefined;
    page?: number | undefined;
    fields?: unknown;
    per_page?: number | undefined;
    sort_field?: "field" | "created_at" | "updated_at" | "allowed" | "anonymized" | undefined;
    sort_order?: "desc" | "asc" | undefined;
    all_data?: any;
}>;
export type FindAnonymizationFieldsRequestQueryInput = z.input<typeof FindAnonymizationFieldsRequestQuery>;
export type FindAnonymizationFieldsResponse = z.infer<typeof FindAnonymizationFieldsResponse>;
export declare const FindAnonymizationFieldsResponse: z.ZodObject<{
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        field: z.ZodString;
        allowed: z.ZodOptional<z.ZodBoolean>;
        anonymized: z.ZodOptional<z.ZodBoolean>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        namespace: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }, {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }>, "many">;
    all: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        field: z.ZodString;
        allowed: z.ZodOptional<z.ZodBoolean>;
        anonymized: z.ZodOptional<z.ZodBoolean>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        namespace: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }, {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }>, "many">>;
    aggregations: z.ZodOptional<z.ZodObject<{
        field_status: z.ZodOptional<z.ZodObject<{
            buckets: z.ZodOptional<z.ZodObject<{
                anonymized: z.ZodOptional<z.ZodObject<{
                    doc_count: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
                }, "strip", z.ZodTypeAny, {
                    doc_count: number;
                }, {
                    doc_count?: number | undefined;
                }>>;
                allowed: z.ZodOptional<z.ZodObject<{
                    doc_count: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
                }, "strip", z.ZodTypeAny, {
                    doc_count: number;
                }, {
                    doc_count?: number | undefined;
                }>>;
                denied: z.ZodOptional<z.ZodObject<{
                    doc_count: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
                }, "strip", z.ZodTypeAny, {
                    doc_count: number;
                }, {
                    doc_count?: number | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                allowed?: {
                    doc_count: number;
                } | undefined;
                anonymized?: {
                    doc_count: number;
                } | undefined;
                denied?: {
                    doc_count: number;
                } | undefined;
            }, {
                allowed?: {
                    doc_count?: number | undefined;
                } | undefined;
                anonymized?: {
                    doc_count?: number | undefined;
                } | undefined;
                denied?: {
                    doc_count?: number | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            buckets?: {
                allowed?: {
                    doc_count: number;
                } | undefined;
                anonymized?: {
                    doc_count: number;
                } | undefined;
                denied?: {
                    doc_count: number;
                } | undefined;
            } | undefined;
        }, {
            buckets?: {
                allowed?: {
                    doc_count?: number | undefined;
                } | undefined;
                anonymized?: {
                    doc_count?: number | undefined;
                } | undefined;
                denied?: {
                    doc_count?: number | undefined;
                } | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        field_status?: {
            buckets?: {
                allowed?: {
                    doc_count: number;
                } | undefined;
                anonymized?: {
                    doc_count: number;
                } | undefined;
                denied?: {
                    doc_count: number;
                } | undefined;
            } | undefined;
        } | undefined;
    }, {
        field_status?: {
            buckets?: {
                allowed?: {
                    doc_count?: number | undefined;
                } | undefined;
                anonymized?: {
                    doc_count?: number | undefined;
                } | undefined;
                denied?: {
                    doc_count?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    data: {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[];
    page: number;
    total: number;
    perPage: number;
    all?: {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[] | undefined;
    aggregations?: {
        field_status?: {
            buckets?: {
                allowed?: {
                    doc_count: number;
                } | undefined;
                anonymized?: {
                    doc_count: number;
                } | undefined;
                denied?: {
                    doc_count: number;
                } | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}, {
    data: {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[];
    page: number;
    total: number;
    perPage: number;
    all?: {
        id: string;
        field: string;
        namespace?: string | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[] | undefined;
    aggregations?: {
        field_status?: {
            buckets?: {
                allowed?: {
                    doc_count?: number | undefined;
                } | undefined;
                anonymized?: {
                    doc_count?: number | undefined;
                } | undefined;
                denied?: {
                    doc_count?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}>;
