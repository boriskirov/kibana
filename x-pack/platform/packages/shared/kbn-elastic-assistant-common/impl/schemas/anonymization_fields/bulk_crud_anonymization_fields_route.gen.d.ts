import { z } from '@kbn/zod';
/**
 * Reason why the anonymization field was not modified.
 */
export type AnonymizationFieldsBulkActionSkipReason = z.infer<typeof AnonymizationFieldsBulkActionSkipReason>;
export declare const AnonymizationFieldsBulkActionSkipReason: z.ZodLiteral<"ANONYMIZATION_FIELD_NOT_MODIFIED">;
export type AnonymizationFieldsBulkActionSkipResult = z.infer<typeof AnonymizationFieldsBulkActionSkipResult>;
export declare const AnonymizationFieldsBulkActionSkipResult: z.ZodObject<{
    /**
     * The ID of the anonymization field that was not modified.
     */
    id: z.ZodString;
    /**
     * Name of the anonymization field that was not modified.
     */
    name: z.ZodOptional<z.ZodString>;
    /**
     * Reason why the anonymization field was not modified.
     */
    skip_reason: z.ZodLiteral<"ANONYMIZATION_FIELD_NOT_MODIFIED">;
}, "strip", z.ZodTypeAny, {
    id: string;
    skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
    name?: string | undefined;
}, {
    id: string;
    skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
    name?: string | undefined;
}>;
export type AnonymizationFieldDetailsInError = z.infer<typeof AnonymizationFieldDetailsInError>;
export declare const AnonymizationFieldDetailsInError: z.ZodObject<{
    /**
     * The ID of the anonymization field.
     */
    id: z.ZodString;
    /**
     * Name of the anonymization field.
     */
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
}, {
    id: string;
    name?: string | undefined;
}>;
export type NormalizedAnonymizationFieldError = z.infer<typeof NormalizedAnonymizationFieldError>;
export declare const NormalizedAnonymizationFieldError: z.ZodObject<{
    /**
     * Error message.
     */
    message: z.ZodString;
    /**
     * Status code of the response.
     */
    status_code: z.ZodNumber;
    /**
     * Error code indicating the type of failure.
     */
    err_code: z.ZodOptional<z.ZodString>;
    /**
     * Array of anonymization fields that caused the error.
     */
    anonymization_fields: z.ZodArray<z.ZodObject<{
        /**
         * The ID of the anonymization field.
         */
        id: z.ZodString;
        /**
         * Name of the anonymization field.
         */
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name?: string | undefined;
    }, {
        id: string;
        name?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    status_code: number;
    anonymization_fields: {
        id: string;
        name?: string | undefined;
    }[];
    err_code?: string | undefined;
}, {
    message: string;
    status_code: number;
    anonymization_fields: {
        id: string;
        name?: string | undefined;
    }[];
    err_code?: string | undefined;
}>;
export type AnonymizationFieldResponse = z.infer<typeof AnonymizationFieldResponse>;
export declare const AnonymizationFieldResponse: z.ZodObject<{
    /**
     * The ID of the anonymization field.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * Timestamp when the anonymization field was initially created.
     */
    timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * Name of the anonymization field.
     */
    field: z.ZodString;
    /**
     * Whether this field is allowed to be sent to the model.
     */
    allowed: z.ZodOptional<z.ZodBoolean>;
    /**
     * Whether this field should be anonymized.
     */
    anonymized: z.ZodOptional<z.ZodBoolean>;
    /**
     * Timestamp of the last update.
     */
    updatedAt: z.ZodOptional<z.ZodString>;
    /**
     * Username of the person who last updated the field.
     */
    updatedBy: z.ZodOptional<z.ZodString>;
    /**
     * Timestamp of when the anonymization field was created.
     */
    createdAt: z.ZodOptional<z.ZodString>;
    /**
     * Username of the person who created the anonymization field.
     */
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * Kibana space in which this anonymization field exists.
     */
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
}>;
export type AnonymizationFieldsBulkCrudActionResults = z.infer<typeof AnonymizationFieldsBulkCrudActionResults>;
export declare const AnonymizationFieldsBulkCrudActionResults: z.ZodObject<{
    /**
     * List of anonymization fields successfully updated.
     */
    updated: z.ZodArray<z.ZodObject<{
        /**
         * The ID of the anonymization field.
         */
        id: z.ZodEffects<z.ZodString, string, string>;
        /**
         * Timestamp when the anonymization field was initially created.
         */
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        /**
         * Name of the anonymization field.
         */
        field: z.ZodString;
        /**
         * Whether this field is allowed to be sent to the model.
         */
        allowed: z.ZodOptional<z.ZodBoolean>;
        /**
         * Whether this field should be anonymized.
         */
        anonymized: z.ZodOptional<z.ZodBoolean>;
        /**
         * Timestamp of the last update.
         */
        updatedAt: z.ZodOptional<z.ZodString>;
        /**
         * Username of the person who last updated the field.
         */
        updatedBy: z.ZodOptional<z.ZodString>;
        /**
         * Timestamp of when the anonymization field was created.
         */
        createdAt: z.ZodOptional<z.ZodString>;
        /**
         * Username of the person who created the anonymization field.
         */
        createdBy: z.ZodOptional<z.ZodString>;
        /**
         * Kibana space in which this anonymization field exists.
         */
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
    /**
     * List of anonymization fields successfully created.
     */
    created: z.ZodArray<z.ZodObject<{
        /**
         * The ID of the anonymization field.
         */
        id: z.ZodEffects<z.ZodString, string, string>;
        /**
         * Timestamp when the anonymization field was initially created.
         */
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        /**
         * Name of the anonymization field.
         */
        field: z.ZodString;
        /**
         * Whether this field is allowed to be sent to the model.
         */
        allowed: z.ZodOptional<z.ZodBoolean>;
        /**
         * Whether this field should be anonymized.
         */
        anonymized: z.ZodOptional<z.ZodBoolean>;
        /**
         * Timestamp of the last update.
         */
        updatedAt: z.ZodOptional<z.ZodString>;
        /**
         * Username of the person who last updated the field.
         */
        updatedBy: z.ZodOptional<z.ZodString>;
        /**
         * Timestamp of when the anonymization field was created.
         */
        createdAt: z.ZodOptional<z.ZodString>;
        /**
         * Username of the person who created the anonymization field.
         */
        createdBy: z.ZodOptional<z.ZodString>;
        /**
         * Kibana space in which this anonymization field exists.
         */
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
    deleted: z.ZodArray<z.ZodString, "many">;
    /**
     * List of anonymization fields that were skipped during the operation.
     */
    skipped: z.ZodArray<z.ZodObject<{
        /**
         * The ID of the anonymization field that was not modified.
         */
        id: z.ZodString;
        /**
         * Name of the anonymization field that was not modified.
         */
        name: z.ZodOptional<z.ZodString>;
        /**
         * Reason why the anonymization field was not modified.
         */
        skip_reason: z.ZodLiteral<"ANONYMIZATION_FIELD_NOT_MODIFIED">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
        name?: string | undefined;
    }, {
        id: string;
        skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
        name?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    skipped: {
        id: string;
        skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
        name?: string | undefined;
    }[];
    updated: {
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
    created: {
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
    deleted: string[];
}, {
    skipped: {
        id: string;
        skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
        name?: string | undefined;
    }[];
    updated: {
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
    created: {
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
    deleted: string[];
}>;
export type AnonymizationFieldsBulkCrudActionResponse = z.infer<typeof AnonymizationFieldsBulkCrudActionResponse>;
export declare const AnonymizationFieldsBulkCrudActionResponse: z.ZodObject<{
    /**
     * Indicates if the bulk action was successful.
     */
    success: z.ZodOptional<z.ZodBoolean>;
    /**
     * HTTP status code returned.
     */
    status_code: z.ZodOptional<z.ZodNumber>;
    /**
     * Message providing information about the bulk action result.
     */
    message: z.ZodOptional<z.ZodString>;
    /**
     * Total number of anonymization fields processed.
     */
    anonymization_fields_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            /**
             * List of anonymization fields successfully updated.
             */
            updated: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the anonymization field.
                 */
                id: z.ZodEffects<z.ZodString, string, string>;
                /**
                 * Timestamp when the anonymization field was initially created.
                 */
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                /**
                 * Name of the anonymization field.
                 */
                field: z.ZodString;
                /**
                 * Whether this field is allowed to be sent to the model.
                 */
                allowed: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Whether this field should be anonymized.
                 */
                anonymized: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Timestamp of the last update.
                 */
                updatedAt: z.ZodOptional<z.ZodString>;
                /**
                 * Username of the person who last updated the field.
                 */
                updatedBy: z.ZodOptional<z.ZodString>;
                /**
                 * Timestamp of when the anonymization field was created.
                 */
                createdAt: z.ZodOptional<z.ZodString>;
                /**
                 * Username of the person who created the anonymization field.
                 */
                createdBy: z.ZodOptional<z.ZodString>;
                /**
                 * Kibana space in which this anonymization field exists.
                 */
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
            /**
             * List of anonymization fields successfully created.
             */
            created: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the anonymization field.
                 */
                id: z.ZodEffects<z.ZodString, string, string>;
                /**
                 * Timestamp when the anonymization field was initially created.
                 */
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                /**
                 * Name of the anonymization field.
                 */
                field: z.ZodString;
                /**
                 * Whether this field is allowed to be sent to the model.
                 */
                allowed: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Whether this field should be anonymized.
                 */
                anonymized: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Timestamp of the last update.
                 */
                updatedAt: z.ZodOptional<z.ZodString>;
                /**
                 * Username of the person who last updated the field.
                 */
                updatedBy: z.ZodOptional<z.ZodString>;
                /**
                 * Timestamp of when the anonymization field was created.
                 */
                createdAt: z.ZodOptional<z.ZodString>;
                /**
                 * Username of the person who created the anonymization field.
                 */
                createdBy: z.ZodOptional<z.ZodString>;
                /**
                 * Kibana space in which this anonymization field exists.
                 */
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
            deleted: z.ZodArray<z.ZodString, "many">;
            /**
             * List of anonymization fields that were skipped during the operation.
             */
            skipped: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the anonymization field that was not modified.
                 */
                id: z.ZodString;
                /**
                 * Name of the anonymization field that was not modified.
                 */
                name: z.ZodOptional<z.ZodString>;
                /**
                 * Reason why the anonymization field was not modified.
                 */
                skip_reason: z.ZodLiteral<"ANONYMIZATION_FIELD_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }, {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        }>;
        summary: z.ZodObject<{
            failed: z.ZodNumber;
            skipped: z.ZodNumber;
            succeeded: z.ZodNumber;
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
        /**
         * List of errors that occurred during the bulk operation.
         */
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * Error message.
             */
            message: z.ZodString;
            /**
             * Status code of the response.
             */
            status_code: z.ZodNumber;
            /**
             * Error code indicating the type of failure.
             */
            err_code: z.ZodOptional<z.ZodString>;
            /**
             * Array of anonymization fields that caused the error.
             */
            anonymization_fields: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the anonymization field.
                 */
                id: z.ZodString;
                /**
                 * Name of the anonymization field.
                 */
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | undefined;
            }, {
                id: string;
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    }, {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    attributes: {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    anonymization_fields_count?: number | undefined;
}, {
    attributes: {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    anonymization_fields_count?: number | undefined;
}>;
export type AnonymizationFieldCreateProps = z.infer<typeof AnonymizationFieldCreateProps>;
export declare const AnonymizationFieldCreateProps: z.ZodObject<{
    /**
     * Name of the anonymization field to create.
     */
    field: z.ZodString;
    /**
     * Whether this field is allowed to be sent to the model.
     */
    allowed: z.ZodOptional<z.ZodBoolean>;
    /**
     * Whether this field should be anonymized.
     */
    anonymized: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    field: string;
    allowed?: boolean | undefined;
    anonymized?: boolean | undefined;
}, {
    field: string;
    allowed?: boolean | undefined;
    anonymized?: boolean | undefined;
}>;
export type AnonymizationFieldUpdateProps = z.infer<typeof AnonymizationFieldUpdateProps>;
export declare const AnonymizationFieldUpdateProps: z.ZodObject<{
    /**
     * The ID of the anonymization field to update.
     */
    id: z.ZodString;
    /**
     * Whether this field is allowed to be sent to the model.
     */
    allowed: z.ZodOptional<z.ZodBoolean>;
    /**
     * Whether this field should be anonymized.
     */
    anonymized: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    allowed?: boolean | undefined;
    anonymized?: boolean | undefined;
}, {
    id: string;
    allowed?: boolean | undefined;
    anonymized?: boolean | undefined;
}>;
export type PerformAnonymizationFieldsBulkActionRequestBody = z.infer<typeof PerformAnonymizationFieldsBulkActionRequestBody>;
export declare const PerformAnonymizationFieldsBulkActionRequestBody: z.ZodObject<{
    /**
     * Object containing the query to filter anonymization fields and/or an array of anonymization field IDs to delete.
     */
    delete: z.ZodOptional<z.ZodObject<{
        query: z.ZodOptional<z.ZodString>;
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        query?: string | undefined;
        ids?: string[] | undefined;
    }, {
        query?: string | undefined;
        ids?: string[] | undefined;
    }>>;
    /**
     * Array of anonymization fields to create.
     */
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the anonymization field to create.
         */
        field: z.ZodString;
        /**
         * Whether this field is allowed to be sent to the model.
         */
        allowed: z.ZodOptional<z.ZodBoolean>;
        /**
         * Whether this field should be anonymized.
         */
        anonymized: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }, {
        field: string;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }>, "many">>;
    /**
     * Array of anonymization fields to update.
     */
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * The ID of the anonymization field to update.
         */
        id: z.ZodString;
        /**
         * Whether this field is allowed to be sent to the model.
         */
        allowed: z.ZodOptional<z.ZodBoolean>;
        /**
         * Whether this field should be anonymized.
         */
        anonymized: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }, {
        id: string;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: {
        field: string;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[] | undefined;
    update?: {
        id: string;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[] | undefined;
}, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: {
        field: string;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[] | undefined;
    update?: {
        id: string;
        allowed?: boolean | undefined;
        anonymized?: boolean | undefined;
    }[] | undefined;
}>;
export type PerformAnonymizationFieldsBulkActionRequestBodyInput = z.input<typeof PerformAnonymizationFieldsBulkActionRequestBody>;
export type PerformAnonymizationFieldsBulkActionResponse = z.infer<typeof PerformAnonymizationFieldsBulkActionResponse>;
export declare const PerformAnonymizationFieldsBulkActionResponse: z.ZodObject<{
    /**
     * Indicates if the bulk action was successful.
     */
    success: z.ZodOptional<z.ZodBoolean>;
    /**
     * HTTP status code returned.
     */
    status_code: z.ZodOptional<z.ZodNumber>;
    /**
     * Message providing information about the bulk action result.
     */
    message: z.ZodOptional<z.ZodString>;
    /**
     * Total number of anonymization fields processed.
     */
    anonymization_fields_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            /**
             * List of anonymization fields successfully updated.
             */
            updated: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the anonymization field.
                 */
                id: z.ZodEffects<z.ZodString, string, string>;
                /**
                 * Timestamp when the anonymization field was initially created.
                 */
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                /**
                 * Name of the anonymization field.
                 */
                field: z.ZodString;
                /**
                 * Whether this field is allowed to be sent to the model.
                 */
                allowed: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Whether this field should be anonymized.
                 */
                anonymized: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Timestamp of the last update.
                 */
                updatedAt: z.ZodOptional<z.ZodString>;
                /**
                 * Username of the person who last updated the field.
                 */
                updatedBy: z.ZodOptional<z.ZodString>;
                /**
                 * Timestamp of when the anonymization field was created.
                 */
                createdAt: z.ZodOptional<z.ZodString>;
                /**
                 * Username of the person who created the anonymization field.
                 */
                createdBy: z.ZodOptional<z.ZodString>;
                /**
                 * Kibana space in which this anonymization field exists.
                 */
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
            /**
             * List of anonymization fields successfully created.
             */
            created: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the anonymization field.
                 */
                id: z.ZodEffects<z.ZodString, string, string>;
                /**
                 * Timestamp when the anonymization field was initially created.
                 */
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                /**
                 * Name of the anonymization field.
                 */
                field: z.ZodString;
                /**
                 * Whether this field is allowed to be sent to the model.
                 */
                allowed: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Whether this field should be anonymized.
                 */
                anonymized: z.ZodOptional<z.ZodBoolean>;
                /**
                 * Timestamp of the last update.
                 */
                updatedAt: z.ZodOptional<z.ZodString>;
                /**
                 * Username of the person who last updated the field.
                 */
                updatedBy: z.ZodOptional<z.ZodString>;
                /**
                 * Timestamp of when the anonymization field was created.
                 */
                createdAt: z.ZodOptional<z.ZodString>;
                /**
                 * Username of the person who created the anonymization field.
                 */
                createdBy: z.ZodOptional<z.ZodString>;
                /**
                 * Kibana space in which this anonymization field exists.
                 */
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
            deleted: z.ZodArray<z.ZodString, "many">;
            /**
             * List of anonymization fields that were skipped during the operation.
             */
            skipped: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the anonymization field that was not modified.
                 */
                id: z.ZodString;
                /**
                 * Name of the anonymization field that was not modified.
                 */
                name: z.ZodOptional<z.ZodString>;
                /**
                 * Reason why the anonymization field was not modified.
                 */
                skip_reason: z.ZodLiteral<"ANONYMIZATION_FIELD_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }, {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        }>;
        summary: z.ZodObject<{
            failed: z.ZodNumber;
            skipped: z.ZodNumber;
            succeeded: z.ZodNumber;
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
        /**
         * List of errors that occurred during the bulk operation.
         */
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            /**
             * Error message.
             */
            message: z.ZodString;
            /**
             * Status code of the response.
             */
            status_code: z.ZodNumber;
            /**
             * Error code indicating the type of failure.
             */
            err_code: z.ZodOptional<z.ZodString>;
            /**
             * Array of anonymization fields that caused the error.
             */
            anonymization_fields: z.ZodArray<z.ZodObject<{
                /**
                 * The ID of the anonymization field.
                 */
                id: z.ZodString;
                /**
                 * Name of the anonymization field.
                 */
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | undefined;
            }, {
                id: string;
                name?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    }, {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    attributes: {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    anonymization_fields_count?: number | undefined;
}, {
    attributes: {
        summary: {
            total: number;
            failed: number;
            succeeded: number;
            skipped: number;
        };
        results: {
            skipped: {
                id: string;
                skip_reason: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                name?: string | undefined;
            }[];
            updated: {
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
            created: {
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
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            anonymization_fields: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    anonymization_fields_count?: number | undefined;
}>;
