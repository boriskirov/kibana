import { z } from '@kbn/zod';
export type AttackDiscoveryMissingPrivileges = z.infer<typeof AttackDiscoveryMissingPrivileges>;
export declare const AttackDiscoveryMissingPrivileges: z.ZodObject<{
    /**
     * The index name of the privilege missing
     */
    index_name: z.ZodString;
    /**
     * The index privileges level missing
     */
    privileges: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    index_name: string;
    privileges: string[];
}, {
    index_name: string;
    privileges: string[];
}>;
/**
 * The missing index privileges required for Attack discovery
 */
export type GetAttackDiscoveryMissingPrivilegesInternalResponse = z.infer<typeof GetAttackDiscoveryMissingPrivilegesInternalResponse>;
export declare const GetAttackDiscoveryMissingPrivilegesInternalResponse: z.ZodArray<z.ZodObject<{
    /**
     * The index name of the privilege missing
     */
    index_name: z.ZodString;
    /**
     * The index privileges level missing
     */
    privileges: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    index_name: string;
    privileges: string[];
}, {
    index_name: string;
    privileges: string[];
}>, "many">;
