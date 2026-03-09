import { z } from '@kbn/zod';
export type AlertSummaryBulkActionSkipReason = z.infer<typeof AlertSummaryBulkActionSkipReason>;
export declare const AlertSummaryBulkActionSkipReason: z.ZodLiteral<"ALERT_SUMMARY_NOT_MODIFIED">;
export type AlertSummaryBulkActionSkipResult = z.infer<typeof AlertSummaryBulkActionSkipResult>;
export declare const AlertSummaryBulkActionSkipResult: z.ZodObject<{
    id: z.ZodString;
    alertId: z.ZodOptional<z.ZodString>;
    skip_reason: z.ZodLiteral<"ALERT_SUMMARY_NOT_MODIFIED">;
}, "strip", z.ZodTypeAny, {
    id: string;
    skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
    alertId?: string | undefined;
}, {
    id: string;
    skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
    alertId?: string | undefined;
}>;
export type AlertSummaryDetailsInError = z.infer<typeof AlertSummaryDetailsInError>;
export declare const AlertSummaryDetailsInError: z.ZodObject<{
    alertId: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    alertId?: string | undefined;
}, {
    id: string;
    alertId?: string | undefined;
}>;
export type NormalizedAlertSummaryError = z.infer<typeof NormalizedAlertSummaryError>;
export declare const NormalizedAlertSummaryError: z.ZodObject<{
    message: z.ZodString;
    status_code: z.ZodNumber;
    err_code: z.ZodOptional<z.ZodString>;
    alert_summaries: z.ZodArray<z.ZodObject<{
        alertId: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        alertId?: string | undefined;
    }, {
        id: string;
        alertId?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    status_code: number;
    alert_summaries: {
        id: string;
        alertId?: string | undefined;
    }[];
    err_code?: string | undefined;
}, {
    message: string;
    status_code: number;
    alert_summaries: {
        id: string;
        alertId?: string | undefined;
    }[];
    err_code?: string | undefined;
}>;
export type AlertSummaryResponse = z.infer<typeof AlertSummaryResponse>;
export declare const AlertSummaryResponse: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    alertId: z.ZodEffects<z.ZodString, string, string>;
    timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    summary: z.ZodString;
    recommendedActions: z.ZodOptional<z.ZodString>;
    replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
    updatedAt: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodOptional<z.ZodString>;
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
    /**
     * Kibana space
     */
    namespace: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    summary: string;
    id: string;
    alertId: string;
    replacements: {} & {
        [k: string]: string;
    };
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    timestamp?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    recommendedActions?: string | undefined;
}, {
    summary: string;
    id: string;
    alertId: string;
    replacements: {} & {
        [k: string]: string;
    };
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    timestamp?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    createdBy?: string | undefined;
    updatedBy?: string | undefined;
    recommendedActions?: string | undefined;
}>;
export type AlertSummaryBulkCrudActionResults = z.infer<typeof AlertSummaryBulkCrudActionResults>;
export declare const AlertSummaryBulkCrudActionResults: z.ZodObject<{
    updated: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        alertId: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        summary: z.ZodString;
        recommendedActions: z.ZodOptional<z.ZodString>;
        replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
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
        /**
         * Kibana space
         */
        namespace: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }, {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }>, "many">;
    created: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        alertId: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        summary: z.ZodString;
        recommendedActions: z.ZodOptional<z.ZodString>;
        replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
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
        /**
         * Kibana space
         */
        namespace: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }, {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }>, "many">;
    deleted: z.ZodArray<z.ZodString, "many">;
    skipped: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        alertId: z.ZodOptional<z.ZodString>;
        skip_reason: z.ZodLiteral<"ALERT_SUMMARY_NOT_MODIFIED">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
        alertId?: string | undefined;
    }, {
        id: string;
        skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
        alertId?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    skipped: {
        id: string;
        skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
        alertId?: string | undefined;
    }[];
    updated: {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }[];
    created: {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }[];
    deleted: string[];
}, {
    skipped: {
        id: string;
        skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
        alertId?: string | undefined;
    }[];
    updated: {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }[];
    created: {
        summary: string;
        id: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        namespace?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        timestamp?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        createdBy?: string | undefined;
        updatedBy?: string | undefined;
        recommendedActions?: string | undefined;
    }[];
    deleted: string[];
}>;
export type AlertSummaryBulkCrudActionResponse = z.infer<typeof AlertSummaryBulkCrudActionResponse>;
export declare const AlertSummaryBulkCrudActionResponse: z.ZodObject<{
    success: z.ZodOptional<z.ZodBoolean>;
    status_code: z.ZodOptional<z.ZodNumber>;
    message: z.ZodOptional<z.ZodString>;
    alert_summaries_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            updated: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                alertId: z.ZodEffects<z.ZodString, string, string>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                summary: z.ZodString;
                recommendedActions: z.ZodOptional<z.ZodString>;
                replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
                updatedAt: z.ZodOptional<z.ZodString>;
                updatedBy: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodString>;
                createdBy: z.ZodOptional<z.ZodString>;
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
                /**
                 * Kibana space
                 */
                namespace: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }, {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }>, "many">;
            created: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                alertId: z.ZodEffects<z.ZodString, string, string>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                summary: z.ZodString;
                recommendedActions: z.ZodOptional<z.ZodString>;
                replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
                updatedAt: z.ZodOptional<z.ZodString>;
                updatedBy: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodString>;
                createdBy: z.ZodOptional<z.ZodString>;
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
                /**
                 * Kibana space
                 */
                namespace: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }, {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }>, "many">;
            deleted: z.ZodArray<z.ZodString, "many">;
            skipped: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                alertId: z.ZodOptional<z.ZodString>;
                skip_reason: z.ZodLiteral<"ALERT_SUMMARY_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }, {
                id: string;
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
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
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            message: z.ZodString;
            status_code: z.ZodNumber;
            err_code: z.ZodOptional<z.ZodString>;
            alert_summaries: z.ZodArray<z.ZodObject<{
                alertId: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                alertId?: string | undefined;
            }, {
                id: string;
                alertId?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
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
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
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
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
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
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    alert_summaries_count?: number | undefined;
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
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    alert_summaries_count?: number | undefined;
}>;
export type AlertSummaryCreateProps = z.infer<typeof AlertSummaryCreateProps>;
export declare const AlertSummaryCreateProps: z.ZodObject<{
    alertId: z.ZodString;
    summary: z.ZodString;
    recommendedActions: z.ZodOptional<z.ZodString>;
    replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
}, "strip", z.ZodTypeAny, {
    summary: string;
    alertId: string;
    replacements: {} & {
        [k: string]: string;
    };
    recommendedActions?: string | undefined;
}, {
    summary: string;
    alertId: string;
    replacements: {} & {
        [k: string]: string;
    };
    recommendedActions?: string | undefined;
}>;
export type AlertSummaryUpdateProps = z.infer<typeof AlertSummaryUpdateProps>;
export declare const AlertSummaryUpdateProps: z.ZodObject<{
    id: z.ZodString;
    summary: z.ZodOptional<z.ZodString>;
    recommendedActions: z.ZodOptional<z.ZodString>;
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    summary?: string | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    recommendedActions?: string | undefined;
}, {
    id: string;
    summary?: string | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    recommendedActions?: string | undefined;
}>;
export type PerformAlertSummaryBulkActionRequestBody = z.infer<typeof PerformAlertSummaryBulkActionRequestBody>;
export declare const PerformAlertSummaryBulkActionRequestBody: z.ZodObject<{
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
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        alertId: z.ZodString;
        summary: z.ZodString;
        recommendedActions: z.ZodOptional<z.ZodString>;
        replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
    }, "strip", z.ZodTypeAny, {
        summary: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        recommendedActions?: string | undefined;
    }, {
        summary: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        recommendedActions?: string | undefined;
    }>, "many">>;
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        summary: z.ZodOptional<z.ZodString>;
        recommendedActions: z.ZodOptional<z.ZodString>;
        replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        summary?: string | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        recommendedActions?: string | undefined;
    }, {
        id: string;
        summary?: string | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        recommendedActions?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: {
        summary: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        recommendedActions?: string | undefined;
    }[] | undefined;
    update?: {
        id: string;
        summary?: string | undefined;
        replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        recommendedActions?: string | undefined;
    }[] | undefined;
}, {
    delete?: {
        query?: string | undefined;
        ids?: string[] | undefined;
    } | undefined;
    create?: {
        summary: string;
        alertId: string;
        replacements: {} & {
            [k: string]: string;
        };
        recommendedActions?: string | undefined;
    }[] | undefined;
    update?: {
        id: string;
        summary?: string | undefined;
        replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        recommendedActions?: string | undefined;
    }[] | undefined;
}>;
export type PerformAlertSummaryBulkActionRequestBodyInput = z.input<typeof PerformAlertSummaryBulkActionRequestBody>;
export type PerformAlertSummaryBulkActionResponse = z.infer<typeof PerformAlertSummaryBulkActionResponse>;
export declare const PerformAlertSummaryBulkActionResponse: z.ZodObject<{
    success: z.ZodOptional<z.ZodBoolean>;
    status_code: z.ZodOptional<z.ZodNumber>;
    message: z.ZodOptional<z.ZodString>;
    alert_summaries_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        results: z.ZodObject<{
            updated: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                alertId: z.ZodEffects<z.ZodString, string, string>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                summary: z.ZodString;
                recommendedActions: z.ZodOptional<z.ZodString>;
                replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
                updatedAt: z.ZodOptional<z.ZodString>;
                updatedBy: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodString>;
                createdBy: z.ZodOptional<z.ZodString>;
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
                /**
                 * Kibana space
                 */
                namespace: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }, {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }>, "many">;
            created: z.ZodArray<z.ZodObject<{
                id: z.ZodEffects<z.ZodString, string, string>;
                alertId: z.ZodEffects<z.ZodString, string, string>;
                timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                summary: z.ZodString;
                recommendedActions: z.ZodOptional<z.ZodString>;
                replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
                updatedAt: z.ZodOptional<z.ZodString>;
                updatedBy: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodString>;
                createdBy: z.ZodOptional<z.ZodString>;
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
                /**
                 * Kibana space
                 */
                namespace: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }, {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }>, "many">;
            deleted: z.ZodArray<z.ZodString, "many">;
            skipped: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                alertId: z.ZodOptional<z.ZodString>;
                skip_reason: z.ZodLiteral<"ALERT_SUMMARY_NOT_MODIFIED">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }, {
                id: string;
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            skipped: {
                id: string;
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        }, {
            skipped: {
                id: string;
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
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
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            message: z.ZodString;
            status_code: z.ZodNumber;
            err_code: z.ZodOptional<z.ZodString>;
            alert_summaries: z.ZodArray<z.ZodObject<{
                alertId: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                alertId?: string | undefined;
            }, {
                id: string;
                alertId?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
            }[];
            err_code?: string | undefined;
        }, {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
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
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
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
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
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
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    alert_summaries_count?: number | undefined;
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
                skip_reason: "ALERT_SUMMARY_NOT_MODIFIED";
                alertId?: string | undefined;
            }[];
            updated: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            created: {
                summary: string;
                id: string;
                alertId: string;
                replacements: {} & {
                    [k: string]: string;
                };
                namespace?: string | undefined;
                users?: {
                    id?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                timestamp?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                createdBy?: string | undefined;
                updatedBy?: string | undefined;
                recommendedActions?: string | undefined;
            }[];
            deleted: string[];
        };
        errors?: {
            message: string;
            status_code: number;
            alert_summaries: {
                id: string;
                alertId?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    message?: string | undefined;
    status_code?: number | undefined;
    alert_summaries_count?: number | undefined;
}>;
