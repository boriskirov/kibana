import { z } from '@kbn/zod';
/**
 * Array of objects defining the input schema, allowing the LLM to extract structured data to be used in retrieval.
 */
export type InputSchema = z.infer<typeof InputSchema>;
export declare const InputSchema: z.ZodArray<z.ZodObject<{
    /**
     * Name of the field.
     */
    fieldName: z.ZodString;
    /**
     * Type of the field.
     */
    fieldType: z.ZodString;
    /**
     * Description of the field.
     */
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    fieldName: string;
    fieldType: string;
}, {
    description: string;
    fieldName: string;
    fieldType: string;
}>, "many">;
export type KnowledgeBaseEntryErrorSchema = z.infer<typeof KnowledgeBaseEntryErrorSchema>;
export declare const KnowledgeBaseEntryErrorSchema: z.ZodObject<{
    /**
     * HTTP status code of the error.
     */
    statusCode: z.ZodNumber;
    /**
     * Error type or category.
     */
    error: z.ZodString;
    /**
     * Detailed error message.
     */
    message: z.ZodString;
}, "strict", z.ZodTypeAny, {
    error: string;
    message: string;
    statusCode: number;
}, {
    error: string;
    message: string;
    statusCode: number;
}>;
/**
 * Knowledge Base resource name for grouping entries, e.g. 'security_labs', 'user', etc.
 */
export type KnowledgeBaseResource = z.infer<typeof KnowledgeBaseResource>;
export declare const KnowledgeBaseResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
export type KnowledgeBaseResourceEnum = typeof KnowledgeBaseResource.enum;
export declare const KnowledgeBaseResourceEnum: z.Values<["security_labs", "defend_insights", "user"]>;
/**
 * Metadata about a Knowledge Base Entry.
 */
export type Metadata = z.infer<typeof Metadata>;
export declare const Metadata: z.ZodObject<{
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    /**
     * Source document name or filepath.
     */
    source: z.ZodString;
    /**
     * Whether this resource should always be included.
     */
    required: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    source: string;
    required: boolean;
    kbResource: "user" | "security_labs" | "defend_insights";
}, {
    source: string;
    required: boolean;
    kbResource: "user" | "security_labs" | "defend_insights";
}>;
/**
 * Object containing Knowledge Base Entry text embeddings and modelId used to create the embeddings.
 */
export type Vector = z.infer<typeof Vector>;
export declare const Vector: z.ZodObject<{
    /**
     * ID of the model used to create the embeddings.
     */
    modelId: z.ZodString;
    /**
     * Tokens with their corresponding values.
     */
    tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
}, "strip", z.ZodTypeAny, {
    modelId: string;
    tokens: {} & {
        [k: string]: number;
    };
}, {
    modelId: string;
    tokens: {} & {
        [k: string]: number;
    };
}>;
export type BaseRequiredFields = z.infer<typeof BaseRequiredFields>;
export declare const BaseRequiredFields: z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type BaseDefaultableFields = z.infer<typeof BaseDefaultableFields>;
export declare const BaseDefaultableFields: z.ZodObject<{
    /**
     * Kibana Space, defaults to 'default' space.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * Whether this Knowledge Base Entry is global, defaults to false.
     */
    global: z.ZodOptional<z.ZodBoolean>;
    /**
     * Users who have access to the Knowledge Base Entry, defaults to current user. Empty array provides access to all users.
     */
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
}, "strip", z.ZodTypeAny, {
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
}, {
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
}>;
export type BaseCreateProps = z.infer<typeof BaseCreateProps>;
export declare const BaseCreateProps: z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    /**
     * Kibana Space, defaults to 'default' space.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * Whether this Knowledge Base Entry is global, defaults to false.
     */
    global: z.ZodOptional<z.ZodBoolean>;
    /**
     * Users who have access to the Knowledge Base Entry, defaults to current user. Empty array provides access to all users.
     */
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
}, "strip", z.ZodTypeAny, {
    name: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
}, {
    name: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
}>;
export type BaseUpdateProps = z.infer<typeof BaseUpdateProps>;
export declare const BaseUpdateProps: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    namespace: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    global: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    users: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">>>;
} & {
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
}, {
    id: string;
    name?: string | undefined;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
}>;
export type BaseResponseProps = z.infer<typeof BaseResponseProps>;
export declare const BaseResponseProps: z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    namespace: z.ZodString;
    global: z.ZodBoolean;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    global: boolean;
}, {
    name: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    global: boolean;
}>;
export type ResponseFields = z.infer<typeof ResponseFields>;
export declare const ResponseFields: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * Time the Knowledge Base Entry was created.
     */
    createdAt: z.ZodString;
    /**
     * User who created the Knowledge Base Entry.
     */
    createdBy: z.ZodString;
    /**
     * Time the Knowledge Base Entry was last updated.
     */
    updatedAt: z.ZodString;
    /**
     * User who last updated the Knowledge Base Entry.
     */
    updatedBy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}, {
    id: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}>;
