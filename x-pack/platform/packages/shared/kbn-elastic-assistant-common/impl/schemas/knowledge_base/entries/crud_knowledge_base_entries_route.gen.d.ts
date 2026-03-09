import { z } from '@kbn/zod';
export type CreateKnowledgeBaseEntryRequestBody = z.infer<typeof CreateKnowledgeBaseEntryRequestBody>;
export declare const CreateKnowledgeBaseEntryRequestBody: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    name: z.ZodString;
} & {
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
} & {
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    source: z.ZodString;
    text: z.ZodString;
} & {
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
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
    name: z.ZodString;
} & {
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
} & {
    type: z.ZodLiteral<"index">;
    index: z.ZodString;
    field: z.ZodString;
    description: z.ZodString;
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fieldName: z.ZodString;
        fieldType: z.ZodString;
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
export type CreateKnowledgeBaseEntryRequestBodyInput = z.input<typeof CreateKnowledgeBaseEntryRequestBody>;
export type CreateKnowledgeBaseEntryResponse = z.infer<typeof CreateKnowledgeBaseEntryResponse>;
export declare const CreateKnowledgeBaseEntryResponse: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
} & {
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    source: z.ZodString;
    text: z.ZodString;
} & {
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
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
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
} & {
    type: z.ZodLiteral<"index">;
    index: z.ZodString;
    field: z.ZodString;
    description: z.ZodString;
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fieldName: z.ZodString;
        fieldType: z.ZodString;
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
export type DeleteKnowledgeBaseEntryRequestParams = z.infer<typeof DeleteKnowledgeBaseEntryRequestParams>;
export declare const DeleteKnowledgeBaseEntryRequestParams: z.ZodObject<{
    /**
     * The unique identifier (`id`) of the Knowledge Base Entry to delete.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DeleteKnowledgeBaseEntryRequestParamsInput = z.input<typeof DeleteKnowledgeBaseEntryRequestParams>;
export type DeleteKnowledgeBaseEntryResponse = z.infer<typeof DeleteKnowledgeBaseEntryResponse>;
export declare const DeleteKnowledgeBaseEntryResponse: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type ReadKnowledgeBaseEntryRequestParams = z.infer<typeof ReadKnowledgeBaseEntryRequestParams>;
export declare const ReadKnowledgeBaseEntryRequestParams: z.ZodObject<{
    /**
     * The unique identifier (`id`) of the Knowledge Base Entry to retrieve.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type ReadKnowledgeBaseEntryRequestParamsInput = z.input<typeof ReadKnowledgeBaseEntryRequestParams>;
export type ReadKnowledgeBaseEntryResponse = z.infer<typeof ReadKnowledgeBaseEntryResponse>;
export declare const ReadKnowledgeBaseEntryResponse: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
} & {
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    source: z.ZodString;
    text: z.ZodString;
} & {
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
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
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
} & {
    type: z.ZodLiteral<"index">;
    index: z.ZodString;
    field: z.ZodString;
    description: z.ZodString;
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fieldName: z.ZodString;
        fieldType: z.ZodString;
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
export type UpdateKnowledgeBaseEntryRequestParams = z.infer<typeof UpdateKnowledgeBaseEntryRequestParams>;
export declare const UpdateKnowledgeBaseEntryRequestParams: z.ZodObject<{
    /**
     * The unique identifier (`id`) of the Knowledge Base Entry to update.
     */
    id: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type UpdateKnowledgeBaseEntryRequestParamsInput = z.input<typeof UpdateKnowledgeBaseEntryRequestParams>;
export type UpdateKnowledgeBaseEntryRequestBody = z.infer<typeof UpdateKnowledgeBaseEntryRequestBody>;
export declare const UpdateKnowledgeBaseEntryRequestBody: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    name: z.ZodString;
} & {
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
} & {
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    source: z.ZodString;
    text: z.ZodString;
} & {
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
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
    name: z.ZodString;
} & {
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
} & {
    type: z.ZodLiteral<"index">;
    index: z.ZodString;
    field: z.ZodString;
    description: z.ZodString;
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fieldName: z.ZodString;
        fieldType: z.ZodString;
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
export type UpdateKnowledgeBaseEntryRequestBodyInput = z.input<typeof UpdateKnowledgeBaseEntryRequestBody>;
export type UpdateKnowledgeBaseEntryResponse = z.infer<typeof UpdateKnowledgeBaseEntryResponse>;
export declare const UpdateKnowledgeBaseEntryResponse: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
} & {
    type: z.ZodLiteral<"document">;
    kbResource: z.ZodEnum<["security_labs", "defend_insights", "user"]>;
    source: z.ZodString;
    text: z.ZodString;
} & {
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
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
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
} & {
    type: z.ZodLiteral<"index">;
    index: z.ZodString;
    field: z.ZodString;
    description: z.ZodString;
    queryDescription: z.ZodString;
} & {
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fieldName: z.ZodString;
        fieldType: z.ZodString;
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
