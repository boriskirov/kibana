import { z } from '@kbn/zod';
/**
 * A string that does not contain only whitespace characters.
 */
export type NonEmptyString = z.infer<typeof NonEmptyString>;
export declare const NonEmptyString: z.ZodEffects<z.ZodString, string, string>;
/**
 * A string that represents a timestamp in ISO 8601 format and does not contain only whitespace characters.
 */
export type NonEmptyTimestamp = z.infer<typeof NonEmptyTimestamp>;
export declare const NonEmptyTimestamp: z.ZodEffects<z.ZodString, string, string>;
/**
 * A universally unique identifier.
 */
export type UUID = z.infer<typeof UUID>;
export declare const UUID: z.ZodString;
/**
 * Could be any string, not necessarily a UUID.
 */
export type User = z.infer<typeof User>;
export declare const User: z.ZodObject<{
    /**
     * User id.
     */
    id: z.ZodOptional<z.ZodString>;
    /**
     * User name.
     */
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    name?: string | undefined;
}, {
    id?: string | undefined;
    name?: string | undefined;
}>;
/**
 * The order in which results are sorted.
 */
export type SortOrder = z.infer<typeof SortOrder>;
export declare const SortOrder: z.ZodEnum<["asc", "desc"]>;
export type SortOrderEnum = typeof SortOrder.enum;
export declare const SortOrderEnum: z.Values<["asc", "desc"]>;
/**
 * User screen context.
 */
export type ScreenContext = z.infer<typeof ScreenContext>;
export declare const ScreenContext: z.ZodObject<{
    /**
     * The local timezone of the user.
     */
    timeZone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timeZone?: string | undefined;
}, {
    timeZone?: string | undefined;
}>;
export type BulkCrudActionSummary = z.infer<typeof BulkCrudActionSummary>;
export declare const BulkCrudActionSummary: z.ZodObject<{
    /**
     * The number of failed actions.
     */
    failed: z.ZodNumber;
    /**
     * The number of skipped actions.
     */
    skipped: z.ZodNumber;
    /**
     * The number of successfully performed actions.
     */
    succeeded: z.ZodNumber;
    /**
     * The total number of actions attempted.
     */
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
export type BulkActionBase = z.infer<typeof BulkActionBase>;
export declare const BulkActionBase: z.ZodObject<{
    /**
     * Query to filter the bulk action.
     */
    query: z.ZodOptional<z.ZodString>;
    /**
     * Array of IDs to apply the action to.
     */
    ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    query?: string | undefined;
    ids?: string[] | undefined;
}, {
    query?: string | undefined;
    ids?: string[] | undefined;
}>;
/**
 * IDs for a specific prompt within a group of prompts.
 */
export type PromptIds = z.infer<typeof PromptIds>;
export declare const PromptIds: z.ZodObject<{
    /**
     * The unique identifier for a specific prompt.
     */
    promptId: z.ZodString;
    /**
     * The unique identifier for a group of prompts.
     */
    promptGroupId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    promptId: string;
    promptGroupId: string;
}, {
    promptId: string;
    promptGroupId: string;
}>;