export type DeleteResponseFields = z.infer<typeof DeleteResponseFields>;
export declare const DeleteResponseFields: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type SharedResponseProps = z.infer<typeof SharedResponseProps>;
export declare const SharedResponseProps: z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    namespace: z.ZodString;
    global: z.ZodBoolean;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">;
} & {
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * Time the Knowledge Base Entry was created.
     */
    createdAt: z.ZodString;
    /**
     * User who created the Knowledge Base Entry.
     */
    createdBy: z.ZodString;
    /**
     * Time the Knowledge Base Entry was last updated.
     */
    updatedAt: z.ZodString;
    /**
     * User who last updated the Knowledge Base Entry.
     */
    updatedBy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
}, {
    id: string;
    name: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
}>;
export type DocumentEntryType = z.infer<typeof DocumentEntryType>;
export declare const DocumentEntryType: z.ZodLiteral<"document">;
export type DocumentEntryRequiredFields = z.infer<typeof DocumentEntryRequiredFields>;
export declare const DocumentEntryRequiredFields: z.ZodObject<{
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    /**
     * Source document name or filepath.
     */
    source: z.ZodString;
    /**
     * Knowledge Base Entry content.
     */
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
}, {
    source: string;
    text: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
}>;
export type DocumentEntryOptionalFields = z.infer<typeof DocumentEntryOptionalFields>;
export declare const DocumentEntryOptionalFields: z.ZodObject<{
    /**
     * Whether this resource should always be included, defaults to false.
     */
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
}, {
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
}>;
export type DocumentEntryCreateFields = z.infer<typeof DocumentEntryCreateFields>;
export declare const DocumentEntryCreateFields: z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    /**
     * Kibana Space, defaults to 'default' space.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * Whether this Knowledge Base Entry is global, defaults to false.
     */
    global: z.ZodOptional<z.ZodBoolean>;
    /**
     * Users who have access to the Knowledge Base Entry, defaults to current user. Empty array provides access to all users.
     */
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
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    /**
     * Source document name or filepath.
     */
    source: z.ZodString;
    /**
     * Knowledge Base Entry content.
     */
    text: z.ZodString;
} & {
    /**
     * Whether this resource should always be included, defaults to false.
     */
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}, {
    source: string;
    text: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}>;
export type DocumentEntryUpdateFields = z.infer<typeof DocumentEntryUpdateFields>;
export declare const DocumentEntryUpdateFields: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
} & {
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    global: z.ZodOptional<z.ZodBoolean>;
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
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    source: z.ZodString;
    text: z.ZodString;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    id: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}, {
    source: string;
    text: string;
    id: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}>;
