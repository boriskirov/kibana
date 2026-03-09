import { z } from '@kbn/zod';
export type SuggestUsersRequestBody = z.infer<typeof SuggestUsersRequestBody>;
export declare const SuggestUsersRequestBody: z.ZodObject<{
    /**
     * Search term to filter users
     */
    searchTerm: z.ZodOptional<z.ZodString>;
    /**
     * Number of users to return
     */
    size: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    size?: number | undefined;
    searchTerm?: string | undefined;
}, {
    size?: number | undefined;
    searchTerm?: string | undefined;
}>;
export type SuggestUsersRequestBodyInput = z.input<typeof SuggestUsersRequestBody>;
/**
 * Array of user profiles
 */
export type SuggestUsersResponse = z.infer<typeof SuggestUsersResponse>;
export declare const SuggestUsersResponse: z.ZodArray<z.ZodObject<{
    /**
     * A unique identifier for the user profile.
     */
    uid: z.ZodString;
    /**
     * Indicates whether user profile is enabled or not.
     */
    enabled: z.ZodBoolean;
    /**
     * User specific data associated with the profile.
     */
    data: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
    /**
     * Information about the user that owns profile.
     */
    user: z.ZodObject<{
        /**
         * The username of the user.
         */
        username: z.ZodString;
        /**
         * The full name of the user.
         */
        full_name: z.ZodOptional<z.ZodString>;
        /**
         * The email address of the user.
         */
        email: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        username: string;
        email?: string | undefined;
        full_name?: string | undefined;
    }, {
        username: string;
        email?: string | undefined;
        full_name?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {} & {
        [k: string]: unknown;
    };
    enabled: boolean;
    user: {
        username: string;
        email?: string | undefined;
        full_name?: string | undefined;
    };
    uid: string;
}, {
    data: {} & {
        [k: string]: unknown;
    };
    enabled: boolean;
    user: {
        username: string;
        email?: string | undefined;
        full_name?: string | undefined;
    };
    uid: string;
}>, "many">;