export type DocumentEntryResponseFields = z.infer<typeof DocumentEntryResponseFields>;
export declare const DocumentEntryResponseFields: z.ZodObject<{
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    /**
     * Source document name or filepath.
     */
    source: z.ZodString;
    /**
     * Knowledge Base Entry content.
     */
    text: z.ZodString;
} & {
    /**
     * Whether this resource should always be included, defaults to false.
     */
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
}, {
    source: string;
    text: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
}>;
export type DocumentEntry = z.infer<typeof DocumentEntry>;
export declare const DocumentEntry: z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    namespace: z.ZodString;
    global: z.ZodBoolean;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">;
} & {
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * Time the Knowledge Base Entry was created.
     */
    createdAt: z.ZodString;
    /**
     * User who created the Knowledge Base Entry.
     */
    createdBy: z.ZodString;
    /**
     * Time the Knowledge Base Entry was last updated.
     */
    updatedAt: z.ZodString;
    /**
     * User who last updated the Knowledge Base Entry.
     */
    updatedBy: z.ZodString;
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    /**
     * Source document name or filepath.
     */
    source: z.ZodString;
    /**
     * Knowledge Base Entry content.
     */
    text: z.ZodString;
} & {
    /**
     * Whether this resource should always be included, defaults to false.
     */
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    id: string;
    name: string;
    type: "document";
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
    kbResource: "user" | "security_labs" | "defend_insights";
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
}, {
    source: string;
    text: string;
    id: string;
    name: string;
    type: "document";
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
    kbResource: "user" | "security_labs" | "defend_insights";
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
}>;
export type IndexEntryType = z.infer<typeof IndexEntryType>;
export declare const IndexEntryType: z.ZodLiteral<"index">;
export type IndexEntryRequiredFields = z.infer<typeof IndexEntryRequiredFields>;
export declare const IndexEntryRequiredFields: z.ZodObject<{
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"index">;
    /**
     * Index or Data Stream to query for Knowledge Base content.
     */
    index: z.ZodString;
    /**
     * Field to query for Knowledge Base content.
     */
    field: z.ZodString;
    /**
     * Description for when this index or data stream should be queried for Knowledge Base content. Passed to the LLM as a tool description.
     */
    description: z.ZodString;
    /**
     * Description of query field used to fetch Knowledge Base content. Passed to the LLM as part of the tool input schema.
     */
    queryDescription: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
}, {
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
}>;
export type IndexEntryOptionalFields = z.infer<typeof IndexEntryOptionalFields>;
export declare const IndexEntryOptionalFields: z.ZodObject<{
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    /**
     * Fields to extract from the query result, defaults to all fields if not provided or empty.
     */
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>;
export type IndexEntryCreateFields = z.infer<typeof IndexEntryCreateFields>;
export declare const IndexEntryCreateFields: z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    /**
     * Kibana Space, defaults to 'default' space.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * Whether this Knowledge Base Entry is global, defaults to false.
     */
    global: z.ZodOptional<z.ZodBoolean>;
    /**
     * Users who have access to the Knowledge Base Entry, defaults to current user. Empty array provides access to all users.
     */
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
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"index">;
    /**
     * Index or Data Stream to query for Knowledge Base content.
     */
    index: z.ZodString;
    /**
     * Field to query for Knowledge Base content.
     */
    field: z.ZodString;
    /**
     * Description for when this index or data stream should be queried for Knowledge Base content. Passed to the LLM as a tool description.
     */
    description: z.ZodString;
    /**
     * Description of query field used to fetch Knowledge Base content. Passed to the LLM as part of the tool input schema.
     */
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    /**
     * Fields to extract from the query result, defaults to all fields if not provided or empty.
     */
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>;
export type IndexEntryUpdateFields = z.infer<typeof IndexEntryUpdateFields>;
export declare const IndexEntryUpdateFields: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
} & {
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    global: z.ZodOptional<z.ZodBoolean>;
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
    type: z.ZodLiteral<"index">;
    index: z.ZodString;
    field: z.ZodString;
    description: z.ZodString;
    queryDescription: z.ZodString;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    id: string;
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>;
export type IndexEntryResponseFields = z.infer<typeof IndexEntryResponseFields>;
export declare const IndexEntryResponseFields: z.ZodObject<{
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"index">;
    /**
     * Index or Data Stream to query for Knowledge Base content.
     */
    index: z.ZodString;
    /**
     * Field to query for Knowledge Base content.
     */
    field: z.ZodString;
    /**
     * Description for when this index or data stream should be queried for Knowledge Base content. Passed to the LLM as a tool description.
     */
    description: z.ZodString;
    /**
     * Description of query field used to fetch Knowledge Base content. Passed to the LLM as part of the tool input schema.
     */
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    /**
     * Fields to extract from the query result, defaults to all fields if not provided or empty.
     */
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>;
export type IndexEntry = z.infer<typeof IndexEntry>;
export declare const IndexEntry: z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    namespace: z.ZodString;
    global: z.ZodBoolean;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">;
} & {
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * Time the Knowledge Base Entry was created.
     */
    createdAt: z.ZodString;
    /**
     * User who created the Knowledge Base Entry.
     */
    createdBy: z.ZodString;
    /**
     * Time the Knowledge Base Entry was last updated.
     */
    updatedAt: z.ZodString;
    /**
     * User who last updated the Knowledge Base Entry.
     */
    updatedBy: z.ZodString;
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"index">;
    /**
     * Index or Data Stream to query for Knowledge Base content.
     */
    index: z.ZodString;
    /**
     * Field to query for Knowledge Base content.
     */
    field: z.ZodString;
    /**
     * Description for when this index or data stream should be queried for Knowledge Base content. Passed to the LLM as a tool description.
     */
    description: z.ZodString;
    /**
     * Description of query field used to fetch Knowledge Base content. Passed to the LLM as part of the tool input schema.
     */
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    /**
     * Fields to extract from the query result, defaults to all fields if not provided or empty.
     */
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: "index";
    index: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    description: string;
    field: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
    queryDescription: string;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    id: string;
    name: string;
    type: "index";
    index: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    description: string;
    field: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
    queryDescription: string;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>;
export type KnowledgeBaseEntryCreateProps = z.infer<typeof KnowledgeBaseEntryCreateProps>;
export declare const KnowledgeBaseEntryCreateProps: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    /**
     * Kibana Space, defaults to 'default' space.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * Whether this Knowledge Base Entry is global, defaults to false.
     */
    global: z.ZodOptional<z.ZodBoolean>;
    /**
     * Users who have access to the Knowledge Base Entry, defaults to current user. Empty array provides access to all users.
     */
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
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    /**
     * Source document name or filepath.
     */
    source: z.ZodString;
    /**
     * Knowledge Base Entry content.
     */
    text: z.ZodString;
} & {
    /**
     * Whether this resource should always be included, defaults to false.
     */
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}, {
    source: string;
    text: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}>, z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    /**
     * Kibana Space, defaults to 'default' space.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * Whether this Knowledge Base Entry is global, defaults to false.
     */
    global: z.ZodOptional<z.ZodBoolean>;
    /**
     * Users who have access to the Knowledge Base Entry, defaults to current user. Empty array provides access to all users.
     */
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
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"index">;
    /**
     * Index or Data Stream to query for Knowledge Base content.
     */
    index: z.ZodString;
    /**
     * Field to query for Knowledge Base content.
     */
    field: z.ZodString;
    /**
     * Description for when this index or data stream should be queried for Knowledge Base content. Passed to the LLM as a tool description.
     */
    description: z.ZodString;
    /**
     * Description of query field used to fetch Knowledge Base content. Passed to the LLM as part of the tool input schema.
     */
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    /**
     * Fields to extract from the query result, defaults to all fields if not provided or empty.
     */
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>]>;
export type KnowledgeBaseEntryUpdateProps = z.infer<typeof KnowledgeBaseEntryUpdateProps>;
export declare const KnowledgeBaseEntryUpdateProps: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
} & {
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    global: z.ZodOptional<z.ZodBoolean>;
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
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    source: z.ZodString;
    text: z.ZodString;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    id: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}, {
    source: string;
    text: string;
    id: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}>, z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
} & {
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    global: z.ZodOptional<z.ZodBoolean>;
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
    type: z.ZodLiteral<"index">;
    index: z.ZodString;
    field: z.ZodString;
    description: z.ZodString;
    queryDescription: z.ZodString;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    id: string;
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>]>;
export type KnowledgeBaseEntryUpdateRouteProps = z.infer<typeof KnowledgeBaseEntryUpdateRouteProps>;
export declare const KnowledgeBaseEntryUpdateRouteProps: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    /**
     * Kibana Space, defaults to 'default' space.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * Whether this Knowledge Base Entry is global, defaults to false.
     */
    global: z.ZodOptional<z.ZodBoolean>;
    /**
     * Users who have access to the Knowledge Base Entry, defaults to current user. Empty array provides access to all users.
     */
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
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    /**
     * Source document name or filepath.
     */
    source: z.ZodString;
    /**
     * Knowledge Base Entry content.
     */
    text: z.ZodString;
} & {
    /**
     * Whether this resource should always be included, defaults to false.
     */
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}, {
    source: string;
    text: string;
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
    global?: boolean | undefined;
}>, z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    /**
     * Kibana Space, defaults to 'default' space.
     */
    namespace: z.ZodOptional<z.ZodString>;
    /**
     * Whether this Knowledge Base Entry is global, defaults to false.
     */
    global: z.ZodOptional<z.ZodBoolean>;
    /**
     * Users who have access to the Knowledge Base Entry, defaults to current user. Empty array provides access to all users.
     */
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
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"index">;
    /**
     * Index or Data Stream to query for Knowledge Base content.
     */
    index: z.ZodString;
    /**
     * Field to query for Knowledge Base content.
     */
    field: z.ZodString;
    /**
     * Description for when this index or data stream should be queried for Knowledge Base content. Passed to the LLM as a tool description.
     */
    description: z.ZodString;
    /**
     * Description of query field used to fetch Knowledge Base content. Passed to the LLM as part of the tool input schema.
     */
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    /**
     * Fields to extract from the query result, defaults to all fields if not provided or empty.
     */
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    name: string;
    type: "index";
    index: string;
    description: string;
    field: string;
    queryDescription: string;
    namespace?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    global?: boolean | undefined;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>]>;
export type KnowledgeBaseEntryResponse = z.infer<typeof KnowledgeBaseEntryResponse>;
export declare const KnowledgeBaseEntryResponse: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    namespace: z.ZodString;
    global: z.ZodBoolean;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">;
} & {
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * Time the Knowledge Base Entry was created.
     */
    createdAt: z.ZodString;
    /**
     * User who created the Knowledge Base Entry.
     */
    createdBy: z.ZodString;
    /**
     * Time the Knowledge Base Entry was last updated.
     */
    updatedAt: z.ZodString;
    /**
     * User who last updated the Knowledge Base Entry.
     */
    updatedBy: z.ZodString;
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    /**
     * Source document name or filepath.
     */
    source: z.ZodString;
    /**
     * Knowledge Base Entry content.
     */
    text: z.ZodString;
} & {
    /**
     * Whether this resource should always be included, defaults to false.
     */
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        /**
         * ID of the model used to create the embeddings.
         */
        modelId: z.ZodString;
        /**
         * Tokens with their corresponding values.
         */
        tokens: z.ZodObject<{}, "strip", z.ZodNumber, z.objectOutputType<{}, z.ZodNumber, "strip">, z.objectInputType<{}, z.ZodNumber, "strip">>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }, {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    source: string;
    text: string;
    id: string;
    name: string;
    type: "document";
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
    kbResource: "user" | "security_labs" | "defend_insights";
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
}, {
    source: string;
    text: string;
    id: string;
    name: string;
    type: "document";
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
    kbResource: "user" | "security_labs" | "defend_insights";
    vector?: {
        modelId: string;
        tokens: {} & {
            [k: string]: number;
        };
    } | undefined;
    required?: boolean | undefined;
}>, z.ZodObject<{
    /**
     * Name of the Knowledge Base Entry.
     */
    name: z.ZodString;
} & {
    namespace: z.ZodString;
    global: z.ZodBoolean;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">;
} & {
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * Time the Knowledge Base Entry was created.
     */
    createdAt: z.ZodString;
    /**
     * User who created the Knowledge Base Entry.
     */
    createdBy: z.ZodString;
    /**
     * Time the Knowledge Base Entry was last updated.
     */
    updatedAt: z.ZodString;
    /**
     * User who last updated the Knowledge Base Entry.
     */
    updatedBy: z.ZodString;
} & {
    /**
     * Entry type.
     */
    type: z.ZodLiteral<"index">;
    /**
     * Index or Data Stream to query for Knowledge Base content.
     */
    index: z.ZodString;
    /**
     * Field to query for Knowledge Base content.
     */
    field: z.ZodString;
    /**
     * Description for when this index or data stream should be queried for Knowledge Base content. Passed to the LLM as a tool description.
     */
    description: z.ZodString;
    /**
     * Description of query field used to fetch Knowledge Base content. Passed to the LLM as part of the tool input schema.
     */
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Name of the field.
         */
        fieldName: z.ZodString;
        /**
         * Type of the field.
         */
        fieldType: z.ZodString;
        /**
         * Description of the field.
         */
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        fieldName: string;
        fieldType: string;
    }, {
        description: string;
        fieldName: string;
        fieldType: string;
    }>, "many">>;
    /**
     * Fields to extract from the query result, defaults to all fields if not provided or empty.
     */
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: "index";
    index: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    description: string;
    field: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
    queryDescription: string;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, {
    id: string;
    name: string;
    type: "index";
    index: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    description: string;
    field: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    global: boolean;
    queryDescription: string;
    inputSchema?: {
        description: string;
        fieldName: string;
        fieldType: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}>]>;
export type KnowledgeBaseEntryDeleteResponse = z.infer<typeof KnowledgeBaseEntryDeleteResponse>;
export declare const KnowledgeBaseEntryDeleteResponse: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
